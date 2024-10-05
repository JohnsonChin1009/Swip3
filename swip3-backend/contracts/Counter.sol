// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Counter {
    uint256 private _value;

    constructor() {
        _value = 0; // Initialize the counter to 0
    }

    // Function to get the current counter value
    function current() public view returns (uint256) {
        return _value;
    }

    // Function to increment the counter by 1
    function increment() public {
        _value += 1;
    }

    // Function to decrement the counter by 1
    function decrement() public {
        require(_value > 0, "Counter: decrement overflow"); // Prevent underflow
        _value -= 1;
    }
}