import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    // for testnet
    "base-sepolia": {
      url: process.env.BASE_RPC_URL!,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      "base-sepolia": "123",
    },
  },
  sourcify: {
    enabled: false,
  },
};

export default config;