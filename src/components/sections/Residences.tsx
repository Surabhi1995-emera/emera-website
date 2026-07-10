import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import MaskLines from "@/components/ui/MaskLines";

const CONFIGS = [
  {
    type: "3 BHK",
    area: "3,041 – 3,922",
    detail: "Composed layouts with clear zoning between living and private spaces.",
  },
  {
    type: "4 BHK",
    area: "5,044",
    detail: "High ceilings and large windows bring the outdoors into everyday living.",
  },
  {
    type: "5 BHK",
    area: "6,922",
    detail: "The largest expression of Émera — a residence for grand, unhurried living.",
  },
];

const FEATURES = [
  "Private Decks & Terraces",
  "High Ceilings & Large Windows",
  "Scope for Customisation",
  "Dedicated Service & Utility Spaces",
];

export default function Residences() {
  return (
    <section id="residences" className="bg-warmwhite">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-40 pb-16 md:pb-20">
        <Reveal as="span" className="eyebrow block text-gold-dark text-center">
          The Residences
        </Reveal>
        <MaskLines
          as="h2"
          lines={["Expansive", "Masterpieces."]}
          className="mt-6 text-center"
          lineClassName="font-serif font-light text-charcoal text-[11vw] sm:text-[7vw] md:text-[4.8vw] leading-[1.06]"
        />
        <Reveal
          as="p"
          delay={0.15}
          className="mt-8 max-w-2xl mx-auto text-center text-charcoal/65 font-light text-base md:text-lg leading-relaxed"
        >
          At Émera, space is designed to be lived in, not contained. Expansive
          layouts, high ceilings, and wide openings create homes that feel
          adaptable and filled with natural light.
        </Reveal>
      </div>

      <div className="border-t border-charcoal/15">
        {CONFIGS.map((c, i) => (
          <Reveal key={c.type} delay={i * 0.08}>
            <div className="border-b border-charcoal/15 group">
              <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-8 transition-colors duration-500 hover:bg-charcoal/[0.03]">
                <div className="md:col-span-2">
                  <span className="font-serif text-2xl md:text-3xl font-light text-charcoal">
                    {c.type}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="font-serif text-4xl md:text-6xl font-light text-charcoal/90">
                    {c.area}
                  </span>
                  <span className="ml-3 text-xs tracking-[0.15em] uppercase text-charcoal/50">
                    Sq. Ft.
                  </span>
                </div>
                <p className="md:col-span-6 text-charcoal/60 font-light text-sm md:text-base leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-charcoal text-ivory flex items-center order-2 md:order-1">
          <div className="px-8 md:px-16 py-16 md:py-0 w-full">
            <span className="eyebrow text-gold-light block mb-8">
              Considered Down to the Detail
            </span>
            <ul className="space-y-6">
              {FEATURES.map((f, i) => (
                <li
                  key={f}
                  className="flex items-baseline gap-5 border-t border-ivory/15 pt-5"
                >
                  <span className="font-serif italic text-gold-light text-sm">
                    0{i + 1}
                  </span>
                  <span className="font-serif font-light text-xl md:text-2xl text-ivory/95">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <RevealImage
          src="/images/residence-balcony-view.jpg"
          alt="A private residence balcony at Émera overlooking the city at dusk"
          className="h-[60vh] md:h-[90vh] w-full order-1 md:order-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealImage
          src="/images/interior-dining-night.jpg"
          alt="An elegant dining room interior at Émera, softly lit in the evening"
          className="h-[55vh] md:h-[80vh] w-full"
        />
        <div className="flex items-center bg-stone/20">
          <div className="px-8 md:px-16 py-16 md:py-0">
            <Reveal as="span" className="eyebrow text-gold-dark block">
              Product-Grade Design
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="mt-6 font-serif font-light text-2xl md:text-3xl leading-snug text-charcoal"
            >
              Each residence allows for both shared living and private
              retreat — the flexibility to shape spaces to suit individual
              lifestyle.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
