import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    tag: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#e8e8e840] block  rounded-[2.5rem]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardPhase>Phase 0{item.id}</CardPhase>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <Dash />
            <CardList />
            <CardTag>{item.tag}</CardTag>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[2rem] h-full w-full px-2 sm:px-8 py-6 overflow-hidden bg-tertiary border border-[#e8e8e840] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardPhase = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("uppercase text-base font-bold leading-4 phase", className)}>
      {children}
    </p>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold text-[1.75rem] sm:text-[2rem] leading-7 sm:leading-8 mt-6", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-gray leading-[1.6875rem] sm:leading-[1.8125rem] text-[1.0625rem] sm:text-[1.1875rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Dash = () => {
  return (
    <div className="w-20 h-[0.0625rem] bg-[#e8e8e840]  my-8" />
  )
};

export const CardList = () => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="flex items-center gap-2">
        <Image src="/icons/check.svg" alt="tick" width={21} height={21} />
        <p className="text-base text-white font-normal leading-[1.575rem]">Release website and logo</p>
      </li>
      <li className="flex items-center gap-2">
        <Image src="/icons/check.svg" alt="tick" width={21} height={21} />
        <p className="text-base text-white font-normal leading-[1.575rem]">Grow community</p>
      </li>
      <li className="flex items-center gap-2">
        <Image src="/icons/check.svg" alt="tick" width={21} height={21} />
        <p className="text-base text-white font-normal leading-[1.575rem]">Launch the project</p>
      </li>
    </ul>
  )
};

export const CardTag = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-[3.5rem] h-[3.5rem] p-[1.8rem] rotate-[25deg] rounded-full card-tag text-white font-bold text-[1.5625rem] leading-[1.51875rem]">
      <p>{children}</p>
      <p>%</p>
    </div>
  )
};
