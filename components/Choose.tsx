"use client";

import React, { useRef } from "react";
import Divider from "./ui/Divider";
import { useScroll, useTransform, motion } from "framer-motion";
import choose from "@/data/choose";
import { Card } from "./ui/card";
import Image from "next/image";
import clsx from "clsx";

const Choose = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start",]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="flex flex-col items-center max-w-[78.875rem] mx-auto py-[7.5rem] text-white"
    >
      <Divider />
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Why <span className="text-gradient block md:inline">choose us?</span></h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[1.88rem] gap-y-4 md:gap-y-0 mb-32">
        {choose.map((item) => (
          <Card key={item.id} className={clsx("bg-transparent border border-[#e8e8e840] rounded-3xl py-12 px-8", {
            "md:mt-12 self-end": item.id%2 === 0,
            "self-start": item.id%2 !== 0,
          })}>
            <Image src={item.image} alt={item.name} width={50} height={50} className="mb-[2.12rem]" />
            <h2 className="text-white font-bold text-[1.75rem] leading-[1.925rem] mb-6">
              {item.name.split(' ').map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p className="text-[#B7B4BB] font-normal text-[1.0625rem] leading-[1.6875rem]">{item.details}</p>
          </Card>
        ))}
      </div>
      <Divider />
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-24">
        <div className="flex flex-col items-center gap-5 md:gap-[1.38rem]">
          <h2 className="text-wite font-bold text-[3.4375rem] md:text-[4.4375rem] leading-[3.5rem] md:leading-[4.5rem]">400k+</h2>
          <p className="text-gray font-normal text-[1.0625rem] leading-[1.6875rem] md:leading-[1.9125rem]">Wallets Connected</p>
        </div>
        <div className="hidden md:block h-[129.59px] w-[1px] bg-white" />
        <div className="flex flex-col items-center gap-5 md:gap-[1.38rem]">
          <h2 className="text-wite font-bold text-[3.4375rem] md:text-[4.4375rem] leading-[3.5rem] md:leading-[4.5rem]">20k+</h2>
          <p className="text-gray font-normal text-[1.0625rem] leading-[1.6875rem] md:leading-[1.9125rem]">Wallets Connected</p>
        </div>
        <div className="hidden md:block h-[129.59px] w-[1px] bg-white" />
        <div className="flex flex-col items-center gap-5 md:gap-[1.38rem]">
          <h2 className="text-wite font-bold text-[3.4375rem] md:text-[4.4375rem] leading-[3.5rem] md:leading-[4.5rem]">230+</h2>
          <p className="text-gray font-normal text-[1.0625rem] leading-[1.6875rem] md:leading-[1.9125rem]">Creative artists</p>
        </div>
        <div className="hidden md:block h-[129.59px] w-[1px] bg-white" />
        <div className="flex flex-col items-center gap-5 md:gap-[1.38rem]">
          <h2 className="text-wite font-bold text-[3.4375rem] md:text-[4.4375rem] leading-[3.5rem] md:leading-[4.5rem]">2.5x</h2>
          <p className="text-gray font-normal text-[1.0625rem] leading-[1.6875rem] md:leading-[1.9125rem]">Estimated value</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Choose;
