import { useAvatar, useName } from '@coinbase/onchainkit/identity';
import { useState, createContext } from "react";
import { baseSepolia } from 'wagmi/chains';

export const MintifyContext = createContext();

export function MintifyProvider({ children }) {
  const [address, setAddress] = useState(null);

  const { data: name, isLoading: nameIsLoading } = useName({ address, chain: baseSepolia });
  const { data: avatar, isLoading: avatarIsLoading } = useAvatar({ address, chain: baseSepolia });

  return (
    <MintifyContext.Provider
      value={{
        address,
        setAddress,
        name,
        nameIsLoading,
        avatar,
        avatarIsLoading,
      }}
    >
      {children}
    </MintifyContext.Provider>
  );
}