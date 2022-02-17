// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";

contract NftStaker {

    struct Stake {
        uint256 tokenId;
        uint256 amount;
        uint256 timestamp;
    }

    // map staker address to stake details
    mapping(address => Stake) public stakes;

    // map staker to total staking time 
    mapping(address => uint256) public stakingTime;    

    

    
    constructor() {}

    function stake(uint256 _tokenId, uint256 _amount, address _nftContract) public {
        stakes[msg.sender] = Stake(_tokenId, _amount, block.timestamp); 
        IERC1155(_nftContract).safeTransferFrom(msg.sender, address(this), _tokenId, _amount, "0x00");
    } 

    function unstake(address _nftContract) public {
        IERC1155(_nftContract).safeTransferFrom(address(this), msg.sender, stakes[msg.sender].tokenId, stakes[msg.sender].amount, "0x00");
        stakingTime[msg.sender] += (block.timestamp - stakes[msg.sender].timestamp);
        delete stakes[msg.sender];
    }    

    
     function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    }

}