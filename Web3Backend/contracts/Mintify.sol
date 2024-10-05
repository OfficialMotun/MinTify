// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MerkleNFTMint is ERC1155, Ownable {
    using Strings for uint256;

    bytes32 public merkleRoot;
    mapping(address => bool) public hasClaimed;
    uint256 public mintPrice = 0.1 ether; // Set your desired mint price here
    uint256 public nextTokenId = 1;

    event Minted(address indexed to, uint256 indexed tokenId, string tokenURI);
    event MerkleRootUpdated(bytes32 newMerkleRoot);

    constructor(string memory _uri, bytes32 _merkleRoot) ERC1155(_uri) Ownable(msg.sender) {
        merkleRoot = _merkleRoot;
    }

    function claim(
        bytes32[] calldata _merkleProof
    ) external payable returns (bool success) {
        require(!hasClaimed[msg.sender], "Already claimed");
        require(msg.value >= mintPrice, "Insufficient payment");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Not eligible");

        hasClaimed[msg.sender] = true;
        _mint(msg.sender, nextTokenId, 1, "");
        
        emit Minted(msg.sender, nextTokenId, uri(nextTokenId));
        nextTokenId++;

        success = true;
    }

    function formatTokenURI(
        string memory imageURI,
        string memory name,
        string memory description
    ) public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name":"', name, '", ',
                            '"description":"', description, '", ',
                            '"image":"', imageURI, '"}'
                        )
                    )
                )
            )
        );
    }

    function mint(
        string memory imageURI,
        string memory name,
        string memory description
    ) external payable {
        require(msg.value >= mintPrice, "Insufficient payment");

        string memory tokenURI = formatTokenURI(imageURI, name, description);
        _mint(msg.sender, nextTokenId, 1, "");
        emit Minted(msg.sender, nextTokenId, tokenURI);
        nextTokenId++;
    }

    function updateMerkleRoot(bytes32 _newMerkleRoot) external onlyOwner {
        merkleRoot = _newMerkleRoot;
        emit MerkleRootUpdated(_newMerkleRoot);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        (bool sent, ) = payable(owner()).call{value: balance}("");
        require(sent, "Failed to send Ether");
    }
}