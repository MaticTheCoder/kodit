"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/site.config";

export default function Kontakt() {
  const [poslano, setPoslano] = useState(false);
  const [napaka, setNapaka] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!data.gdpr) {
      setNapaka("Prosimo, potrdite strinjanje z zasebnostjo.");
      return;
    }

    // TODO: poveži z /api/kontakt ko nastaviš SMTP v .env
    setPoslano(true);
    form.reset();
  }

  return (
    <section id="kontakt" className="py-24 bg-[#1e3a5f] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stopite v stik
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Pišite mi in v 24 urah se oglasim z brezplačnim nasvetom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {poslano ? (
              <div className="bg-green-500/20 border border-green-400/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">Hvala!</h3>
                <p className="text-white/70">Oglasim se v 24 urah.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      Ime in priimek *
                    </label>
                    <input
                      name="ime"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#f97316]"
                      placeholder="Janez Novak"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1">
                      E-pošta *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#f97316]"
                      placeholder="janez@firma.si"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Telefon (neobvezno)
                  </label>
                  <input
                    name="telefon"
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#f97316]"
                    placeholder="+386 40 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1">
                    Kaj potrebujete? *
                  </label>
                  <textarea
                    name="sporocilo"
                    required
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#f97316] resize-none"
                    placeholder="Kratko opišite vaše podjetje in kaj bi radi dosegli s spletno stranjo..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr"
                    className="mt-1 accent-[#f97316]"
                  />
                  <span className="text-sm text-white/60">
                    Strinjam se z{" "}
                    <a
                      href="/zasebnost"
                      className="underline hover:text-white"
                      target="_blank"
                    >
                      politiko zasebnosti
                    </a>{" "}
                    in dovoljujem obdelavo podatkov za namen odgovora na povpraševanje.
                  </span>
                </label>

                {napaka && (
                  <p className="text-red-400 text-sm">{napaka}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold py-4 rounded-xl transition-colors text-lg"
                >
                  Pošljite povpraševanje
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            <div>
              <div className="text-[#f97316] font-semibold text-sm mb-1">E-pošta</div>
              <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline">
                {siteConfig.email}
              </a>
            </div>
            {siteConfig.phone && (
              <div>
                <div className="text-[#f97316] font-semibold text-sm mb-1">Telefon</div>
                <a href={`tel:${siteConfig.phone}`} className="text-white hover:underline">
                  {siteConfig.phone}
                </a>
              </div>
            )}
            <div>
              <div className="text-[#f97316] font-semibold text-sm mb-1">Lokacija</div>
              <p className="text-white/80">{siteConfig.location}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-sm text-white/70 leading-relaxed">
                Odgovorim v 24 urah na delovni dan. Za nujne zadeve me pokličite
                direktno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
