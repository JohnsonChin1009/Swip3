import { NextResponse } from "next/server";
import { ethers } from "ethers";
import MyContractABI from "@/lib/CompanyRating.json";

export const runtime = "experimental-edge";

// Replace with your actual contract address
const contractAddress = "0x1eB4980f5DffC094cB5FE2E57764E6e4eE8bd4dc";

export async function GET() {
    try {
        const rpcUrl = process.env.SEPOLIA_RPC_URL;
        
        console.log("RPC URL is", rpcUrl);

        const provider = new ethers.JsonRpcProvider(rpcUrl);
        const contract = new ethers.Contract(contractAddress, MyContractABI.abi, provider);

        // Initialize an array to store company details
        const companyDetails = [];

        // Loop through company IDs "0", "1", "2" (adjusting for zero-based indexing)
        for (let id = 0; id < 3; id++) {
            const companyId = id.toString(); // Convert to string
            const result = await contract.getCompany(companyId);
            console.log(`Company ${companyId} details:`, result);

            // Create an object with the desired structure
            const company = {
                name: result[0], // Company name
                upvotes: result[1].toString(), // Convert BigInt to string
                downvotes: result[2].toString(), // Convert BigInt to string
            };

            // Push the company object to the array
            companyDetails.push(company);
        }

        // Return the company details
        return NextResponse.json({ companies: companyDetails });
    } catch (error) {
        console.error("Error fetching message:", error);

        return NextResponse.json({ error: "Failed to fetch message." }, { status: 500 });
    }
}