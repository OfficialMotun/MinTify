// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

import "./Mintify.sol";
import {MintifyEvent,MintifyError} from "./Utils/Utils.sol";



contract MintifyFactory {
mapping (address => string ) public contractToCid;
address payable owner;
constructor () {
   owner = payable(msg.sender); 
}
    function createMintify(
        address _owner,
        string memory name,
        string memory symbol,
        bytes32 merkleRoot,
        string memory CsvCid
    ) external returns (address) {
        Mintify newMintify = new Mintify(
            _owner,
            name,
            symbol,
            merkleRoot
        );

        address contractAddress = address(newMintify);

        contractToCid[contractAddress] = CsvCid;

        emit MintifyEvent.MintifyCreated(contractAddress, _owner, name, symbol);

        return contractAddress ;
    }
    function deployerWithdraw()  external  {
        require (msg.sender == owner,MintifyError.NotOwner() );
        (bool succees,) = owner.call{value: address(this).balance}("");
        require (succees, MintifyError.WithdrawFailed());
    }
    receive () payable external {}
}