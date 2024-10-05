// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./Counter.sol"; // Import your custom counter

contract CompanyRating {
    Counter private _companyIdCounter;

    struct Company {
        string name;
        uint256 upvotes;
        uint256 downvotes;
    }

    mapping(uint256 => Company) public companies;

    // Events
    event CompanyRated(uint256 companyId, bool isUpvote);

    // Constructor to initialize with three companies
    constructor(string memory company1, string memory company2, string memory company3) {
        _companyIdCounter = new Counter(); // Initialize the custom counter
        addCompany(company1); // Add first company
        addCompany(company2); // Add second company
        addCompany(company3); // Add third company
    }

    // Function to add a new company
    function addCompany(string memory _name) public {
        uint256 companyId = _companyIdCounter.current();
        companies[companyId] = Company({
            name: _name,
            upvotes: 0,
            downvotes: 0
        });
        _companyIdCounter.increment(); // Increment the counter
    }

    // Function to vote for a company
    function rateCompany(uint256 companyId, bool isUpvote) public {
        require(companyId < _companyIdCounter.current(), "Company does not exist");

        if (isUpvote) {
            companies[companyId].upvotes++;
        } else {
            companies[companyId].downvotes++;
        }

        emit CompanyRated(companyId, isUpvote);
    }

    // Get company details
    function getCompany(uint256 companyId) public view returns (string memory, uint256, uint256) {
        require(companyId < _companyIdCounter.current(), "Company does not exist");
        Company memory company = companies[companyId];
        return (company.name, company.upvotes, company.downvotes);
    }
}