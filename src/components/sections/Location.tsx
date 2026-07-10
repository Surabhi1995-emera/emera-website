import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MaskLines from "@/components/ui/MaskLines";

const PROXIMITY = [
  {
    label: "Hospitals",
    items: ["MGM", "Apollo", "SIMS"],
  },
  {
    label: "Schools & Colleges",
    items: ["Good Shepherd", "Loyola", "Lady Andal", "MOP Vaishnav"],
  },
  {
    label: "Retail",
    items: ["AMPA Skywalk", "VR Mall", "Express Avenue", "Nexus"],
  },
  {
    label: "Hospitality",
    items: ["Taj Coromandel", "Connemara", "Hyatt", "The Park"],
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-warmwhite">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-40 pb-16 md:pb-20">
        <Reveal as="span" className="eyebrow block text-gold-dark text-center">
          Location
        </Reveal>
        <MaskLines
          as="h2"
          lines={["Beautifully Set Apart."]}
          className="mt-6 text-center"
          lineClassName="font-serif font-light text-charcoal text-[9vw] sm:text-6xl md:text-[4.4vw] leading-[1.1]"
        />
      </div>

      <div className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden bg-charcoal">
        <Image
          src="/images/location-aerial-render.jpg"
          alt="Aerial night view of the Émera residence and its surrounding street"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <span className="absolute -top-16 md:-top-20 h-14 w-px bg-gold-light/70" />
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light/60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-light" />
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 md:px-16 pb-10 md:pb-14 text-center">
          <p className="eyebrow text-ivory/80">Nelson Manickam Road, Chennai</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
          {PROXIMITY.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="border-t border-charcoal/15 pt-5">
                <h4 className="eyebrow text-gold-dark mb-4">{group.label}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-charcoal/70 font-light text-sm md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
