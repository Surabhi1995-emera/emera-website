import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import MaskLines from "@/components/ui/MaskLines";

const FEATURES = [
  "Landscaped Gardens & Tree-Lined Edges",
  "Rooftop Green Spaces",
  "Energy-Efficient HVAC Systems",
  "Rainwater Harvesting",
  "Green Roofs & Solar-Ready Systems",
  "Improved Airflow & Thermal Comfort",
];

export default function Nature() {
  return (
    <section id="nature" className="bg-emerald text-ivory">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealImage
          src="/images/nature-garden-path.jpg"
          alt="A landscaped garden pathway winding through greenery at Émera"
          className="h-[60vh] md:h-auto w-full order-1"
        />

        <div className="order-2 flex items-center">
          <div className="px-6 md:px-16 py-20 md:py-0">
            <span className="eyebrow text-gold-light">In Harmony With Nature</span>
            <MaskLines
              as="h2"
              lines={["A More Mindful", "Way of Living."]}
              className="mt-6"
              lineClassName="font-serif font-light text-ivory text-[9vw] sm:text-5xl md:text-5xl leading-[1.1]"
            />
            <Reveal
              as="p"
              delay={0.15}
              className="mt-8 text-ivory/75 font-light text-base md:text-lg leading-relaxed max-w-md"
            >
              Sustainability is not an afterthought — it is integral to how
              Émera is designed and experienced. Green spaces, shaded
              pathways, and rooftop planting work alongside sustainable
              systems to create a more balanced living environment.
            </Reveal>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {FEATURES.map((f, i) => (
                <Reveal key={f} delay={0.05 * i}>
                  <li className="text-ivory/85 font-light text-sm md:text-base border-t border-ivory/20 pt-3">
                    {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
