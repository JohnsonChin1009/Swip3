"use client";

import { useState } from "react";
import TinderCard from "react-tinder-card";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaTwitter } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import BottomNavBar from "@/components/custom/app/BottomNavBar";
import { signOut } from "next-auth/react";

const db = [
  {
    name: "Elise Chiong",
    job: "Product Designer",
    url: "/img/elise.jpeg",
    skills: [],
    verification: {
      twitter: true,
      world_id: false
    }
  },
  {
    name: "Weoy Yang Ang",
    job: "Software Engineer",
    url: "/img/weoyyang.jpeg",
    skills: [],
    verification: {
      twitter: false,
      world_id: true
    }
  },
  {
    name: "Joey Lau",
    job: "Data Scientist",
    url: "/img/joey.jpeg",
    skills: [],
    verification: {
      twitter: false,
      world_id: true
    }
  },
  {
    name: "Tan Hao Xiang",
    job: "Product Manager",
    url: "/img/tanhaoxiang.jpeg",
    skills: [],
    verification: {
      twitter: true,
      world_id: false
    }
  },
  {
    name: "Nicholas Boey",
    job: "Blockchain Researcher",
    url: "/img/nicholas.jpeg",
    skills: ["Solidity", "Smart Contract", "Cryptography", "Layer 2 Solutions", "Decentralized Governance"],
    verification: {
      twitter: true,
      world_id: true
    }
  }
];

export default function CardStack() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState("");
  
  const swiped = (direction: string, nameToDelete: string) => {
    setLastDirection(direction);
    console.log(lastDirection);

    // Wait for 1 second before removing the card
    setTimeout(() => {
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.name !== nameToDelete)
      );
    }, 1000);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen");
  };

  return (
    <>
      <button onClick={() => signOut()}>Sign Out</button>
      <div
        className="relative min-h-screen overflow-hidden flex justify-center items-start pt-[36px]"> {/* Added pt-[36px] */}
        {characters.map((character, index) => {
          return (
            <TinderCard
              className={`absolute w-[358px] max-w-[90%] h-[533px] max-h-[80%] p-4 bg-white rounded-3xl ${index === characters.length - 1 ? "z-[2] shadow-mobile-card" : "z-[1]"}`}
              key={character.name}
              onSwipe={(dir: string) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
              preventSwipe={["up", "down"]}
            >
              {
                character.verification.world_id && (
                  <Image src="/worldcoin.svg" alt="world-id-verified" width={30} height={30} className="absolute top-[30px] right-[30px]"/>
                )
              }
              {
                character.verification.twitter && (
                  <FaTwitter className={`absolute top-[30px] ${character.verification.world_id ? "right-[70px]" : "right-[30px]"}`} size={30} />
                )
              }
              <Image
                alt={character.name}
                src={character.url}
                width={326}
                height={334}
                className="bg-[#FFFFFF] rounded-2xl !w-[326px] !h-[334px] mx-auto"
              />
              <div className="mt-4 space-y-1">
                <h1 className="font-bold text-4xl">
                  {character.name}
                </h1>
                <h3 className="flex items-center gap-x-1.5 font-bold text-[#626262]">
                  <FaBriefcase/>{character.job}
                </h3>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 items-center">
                {character.skills.slice(0, 3).map((skill, index) => (
                  <Badge variant="skill" key={index}>
                    {skill}
                  </Badge>
                ))}
                {character.skills.length > 3 && (
                  <div className="flex items-center gap-x-1 text-[#0582CA] text-sm">
                    See More <FaArrowRight/>
                  </div>
                )}
              </div>
            </TinderCard>
          )
        })}
        {characters.length > 0 && (
          <BottomNavBar/>
        )}
      </div>
    </>
  );
}