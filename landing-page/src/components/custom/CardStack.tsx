"use client";

import { useState } from "react";
import TinderCard from "react-tinder-card";
import Image from "next/image";
import {FaArrowRight, FaBriefcase} from "react-icons/fa6";
import {Badge} from "@/components/ui/badge";

const db = [
  {
    name: "Elise Chiong",
    job: "Product Designer",
    url: "/img/elise.jpeg",
    skills: []
  },
  {
    name: "Weoy Yang Ang",
    job: "Software Engineer",
    url: "/img/weoyyang.jpeg",
    skills: []
  },
  {
    name: "Joey Lau",
    job: "Data Scientist",
    url: "/img/joey.jpeg",
    skills: []
  },
  {
    name: "Tan Hao Xiang",
    job: "Product Manager",
    url: "/img/tanhaoxiang.jpeg",
    skills: []
  },
  {
    name: "Nicholas Boey",
    job: "Blockchain Researcher",
    url: "/img/nicholas.jpeg",
    skills: ["Solidity", "Smart Contract", "Cryptography", "Layer 2 Solutions", "Decentralized Governance"]
  },
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
      {characters.map((character) =>
        <TinderCard
          className="absolute w-[358px] max-w-[90%] h-[533px] max-h-[80%] p-4 bg-white rounded-3xl"
          key={character.name}
          onSwipe={(dir: string) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
          preventSwipe={["up", "down"]}
        >
          <Image
            alt={character.name}
            src={character.url}
            width={326}
            height={334}
            className="bg-[#FFFFFF] rounded-2xl !w-[326px] !h-[334px] mx-auto"
          >
          </Image>
          <div className="mt-4 space-y-1">
            <h1 className="font-bold text-4xl">
              {character.name}
            </h1>
            <h3 className="flex items-center gap-x-1.5 font-bold text-[#626262]">
              <FaBriefcase />{character.job}
            </h3>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 items-center">
              {character.skills.slice(0,3).map((skill, index) => (
                <Badge variant="skill" key={index}>
                    {skill}
                </Badge>
              ))}
            {character.skills.length > 3 && (
              <div className="flex items-center gap-x-1 text-[#0582CA] text-sm">
                See More <FaArrowRight />
              </div>
            )}
          </div>
        </TinderCard>
      )}
    </>
  );
}