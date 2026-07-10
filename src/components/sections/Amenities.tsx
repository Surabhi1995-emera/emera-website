import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

type Item = { label: string; src?: string; alt?: string };

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
      { label: "Building Management System" },
      { label: "Home Automation", src: "/images/home-automation-panel.jpg", alt: "Home automation control panel detail" },
      { label: "100% Power Backup" },
    ],
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-warm-white py-28 md:py-40">
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
            At Émera, every shared space has been thoughtfully curated to
            bring together wellness, leisure, and quiet community.
          </p>
        </FadeIn>
      </Container>

      <div className="mt-16 md:mt-20 flex flex-col gap-16 md:gap-20">
        {CATEGORIES.map((cat) => (
          <Container key={cat.title}>
            <FadeIn>
              <p className="text-[11px] tracking-luxe uppercase text-gold border-b border-charcoal/10 pb-4">
                {cat.title}
              </p>
            </FadeIn>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {cat.items.map((item) => (
                <div key={item.label}>
                  {item.src ? (
                    <FadeImage
                      src={item.src}
                      alt={item.alt ?? item.label}
                      className="aspect-square"
                      parallax={false}
                      sizes="(min-width: 768px) 33vw, 50vw"
                    />
                  ) : (
                    <div className="aspect-square bg-stone-light/50 flex items-center justify-center">
                      <span className="h-8 w-px bg-gold/50" />
                    </div>
                  )}
                  <p className="mt-3 text-[11px] tracking-luxe uppercase text-charcoal/60 leading-relaxed">
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
