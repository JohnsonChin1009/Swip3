"use client";

import { useState } from "react";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Nicholas Boey",
    url: "/img/nicholas.jpeg",
  },
  {
    name: "WeoyYang Ang",
    url: "/img/weoyyang.jpeg",
  },
  {
    name: "Joey Lau",
    url: "/img/joey.jpeg",
  },
  {
    name: "Ten Hou Siang",
    url: "/img/tanhaoxiang.jpeg",
  },
  {
    name: "Elise Chiong",
    url: "/img/elise.jpeg",
  },
];

export default function CardStack() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState("");

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing " + nameToDelete);
    setLastDirection(direction);

    // Wait for 2 seconds before removing the card
    setTimeout(() => {
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.name !== nameToDelete)
      );
    }, 2000); // 2 seconds delay
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen");
  };

  return (
    <>
      <div className="">
        <div className="w-[90vw] max-w-[260px] h-[300px] relative">
          {characters.map((character) => (
            <TinderCard
              className="absolute"
              key={character.name}
              onSwipe={(dir: string) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="relative bg-[#FFFFFF] w-[80vw] max-w-[260px] h-[300px] rounded-2xl bg-cover bg-center"
              > 
              </div>
              {/* Black overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[10%] bg-black opacity-70 rounded-b-2xl" />
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="w-[100%] justify-center flex text-[#FFFFFF]">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="w-[100%] justify-center flex text-[#FFFFFF]" />
        )}
      </div>
    </>
  );
}