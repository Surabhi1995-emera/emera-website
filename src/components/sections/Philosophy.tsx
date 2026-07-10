import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-ivory py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 lg:col-start-1">
            <Eyebrow>The Philosophy</Eyebrow>

            <RevealText
              as="h2"
              className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-charcoal text-balance"
            >
              What feels like an escape begins to feel like home.
            </RevealText>

            <FadeIn delay={0.2}>
              <p className="mt-10 text-charcoal/70 leading-relaxed text-base md:text-lg font-light max-w-xl">
                A breeze moves through green canopies, the soft call of
                birds, light drifting across open space. The city recedes
                into the background, and a sense of calm lingers. Welcome to
                Émera by SPR City — a rare expression of serenity in the
                heart of Chennai.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-charcoal/70 leading-relaxed text-base md:text-lg font-light max-w-xl">
                Inspired by the enduring charm of 19th-century Parisian
                architecture, here light, landscape, and proportion come
                together in quiet harmony.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-12 border-t border-charcoal/10 pt-8 max-w-xl">
              <p className="font-serif italic text-xl md:text-2xl text-emerald leading-relaxed text-balance">
                &ldquo;The name Émera is derived from the emerald — long
                prized for its depth, rarity, and enduring value.&rdquo;
              </p>
              <p className="mt-4 text-sm text-charcoal/50 font-light leading-relaxed">
                Its rich green character reflects the spirit of the residence
                itself: lush, composed, and quietly exceptional.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <FadeImage
              src="/images/tree-canopy-1.jpg"
              alt="Sunlight filtering through a tree canopy above Émera"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
