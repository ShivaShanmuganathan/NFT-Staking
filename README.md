## ERC1155 Staking Contract

A simple NFT(ERC-1155) Staking Contract, that allows users to deposit any ERC-1155 token, and withdraw it from the contract.

## Replicate This Project
```shell
git clone https://github.com/ShivaShanmuganathan/NFT-Staking.git
cd NFT-Staking

npm install
npx hardhat compile
npx hardhat test
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
