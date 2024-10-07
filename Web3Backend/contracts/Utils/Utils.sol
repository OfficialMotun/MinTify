// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

library MintifyError {
    error NotOwner();

    error AlreadyMinted();

    error ClaimingEnded();

    error InvalidProof();

    error AirdropIsActive();
}

library MintifyEvent {
    event MintedNft(address indexed ContractAddress, address indexed claimer, uint256 indexed tokenID);
}
