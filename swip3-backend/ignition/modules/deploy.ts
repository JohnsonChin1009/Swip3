// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UserProfileModule = buildModule("UserProfileModule", (m) => {
    // If your UserProfile contract constructor requires parameters, you can define them here.
    const userProfile = m.contract("UserProfile");

    return { userProfile };
});

export default UserProfileModule;