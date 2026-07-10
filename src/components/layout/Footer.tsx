import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-emerald-deep text-ivory/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <p className="font-serif text-2xl tracking-[0.3em] uppercase text-ivory">
              Émera
            </p>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              A gem of quiet luxury by SPR. Only twelve residences on Nelson
              Manickam Road, Chennai.
            </p>
          </div>

          <div className="text-sm leading-loose">
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-3">
              Address
            </p>
            <p>SPR India, No. 1, Cooks Rd,</p>
            <p>Perambur, Chennai, Tamil Nadu 600012</p>
            <p className="mt-2">+91 7094 970 949</p>
          </div>

          <div className="text-sm leading-loose md:text-right">
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-3">
              Navigate
            </p>
            <div className="flex flex-col md:items-end gap-1">
              <a href="#philosophy" className="hover:text-ivory transition-colors">
                Philosophy
              </a>
              <a href="#architecture" className="hover:text-ivory transition-colors">
                Architecture
              </a>
              <a href="#amenities" className="hover:text-ivory transition-colors">
                Amenities
              </a>
              <a href="#contact" className="hover:text-ivory transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-wider text-ivory/40">
          <p>&copy; {new Date().getFullYear()} SPR Group. All rights reserved.</p>
          <p>SPR Luxury Collection</p>
        </div>
      </Container>
    </footer>
  );
}
