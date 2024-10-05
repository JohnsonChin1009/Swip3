"use client";

import { signIn, getSession, GetSessionParams } from 'next-auth/react';
import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa6";

export default function SignIn() { // Removed async
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#e6e6fa]">
      <div className="relative w-[90%] max-w-md p-8 bg-white rounded-2xl shadow-lg sm:p-10">
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg opacity-30 -z-10"></div>

        <div className="text-center">
          <Image
            src="/logo.svg"
            alt="Swip3 logo"
            width={96} // Changed for Image optimization
            height={96} // Changed for Image optimization
            className="mx-auto"
          />
        </div>

        <h1 className="text-center text-xl font-semibold mb-4">
          Swipe, Match & Earn
        </h1>

        <div className="space-y-2">
          <button
            onClick={() => signIn("worldcoin", { callbackUrl: "/app" })}
            className="w-full px-4 py-2 text-black bg-white border-2 border-black rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <div className="flex items-center justify-center space-x-2">
              <Image src="/worldcoin.svg" alt="worldcoin" width={24} height={24} />
              <span className="font-semibold">Sign in with World ID</span>
            </div>
          </button>
          <button
            onClick={() => signIn("twitter", { callbackUrl: "/app" })}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            <div className="flex items-center justify-center space-x-2">
              <FaTwitter size={24} />
              <span className="font-semibold">Sign in with Twitter</span>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          By signing in, you agree to our{' '}
          <Link href="/terms-of-service" target="_blank" className="text-blue-500 hover:underline">
            Terms of Service{' '}
          </Link>
          and{' '}
          <Link href="/privacy-policy" target="_blank" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

// Redirect already authenticated users
export const getServerSideProps = async (context: GetSessionParams | undefined) => { // Removed type annotations
  const session = await getSession(context);
  if (session) {
    return { redirect: { destination: '/' } };
  }
  return { props: {} };
};