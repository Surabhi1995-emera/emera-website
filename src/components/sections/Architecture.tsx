import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import MaskLines from "@/components/ui/MaskLines";

const FEATURES = [
  {
    n: "01",
    title: "Tree-Lined, Landscaped Driveway",
    body: "The arrival begins long before the entrance — a defined sequence that sets the tone for the residence beyond.",
  },
  {
    n: "02",
    title: "Designed for Light, Openness & Flow",
    body: "Proportion and volume work together, allowing daylight to travel deep into every home.",
  },
  {
    n: "03",
    title: "Façade with Balconies, Mouldings & Symmetry",
    body: "Drawing from the iconic Haussmannian style of Paris, every elevation is composed with quiet precision.",
  },
  {
    n: "04",
    title: "Low-Density Planning with High Privacy",
    body: "Fewer residences, more space between them — privacy shaped into the architecture itself.",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="bg-ivory">
      <div className="relative h-[85vh] md:h-[100vh] w-full overflow-hidden">
        <RevealImage
          src="/images/architecture-twilight-facade.jpg"
          alt="The Émera residence facade at twilight, framed by a landscaped entrance pergola"
          fill
          parallax
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="eyebrow text-gold-light mb-6">
            Inspired by 19th-Century Paris
          </span>
          <MaskLines
            as="h2"
            lines={["Architectural", "Grandeur."]}
            lineClassName="font-serif font-light text-ivory text-[13vw] sm:text-[8vw] md:text-[5.6vw] leading-[1.05]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <Reveal className="md:col-span-6">
            <p className="text-charcoal/80 font-light text-xl md:text-2xl leading-relaxed font-serif">
              At Émera, architecture is more than an aesthetic. It is an
              expression of timelessness.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <p className="text-charcoal/65 font-light text-base leading-relaxed">
              Drawing from the iconic Haussmannian style of Paris, Émera is
              shaped by proportion, detail, and a sense of grandeur. The
              experience begins with the arrival through a landscaped
              driveway and a defined entrance sequence — setting the tone for
              a residence crafted for those who appreciate classic beauty.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="border-t border-charcoal/15 pt-6 flex gap-6">
                <span className="font-serif italic text-2xl text-gold-dark shrink-0">
                  {f.n}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-charcoal mb-2">
                    {f.title}
                  </h3>
                  <p className="text-charcoal/60 font-light text-sm leading-relaxed max-w-sm">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealImage
          src="/images/architecture-driveway-day.jpg"
          alt="A palm-lined driveway leading to the Émera entrance"
          className="h-[60vh] md:h-[85vh] w-full"
        />
        <div className="bg-charcoal text-ivory flex items-center">
          <div className="px-8 md:px-16 py-16 md:py-0">
            <Reveal as="span" className="eyebrow text-gold-light block">
              Craftsmanship
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-6 font-serif font-light italic text-2xl md:text-3xl leading-snug text-ivory/95"
            >
              &ldquo;Every moulding, every symmetry, every arrival — crafted
              for those who appreciate classic beauty.&rdquo;
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
