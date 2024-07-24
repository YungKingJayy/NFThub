import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import people from "@/data/people";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 items-center md:grid-cols-2 max-w-[78.875rem] mx-auto py-20 md:py-[13rem]">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-white text-[2.5rem] md:text-7xl font-bold leading-10 md:leading-[4.5rem] text-center md:text-left mb-[1.44rem]">High Quality<br></br>NFT Collection</h1>
        <p className="text-gray text-center md:text-left text-[1.1875rem] md:text-[1.375rem] font-normal leading-[1.875rem] md:leading-9 mb-9">A 890 piece custom Nerko&apos;s collection is joining the NFT space on Opensea.</p>
        <Button className="btn-gradient">
          <Link className="!text-bold !text-[1.0625rem] !leading-[1.35rem] text-white" href="#" target="_blank">View in OPENSEA</Link>
          <Image src="/icons/arrow-diagonal.svg" alt="view in opensea" width={15} height={15} />
        </Button>
        <div className="flex items-center gap-10 mt-[2.81rem] md:mt-16">
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>
          <div className="flex flex-col text-white">
            <p className="text-[2rem] leading-8 font-bold">47k+</p>
            <p className="text-gray text-xs font-normal">Community members</p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/hero-image-mobile.png')] md:bg-[url('/hero-image.png')] bg-contain bg-no-repeat bg-center h-[300px] md:h-[630px] mt-[1.82rem] md:mt-0" />
    </section>
  )
}

export default Hero;
