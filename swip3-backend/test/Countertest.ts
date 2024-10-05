import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
    let counter: any;

    beforeEach(async function () {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy(); // Deploy the contract
        // No need to call .deployed() here
    });

    it("should start with a count of 0", async function () {
        expect(await counter.current()).to.equal(0);
    });

    it("should increment the count", async function () {
        await counter.increment();
        expect(await counter.current()).to.equal(1);
    });

    it("should decrement the count", async function () {
        await counter.increment(); // Increment to 1
        await counter.decrement();
        expect(await counter.current()).to.equal(0);
    });

    it("should revert on decrementing below 0", async function () {
        await expect(counter.decrement()).to.be.revertedWith("Counter: decrement overflow");
    });
});