    // SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import {MintifyError, MintifyEvent} from "./Utils/Utils.sol";

contract Mintify is ERC721, ERC721URIStorage, ERC721Pausable {
    /* ========== State Variable ========== */
    address public immutable owner;
    // the merkle tree root
    bytes32 public merkleRoot;

    // a mapping to keep track of the Mint state of a particular address
    mapping(address => bool) mintCheckList;

    constructor(address _owner, string memory _name, string memory _symbol, bytes32 _merkleRoot)
        ERC721(_name, _symbol)
    {
        merkleRoot = _merkleRoot;
        owner = _owner;
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "htt";
    // }

    // function pause() external {
    //     _onlyOwner();
    //     _pause();
    // }

    // function unpause() external {
    //     _onlyOwner();
    //     _unpause();
    // }
    function mint(bytes32[] calldata proof, uint256 index, string memory uri) external {
        // check if already Minted
        require(mintCheckList[msg.sender] == false, MintifyError.AlreadyMinted());

        // verifing   the proof
        _verifyProof(proof, index, msg.sender);

        // set status to  Minted
        mintCheckList[msg.sender] = true;

        _safeMint(msg.sender, index);
        _setTokenURI(index, uri);

        emit MintifyEvent.MintedNft(address(this), msg.sender, index);
    }

   

    function updateMerkleRoot(bytes32 _newMerkleroot) external {
        _onlyOwner();
        merkleRoot = _newMerkleroot;

        
    }

    function _verifyProof(bytes32[] memory proof, uint256 tokenId, address addr) private view {
        // the whole reason for double hashing to prevent something called preimage attack read more  here (https:/medium.com/rareskills/the-second-preimage-attack-for-merkle-trees-in-solidity-e9d74fe7fdcd)
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr, tokenId))));

        // checks if the proof is valid
        require(MerkleProof.verify(proof, merkleRoot, leaf), MintifyError.InvalidProof());
    }

    function _onlyOwner() private view {
        require(msg.sender == owner, MintifyError.NotOwner());
    }

    // The following functions are overrides required by Solidity.

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
