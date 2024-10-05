import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CounterModule = buildModule("CounterModule", (m) => {
    // If your UserProfile contract constructor requires parameters, you can define them here.
    const counter = m.contract("Counter");

    return { counter };
});

export default CounterModule;