import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import MaskLines from "@/components/ui/MaskLines";

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-warmwhite">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-40 pb-24 md:pb-32">
        <Reveal as="span" className="eyebrow block text-gold-dark text-center">
          The Philosophy
        </Reveal>

        <MaskLines
          as="h2"
          lines={["The Essence of", "Refined Living."]}
          className="mt-6 text-center"
          lineClassName="font-serif font-light text-charcoal text-[10vw] sm:text-[7vw] md:text-[4.6vw] leading-[1.08]"
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
          <Reveal
            as="p"
            className="md:col-span-5 text-charcoal/80 font-light text-lg md:text-xl leading-relaxed"
          >
            A breeze moves through green canopies, the soft call of birds,
            light drifting across open space. The city recedes into the
            background, and a sense of calm lingers.
          </Reveal>

          <div className="md:col-span-1" />

          <Reveal
            as="p"
            delay={0.15}
            className="md:col-span-5 md:col-start-8 text-charcoal/60 font-light text-base leading-relaxed"
          >
            What feels like an escape begins to feel like home. Welcome to
            Émera by SPR City — a rare expression of serenity in the heart of
            Chennai.
          </Reveal>
        </div>
      </div>

      <RevealImage
        src="/images/philosophy-canopy.jpg"
        alt="Sunlight filtering through a dense green tree canopy"
        className="h-[70vh] md:h-[92vh] w-full"
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <span className="eyebrow text-gold-dark">Origin of the Name</span>
            <h3 className="font-serif italic font-light text-3xl md:text-4xl mt-4 text-charcoal">
              émera
            </h3>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-charcoal/75 font-light text-lg md:text-xl leading-relaxed">
              The name Émera is derived from the emerald: long prized for its
              depth, rarity, and enduring value. Its rich green character
              also reflects the spirit of the residence itself —{" "}
              <em className="font-serif italic text-charcoal">
                lush, composed, and quietly exceptional.
              </em>
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
          <Reveal as="span" className="eyebrow block text-gold-light text-center">
            A Sanctuary Within the City
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-8 max-w-3xl mx-auto text-center text-ivory/85 font-light text-xl md:text-2xl leading-relaxed font-serif"
          >
            Nestled at the centre of Chennai&rsquo;s vibrant rhythm, Émera is
            not merely well located — it is beautifully set apart. Set along
            Nelson Manickam Road, this private sanctuary connects you
            effortlessly to everyday essentials, while its landscaped
            setting softens the experience of urban living.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
