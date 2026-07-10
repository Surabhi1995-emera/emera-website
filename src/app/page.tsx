import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Philosophy from "@/components/sections/Philosophy";
import Architecture from "@/components/sections/Architecture";
import Amenities from "@/components/sections/Amenities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Philosophy />
        <Architecture />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
