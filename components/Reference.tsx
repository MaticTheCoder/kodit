import Image from "next/image";
import { reference } from "@/lib/site.config";

export default function Reference() {
  return (
    <section id="reference" className="pb-24 bg-white">
      <div className="text-center mb-10 px-4">
        <span className="text-[#6c757d] font-semibold text-sm uppercase tracking-wide">
          Naše delo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mt-2">
          Poglejte, kako izgledajo naše strani v živo
        </h2>
      </div>

      <div className="w-full px-3 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {reference.map((r) => (
            <a
              key={r.ime}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-[#e9ecef] bg-[#f8f9fa]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={r.slika}
                  alt={r.ime}
                  fill
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 via-[#212529]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[#ced4da] text-xs font-semibold uppercase tracking-wide">
                  {r.kategorija}
                </span>
                <h3 className="text-white font-semibold text-lg mt-0.5">{r.ime}</h3>
                <p className="text-[#dee2e6] text-sm mt-1 leading-snug">{r.opis}</p>
                <span className="inline-block mt-2 text-white text-sm font-medium">
                  Oglejte si stran →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
