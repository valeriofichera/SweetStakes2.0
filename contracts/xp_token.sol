//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XP_Token is ERC20, Ownable {
    address public lottery;
    mapping(address => uint256) public userLevels;
    mapping(address => mapping(uint256 => bool)) private bonusClaimed;

    event QuestCompleted(address indexed user, uint256 xpReward, uint256 xpBonus);
    event LevelUp(address indexed user, uint256 newLevel);

    constructor() ERC20("ExperienceToken", "XP") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals()))); // Initial mint
    }

    function completeQuest(address user, uint256 xpReward) external onlyLottery returns (bool success) {
        require(xpReward > 0, "XP reward must be greater than 0");
        uint256 bonus = calculateBonus(user, xpReward);
        _mint(user, xpReward + bonus);
        emit QuestCompleted(user, xpReward, bonus);

        // Level up user
        uint256 levelThreshold = thresholdForNextLevel(userLevels[user]);
        if (balanceOf(user) >= levelThreshold) {
            _burn(user, levelThreshold);
            userLevels[user]++;
            emit LevelUp(user, userLevels[user]);
        }
        return true;
    }

    function calculateBonus(address user, uint256 xpReward) private returns (uint256) {
        uint256 bonus = 0;
        uint256 bonusMultiplier = 3;
        if (xpReward >= 1 ether && !bonusClaimed[user][0]) {
            bonus = 1 ether * bonusMultiplier;
            bonusClaimed[user][0] = true;
        } else if (xpReward >= 0.1 ether && !bonusClaimed[user][1]) {
            bonus = 0.1 ether * bonusMultiplier;
            bonusClaimed[user][1] = true;
        } else if (xpReward >= 0.01 ether && !bonusClaimed[user][2]) {
            bonus = 0.01 ether * bonusMultiplier;
            bonusClaimed[user][2] = true;
        } else if (xpReward >= 0.001 ether && !bonusClaimed[user][3]) {
            bonus = 0.001 ether * bonusMultiplier;
            bonusClaimed[user][3] = true;
        }
        return bonus;
    }

    function thresholdForNextLevel(uint256 currentLevel) private pure returns (uint256) {
        return (currentLevel + 1) * .1 ether; // Example threshold
    }

    function setLotteryContract(address payable _lotteryContract) external onlyOwner {
        lottery = _lotteryContract;
    }

    modifier onlyLottery {
        require(msg.sender == lottery, "Unauthorized");
        _;
    }
}
