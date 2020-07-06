
const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "56c1ffb613164b3da10d861aef0c8aea";
const mnemonic = "piece where climb mercy asset mesh blouse final minute ghost hamster large";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  rinkeby: {
      provider: () => new HDWallet(mnemonic,"https://rinkeby.infura.io/v3/${infuraKey}"),
      network_id: 4,       // rinkeby's id
      gas: 6721975,        // rinkeby has a lower block limit than mainnet
      gasPrice: 20000000000
    },
  }
};