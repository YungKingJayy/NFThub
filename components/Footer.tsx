"use client";

import React from "react";
import Divider from "./ui/Divider";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <section className="w-full flex flex-col mx-auto text-white">
      <Divider />
      <div className=" w-full flex flex-col items-center mint bg-contain sm:bg-cover py-20 sm:py-28 px-4 mt-[7.5rem] border-b border-[#83838340]">
        <h2 className="mt-[7.5rem] text-[2.875rem] sm:text-[6rem] font-bold leading-[2.875rem] sm:leading-[6rem] text-center">Let&apos;s start<br /><span className="mint-gradient">minting</span></h2>
        <p className="text-gray font-normal text-[1.125rem] sm:text-[1.375rem] leading-7 sm:leading-[2.1rem] mt-6 text-center">Invest and manage all your NFTs at one place.</p>
        <Button className="btn-gradient mt-[2.19rem] sm:mt-[2.85rem]">
          <Link className="!text-bold !text-[1.0625rem] !leading-[1.35rem] text-white" href="#" target="_blank">Get started</Link>
          <Image src="/icons/arrow-diagonal.svg" alt="view in opensea" width={15} height={15} />
        </Button>
      </div>
      <footer className="w-full max-w-[78.875rem] mx-auto px-[0.94rem] pt-20 pb-9">
        <div className="w-full flex flex-col md:flex-row gap-[3.12rem] md:gap-0 items-start justify-between">
          <div className="max-w-[25.625rem]">
            <Image src="/logos/logo-gradient.svg" alt="nfthub" width={145} height={40} className="mb-[1.44rem]" />
            <p className="text-gray text-[1.0625rem] leading-[1.6875rem] mb-[1.31rem]">Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.</p>
            <div className="flex items-center gap-4">
              <Link href="#" target="_blank"><Image src="/icons/twitter.svg" alt="twitter" width={20} height={20} /></Link>
              <Link href="#" target="_blank"><Image src="/icons/instagram.svg" alt="instagram" width={18} height={20} /></Link>
              <Link href="#" target="_blank"><Image src="/icons/youtube.svg" alt="youtube" width={23} height={20} /></Link>
            </div>
          </div>
          <div className="w-full max-w-[27.755rem] flex flex-col md:flex-row gap-[3.12rem] md:gap-0 items-start justify-between">
              <div>
              <h6 className="text-white font-bold text-[1.375rem] leading-[1.65rem] mb-[1.21rem]">Quick Links</h6>
              <ul className="flex flex-col gap-[0.89rem] text-gray text-[1.125rem] leading-[1.575rem] font-normal">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Collection</Link></li>
                <li><Link href="#">Roadmap</Link></li>
                <li><Link href="#">FAQs</Link></li>
                </ul>
              </div>
            <div>
              <h6 className="text-white font-bold text-[1.375rem] leading-[1.65rem] mb-[1.21rem]">Community</h6>
              <ul className="flex flex-col gap-[0.89rem] text-gray text-[1.125rem] leading-[1.575rem] font-normal">
                <li><Link href="#">How it works!</Link></li>
                <li><Link href="#">Blockchain</Link></li>
                <li><Link href="#">Get in touch</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between mt-20 text-gray text-[0.9375rem]">
          <p>Copyright © 2023 Nfthub All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of Use</Link>
            <button className="cursor-pointer" onClick={scrollToTop}><Image src="/icons/arrow-up.svg" alt="back to top" width={14} height={8} /></button>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer