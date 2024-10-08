import { useAvatar, useName } from '@coinbase/onchainkit/identity';
import { useState, createContext } from "react";
import { base } from 'wagmi/chains';
import {
    Address,
    Avatar,
    EthBalance,
    Identity,
    Name,
  } from "@coinbase/onchainkit/identity";
  import { setOnchainKitConfig } from "@coinbase/onchainkit";

import { useAccount } from "wagmi";
export const MintifyContext = createContext();

export function MintifyProvider({ children }) {

const { address } = useAccount();
const API_KEY = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY;
setOnchainKitConfig({ apiKey: API_KEY });

  const { data: name, isLoading: nameIsLoading } = useName({ address, chain: base });
  const { data: avatar, isLoading: avatarIsLoading } = useAvatar({ address, chain: base });

  return (
    <MintifyContext.Provider
      value={{
        name,
        nameIsLoading,
        address,
        avatar,
        avatarIsLoading,
      }}
    >
      {children}
    </MintifyContext.Provider>
  );
}