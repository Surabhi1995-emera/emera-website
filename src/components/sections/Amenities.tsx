import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import MaskLines from "@/components/ui/MaskLines";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-soft-black text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-40 pb-16 md:pb-20">
        <Reveal as="span" className="eyebrow block text-gold-light text-center">
          Exclusive Amenities
        </Reveal>
        <MaskLines
          as="h2"
          lines={["A Life, Curated."]}
          className="mt-6 text-center"
          lineClassName="font-serif font-light text-ivory text-[11vw] sm:text-[7vw] md:text-[4.6vw] leading-[1.06]"
        />
        <Reveal
          as="p"
          delay={0.15}
          className="mt-8 max-w-2xl mx-auto text-center text-ivory/65 font-light text-base md:text-lg leading-relaxed"
        >
          Every shared space has been designed as an extension of the home —
          thoughtfully curated to bring together wellness, leisure, and quiet
          community.
        </Reveal>
      </div>

      {/* Wellness */}
      <div className="relative h-[90vh] md:h-[105vh] w-full overflow-hidden">
        <RevealImage
          src="/images/amenities-pool-sunset-wide.jpg"
          alt="An infinity pool overlooking the city at dusk"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24">
          <span className="eyebrow text-gold-light mb-4">01 — Wellness</span>
          <h3 className="font-serif font-light text-ivory text-[10vw] sm:text-6xl md:text-7xl leading-[1.05] mb-6">
            Infinity Pool.
          </h3>
          <p className="text-ivory/75 font-light text-sm md:text-base max-w-md">
            Fully Equipped Gym &middot; Mindfulness Zone
          </p>
        </div>
      </div>

      {/* Social */}
      <div className="relative h-[90vh] md:h-[105vh] w-full overflow-hidden">
        <RevealImage
          src="/images/amenities-pool-pergola.jpg"
          alt="A landscaped terrace and pergola for evening gatherings"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-black/40" />
        <div className="relative z-10 h-full flex flex-col justify-start px-6 md:px-16 pt-24 md:pt-28 items-end text-right">
          <span className="eyebrow text-gold-light mb-4">02 — Social</span>
          <h3 className="font-serif font-light text-ivory text-[10vw] sm:text-6xl md:text-7xl leading-[1.05] mb-6">
            Landscaped
            <br />
            Terrace.
          </h3>
          <p className="text-ivory/75 font-light text-sm md:text-base max-w-md">
            Clubhouse with Banquet Space &middot; Indoor Games Room
          </p>
        </div>
      </div>

      {/* Convenience & Security */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <span className="eyebrow text-gold-light">03 — Ease of Living</span>
            <h3 className="font-serif font-light text-ivory text-3xl md:text-4xl mt-4">
              Convenience &amp; Security.
            </h3>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
            {[
              "Stilt Level Parking",
              "Valet & Concierge Services",
              "24×7 Security",
              "Building Management System",
              "Provision for Home Automation",
              "100% Power Backup",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="border-t border-ivory/15 pt-4">
                  <span className="font-light text-ivory/85 text-base md:text-lg">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
