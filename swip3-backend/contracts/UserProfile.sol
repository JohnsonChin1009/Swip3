// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract UserProfile {
    struct User {
        string username;
        string title;
        address walletAddress;
        string email;
        string[] tags;
        string githubLink;
        string mediumLink;
        string twitterLink;
        string telegramLink;
    }

    mapping(address => User) private users;

    event UserCreated(address indexed walletAddress, string username);

    // Constructor
    constructor() {
        // Initialization logic can go here
    }

    function createUser(
        string memory _username,
        string memory _title,
        string memory _email,
        string[] memory _tags,
        string memory _githubLink,
        string memory _mediumLink,
        string memory _twitterLink,
        string memory _telegramLink
    ) public {
        require(bytes(users[msg.sender].username).length == 0, "User already exists in the application.");

        users[msg.sender] = User({
            username: _username,
            title: _title,
            walletAddress: msg.sender,
            email: _email,
            tags: _tags,
            githubLink: _githubLink,
            mediumLink: _mediumLink,
            twitterLink: _twitterLink,
            telegramLink: _telegramLink
        });

        emit UserCreated(msg.sender, _username);
    }

    function getUser(address _walletAddress) public view returns (
        string memory username,
        string memory title,
        address walletAddress,
        string memory email,
        string[] memory tags,
        string memory githubLink,
        string memory mediumLink,
        string memory twitterLink,
        string memory telegramLink
    ) {
        User memory user = users[_walletAddress];

        return (
            user.username,
            user.title,
            user.walletAddress,
            user.email,
            user.tags,
            user.githubLink,
            user.mediumLink,
            user.twitterLink,
            user.telegramLink
        );
    }
}