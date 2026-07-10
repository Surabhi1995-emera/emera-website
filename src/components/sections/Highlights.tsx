import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const FACTS = [
  { value: "G + 4", label: "Exclusive Storeys" },
  { value: "12", label: "Residences Only" },
  { value: "3", label: "Residences per Floor / Private Lift" },
  { value: "3 / 4 / 5", label: "BHK Configurations" },
];

export default function Highlights() {
  return (
    <section className="bg-warm-white py-16 md:py-20 border-b border-charcoal/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {FACTS.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08} className="border-t border-charcoal/15 pt-5">
              <p className="font-serif text-3xl md:text-4xl text-emerald">{f.value}</p>
              <p className="mt-2 text-[11px] tracking-luxe uppercase text-charcoal/50 leading-relaxed">
                {f.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
