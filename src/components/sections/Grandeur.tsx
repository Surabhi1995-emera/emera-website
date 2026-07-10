import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

const UNITS = [
  { bhk: "5 BHK", size: "6,684 sq. ft.", src: "/images/residence-5bhk.jpg", alt: "Spacious living and dining room in a 5 BHK residence at Émera" },
  { bhk: "4 BHK", size: "4,842 sq. ft.", src: "/images/residence-4bhk.jpg", alt: "Private balcony at dusk in a 4 BHK residence at Émera" },
  { bhk: "3 BHK", size: "3,765 sq. ft.", src: "/images/residence-3bhk.jpg", alt: "Lobby interior representing a 3 BHK residence at Émera" },
];

export default function Grandeur() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container className="max-w-2xl">
        <Eyebrow>Architectural Grandeur</Eyebrow>
        <RevealText
          as="h2"
          className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal text-balance"
        >
          Expansive masterpieces.
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-charcoal/70 leading-relaxed text-base md:text-lg font-light">
            At Émera, space is designed to be lived in, not contained.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-14 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {UNITS.map((unit, i) => (
            <FadeIn key={unit.bhk} delay={i * 0.1}>
              <div className="flex items-baseline justify-between border-t border-charcoal/15 pt-5">
                <p className="font-serif text-3xl text-charcoal">{unit.bhk}</p>
                <p className="text-[11px] tracking-luxe uppercase text-gold">{unit.size}</p>
              </div>
              <FadeImage
                src={unit.src}
                alt={unit.alt}
                className="mt-6 aspect-[4/5]"
                sizes="(min-width: 768px) 33vw, 100vw"
                parallax={false}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
