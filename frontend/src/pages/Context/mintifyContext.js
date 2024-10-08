import { useAvatar, useName } from '@coinbase/onchainkit/identity';
import { useState, createContext } from "react";
import { base } from 'wagmi/chains';

export const MintifyContext = createContext();

export function MintifyProvider({ children }) {
  const [address, setAddress] = useState(null);

  const { data: name, isLoading: nameIsLoading } = useName({ address, chain: base });
  const { data: avatar, isLoading: avatarIsLoading } = useAvatar({ address, chain: base });

  return (
    <MintifyContext.Provider
      value={{
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