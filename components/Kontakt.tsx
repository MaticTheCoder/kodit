"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/site.config";
import { IconCheck } from "./icons";

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

  const inputClass =
    "w-full bg-white border border-[#dee2e6] rounded-lg px-4 py-3 text-[#212529] placeholder-[#adb5bd] focus:outline-none focus:border-[#212529] transition-colors";

  return (
    <section id="kontakt" className="py-24 bg-[#f8f9fa] border-t border-[#e9ecef]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Stopite v stik
          </h2>
          <p className="text-[#6c757d] max-w-xl mx-auto">
            Pišite mi in v 24 urah se oglasim z brezplačnim nasvetom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {poslano ? (
              <div className="bg-white border border-[#dee2e6] rounded-2xl p-8 text-center">
                <IconCheck className="w-12 h-12 mx-auto mb-4 text-[#212529]" />
                <h3 className="text-xl font-semibold text-[#212529] mb-2">Hvala!</h3>
                <p className="text-[#6c757d]">Oglasim se v 24 urah.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#495057] mb-1.5 font-medium">
                      Ime in priimek *
                    </label>
                    <input name="ime" required className={inputClass} placeholder="Janez Novak" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#495057] mb-1.5 font-medium">
                      E-pošta *
                    </label>
                    <input name="email" type="email" required className={inputClass} placeholder="janez@firma.si" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#495057] mb-1.5 font-medium">
                    Telefon (neobvezno)
                  </label>
                  <input name="telefon" type="tel" className={inputClass} placeholder="+386 40 000 000" />
                </div>

                <div>
                  <label className="block text-sm text-[#495057] mb-1.5 font-medium">
                    Kaj potrebujete? *
                  </label>
                  <textarea
                    name="sporocilo"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Kratko opišite vaše podjetje in kaj bi radi dosegli s spletno stranjo..."
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="gdpr" className="mt-1 accent-[#212529]" />
                  <span className="text-sm text-[#6c757d]">
                    Strinjam se z{" "}
                    <a href="/zasebnost" className="text-[#212529] underline hover:no-underline" target="_blank">
                      politiko zasebnosti
                    </a>{" "}
                    in dovoljujem obdelavo podatkov za namen odgovora na povpraševanje.
                  </span>
                </label>

                {napaka && <p className="text-red-600 text-sm">{napaka}</p>}

                <button
                  type="submit"
                  className="w-full border border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white font-semibold py-4 rounded-lg transition-colors text-base"
                >
                  Pošljite povpraševanje
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            <div>
              <div className="text-[#6c757d] font-medium text-sm mb-1">E-pošta</div>
              <a href={`mailto:${siteConfig.email}`} className="text-[#212529] hover:underline">
                {siteConfig.email}
              </a>
            </div>
            {siteConfig.phone && (
              <div>
                <div className="text-[#6c757d] font-medium text-sm mb-1">Telefon</div>
                <a href={`tel:${siteConfig.phone}`} className="text-[#212529] hover:underline">
                  {siteConfig.phone}
                </a>
              </div>
            )}
            <div>
              <div className="text-[#6c757d] font-medium text-sm mb-1">Lokacija</div>
              <p className="text-[#343a40]">{siteConfig.location}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#dee2e6]">
              <p className="text-sm text-[#6c757d] leading-relaxed">
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
