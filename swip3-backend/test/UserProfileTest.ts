import { expect } from "chai";
import { ethers } from "hardhat";

describe("UserProfile Contract", function () {
    let UserProfile: any;
    let userProfile: any;
    let owner: any;
    let addr1: any;

    beforeEach(async function () {
        // Get the ContractFactory and Signers
        UserProfile = await ethers.getContractFactory("UserProfile");
        [owner, addr1] = await ethers.getSigners();

        // Deploy the contract
        userProfile = await UserProfile.deploy();
    });

    describe("createUser", function () {
        it("should create a user profile", async function () {
            const username = "john_doe";
            const title = "Developer";
            const email = "john@example.com";
            const tags = ["solidity", "developer"];
            const githubLink = "https://github.com/johndoe";
            const mediumLink = "https://medium.com/@johndoe";
            const twitterLink = "https://twitter.com/johndoe";
            const telegramLink = "https://t.me/johndoe";

            // Create user profile
            await userProfile.createUser(
                username,
                title,
                email,
                tags,
                githubLink,
                mediumLink,
                twitterLink,
                telegramLink
            );

            // Retrieve user profile
            const userData = await userProfile.getUser(owner.address);

            // Check if the user data matches
            expect(userData.username).to.equal(username);
            expect(userData.title).to.equal(title);
            expect(userData.walletAddress).to.equal(owner.address);
            expect(userData.email).to.equal(email);
            expect(userData.tags).to.deep.equal(tags);
            expect(userData.githubLink).to.equal(githubLink);
            expect(userData.mediumLink).to.equal(mediumLink);
            expect(userData.twitterLink).to.equal(twitterLink);
            expect(userData.telegramLink).to.equal(telegramLink);
        });

        it("should not allow creating a user profile twice", async function () {
            const username = "john_doe";
            const title = "Developer";
            const email = "john@example.com";
            const tags = ["solidity", "developer"];
            const githubLink = "https://github.com/johndoe";
            const mediumLink = "https://medium.com/@johndoe";
            const twitterLink = "https://twitter.com/johndoe";
            const telegramLink = "https://t.me/johndoe";

            // Create user profile for the first time
            await userProfile.createUser(
                username,
                title,
                email,
                tags,
                githubLink,
                mediumLink,
                twitterLink,
                telegramLink
            );

            // Attempt to create the same user profile again
            await expect(
                userProfile.createUser(
                    username,
                    title,
                    email,
                    tags,
                    githubLink,
                    mediumLink,
                    twitterLink,
                    telegramLink
                )
            ).to.be.revertedWith("User already exists in the application.");
        });
    });
});
