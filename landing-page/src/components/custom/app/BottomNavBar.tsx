"use client";

import { FaHeart, FaMessage, FaUser, FaX } from "react-icons/fa6";
import Link from "next/link";

export default function BottomNavBar() {
  return (
    <div className="bottom-[15%] w-full absolute flex justify-center">
      <div className="absolute bottom-0">
        <div className="px-10 w-[358px] flex justify-between items-center">
          <Link href="/app/profile">
            <button className="p-3 bg-white rounded-full shadow-mobile-bottom-navbar-button">
              <FaUser className="size-[15px] text-[#CCCCCC]"/>
            </button>
          </Link>
          <button className="p-4 bg-white rounded-full shadow-mobile-bottom-navbar-button">
            <FaX className="size-[23px]"/>
          </button>
          <button className="p-4 bg-white rounded-full shadow-mobile-bottom-navbar-button">
            <FaHeart className="size-[23px] text-[#5076FF]"/>
          </button>
          <button className="p-3 bg-white rounded-full shadow-mobile-bottom-navbar-button">
            <FaMessage className="size-[15px] text-[#CCCCCC]"/>
          </button>
        </div>
      </div>
    </div>
  );
}