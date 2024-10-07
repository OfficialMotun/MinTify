    // SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

import "node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";

import {MintifyError, MintifyEvent} from "./Utils/Utils.sol";

contract Mintify is ERC721, ERC721URIStorage, ERC721Pausable {
    /* ========== State Variable ========== */
    address immutable owner;

    constructor(address _owner, string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        owner = _owner;
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "htt";
    // }

    function pause() external {
        _onlyOwner();
        _pause();
    }

    function unpause() external {
        _onlyOwner();
        _unpause();
    }

    function safeMint(address to, uint256 tokenId, string memory uri) external {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
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
