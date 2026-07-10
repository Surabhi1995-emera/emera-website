import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";
import ResidenceTabs from "./ResidenceTabs";

const FEATURES = [
  "Private decks & terraces",
  "High ceilings & large windows",
  "Scope for customisation",
  "Dedicated service & utility spaces",
];

export default function Residences() {
  return (
    <section id="residences" className="bg-ivory py-28 md:py-40">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Residences</Eyebrow>
          <RevealText
            as="h2"
            className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal text-balance"
          >
            Expansive masterpieces.
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-charcoal/70 leading-relaxed text-base md:text-lg font-light">
              At Émera, space is designed to be lived in, not contained.
              Each residence allows for both shared living and private
              retreat — shaping spaces to suit individual lifestyle, and
              enhancing everyday comfort and long-term livability.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="text-[11px] tracking-luxe uppercase text-charcoal/50 flex items-center gap-2"
                >
                  <span className="h-px w-4 bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="mt-20 md:mt-28">
          <ResidenceTabs />
        </div>
      </Container>

      <div className="mt-24 md:mt-32">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <FadeImage
            src="/images/lobby-emerald-gold.jpg"
            alt="Emerald and gold toned residence lobby"
            className="aspect-[3/4]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <FadeImage
            src="/images/living-dining-warm.jpg"
            alt="Warm-toned living and dining interior"
            className="aspect-[3/4] md:mt-12"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <FadeImage
            src="/images/balcony-dusk.jpg"
            alt="Private residence balcony at dusk"
            className="aspect-[3/4]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Container>
      </div>
    </section>
  );
}
