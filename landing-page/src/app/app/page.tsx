import Header from "@/components/custom/app/Header";
import CardStack from "@/components/custom/app/CardStack";
import PWAInstallPrompt from "@/components/custom/app/PWAInstallPrompt";

export default function App() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Header />
        <CardStack />
        <PWAInstallPrompt />
      </div>
    </>
  )
}