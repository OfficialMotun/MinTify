// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleNFTMint is ERC721, Ownable {
    bytes32 public merkleRoot;
    mapping(address => bool) public hasClaimed;
    uint256 public mintPrice = 0.1 ether; // Set your desired mint price here

    event Minted(address indexed to, uint256 indexed tokenId, string metadata);
    event MerkleRootUpdated(bytes32 newMerkleRoot);

    constructor(string memory _uri, bytes32 _merkleRoot) ERC1155(_uri) Ownable(msg.sender) {
        merkleRoot = _merkleRoot;
    }


    function claim(
            address _claimer,
            bytes32[] calldata _merkleproof
        ) external returns (bool success) {
            require(!hasClaimed[_claimer], "already claimed");

            bytes32 leaf = keccak256(abi.encodePacked(_claimer));
            bool verificationStatus = MerkleProofLib.verify(_merkleproof, root, leaf);

            require(verificationStatus, "not eligible");
            hasClaimed[_claimer] = true;

            _mint(_claimer, "");
            success = true;
        }
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
        string memory uri,
        string memory name,
        string memory description
    ) external payable{
    
        string memory tokenURI = formatTokenURI(imageURI, name, description);
        
        uint256 tokenId = nextTokenId;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        
        emit Minted(tokenId, tokenURI);
        
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