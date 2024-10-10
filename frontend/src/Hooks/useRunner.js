// // import { useAppKitProvider } from "@reown/appkit/react";
// import { base } from 'viem/chains';
// import { OnchainKitProvider } from '@coinbase/onchainkit';
// import { BrowserProvider } from "ethers";
// import { useEffect, useMemo, useState } from "react";
// import { jsonRpcProvider } from "../Constants/provider";

// const useRunners = () => {
//     const [signer, setSigner] = useState();
//     const { walletProvider } = OnchainKitProvider(base);

//     const provider = useMemo(
//         () => (walletProvider ? new BrowserProvider(walletProvider) : null),
//         [walletProvider]
//     );

//     useEffect(() => {
//         if (!provider) return setSigner(null);
//         provider.getSigner().then((newSigner) => {
//             if (!signer) return setSigner(newSigner);
//             if (newSigner.address === signer.address) return;
//             setSigner(newSigner);
//         });
//     }, [provider, signer]);
//     return { provider, signer, readOnlyProvider: jsonRpcProvider };
// };

// export default useRunners;
