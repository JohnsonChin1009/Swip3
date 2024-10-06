import NextAuth, { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
    }),
    {
      id: "worldcoin",
      name: "Worldcoin",
      type: "oauth" as const, // Explicitly set type to 'oauth'
      wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
      authorization: { params: { scope: "openid" } },
      clientId: process.env.WLD_CLIENT_ID || "",
      clientSecret: process.env.WLD_CLIENT_SECRET || "",
      idToken: true,
      checks: ["state", "nonce", "pkce"],
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      profile(profile: any) { // You can replace 'any' with a more specific type if you have one
        return {
          id: profile.sub,
          name: profile.sub,
          verificationLevel: profile["https://id.worldcoin.org/v1"]?.verification_level,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "user";
      return token;
    },
  },
  debug: true,
  pages: {
    signIn: "/signin",
  },
};

// Define GET and POST route handlers
const handler = NextAuth(authOptions);

// The function to handle GET requests
export const GET = handler;

// The function to handle POST requests
export const POST = handler;