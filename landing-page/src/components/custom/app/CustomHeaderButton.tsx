"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CustomHeaderButtonProps {
    icon: ReactNode; // Ensure this is of type ReactNode to accommodate icon components
    url: string;
}

export default function CustomHeaderButton({ icon, url }: CustomHeaderButtonProps) {
    return (
        <button className="bg-white rounded-full border-[0.5px] border-[#E8EFFB] w-[48px] h-[48px] flex items-center justify-center">
            <div className="max-w-5 max-h-5 p-[14px] text-blue-500 flex items-center justify-center"> {/* Add text-blue-500 here */}
                <Link href={url}>
                    {icon}
                </Link>
            </div>
        </button>
    );
}