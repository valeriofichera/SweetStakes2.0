//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";

interface AggregatorV3Interface {
  function latestRoundData()
    external
    view
    returns (
      uint80 roundId,
      int256 answer,
      uint256 startedAt,
      uint256 updatedAt,
      uint80 answeredInRound
    );
}

interface XP is IERC20 {
  function completeQuest(address user, uint256 xpReward) external returns (bool success);
}

contract Lottery is RrpRequesterV0, Ownable {
    // Events
    event RequestedRandomNumber(bytes32 indexed requestId);
    event ReceivedRandomNumber(bytes32 indexed requestId, uint256 randomNumber);
    event EnterToken(address indexed player, address indexed token, uint amount);
    event EnterEth(address indexed player, uint amount);
    event WinnerPicked(address indexed winner);

    // Global Variables
    uint256 public total = 0; // total value in ethers of all entries
    address[] public players;

    // Constants
    address public constant airnodeAddress = 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D;
    bytes32 public constant endpointId = 0x94555f83f1addda23fdaa7c74f27ce2b764ed5cc430c66f5ff1bcf39d583da36;
    address payable public sponsorWallet;
    address public XP_token;
    uint256 public sponsorExecutionPremium = 10**10;
    uint256 public constant MAX_NUMBER = 10**4;

    // Mappings
    mapping(address => Player) public players_map;
    mapping(address => address) public token_map;

    struct Player {
        uint enterAmount;
        bool entered;
        address[] enteredTokens;
    }

    constructor(address _airnodeRrpAddress)
        RrpRequesterV0(_airnodeRrpAddress)
        Ownable()
    {
        transferOwnership(msg.sender);
    }
    
    function enterToken(address token, uint amount) external payable {
        require(amount > 0, "Amount can't be 0.");
        require(token_map[token] != address(0), "Token not accepted!");
        IERC20 token_ = IERC20(token);
        require(token_.allowance(msg.sender, address(this)) >= amount, "Check the token allowance");
        require(token_.transferFrom(msg.sender, address(this), amount), "Transfer failed.");
        
        if (players_map[msg.sender].entered == false) {
            players.push(msg.sender);
        }
     
        uint token_value = (getTokenPrice(token) * amount) / (10 ** 18);
        require(XP(XP_token).completeQuest(msg.sender, token_value), "Failed to claim XP tokens");
        players_map[msg.sender].enterAmount += token_value;
        players_map[msg.sender].enteredTokens.push(token);
        total += token_value;
        emit EnterToken(msg.sender, token, amount);
    }
    
    function enterEth() public payable {
        require(msg.value > .0001 ether, "Required minimum is .0001 ether.");

        // Add new players 
        if (players_map[msg.sender].entered == false) {
            players.push(msg.sender);
        }

        require(XP(XP_token).completeQuest(msg.sender, msg.value), "Failed to claim XP tokens");
        players_map[msg.sender].enterAmount += msg.value;
        players_map[msg.sender].entered = true;
        
        total += msg.value;
        emit EnterEth(msg.sender, msg.value);
    }

    function processWinner() public payable {
        // Request random number from Airnode
        require(address(this).balance > sponsorExecutionPremium, "Missing funds to pay for sponsor wallet");
        (bool success, ) = sponsorWallet.call{value: sponsorExecutionPremium}("");
        require(success, "Failed to send premium to sponsor wallet");
    
        bytes32 requestId = airnodeRrp.makeFullRequest(
            airnodeAddress,
            endpointId,
            address(this),
            sponsorWallet,
            address(this),
            this.pickWinner.selector,
            ""
        );
        emit RequestedRandomNumber(requestId);
    }

    // Iterates through all players associated with their entry value to determine their propabilities;
    // Using the random winning number to choose a player;
    function pickWinner(bytes32 , bytes calldata data) external onlyAirnodeRrp {
        require(players.length > 0, "No players entered");
        uint score = 0;
        address winner = address(this); // ;-)
        uint winning_number = abi.decode(data, (uint256)) % MAX_NUMBER;
        
        // Choose winner
        for (uint i = 0; i < players.length; i++) {
            uint amount = players_map[players[i]].enterAmount;
            uint propability = (amount * MAX_NUMBER) / total;
            score += propability;
            
            if (score >= winning_number){
                winner = players[i];
                break;
            }
        }
        
        // Pay eth to winner
        if (address(this).balance - sponsorExecutionPremium > 0) {
            (bool success, ) = winner.call{value: address(this).balance - sponsorExecutionPremium}("");
            require(success, "Failed to send ether to winner");
        }
        
        for (uint i = 0; i < players.length; i++) {
            address player = players[i];
            // Pay tokens to winner
            for (uint j = 0; i < players_map[player].enteredTokens.length; i++) {
                IERC20 token = IERC20(players_map[player].enteredTokens[j]);
                uint balance = getBalanceOfToken(address(token));
                if (balance > 0) { // Make sure token hasn't already been payed
                token.transfer(winner, balance);
                }
            }
            delete players_map[player];
        }
        
        players = new address[](0);
        total = 0;
        emit WinnerPicked(winner);
    }
    
    function setSponsorWallet(address payable _sponsorWallet) external onlyOwner {
        sponsorWallet = _sponsorWallet;
    }

    function updateExecutionPremium(uint _premium) external onlyOwner {
        sponsorExecutionPremium = _premium;
    }

    function updateXPAddress(address _xp) external onlyOwner {
        XP_token = _xp;
    }

    function updateTokenMap(address token, address proxy) external onlyOwner {
        token_map[token] = proxy;
    }
    
    function getTokenPrice(address token) public view returns(uint){
        (int value,) = IProxy(token_map[token]).read();
        return uint(value);
    }
    
    function viewApproval(address token) external view returns(uint){
        return IERC20(token).allowance(msg.sender, address(this));
    }
    
    function getMyCurrentPropability(address player) external view returns (uint) {
        return (players_map[player].enterAmount * MAX_NUMBER) / total;
    }
    
    function alreadyEntered() external view returns (bool) {
        return players_map[msg.sender].entered;
    }
    
    function getBalanceOfToken(address _address) private view returns (uint) {
        return IERC20(_address).balanceOf(address(this));
    }

    receive() external payable {
        enterEth();
    }
}