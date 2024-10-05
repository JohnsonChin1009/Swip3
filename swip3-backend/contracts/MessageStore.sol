// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract MessageStore {
    string public message;

    // Constructor to initialize the message
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // Function to update the message
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // Function to get the current message (already available via public getter)
    function getMessage() public view returns (string memory) {
        return message;
    }
}