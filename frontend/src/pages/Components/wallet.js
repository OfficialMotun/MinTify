import { useContext, useCallback } from 'react';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import  { MintifyContext } from '../Context/mintifyContext';
export default function WalletComponent() {
  
  const { address } = useContext(MintifyContext);

  


  return (
    <div className="flex justify-end">
   
      <Wallet >
          <ConnectWallet className='bg-[#8080d7]'>
            <Avatar className="w-5 w-full" />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity hasCopyAddressOnClick>
              <Avatar  address
={address} chain={base} />
              <Name address
={address} chain={base} />
              <Address />
              <EthBalance />
            </Identity>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
  
    </div>
  );
}