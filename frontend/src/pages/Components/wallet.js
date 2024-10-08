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
  
  const { name, address, avatar } = useContext(MintifyContext);



  return (
    <div className="flex justify-end">
      <Wallet onConnect={handleConnect} onDisconnect={handleDisconnect}>
        <ConnectWallet className='bg-[#8080d7]'>
          {address ? (
            <>
              <Avatar address={address} chain={base} className="h-6 w-6" />
              <Name address={address} chain={base}/>
            </>
          ) : (
            <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar address={address} chain={base} />
              <Name address={address} chain={base}/>
              <Address className={color.foregroundMuted}>{address}</Address>
            </Identity>
            <WalletDropdownDisconnect className="px-4 py-2 hover:bg-gray-100">
              Disconnect
            </WalletDropdownDisconnect>
          </WalletDropdown>
          )}
        </ConnectWallet>
       
      </Wallet>
    </div>
  );
}