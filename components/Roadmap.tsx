"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Divider from "./ui/Divider";
import { HoverEffect } from "./ui/card-hover-effect";
import projects from "@/data/projects";

const Roadmap = () => {
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
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Nfthub&apos;s <span className="text-gradient block md:inline">Roadmap</span></h2>
      <div>
        <HoverEffect items={projects} />
      </div>
    </motion.section>
  )
}

export default Roadmap;
