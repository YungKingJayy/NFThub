"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  function toggle() {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setIsRendered(false), 300);
    } else {
      setIsRendered(true);
      setTimeout(() => setIsOpen(true), 10);
    }
    console.log("clicked");
  }

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  return (
    <>
      <nav className="flex items-center justify-between text-white max-w-[78.875rem] mx-auto">
        <Image src="/icons/logo.svg" alt="logo" width={145} height={45} />
        <ul className="hidden md:flex items-center">
          <li><Link href="#" className="nav-link">Home</Link></li>
          <li><Link href="#" className="nav-link">Collection</Link></li>
          <li><Link href="#" className="nav-link">choose</Link></li>
          <li><Link href="#" className="nav-link">about</Link></li>
          <li><Link href="#" className="nav-link">roadmap</Link></li>
          <li><Link href="#" className="nav-link">blog</Link></li>
        </ul>
        <div className="flex items-center gap-[30px]">
          <div className="hidden md:flex items-center gap-5">
            <Link href="#" target="_blank"><Image src="/icons/twitter.svg" alt="logo" width={24} height={24} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/discord.svg" alt="logo" width={24} height={24} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/instagram.svg" alt="logo" width={24} height={24} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/wallet.svg" alt="logo" width={24} height={24} /></Link>
          </div>
          <button className="block md:hidden" onClick={toggle}>
            <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} />
          </button>
        </div>
      </nav>
      {isRendered && (
        <nav className={clsx("w-screen h-dvh bg-black fixed z-50 transition-all ease-in-out duration-300", {
          "top-0 left-0": isOpen,
          "left-full": !isOpen
        })}>
          <div className="flex items-center justify-between pl-[1.62rem] pr-[1.1rem] py-9 bottom-border">
            <Image src="/icons/mobile-logo.svg" alt="logo" width={120} height={35} />
            <button onClick={toggle}>
              <Image src="/icons/close.svg" alt="logo" width={30} height={1} />
            </button>
          </div>
          <ul className="flex flex-col">
            <li className="nav-link-mobile flex items-center justify-between">
              <Link href="#">Home</Link>
              <button className="flex items-center justify-center bg-white w-8 h-8 rounded-md">
                <Image src="/icons/add.svg" alt="logo" width={12} height={12} />
              </button>
            </li>
            <li className="nav-link-mobile"><Link href="#">Collection</Link></li>
            <li className="nav-link-mobile"><Link href="#">choose</Link></li>
            <li className="nav-link-mobile"><Link href="#">about</Link></li>
            <li className="nav-link-mobile"><Link href="#">roadmap</Link></li>
            <li className="nav-link-mobile"><Link href="#">blog</Link></li>
          </ul>
          <div className="flex items-center justify-center gap-3 py-[1.88rem] px-[1.62rem] mobile-nav-icons">
            <Link href="#" target="_blank"><Image src="/icons/facebook.svg" alt="logo" width={10} height={16} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/twitter.svg" alt="logo" width={16} height={16} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/instagram.svg" alt="logo" width={14} height={16} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/discord.svg" alt="logo" width={20} height={16} /></Link>
            <Link href="#" target="_blank"><Image src="/icons/telegram.svg" alt="logo" width={14} height={16} /></Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
