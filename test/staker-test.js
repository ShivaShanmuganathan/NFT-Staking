const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Staker", function () {

  beforeEach(async () => {
    const signers = await ethers.getSigners()

    owner = signers[0]

    tokenOwner = signers[1]

    guy = signers[3]
    
  })

  it("Should deploy ERC1155 contract and create tokens", async function () {

    const gameitems = await ethers.getContractFactory("GameItems");
    const nft = await gameitems.deploy();
    await nft.deployed();
    const nftContractAddress = nft.address;

    console.log(owner.address, " Deployer Address");
    console.log("Balance Of Owner For Token 0->", (await nft.balanceOf(owner.address, 0)).toString());
    console.log("Balance Of Owner For Token 1->", (await nft.balanceOf(owner.address, 1)).toString());
    console.log("Balance Of Owner For Token 2->", (await nft.balanceOf(owner.address, 2)).toString());
    console.log("Balance Of Owner For Token 3->", (await nft.balanceOf(owner.address, 3)).toString());
    
  });

  

  
});
