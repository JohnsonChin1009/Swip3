"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="pt-5 px-5 flex justify-between">
                <div className="w-[112px] h-[42px] relative"> {/* Logo */}
                    <Link href="/app">
                    <Image 
                        src="/logo.svg"
                        alt="Company Logo"
                        fill
                        className="object-contain"
                    />
                    </Link>
                </div>
                <div>
                    <div className="w-[54px] h-[54px] relative ">
                        <Link href="/app/profile">
                        <Image 
                            src="/img/tanhaoxiang.jpeg"
                            alt="User Profile Picture"
                            fill
                            className="object-contain rounded-full"
                        />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}