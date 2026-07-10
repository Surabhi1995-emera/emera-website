import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

const PROXIMITY = [
  {
    label: "Hospitals",
    items: "MGM, Apollo, SIMS",
  },
  {
    label: "Schools & Colleges",
    items: "Good Shepherd, Loyola, Lady Andal, MOP Vaishnav",
  },
  {
    label: "Retail",
    items: "Ampa Skywalk, VR Mall, Express Avenue, Nexus",
  },
  {
    label: "Hospitality",
    items: "Taj Coromandel, Connemara, Hyatt, The Park",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-ivory py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Location</Eyebrow>
            <RevealText
              as="h2"
              className="mt-8 font-serif text-4xl md:text-5xl leading-[1.15] text-charcoal text-balance"
            >
              A sanctuary within the city.
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-charcoal/70 font-light leading-relaxed max-w-md">
                Nestled at the centre of Chennai&rsquo;s vibrant rhythm, Émera
                is not merely well located — it is beautifully set apart. Set
                along Nelson Manickam Road, this private sanctuary connects
                you effortlessly to everyday essentials.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 border-t border-charcoal/10 pt-6">
              <p className="text-[11px] tracking-luxe uppercase text-gold">
                Address
              </p>
              <p className="mt-3 text-charcoal/80 font-light">
                Nelson Manickam Road, Chennai, Tamil Nadu
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {PROXIMITY.map((p, i) => (
                <FadeIn key={p.label} delay={0.1 * i}>
                  <p className="text-[11px] tracking-luxe uppercase text-charcoal/40">
                    {p.label}
                  </p>
                  <p className="mt-2 text-sm text-charcoal/70 font-light leading-relaxed">
                    {p.items}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-[16/12]">
              <FadeImage
                src="/images/aerial-night-view.jpg"
                alt="Aerial night view of Émera and its surroundings"
                className="h-full w-full"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-gold-light ring-4 ring-gold-light/30 animate-pulse" />
                  <span className="mt-3 text-[10px] tracking-luxe uppercase text-ivory bg-soft-black/50 px-3 py-1.5 backdrop-blur-sm">
                    Émera by SPR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
