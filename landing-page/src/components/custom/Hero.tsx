"use client";

import Image from 'next/image'
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="mt-3 sm:mt-10">
      <div className="flex flex-col mx-auto justify-center text-center">
        <h1 className="text-5xl sm:text-7xl font-bold !leading-normal">
          Swipe, Match<br/>
          & Earn
          <Image
            src="/hero/ethereum.gif"
            width={110}
            height={110}
            alt="hero-ethereum"
            className="inline -mt-4 sm:-mt-7 size-[65px] sm:size-[110px]"
            unoptimized={true}
          />
        </h1>
        <div className="flex flex-col justify-center sm:block text-base sm:text-xl">
          <div className="mt-4 mr-64 sm:m-0 sm:absolute sm:left-[12%] sm:bottom-[65%]">
            <Link href="/app">
              <Image
                src="/hero/swip3.png"
                width={80}
                height={80}
                alt="hero-swip3"
                className="p-2.5 mb-1.5 rounded-3xl bg-[#FF6FC3] mx-auto"
              />
              Swip3
            </Link>
          </div>
          <div className="-mt-16 ml-56 sm:m-0 sm:absolute sm:right-[18%] sm:bottom-[55%]">
            <Link href="https://www.canva.com/design/DAGSfvaT9fI/85vIxuLQR6aJHKfgWzqZgQ/view" target="_blank">
              <Image
                src="/hero/whitepaper.png"
                width={75}
                height={82}
                alt="hero-whitepaper"
                className="p-3 mb-1.5 rounded-3xl bg-[#75B9F9] mx-auto"
              />
              Whitepaper
            </Link>
          </div>
          <div className="-mt-8 mr-12 sm:m-0 sm:absolute sm:left-[26%] sm:bottom-[45%]">
            <Link href="https://github.com/JohnsonChin1009/Swip3" target="_blank">
              <Image
                src="/hero/github.png"
                width={87}
                height={87}
                alt="hero-github"
                className="mb-1.5 mx-auto"
              />
              Github
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/hero/gmi.png"
        width={645}
        height={651}
        alt="hero-gmi"
        className="mt-6 sm:mt-12 mx-auto w-[367px] h-[365px] sm:[645px] sm:[651px]"
      />
    </section>
  )
}