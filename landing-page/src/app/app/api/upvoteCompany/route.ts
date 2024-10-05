import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
import MyContractABI from "@/lib/CompanyRating.json";

export async function POST(req: NextRequest) {
    const { companyId } = await req.json();
    
    if (!companyId) {
        console.error("Company ID was not passed to API");
        return NextResponse.json({ error: "Company ID is required." }, { status: 400 });
    }

    try {
        const rpcUrl = process.env.SEPOLIA_RPC_URL;

        const provider = new ethers.JsonRpcProvider(rpcUrl);
 
        const contract = new ethers.Contract(contractAddress, MyContractABI.abi, await signer);

    } catch (error) {
        console.error("Error upvoting company:", error);
        return NextResponse.json({ error: "Failed to upvote company." }, { status: 500 });
    }
}