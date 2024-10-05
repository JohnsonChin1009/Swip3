import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 text-gray-800 p-4 sm:p-8 md:p-12 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Privacy Policy for Swip3</h1>
      <p className="text-sm sm:text-base mb-4">Effective Date: 04 Oct 2024</p>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-sm sm:text-base">
          Welcome to Swip3, a decentralized job recruitment and job searching app that provides a unique, Tinder-like experience for recruiters and job seekers in the Web3 space. Your privacy is important to us, and this Privacy Policy outlines how we collect, use, store, and share your personal information when you use Swip3.
        </p>
        <p className="text-sm sm:text-base mt-2">
          By using Swip3, you agree to the terms of this Privacy Policy. Please read it carefully before using our app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Information We Collect</h2>
        <h3 className="text-lg sm:text-xl font-semibold mt-4">1. Personal Information</h3>
        <p className="text-sm sm:text-base">
          When you create an account on Swip3, we collect certain personal information, including:
        </p>
        <ul className="list-disc pl-5 text-sm sm:text-base mt-2">
          <li>Login Information: You can log in using third-party services like Twitter (via zkLogin) and verify your identity through DeBank for a second level of authentication.</li>
          <li>Profile Data: We collect your name, email address, company information (for recruiters), and skillsets or achievements (for job seekers).</li>
          <li>Verification Data: To ensure profile authenticity, we may collect data for Know Your Customer (KYC) and Know Your Business (KYB) processes.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">2. User-Generated Content</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base mt-2">
          <li>Profiles & Resumes: We securely store resumes, verified achievements, and NFTs minted to represent skills.</li>
          <li>Chat Data: While Swip3 links with third-party apps like Telegram for chats, we do not store chat content on our servers.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">3. Usage Data</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base mt-2">
          <li>App Activity: Data on how you interact with the app (e.g., swipes, job views, card flips) is collected.</li>
          <li>Social Engagement: When you engage with features like submitting your Web3 profile for ratings or sharing it on social media, we may collect relevant data.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-5 text-sm sm:text-base mt-2">
          <li>Facilitate Matches: Use your data to match job seekers and recruiters based on skills and preferences.</li>
          <li>Vibe Check & Recommendations: Analyze your skillsets and preferences for better recommendations.</li>
          <li>Profile Verification: Perform KYC/KYB processes for user verification.</li>
          <li>NFT Minting: Enable users to mint NFTs for validating career achievements.</li>
          <li>Improve the App: Enhance user experience based on interaction data.</li>
          <li>Social Sharing: Generate content for sharing on platforms like Twitter, GitHub, or Instagram.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">How We Share Your Information</h2>
        <p className="text-sm sm:text-base">
          We do not sell or rent your personal information. However, we may share data with third-party integrations (e.g., Twitter, DeBank), trusted service providers, or legal authorities when required.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Data Security</h2>
        <p className="text-sm sm:text-base">
          We use encryption and secure storage to protect your data, but no system is entirely foolproof.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-sm sm:text-base">
          You have the right to request access, corrections, or deletion of your personal information. Contact us at <Link href={"https://x.com/swip355050"} target="_blank" className="text-blue-500 hover:underline">@swip3</Link>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Changes to the Privacy Policy</h2>
        <p className="text-sm sm:text-base">
          We may update this Privacy Policy. Changes will be posted with an updated &quot;Effective Date.&quot;
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-sm sm:text-base">
          For questions or concerns regarding this Privacy Policy, please contact us at <Link href={"https://x.com/swip355050"} target="_blank" className="text-blue-500 hover:underline">@swip3</Link>.
        </p>
      </section>
    </div>
  );
};
