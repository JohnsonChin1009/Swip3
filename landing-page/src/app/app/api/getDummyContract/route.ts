import { NextResponse } from "next/server";
import { ethers } from "ethers";
import MyContractABI from "../../../../../../swip3-backend/artifacts/contracts/MessageStore.sol/MessageStore.json"; // Adjust the path to your ABI file

// Replace with your actual contract address
const contractAddress = "0xa79FB8c0c01F137746F3F1865D38524b0A07a353";

export async function GET() {
    try {
        console.log("Starting API call to fetch message...");

        // Create a provider
        const rpcUrl = "https://sepolia-rpc.scroll.io/";
        console.log("Using RPC URL:", rpcUrl);
        
        const provider = new ethers.JsonRpcProvider(rpcUrl); // Ensure RPC_URL is defined in your .env.local
        
        // Create a contract instance
        console.log("Creating contract instance...");
        const contract = new ethers.Contract(contractAddress, MyContractABI.abi, provider); // Use MyContractABI.abi
        
        // Call the method to get the message
        console.log("Calling getMessage() from contract...");
        const message = await contract.getMessage(); // Adjust the method name based on your contract
        
        console.log("Message fetched:", message);
        
        return NextResponse.json({ message });
    } catch (error) {
        console.error("Error fetching message:", error);
        
        return NextResponse.json({ error: "Failed to fetch message." }, { status: 500 });
    }
}