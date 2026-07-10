"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import FadeImage from "@/components/ui/FadeImage";
import Button from "@/components/ui/Button";

const inputClasses =
  "w-full bg-transparent border-b border-ivory/35 py-3 text-ivory placeholder:text-ivory/60 text-sm font-light focus:outline-none focus:border-gold-light transition-colors duration-300";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-soft-black py-28 md:py-40 overflow-hidden">
      <FadeImage
        src="/images/bougainvillea-door.jpg"
        alt="Bougainvillea flowers framing a residence entrance"
        absolute
        parallax={false}
        imgClassName="opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black via-soft-black/90 to-soft-black/60" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Eyebrow light>Contact</Eyebrow>
            <RevealText
              as="h2"
              className="mt-8 font-serif text-4xl md:text-5xl leading-[1.15] text-ivory text-balance"
            >
              Begin your enquiry.
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-ivory/60 font-light leading-relaxed max-w-sm">
                For private viewings and residence availability, reach out to
                our team — we look forward to welcoming you home.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-12 space-y-6 text-sm text-ivory/70 font-light">
              <div>
                <p className="text-[11px] tracking-luxe uppercase text-gold-light mb-2">
                  Address
                </p>
                <p>SPR India, No. 1, Cooks Rd,</p>
                <p>Perambur, Chennai, Tamil Nadu 600012</p>
              </div>
              <div>
                <p className="text-[11px] tracking-luxe uppercase text-gold-light mb-2">
                  Phone
                </p>
                <a href="tel:+917094970949" className="hover:text-ivory transition-colors">
                  +91 7094 970 949
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <FadeIn className="h-full flex flex-col justify-center">
                <p className="font-serif text-3xl text-ivory">Thank you.</p>
                <p className="mt-4 text-ivory/60 font-light leading-relaxed max-w-sm">
                  Your enquiry has been received. A member of our team will
                  be in touch shortly.
                </p>
              </FadeIn>
            ) : (
              <FadeIn>
                <form onSubmit={onSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input
                      required
                      name="name"
                      aria-label="Full Name"
                      placeholder="Full Name"
                      className={inputClasses}
                    />
                    <input
                      required
                      type="tel"
                      name="phone"
                      aria-label="Phone Number"
                      placeholder="Phone Number"
                      className={inputClasses}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input
                      required
                      type="email"
                      name="email"
                      aria-label="Email Address"
                      placeholder="Email Address"
                      className={inputClasses}
                    />
                    <div className="relative">
                      <select
                        required
                        name="unit"
                        aria-label="Interested In"
                        defaultValue=""
                        className={inputClasses + " appearance-none pr-6"}
                      >
                        <option value="" disabled className="text-charcoal">
                          Interested In
                        </option>
                        <option value="3bhk" className="text-charcoal">3 BHK</option>
                        <option value="4bhk" className="text-charcoal">4 BHK</option>
                        <option value="5bhk" className="text-charcoal">5 BHK</option>
                      </select>
                      <span className="pointer-events-none absolute right-0 bottom-4 text-ivory/50 text-xs">
                        &#9662;
                      </span>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    aria-label="Message (optional)"
                    placeholder="Message (optional)"
                    rows={3}
                    className={inputClasses + " resize-none"}
                  />

                  <Button type="submit" variant="outline-light">
                    Submit Enquiry
                  </Button>
                </form>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
