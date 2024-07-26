import Image from "next/image";
import Choose from "@/components/Choose";
import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main className="bg-tertiary py-[0.63rem] px-5">
      <Navbar />
      <Hero />
      {/* <Partners />  */}
      <Collection />
      <Choose />
    </main>
  );
}
