import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-tertiary py-[0.63rem] px-2">
      <Navbar />
      <Hero />
    </main>
  );
}
