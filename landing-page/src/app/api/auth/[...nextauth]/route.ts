import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const runtime = "edge";

// Define GET and POST route handlers
const handler = NextAuth(authOptions);

// The function to handle GET requests
export const GET = handler;

// The function to handle POST requests
export const POST = handler;