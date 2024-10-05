"use client";

import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="py-4 flex justify-between items-center px-4 lg:px-[70px] border-t">
                <div className="w-[80px] h-[40px] relative">
                    <Link href="/landing-page/public">
                        <Image
                          src="/logo.svg"
                          alt="Company Logo"
                          fill
                          className="object-contain"
                        />
                    </Link>
                </div>
                <div className="text-[10px] lg:text-[15px]">
                    Copyright © 2024 Yeeth
                </div>
                <div className="flex text-[24px] lg:text-[32px] space-x-2 lg:space-x-5">
                    <Link href="https://x.com/swip355050" target="_blank" className="hover:text-[#2B2B2B]">
                        <FaSquareXTwitter/>
                    </Link>
                    <Link href="https://github.com/JohnsonChin1009/Swip3" target="_blank" className="hover:text-[#2B2B2B]">
                        <FaSquareGithub />
                    </Link>
                </div>
            </footer>
        </>
    )
}