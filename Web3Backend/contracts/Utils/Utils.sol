// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

library MintifyError {
    error NotOwner();

    error AlreadyClaimed();

    error ClaimingEnded();

    error InvalidProof();

    error AirdropIsActive();
}

library MintifyEvent {
    event claimedAirDrop(address indexed ContractAddress, address indexed claimer, uint256 indexed tokenID);
}
