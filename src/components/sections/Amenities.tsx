import { clsx } from "clsx";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

type Item = { label: string; src: string; alt: string };

type Category = {
  title: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    title: "Wellness",
    items: [
      { label: "Infinity Pool", src: "/images/infinity-pool-night-skyline.jpg", alt: "Infinity pool overlooking the Chennai skyline at night" },
      { label: "Fully Equipped Gym", src: "/images/gym.jpg", alt: "Fully equipped gym" },
      { label: "Mindfulness Zone", src: "/images/outdoor-lounge-cabana.jpg", alt: "Mindfulness zone lounge seating" },
    ],
  },
  {
    title: "Social",
    items: [
      { label: "Clubhouse with Banquet Space", src: "/images/banquet-hall-gold-dome.jpg", alt: "Clubhouse banquet hall with gold domed ceiling" },
      { label: "Indoor Games Room", src: "/images/billiards-room.jpg", alt: "Indoor games room with billiards table" },
      { label: "Landscaped Terrace", src: "/images/terrace-sunset-lounge.jpg", alt: "Landscaped terrace lounge at sunset" },
    ],
  },
  {
    title: "Convenience & Security",
    items: [
      { label: "Stilt Level Parking", src: "/images/parking-corridor.jpg", alt: "Stilt level parking corridor" },
      { label: "Valet & Concierge Services", src: "/images/valet-key-handoff.jpg", alt: "Valet and concierge service" },
      { label: "24×7 Security", src: "/images/security-control-room.jpg", alt: "24 by 7 security control room" },
      { label: "Home Automation", src: "/images/home-automation-panel.jpg", alt: "Home automation control panel detail" },
    ],
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-warm-white py-24 md:py-32">
      <Container className="max-w-2xl">
        <Eyebrow>Amenities</Eyebrow>
        <RevealText
          as="h2"
          className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal text-balance"
        >
          Exclusive amenities.
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-base md:text-lg font-light">
            Every shared space at Émera is considered an extension of
            home — set aside for wellness, connection, and calm.
          </p>
        </FadeIn>
      </Container>

      <div className="mt-14 md:mt-16 flex flex-col gap-12 md:gap-14">
        {CATEGORIES.map((cat) => (
          <Container key={cat.title}>
            <FadeIn>
              <p className="text-[11px] tracking-luxe uppercase text-gold font-semibold border-b border-charcoal/10 pb-4">
                {cat.title}
              </p>
            </FadeIn>

            <div
              className={clsx(
                "mt-6 grid grid-cols-2 gap-4 md:gap-6",
                cat.items.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
              )}
            >
              {cat.items.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <FadeImage
                    src={item.src}
                    alt={item.alt}
                    className="aspect-square w-2/3"
                    parallax={false}
                    sizes="(min-width: 768px) 22vw, 33vw"
                  />
                  <p className="mt-3 text-[11px] tracking-luxe uppercase text-charcoal/70 font-semibold leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        ))}
      </div>
    </section>
  );
}
