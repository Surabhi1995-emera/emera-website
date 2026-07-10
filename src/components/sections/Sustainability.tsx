import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";

const FEATURES = [
  "Landscaped gardens & tree-lined edges",
  "Rooftop green spaces",
  "Rainwater harvesting",
  "Green roofs & solar-ready systems",
  "Energy-efficient HVAC systems",
  "Improved airflow & thermal comfort",
];

export default function Sustainability() {
  return (
    <section className="relative bg-emerald text-ivory py-28 md:py-36 overflow-hidden">
      <FadeImage
        src="/images/garden-path-lavender.jpg"
        alt="Landscaped garden pathway at Émera"
        absolute
        parallax={false}
      />
      <div className="absolute inset-0 bg-emerald-deep/80" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow light>In Harmony With Nature</Eyebrow>
            <RevealText
              as="h2"
              className="mt-8 font-serif text-4xl md:text-5xl leading-[1.15] text-balance"
            >
              Sustainability, by design.
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-ivory/65 font-light leading-relaxed max-w-md">
                The setting is shaped not only by beauty and comfort, but by
                a more mindful way of living — sustainable systems working
                alongside green spaces to create a balanced environment.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <FadeIn>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {FEATURES.map((f) => (
                  <li
                    key={f}
                    className="text-sm font-light text-ivory/75 leading-relaxed border-t border-ivory/15 pt-4"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
