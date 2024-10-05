import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env.local file
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [process.env.PRIVATE_KEY || ""], // Use the private key from .env.local
    },
  },
};

export default config;