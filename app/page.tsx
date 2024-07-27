import Image from "next/image";
import Choose from "@/components/Choose";
import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import MeetTheArtist from "@/components/MeetTheArtist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-tertiary py-[0.63rem]">
      <section className="px-5">
        <Navbar />
        <Hero />
        {/* <Partners />  */}
        <Collection />
        <Choose />
        <HowItWorks />
        <Roadmap />
        <MeetTheArtist />
      </section>
      <Footer />
    </main>
  );
}
