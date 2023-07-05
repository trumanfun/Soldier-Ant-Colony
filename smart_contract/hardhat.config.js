require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    testnet: {
      url: 'https://rpc.testnet.fantom.network',
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: 'https://rpcapi.fantom.network',
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    }

  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
