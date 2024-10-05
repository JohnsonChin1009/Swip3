"use client";

import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import Image from "next/image";
import { FaArrowRight, FaBriefcase } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import BottomNavBar from "@/components/custom/app/BottomNavBar";
import { signOut } from "next-auth/react";

export default function CompanyCardStack() {
    const [lastDirection, setLastDirection] = useState("");

    const fetchCompanyDetails = async () => {
        try {
            const response = await fetch("/app/api/getCompanyDetails");
      
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
      
            const data = await response.json();
            console.log(data); // Log the fetched data to the console
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    };

    useEffect(() => {
        fetchCompanyDetails(); // Call the fetch function on component mount
    }, []);
    
    return (
        <>
            <button onClick={() => signOut()}>Sign Out</button>
            {/* Other component logic goes here */}
        </>
    );
}