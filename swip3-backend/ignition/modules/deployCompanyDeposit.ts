import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CompanyDeposit = buildModule("CompanyDeposit", (m) => {
    // If your UserProfile contract constructor requires parameters, you can define them here.
    const companyDeposit = m.contract("JobMarket");

    return { companyDeposit };
});

export default CompanyDeposit;