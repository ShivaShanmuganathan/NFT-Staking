const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Staker", function () {

  before(async () => {
    const signers = await ethers.getSigners()

    owner = signers[0]

    tokenOwner = signers[1]

    guy = signers[3]
    
  })

  describe("NFT Staker", function () {

    it("Should deploy ERC1155 contract and create tokens", async function () {

      let gameitems = await ethers.getContractFactory("GameItems");
      nft = await gameitems.deploy();
      await nft.deployed();
      nftContractAddress = nft.address;

      console.log(owner.address, " Deployer Address");
      console.log("Balance Of Owner For Token 0->", (await nft.balanceOf(owner.address, 0)).toString());
      console.log("Balance Of Owner For Token 1->", (await nft.balanceOf(owner.address, 1)).toString());
      console.log("Balance Of Owner For Token 2->", (await nft.balanceOf(owner.address, 2)).toString());
      console.log("Balance Of Owner For Token 3->", (await nft.balanceOf(owner.address, 3)).toString());
      
    });

    it("Should deploy Staker contract", async function () {

      let nft_staker = await ethers.getContractFactory("NftStaker");
      staker = await nft_staker.deploy();
      await staker.deployed();
      stakerContractAddress = staker.address;
      
      console.log(owner.address, " Deployer Address");
      
    });

    it("Should test staking function in staker contract", async function () {
      
      console.log("Balance Of Owner For Token 0->", (await nft.balanceOf(owner.address, 0)).toString());
      await nft.connect(owner).setApprovalForAll(stakerContractAddress, "true");
      await staker.connect(owner).stake(0, 20, nftContractAddress);
      console.log("Balance Of Contract For Token 0->", (await nft.balanceOf(stakerContractAddress, 0)).toString());

    });

  });

  
});
