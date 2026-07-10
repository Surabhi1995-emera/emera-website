import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Architecture from "@/components/sections/Architecture";
import OnlyTwelve from "@/components/sections/OnlyTwelve";
import Residences from "@/components/sections/Residences";
import Amenities from "@/components/sections/Amenities";
import Nature from "@/components/sections/Nature";
import Location from "@/components/sections/Location";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Architecture />
      <OnlyTwelve />
      <Residences />
      <Amenities />
      <Nature />
      <Location />
      <Gallery />
      <Contact />
    </>
  );
}
