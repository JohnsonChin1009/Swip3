// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MessageStoreModule = buildModule("MessageStoreModule", (m) => {
    // If your UserProfile contract constructor requires parameters, you can define them here.
    const initialMessage = "I am zkKing";
    const dummyProfile = m.contract("MessageStore", [initialMessage]);

    return { dummyProfile };
});

export default MessageStoreModule;