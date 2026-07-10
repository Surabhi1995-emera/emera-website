export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-soft-black text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl tracking-[0.24em] mb-6">ÉMERA</div>
            <p className="text-stone text-sm leading-relaxed max-w-sm font-light">
              A rare expression of serenity in the heart of Chennai. By SPR — a
              legacy of thoughtful development spanning five decades.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="eyebrow text-stone mb-6">Navigate</div>
            <ul className="space-y-3 text-sm font-light">
              {[
                ["Philosophy", "#philosophy"],
                ["Architecture", "#architecture"],
                ["Residences", "#residences"],
                ["Amenities", "#amenities"],
                ["Location", "#location"],
                ["Gallery", "#gallery"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-gold-light transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-stone mb-6">Visit</div>
            <p className="text-sm font-light leading-relaxed text-ivory/90">
              Nelson Manickam Road,
              <br />
              Chennai, Tamil Nadu
            </p>
            <p className="text-sm font-light leading-relaxed text-ivory/90 mt-4">
              +91 7094 970 949
            </p>
            <p className="text-sm font-light leading-relaxed text-ivory/90 mt-1">
              SPR India, No. 1, Cooks Rd,
              <br />
              Perambur, Chennai 600012
            </p>
          </div>
        </div>

        <div className="hairline text-stone mt-16 md:mt-20" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 text-xs text-stone/80 font-light">
          <p>&copy; {new Date().getFullYear()} Émera by SPR. All rights reserved.</p>
          <p>Founded 1972 &middot; SPR Group</p>
        </div>
      </div>
    </footer>
  );
}
