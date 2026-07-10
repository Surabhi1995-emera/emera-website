import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

const PROJECTS = [
  { src: "/images/legacy-tower-1.jpg", alt: "Osian One, Park Town, Chennai", name: "Osian One", meta: "Park Town, Chennai" },
  { src: "/images/legacy-tower-2.jpg", alt: "Osian Heights, Old Washermanpet, Chennai", name: "Osian Heights", meta: "Old Washermanpet, Chennai" },
  { src: "/images/legacy-aerial-1.jpg", alt: "Osian Chlorophyll, Porur, Chennai", name: "Osian Chlorophyll", meta: "Porur, Chennai" },
];

export default function Legacy() {
  return (
    <section className="bg-warm-white py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <Eyebrow>The Legacy</Eyebrow>
            <RevealText
              as="h2"
              className="mt-8 font-serif text-3xl md:text-4xl leading-[1.2] text-charcoal text-balance"
            >
              Built on experience. Driven by vision.
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-charcoal/65 font-light leading-relaxed text-sm md:text-base">
                With a legacy spanning over five decades, SPR Group has built
                a reputation for thoughtfully planned developments at scale.
                Founded in 1972 by Prithviraj S. Kawad, the group&rsquo;s
                approach is rooted in long-term value creation, transparency,
                and a deep understanding of how cities evolve.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {PROJECTS.map((p) => (
              <div key={p.name}>
                <FadeImage
                  src={p.src}
                  alt={p.alt}
                  className="aspect-[3/4]"
                  parallax={false}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
                />
                <p className="mt-4 text-sm text-charcoal">{p.name}</p>
                <p className="text-xs text-charcoal/45 font-light">{p.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
