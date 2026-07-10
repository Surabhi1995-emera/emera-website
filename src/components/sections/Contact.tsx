"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MaskLines from "@/components/ui/MaskLines";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full bg-transparent border-b border-charcoal/25 focus:border-charcoal outline-none py-3 text-charcoal placeholder:text-charcoal/40 font-light transition-colors duration-300";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-warmwhite">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8">
          <div className="md:col-span-5">
            <Reveal as="span" className="eyebrow block text-gold-dark">
              Enquire
            </Reveal>
            <MaskLines
              as="h2"
              lines={["Begin Your", "Story at Émera."]}
              className="mt-6"
              lineClassName="font-serif font-light text-charcoal text-[10vw] sm:text-6xl md:text-5xl leading-[1.1]"
            />
            <Reveal
              as="p"
              delay={0.15}
              className="mt-8 text-charcoal/60 font-light text-base leading-relaxed max-w-sm"
            >
              For private viewings and residence availability, share a few
              details and our team will be in touch.
            </Reveal>

            <Reveal delay={0.25} className="mt-14 hidden md:block max-w-xs">
              <div className="relative aspect-[16/10] w-full overflow-hidden mb-6">
                <Image
                  src="/images/location-aerial-city.jpg"
                  alt="SPR City, an integrated urban development by SPR Group"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <span className="eyebrow text-gold-dark block mb-2">
                Built on Experience
              </span>
              <p className="text-charcoal/50 font-light text-sm leading-relaxed">
                A legacy spanning five decades, SPR Group has delivered
                thoughtfully planned residential developments across Chennai
                since 1972.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {status === "success" ? (
              <Reveal>
                <div className="border border-charcoal/15 px-8 py-16 text-center">
                  <span className="eyebrow text-gold-dark block mb-4">
                    Thank You
                  </span>
                  <p className="font-serif font-light text-2xl md:text-3xl text-charcoal">
                    We&rsquo;ve received your enquiry.
                  </p>
                  <p className="mt-4 text-charcoal/60 font-light text-sm max-w-sm mx-auto">
                    A member of our team will reach out shortly to arrange
                    your private viewing of Émera.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="eyebrow text-charcoal/50 block mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={fieldClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow text-charcoal/50 block mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className={fieldClasses}
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="eyebrow text-charcoal/50 block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClasses}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="configuration"
                      className="eyebrow text-charcoal/50 block mb-2"
                    >
                      Configuration of Interest
                    </label>
                    <select
                      id="configuration"
                      name="configuration"
                      defaultValue=""
                      className={cn(fieldClasses, "appearance-none")}
                    >
                      <option value="" disabled>
                        Select a configuration
                      </option>
                      <option value="3bhk">3 BHK — 3,041–3,922 Sq. Ft.</option>
                      <option value="4bhk">4 BHK — 5,044 Sq. Ft.</option>
                      <option value="5bhk">5 BHK — 6,922 Sq. Ft.</option>
                      <option value="undecided">Not Yet Decided</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="eyebrow text-charcoal/50 block mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className={cn(fieldClasses, "resize-none")}
                      placeholder="Tell us a little about what you're looking for"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-800/80 font-light">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-3 border border-charcoal text-charcoal px-10 py-4 eyebrow transition-all duration-500 hover:bg-charcoal hover:text-ivory disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Submit Enquiry"}
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
