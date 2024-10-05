"use client";

import { IoIosArrowBack } from "react-icons/io";
import { FaShare, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function ButtonHeader() {
    return (
      <div className="flex flex-col h-screen bg-white">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto relative">
          {/* Navigation - Floating on top */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
            <Link href="/app">
              <button className="p-[14px] flex items-center justify-center bg-white rounded-full shadow-md">
                <IoIosArrowBack className="text-blue-500" size={20}/>
              </button>
            </Link>
            <button className="p-[14px] flex items-center justify-center bg-white rounded-full shadow-md">
              <FaShare className="text-blue-500" size={20}/>
            </button>
          </div>

          {/* Logo */}
          <div className="mt-10 pb-8 w-full aspect-square">
            <Image src="/img/tanhaoxiang.jpeg" alt="profile" fill className="!relative" />
          </div>

          {/* Company Info */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">XYZ Labs<span className="text-yellow-400">✨</span></h1>
            <div className="flex items-center justify-center mt-2">
              <FaMagnifyingGlass className="w-4 h-4 mr-2 text-gray-500"/>
              <span className="text-gray-500">Senior Blockchain Researcher</span>
            </div>
          </div>

          {/* Game Prompt */}
          <div className="mx-4 mb-6">
            <div className="bg-gradient-to-r from-[#38A4C9] to-[#FF960D] p-4 rounded-lg relative">
              <button className="absolute top-2 right-2">
                <FaX className="w-5 h-5 text-white"/>
              </button>
              <h2 className="text-white font-semibold mb-1">Need a break from profiles?</h2>
              <p className="text-[#E8E6E6] text-sm mb-3">Play a game to see what AI has to say about you</p>
              <button
                className="w-full bg-white py-2 px-4 rounded-lg text-sm font-semibold w-full">
                <span className="bg-gradient-to-r from-[#38A4C9] to-[#FF960D] bg-clip-text text-transparent">
                  Rate my web3 profile
                </span>
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="px-4 pb-4">
            <h2 className="text-lg font-semibold mb-3">Top 5 Skills We're Seeking</h2>
            <div className="flex flex-wrap gap-2">
              {['Solidity', 'Smart Contract', 'Layer 2 Solutions', 'Cryptography', 'Decentralized Governance'].map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}