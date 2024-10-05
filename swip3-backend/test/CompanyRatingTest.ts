import { expect } from "chai";
import { ethers } from "hardhat";

describe("CompanyRating", function () {
    let companyRating: any;

    beforeEach(async function () {
        const CompanyRating = await ethers.getContractFactory("CompanyRating");
        companyRating = await CompanyRating.deploy("Lydian Labs", "Etherscan", "CoinGecko"); // Deploy the contract
        // No need to call .deployed() here
    });

    it("should add a new company", async function () {
        await companyRating.addCompany("Test Company 1");
        const company = await companyRating.getCompany(0);
        expect(company[0]).to.equal("Test Company 1");
        expect(company[1]).to.equal(0); // upvotes
        expect(company[2]).to.equal(0); // downvotes
    });

    it("should rate a company with upvote", async function () {
        await companyRating.addCompany("Test Company 1");
        await companyRating.rateCompany(0, true); // Upvote
        const company = await companyRating.getCompany(0);
        expect(company[1]).to.equal(1); // upvotes
        expect(company[2]).to.equal(0); // downvotes
    });

    it("should rate a company with downvote", async function () {
        await companyRating.addCompany("Test Company 1");
        await companyRating.rateCompany(0, false); // Downvote
        const company = await companyRating.getCompany(0);
        expect(company[1]).to.equal(0); // upvotes
        expect(company[2]).to.equal(1); // downvotes
    });

    it("should revert when rating a non-existent company", async function () {
        await expect(companyRating.rateCompany(0, true)).to.be.revertedWith("Company does not exist");
    });

    it("should revert when getting a non-existent company", async function () {
        await expect(companyRating.getCompany(0)).to.be.revertedWith("Company does not exist");
    });
});