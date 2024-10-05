import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
import MyContractABI from "../../../../../../swip3-backend/artifacts/contracts/MessageStore.sol/MessageStore.json"; // Adjust the path to your ABI file

// Replace with your actual contract address
const contractAddress = "0xa79FB8c0c01F137746F3F1865D38524b0A07a353";

export async function POST(req: NextRequest) {
    const { newMessage } = await req.json();

    if (!newMessage) {
        console.log("Message was not passed to API");
        return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    try {
        // Create a provider
        const provider = new ethers.JsonRpcProvider("https://sepolia-rpc.scroll.io/");

        // Create a signer - make sure the wallet is connected
        const signer = provider.getSigner();

        // Create a contract instance with the signer
        const contract = new ethers.Contract(contractAddress, MyContractABI.abi, await signer);

        // Call the setMessage method to update the message in the contract
        console.log("Setting new message in the contract...");
        const tx = await contract.setMessage(newMessage); // Replace `setMessage` with your actual method name

        // Wait for the transaction to be mined
        console.log("Waiting for transaction confirmation...");
        await tx.wait();

        console.log("Message successfully updated in the contract.");
        return NextResponse.json({ success: true, message: "Message updated successfully." });
    } catch (error) {
        console.error("Error updating message:", error);
        return NextResponse.json({ error: "Failed to update message." }, { status: 500 });
    }
}
