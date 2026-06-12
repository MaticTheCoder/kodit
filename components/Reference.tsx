import Image from "next/image";
import { reference } from "@/lib/site.config";

export default function Reference() {
  return (
    <section id="reference" className="pb-24 bg-[var(--bg)]">
      <div className="text-center mb-10 px-4">
        <span className="text-[var(--muted)] font-semibold text-sm uppercase tracking-wide">
          Naše delo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mt-2">
          Poglejte, kako izgledajo naše strani v živo
        </h2>
      </div>

      <div className="w-full px-3 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 items-start">
          {reference.map((r) => (
            <div key={r.ime} className="flex flex-col gap-3 md:gap-5">
              <a
                href={r.url || undefined}
                target={r.url ? "_blank" : undefined}
                rel={r.url ? "noopener noreferrer" : undefined}
                className="group relative block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={r.slika}
                    alt={r.ime}
                    fill
                    className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/85 via-[#212529]/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#ced4da] text-xs font-semibold uppercase tracking-wide">
                    {r.kategorija}
                  </span>
                  <h3 className="text-white font-semibold text-lg mt-0.5">{r.ime}</h3>
                  <p className="text-[#dee2e6] text-sm mt-1 leading-snug">{r.opis}</p>
                  {r.url && (
                    <span className="inline-block mt-2 text-white text-sm font-medium">
                      Oglejte si stran →
                    </span>
                  )}
                </div>
              </a>

              {r.galerija.length > 0 && (
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                  {r.galerija.map((slika, i) => (
                    <div
                      key={slika}
                      className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                    >
                      <Image
                        src={slika}
                        alt={`${r.ime} — slika ${i + 2}`}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                        className="w-full h-auto block hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
