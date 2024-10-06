import Header from "@/components/custom/app/Header";
import CardStack from "@/components/custom/app/CardStack";
import PWAInstallPrompt from "@/components/custom/app/PWAInstallPrompt";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const runtime = "edge";

export default async function App() {
  const session = await auth();

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