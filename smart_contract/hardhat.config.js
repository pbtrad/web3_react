// https://eth-ropsten.alchemyapi.io/v2/0aaowriYNtOd2TahWPkqP0wc7b05nhY0

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0aaowriYNtOd2TahWPkqP0wc7b05nhY0',
      accounts: ['390c007a8bb70f97e40aa9f041a8e1b19b5c5868c8d0835e71cd4e6ccf5d9c10'],
    },
  },
}