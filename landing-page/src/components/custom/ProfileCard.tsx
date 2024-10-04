"use client";

import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { TeamMember } from "@/components/custom/OurTeam";
import Link from "next/link";

export type ColorScheme = 'pink' | 'purple' | 'orange' | 'blue' | 'green';

const backgroundColorPresets: Record<ColorScheme, string> = {
  pink: 'bg-[#FCF4F4]',
  purple: 'bg-[#FCF4FF]',
  orange: 'bg-[#FAECDF]',
  blue: 'bg-[#EEFDFF]',
  green: 'bg-[#EFFFD8]',
};


export default function ProfileCard({ name, role, description, color, imageSrc, socialLink }: TeamMember) {
  const bgColorClass = backgroundColorPresets[color];

  return (
    <div className={`w-[116px] h-[117.5px] sm:w-[216px] sm:h-[200px] lg:w-[278px] lg:h-[300px] relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl group ${bgColorClass}`}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="transition-opacity duration-500 ease-in-out group-hover:opacity-5 object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-start sm:justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-center space-y-3 sm:space-y-2 lg:space-y-4 transform translate-y-4 group-hover:translate-y-0 overflow-x-hidden overflow-y-auto">
        <h2 className="text-sm sm:text-2xl font-semibold transition-all duration-300 ease-in-out group-hover:scale-110 underline">
          <Link href={socialLink} target={"_blank"}>
            {name}
          </Link>
        </h2>
        <Badge variant={color} className="capitalize sm:uppercase transition-all duration-300 ease-in-out
                                          group-hover:scale-110">{role}</Badge>
        <p className="text-xs sm:text-base transition-all duration-300 ease-in-out
                      group-hover:scale-105 opacity-0 group-hover:opacity-100">{description}</p>
      </div>
    </div>
  );
}
