// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract JobMarket {
    address public owner;
    
    struct JobSeeker {
        uint256 price;         // The price the job seeker sets for their services
        address payable seekerAddress; // Job Seeker's Ethereum address
        bool available;        // Job seeker availability
    }

    struct Offer {
        address employer;     // Employer's Ethereum address
        uint256 amount;       // Amount offered by employer (placed in escrow)
        uint256 timeAccepted; // Timestamp when employer accepted the offer
        bool completed;       // Marks whether the job was successfully completed
        bool fundsReleased;   // Tracks if funds have been released
    }
    
    // Mapping of job seeker address to their profile
    mapping(address => JobSeeker) public jobSeekers;

    // Mapping of a job seeker to their current offer
    mapping(address => Offer) public offers;

    // Events
    event JobPriceSet(address indexed jobSeeker, uint256 price);
    event OfferAccepted(address indexed employer, address indexed jobSeeker, uint256 amount);
    event JobCompleted(address indexed jobSeeker, address indexed employer);
    event FundsReleased(address indexed jobSeeker, uint256 amount);

    modifier onlyJobSeeker(address _seeker) {
        require(msg.sender == _seeker, "Not authorized");
        _;
    }

    modifier onlyEmployer(address _jobSeeker) {
        require(msg.sender == offers[_jobSeeker].employer, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Job seeker sets or updates their price for their services
    function setJobPrice(uint256 _price) public {
        jobSeekers[msg.sender].price = _price;
        jobSeekers[msg.sender].seekerAddress = payable(msg.sender);
        jobSeekers[msg.sender].available = true;

        emit JobPriceSet(msg.sender, _price);
    }

    // Employer accepts the offer and places the money in escrow
    function acceptOffer(address _jobSeeker) public payable {
        JobSeeker memory seeker = jobSeekers[_jobSeeker];
        
        require(seeker.available, "Job seeker is not available");
        require(msg.value == seeker.price, "Incorrect amount sent");

        // Store offer details
        offers[_jobSeeker] = Offer({
            employer: msg.sender,
            amount: msg.value,
            timeAccepted: block.timestamp,
            completed: false,
            fundsReleased: false
        });

        // Job seeker is now unavailable
        jobSeekers[_jobSeeker].available = false;

        emit OfferAccepted(msg.sender, _jobSeeker, msg.value);
    }

    // Job seeker confirms the job is completed after 1 month
    function confirmJobCompletion() public onlyJobSeeker(msg.sender) {
        Offer storage offer = offers[msg.sender];

        require(block.timestamp >= offer.timeAccepted + 30 days, "Job period not yet completed");
        require(!offer.completed, "Job already completed");

        offer.completed = true;

        emit JobCompleted(msg.sender, offer.employer);
    }

    // Employer or Job seeker can trigger the fund release after confirmation
    function releaseFunds(address _jobSeeker) public onlyEmployer(_jobSeeker) {
        Offer storage offer = offers[_jobSeeker];
        
        require(offer.completed, "Job is not completed yet");
        require(!offer.fundsReleased, "Funds already released");

        // Transfer funds to the job seeker
        jobSeekers[_jobSeeker].seekerAddress.transfer(offer.amount);
        offer.fundsReleased = true;

        emit FundsReleased(_jobSeeker, offer.amount);
    }

    // Fallback to receive Ether
    receive() external payable {}

    // Function to withdraw Ether (in case of emergencies)
    function withdrawFunds(uint256 _amount) public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(_amount);
    }
}