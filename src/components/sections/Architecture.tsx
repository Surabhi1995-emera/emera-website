import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

const DETAILS = [
  {
    n: "01",
    title: "Tree-lined, landscaped driveway",
    copy: "The experience begins with arrival through a defined entrance sequence.",
  },
  {
    n: "02",
    title: "Façade with balconies, mouldings & symmetry",
    copy: "Every proportion drawn from the Haussmannian tradition of Paris.",
  },
  {
    n: "03",
    title: "Designed for light, openness & flow",
    copy: "Interiors that welcome the outdoors in, gently and generously.",
  },
  {
    n: "04",
    title: "Low-density planning, high privacy",
    copy: "Space to breathe, and a quiet that is felt rather than announced.",
  },
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
              At Émera, architecture is more than an aesthetic — it is an
              expression of timelessness. Drawing from the iconic
              Haussmannian style of Paris, Émera is shaped by proportion,
              detail, and a sense of grandeur, crafted for those who
              appreciate classic beauty.
            </p>
          </FadeIn>
        </div>
      </Container>

      <div className="mt-16 md:mt-24">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <FadeImage
            src="/images/driveway-palms.jpg"
            alt="Tree-lined landscaped driveway leading to Émera"
            className="lg:col-span-7 aspect-[4/5] md:aspect-[16/11]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="lg:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
            <FadeImage
              src="/images/french-window-bougainvillea.jpg"
              alt="French window detail framed by bougainvillea"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <FadeImage
              src="/images/pergola-entrance-dusk.jpg"
              alt="Entrance gate and pergola at dusk"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Container>
      </div>

      <Container className="mt-20 md:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-charcoal/10 pt-12">
          {DETAILS.map((d, i) => (
            <FadeIn key={d.n} delay={i * 0.08}>
              <p className="font-serif text-2xl text-gold">{d.n}</p>
              <p className="mt-4 text-charcoal text-base leading-snug">
                {d.title}
              </p>
              <p className="mt-2 text-charcoal/55 text-sm font-light leading-relaxed">
                {d.copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
