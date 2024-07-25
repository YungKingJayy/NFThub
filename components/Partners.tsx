"use client"

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const Partners = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start",]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      ref={targetRef}
      className="flex flex-wrap items-center justify-center gap-8 md:gap-16 gap-y-[1.56rem] max-w-[78.875rem] mx-auto"
    >
      <Image src="/logos/netmask.svg" alt="netmask" width={174.834} height={33.17} />
      <Image src="/logos/bitgo.svg" alt="bitgo" width={112.669} height={28.34} />
      <Image src="/logos/coinbase.png" alt="coinbase" width={154.609} height={27.64} />
      <Image src="/logos/trust-wallet.svg" alt="trust wallet" width={170.057} height={42.86} />
      <Image src="/logos/exodus.png" alt="exodus" width={126.52} height={32.91} />
    </motion.div>
  )
}

export default Partners;
