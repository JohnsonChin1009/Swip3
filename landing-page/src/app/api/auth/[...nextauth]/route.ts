import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const config = {
  runtime: 'experimental-edge',
}
// Define GET and POST route handlers
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
