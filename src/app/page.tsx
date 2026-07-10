import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Architecture from "@/components/sections/Architecture";
import OnlyTwelve from "@/components/sections/OnlyTwelve";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Sustainability from "@/components/sections/Sustainability";
import Location from "@/components/sections/Location";
import Gallery from "@/components/sections/Gallery";
import Legacy from "@/components/sections/Legacy";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Architecture />
        <OnlyTwelve />
        <Residences />
        <Amenities />
        <Sustainability />
        <Location />
        <Gallery />
        <Legacy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
