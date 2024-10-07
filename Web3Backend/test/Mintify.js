const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

const { expect } = require("chai");

const { generateProof } = require("../script/createMerkleProof");

describe("Mintify", function () {
  // Fixture for deploying the Mintify contract
  async function deployMintifyFixture() {
    // Get three signers: owner, other, and acct1
    const [owner, other, acct1] = await hre.ethers.getSigners();

    // Predefined Merkle root to use in the Mintify contract generated using the createMerkleproof.js
    const merkleRoot =
      "0x3d68063a6009f586b121c2a38882c78e87213cd48d887d23f5b29c5dab94e42e";

    // Deploy the Mintify contract with the token address and Merkle root
    const Mintify = await hre.ethers.getContractFactory("Mintify");
    const MintifyAddress = await Mintify.deploy(
      owner.address,
      "OTITESTING",
      "OTIT",
      merkleRoot
    );

    // Return the deployed contracts and other relevant data
    return { owner, other, MintifyAddress, merkleRoot, acct1 };
  }

  // Tests for the Mintify contract deployment
  describe("Mintify Deployment", function () {
    it("Should set the correct Merkle root", async function () {
      // Load the Mintify fixture
      const { MintifyAddress, merkleRoot } = await loadFixture(
        deployMintifyFixture
      );

      // Assert that the Merkle root is set correctly in the contract
      await expect(await MintifyAddress.merkleRoot()).to.equal(merkleRoot);
    });

    it("Should have the correct owner", async function () {
      // Load the Mintify fixture
      const { owner, MintifyAddress } = await loadFixture(deployMintifyFixture);

      // Assert that the owner address is correctly set in the Mintify contract
      await expect(owner.address).to.equal(await MintifyAddress.owner());
    });
  });

  // Tests for the Mint function in the Mintify contract
  describe(" Claim Mint ", function () {
    describe("Validation", function () {
      it("Should mint nft for valid address", async function () {
        const { owner, MintifyAddress, acct1 } = await loadFixture(
          deployMintifyFixture
        );

        const data = generateProof(acct1.address);
        const index = parseInt(data.value[1], 10);

        await expect(
          MintifyAddress.connect(acct1).mint(data.proof, index, "url")
        ).to.emit(MintifyAddress, "MintedNft");
      });

      it("Should revert if user has claimed already", async function () {
        const { other, MintifyAddress } = await loadFixture(
          deployMintifyFixture
        );
        const data = generateProof(other.address);
        const index = parseInt(data.value[1], 10);

        await MintifyAddress.connect(other).mint(data.proof, index, "Test url");

        await expect(
          MintifyAddress.connect(other).mint(data.proof, index, "Test url")
        ).to.be.revertedWithCustomError(MintifyAddress, "AlreadyMinted");
      });

      it("Should revert if caller is not in the claim list", async function () {
        const { other, MintifyAddress, merkleRoot, owner } = await loadFixture(
          deployMintifyFixture
        );

        const data = generateProof(other.address);
        const index = parseInt(data.value[1], 10);

        // we are using the owner to call the function since the  owner is not in the mint list it should revert  hopefully
        await expect(
          MintifyAddress.mint(data.proof, index, "Test url")
        ).to.be.revertedWithCustomError(MintifyAddress, "InvalidProof");
      });
    });
  });
});
