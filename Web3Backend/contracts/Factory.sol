// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

import "./Mintify.sol";
import {MintifyEvent} from "./Utils/Utils.sol";



contract MintifyFactory {
mapping (address => string ) public contractToCid;

    function createMintify(
        address owner,
        string memory name,
        string memory symbol,
        bytes32 merkleRoot,
        string memory CsvCid
    ) external returns (address) {
        Mintify newMintify = new Mintify(
            owner,
            name,
            symbol,
            merkleRoot
        );

        address contractAddress = address(newMintify);

        contractToCid[contractAddress] = CsvCid;

        emit MintifyEvent.MintifyCreated(contractAddress, owner, name, symbol);

        return contractAddress ;
    }
}