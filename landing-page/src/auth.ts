import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const runtime = "edge";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Twitter,
    {
      issuer: "https://id.worldcoin.org",
      id: "worldcoin",
      name: "Worldcoin",
      type: "oauth" as const, // Explicitly set type to 'oauth'
      wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
      authorization: { params: { scope: "openid" } },
      clientId: process.env.AUTH_WLD_ID || "",
      clientSecret: process.env.AUTH_WLD_SECRET || "",
      checks: ["state", "none", "pkce"],
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
});
