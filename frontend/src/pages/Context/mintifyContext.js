import { useAvatar, useName } from '@coinbase/onchainkit/identity';
import { useState, createContext } from "react";

const { data: name, isLoading: nameIsLoading } = await useName({ address, chain: base });

export const BlogContext = createContext();


export function BlogProvider(props) {

  const [user, setUser] = useState(null);
  const [picture, setPicture] = useState(null);
  const [contract_Id, setContract_Id] = useState(null);


  return (
    <div>
      <MintifyContext.Provider
        value={{
          user,
          setUser,
          picture,
          setPicture,
          contract_Id,
        }}
        >
          {props.children}
        </BlogContext.Provider>
      </div>
    );
  }