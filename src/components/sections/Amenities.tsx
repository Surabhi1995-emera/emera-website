import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";
import { clsx } from "clsx";

type Act = {
  eyebrow: string;
  title: string;
  copy: string;
  hero: { src: string; alt: string };
  supporting: { src: string; alt: string; label: string }[];
  reverse?: boolean;
};

const ACTS: Act[] = [
  {
    eyebrow: "Wellness",
    title: "A place to slow down.",
    copy: "An infinity pool that meets the skyline, a fully equipped gym, and a mindfulness zone set apart from the everyday — every shared space designed as an extension of the home.",
    hero: {
      src: "/images/infinity-pool-night-skyline.jpg",
      alt: "Infinity pool overlooking the Chennai skyline at night",
    },
    supporting: [
      { src: "/images/gym.jpg", alt: "Fully equipped gym", label: "Fully Equipped Gym" },
      {
        src: "/images/outdoor-lounge-cabana.jpg",
        alt: "Mindfulness zone lounge seating",
        label: "Mindfulness Zone",
      },
    ],
  },
  {
    eyebrow: "Social",
    title: "Curated for togetherness.",
    copy: "A clubhouse with banquet space, an indoor games room, and landscaped terraces that bring together wellness, leisure, and quiet community.",
    hero: {
      src: "/images/banquet-hall-gold-dome.jpg",
      alt: "Clubhouse banquet hall with gold domed ceiling",
    },
    supporting: [
      { src: "/images/billiards-room.jpg", alt: "Indoor games room with billiards table", label: "Indoor Games Room" },
      { src: "/images/rooftop-pool-sunset.jpg", alt: "Landscaped rooftop terrace at sunset", label: "Landscaped Terrace" },
    ],
    reverse: true,
  },
  {
    eyebrow: "Convenience & Security",
    title: "Ease, quietly assured.",
    copy: "Stilt level parking, valet and concierge services, 24×7 security, and provision for home automation — every detail considered, so nothing needs to be.",
    hero: {
      src: "/images/parking-corridor.jpg",
      alt: "Stilt level parking corridor",
    },
    supporting: [
      { src: "/images/valet-key-handoff.jpg", alt: "Valet and concierge service", label: "Valet & Concierge" },
      { src: "/images/security-control-room.jpg", alt: "24 by 7 security control room", label: "24×7 Security" },
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

      <div className="mt-24 md:mt-32 flex flex-col gap-28 md:gap-40">
        {ACTS.map((act) => (
          <div key={act.eyebrow}>
            <Container
              className={clsx(
                "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center",
                act.reverse && "lg:[direction:rtl]"
              )}
            >
              <FadeImage
                src={act.hero.src}
                alt={act.hero.alt}
                className="lg:col-span-8 aspect-[16/10]"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
              <div className="lg:col-span-4 lg:[direction:ltr]">
                <p className="text-[11px] tracking-luxe uppercase text-gold">
                  {act.eyebrow}
                </p>
                <p className="mt-4 font-serif text-3xl md:text-4xl text-charcoal text-balance">
                  {act.title}
                </p>
                <p className="mt-5 text-charcoal/60 font-light leading-relaxed">
                  {act.copy}
                </p>
              </div>
            </Container>

            <Container className="mt-4 md:mt-6 grid grid-cols-2 gap-4 md:gap-6">
              {act.supporting.map((s) => (
                <div key={s.label}>
                  <FadeImage
                    src={s.src}
                    alt={s.alt}
                    className="aspect-[4/3]"
                    parallax={false}
                    sizes="50vw"
                  />
                  <p className="mt-4 text-[11px] tracking-luxe uppercase text-charcoal/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}
