"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Divider from "./ui/Divider";
import { Card } from "./ui/card";
import Image from "next/image";
import clsx from "clsx";

const artists = [
  {
    id: 1,
    name: "Steps Jobs",
    role: "Artist",
    image: "/avatars/steps.png",
  },
  {
    id: 2,
    name: "Andry Moray",
    role: "Blockchain",
    image: "/avatars/andry.png",
  },
  {
    id: 3,
    name: "Zaid Ed",
    role: "Developer",
    image: "/avatars/zaid.png",
  },
  {
    id: 4,
    name: "Laila Ed",
    role: "Marketing",
    image: "/avatars/laila.png",
  },
];

const MeetTheArtist = () => {
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
      className="flex flex-col  max-w-[78.875rem] mx-auto pb-[7.5rem] text-white"
    >
      <Divider />
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Meet <span className="text-gradient block md:inline">the artists</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-[1.88rem] gap-y-4 md:gap-y-0 mb-32 place-items-center">
        {artists.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <Card className={clsx("bg-[#ffffff33] border border-[#e8e8e840] p-[0.56rem] rounded-[2rem] !w-max", {
              "self-start": item.id % 2 === 0,
              "md:mt-[1.87rem] self-end": item.id % 2 !== 0,
            })}>
              <Image src={item.image} alt={item.name} width={142} height={142} className="rounded-3xl" />
            </Card>
            <h2 className="text-white font-bold text-[1.375rem] leading-[1.375rem] mt-6">{item.name}</h2>
            <p className="text-[#B7B4BB] font-normal text-base leading-4 mt-[0.94rem]">{item.role}</p>
            <div className="flex items-center gap-4 mt-[0.94rem]">
              <Link href="#"><Image src="/icons/twitter.svg" alt="twitter" width={20} height={20} /></Link>
              <Link href="#"><Image src="/icons/discord.svg" alt="discord" width={20} height={20} /></Link>
              <Link href="#"><Image src="/icons/instagram.svg" alt="instagram" width={20} height={20} /></Link>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Your questions,<br /><span className="text-gradient block md:inline">answered!</span></h2>
      <div className="w-full max-w-[42.96875rem] mx-auto p-5 sm:p-12 rounded-3xl border border-[#e8e8e840]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Nfthub&apos;s NFT Collection?</AccordionTrigger>
            <AccordionContent>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How we can buy and invest NFT?</AccordionTrigger>
            <AccordionContent>
              uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why we should choose Nerko&apos;s NFT?</AccordionTrigger>
            <AccordionContent>
              uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Where we can buy and sell NFts?</AccordionTrigger>
            <AccordionContent>
              uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How secure is this token?</AccordionTrigger>
            <AccordionContent>
              uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-0">
            <AccordionTrigger>What is your contract address?</AccordionTrigger>
            <AccordionContent>
              uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident<br /><br />Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  )
}

export default MeetTheArtist;
