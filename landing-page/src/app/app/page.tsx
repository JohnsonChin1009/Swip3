"use client";

import Header from "@/components/custom/app/Header";
import CardStack from "@/components/custom/app/CardStack";
import PWAInstallPrompt from "@/components/custom/app/PWAInstallPrompt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function App() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Header />
        <CardStack />
        <PWAInstallPrompt />
      </div>
    </>
  );
}