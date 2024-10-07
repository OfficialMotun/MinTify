// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

import "./Mintify.sol";
import {MintifyEvent} from "./Utils/Utils.sol";


contract MintifyFactory {
    

    function createMintify(
        address owner,
        string memory name,
        string memory symbol,
        bytes32 merkleRoot
    ) external returns (address) {
        Mintify newMintify = new Mintify(
            owner,
            name,
            symbol,
            merkleRoot
        );

        emit MintifyEvent.MintifyCreated(address(newMintify), owner, name, symbol);

        return address(newMintify);
    }
}