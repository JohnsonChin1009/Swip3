"use client";

import { FaHeart, FaMessage, FaUser, FaX } from "react-icons/fa6";

export default function BottomNavBar() {
  return (
    <div className="min-h-[650px] min-[376px]:min-h-[700px] w-full relative flex justify-center">
      <div className="absolute bottom-0">
        <div className="px-10 w-[358px] flex justify-between items-center">
          <button className="p-3 bg-white rounded-full shadow-mobile-bottom-navbar-button">
            <FaUser className="size-[15px] text-[#CCCCCC]"/>
          </button>
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
};
