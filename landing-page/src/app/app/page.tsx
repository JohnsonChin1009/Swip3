"use client";

import Header from "@/components/custom/app/Header";
import CompanyCardStack from "@/components/custom/app/CompanyCardStack";
import PWAInstallPrompt from "@/components/custom/app/PWAInstallPrompt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default async function App() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  // State to store company details
  const [companyDetails, setCompanyDetails] = useState([]);

  const fetchCompanyDetails = async () => {
    try {
      const response = await fetch("/app/api/getCompanyDetails"); // Adjust the endpoint if needed
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Company Details:", data);
      setCompanyDetails(data.companies); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  useEffect(() => {
    fetchCompanyDetails();
  }, []); // Empty dependency array to run once on component mount

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Header />
        <CompanyCardStack companyProps={companyDetails} /> {/* Pass the fetched company details */}
        <PWAInstallPrompt />
      </div>
    </>
  );
}