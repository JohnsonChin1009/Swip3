import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-gray-100 text-gray-800 p-4 sm:p-8 md:p-12 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Terms of Service for Swip3</h1>
      <p className="text-sm sm:text-base mb-4">Effective Date: 04 Oct 2024</p>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Welcome to Swip3!</h2>
        <p className="text-sm sm:text-base">
          By using Swip3, you agree to comply with and be bound by the following Terms of Service. Please review them carefully before using the app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">1. Use of Swip3</h2>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">1.1 Eligibility</h3>
        <p className="text-sm sm:text-base">
          To use Swip3, you must be at least 18 years old and capable of entering into legally binding agreements. By creating an account, you represent that you meet these eligibility requirements.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">1.2 Account Creation</h3>
        <p className="text-sm sm:text-base">
          You can log in using third-party services such as Twitter (via zkLogin). You are responsible for the confidentiality of your account and any actions taken using your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">2. Features & Services</h2>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">2.1 Job Matching</h3>
        <p className="text-sm sm:text-base">
          Swip3 uses an association algorithm to match recruiters and job seekers based on skillsets, company benefits, and vibe preferences. Both recruiters and job seekers agree to use the app&apos;s features in good faith and for professional purposes only.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">2.2 Skill Hub & NFTs</h3>
        <p className="text-sm sm:text-base">
          Swip3 provides a Skill Hub where users can verify their achievements and mint NFTs representing their skills and accomplishments. Swip3 is not responsible for the trading, resale, or value of these NFTs on secondary markets.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">2.3 Chat Integration</h3>
        <p className="text-sm sm:text-base">
          Swip3 allows users to link their profiles to third-party chat apps (e.g., Telegram). Swip3 is not responsible for any interactions or transactions that occur outside the app via these chat services.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">2.4 KYB/KYC Verification</h3>
        <p className="text-sm sm:text-base">
          To maintain trust and transparency, Swip3 may require users to undergo KYC/KYB verification through third-party services such as Twitter and DeBank. Failure to complete verification may result in account suspension or limitations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">3. User Responsibilities</h2>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">3.1 Professional Conduct</h3>
        <p className="text-sm sm:text-base">
          Users agree to engage with Swip3 in a professional manner. Any misuse of the platform, including harassment, spamming, or providing false information, may result in account termination.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">3.2 Accuracy of Information</h3>
        <p className="text-sm sm:text-base">
          You are responsible for ensuring that all information provided in your profile, resume, or job posting is accurate and truthful.
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mt-4">3.3 Intellectual Property</h3>
        <p className="text-sm sm:text-base">
          All content, trademarks, and features within Swip3 remain the intellectual property of Swip3 or its licensors. Users agree not to replicate, modify, or distribute any materials from the app without prior consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">4. Termination of Service</h2>
        <p className="text-sm sm:text-base">
          Swip3 reserves the right to terminate or suspend any account at its sole discretion for violations of these Terms of Service or any illegal or unethical behavior.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="text-sm sm:text-base">
          Swip3 is provided &quot;as-is&quot; without any warranties, and Swip3 disclaims all liability for damages arising from the use or inability to use the app. Users agree to indemnify and hold harmless Swip3 for any claims or disputes arising from interactions or transactions on the platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">6. Governing Law</h2>
        <p className="text-sm sm:text-base">
          These Terms of Service shall be governed by and construed in accordance with the laws. Any disputes arising from the use of Swip3 shall be resolved in the courts.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">7. Changes to Terms of Service</h2>
        <p className="text-sm sm:text-base">
          Swip3 may modify these Terms of Service at any time. Changes will be communicated via app notifications or email. Continued use of the app constitutes acceptance of the revised Terms of Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-sm sm:text-base">
          If you have any questions about these Terms of Service, please contact us at <Link href={"https://x.com/swip355050"} target="_blank" className="text-blue-500 hover:underline">@swip3</Link>.
        </p>
      </section>
    </div>
  );
};
