"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Divider from "./ui/Divider";
import { Card, CardContent } from "@/components/ui/card";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import collection from "@/data/collection";
import { Button } from "./ui/button";
import Link from "next/link";

const Collection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

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
      <h2 className="mt-[7.5rem] mb-16 text-[2.625rem] md:text-[4rem] font-bold leading-[2.625rem] md:leading-[4rem] text-center">Nfthub&apos;s <span className="text-gradient block md:inline">collection</span></h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="-ml-12">
          {collection.map((item, index) => (
            <CarouselItem key={item.id} className="sm:basis-1 md:basis-1/2 lg:basis-1/3 pl-12">
              <div className="h-[30rem] md:h-[22rem] rounded-2xl">
                <Card className="w-full h-full !bg-transparent border-0">
                  <CardContent className="w-full h-full p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <h2 className="text-white text-[1.75rem] leading-7 font-bold text-nowrap text-center mt-6">#{item.name}</h2>
              <p className="text-gray text-[0.9375rem] leading-6 mt-[0.62rem] text-center">{item.user}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-[1%] top-[40%]" />
        <CarouselNext className="right-0 md:left-[99%] top-[40%]" />
        <div className="flex justify-center mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`inline-block w-[0.625rem] h-[0.625rem] cursor-pointer rounded-full bg-white mx-[0.6875rem] ${index === current ? "opacity-100" : "opacity-30"
                }`}
              onClick={() => api && api.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
      
      <Button className="btn-gradient mt-10 md:mt-20">
        <Link className="!text-bold !text-[1.0625rem] !leading-[1.35rem] text-white" href="#" target="_blank">View collection</Link>
        <Image src="/icons/arrow-diagonal.svg" alt="view in opensea" width={15} height={15} />
      </Button>
    </motion.section>
  )
}

export default Collection;
