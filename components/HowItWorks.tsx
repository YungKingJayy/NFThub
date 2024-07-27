"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import content from "@/data/content";
import Divider from "./ui/Divider";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import placeholders from "@/data/placeholders";

const HowItWorks = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start",]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  
  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="flex flex-col max-w-[78.875rem] mx-auto py-[7.5rem] text-white"
    >
      <Divider />
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">How it <span className="text-gradient block md:inline">works!</span></h2>
      <div className="mb-24 scroll-container">
        <StickyScroll content={content} />
      </div>

      <Divider />
      <div className="mt-[7.5rem] flex flex-col items-center justify-center rounded-[2rem] border border-[#e8e8e840] py-[3.81rem] px-6 sm:px-[3.56rem]">
        <h2 className="mb-4 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Never <span className="text-gradient block md:inline">miss a drop!</span></h2>
        <p className="text-gray font-normal text-[1.0625rem] leading-[1.6875rem] mb-[2.2rem] text-center sm:text-left">Subscribe to our super-rare and exclusive drops & collectibles.</p>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </motion.section>
  )
}

export default HowItWorks;
