import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import ArchitectureCarousel from "./ArchitectureCarousel";

const DETAILS = [
  { n: "01", title: "Haussmannian Facade" },
  { n: "02", title: "Light & Openness" },
  { n: "03", title: "Low Density Planning" },
  { n: "04", title: "Total Privacy" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="bg-warm-white py-28 md:py-40 overflow-hidden">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Architecture</Eyebrow>
          <RevealText
            as="h2"
            className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal text-balance"
          >
            Architectural grandeur, drawn from Paris.
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-charcoal/70 leading-relaxed text-base md:text-lg font-light">
              Every line at Émera answers to proportion rather than trend.
              The Haussmannian vocabulary of 19th-century Paris — considered
              facades, deliberate symmetry, restrained ornament — gives the
              building a presence that doesn&rsquo;t chase attention.
            </p>
          </FadeIn>
        </div>
      </Container>

      <div className="mt-16 md:mt-24">
        <Container>
          <ArchitectureCarousel />
        </Container>
      </div>

      <Container className="mt-20 md:mt-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-charcoal/10 pt-12">
          {DETAILS.map((d, i) => (
            <FadeIn key={d.n} delay={i * 0.08}>
              <p className="font-serif text-2xl text-gold">{d.n}</p>
              <p className="mt-4 text-charcoal text-base leading-snug">
                {d.title}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
