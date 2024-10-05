import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CompanyRating = buildModule("CompanyRating", (m) => {
    // Pass constructor arguments directly as an array
    const company = m.contract("CompanyRating", [
        "Lydian Labs",
        "Etherscan",
        "CoinGecko"
    ]);

    return { company };
});

export default CompanyRating;