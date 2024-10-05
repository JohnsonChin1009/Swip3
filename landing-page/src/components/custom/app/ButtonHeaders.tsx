"use client";

import CustomHeaderButton from "@/components/custom/app/CustomHeaderButton";
import { IoIosArrowBack } from "react-icons/io";
import { FaShare } from "react-icons/fa6";

export default function ButtonHeader() {
    return (
        <header className="px-5 pt-5 flex justify-between z-[1]">
            <CustomHeaderButton icon={<IoIosArrowBack />} url="/app" />
            <CustomHeaderButton icon={<FaShare />} url="/" />
        </header>
    );
}