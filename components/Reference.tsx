import Image from "next/image";
import { reference } from "@/lib/site.config";

export default function Reference() {
  return (
    <section id="reference" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Zadnji projekti
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Primeri strani, ki sem jih naredil za stranke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reference.map((r) => (
            <a
              key={r.ime}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={r.slika}
                  alt={r.ime}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-[#f97316] font-semibold uppercase tracking-wide">
                  {r.kategorija}
                </span>
                <h3 className="font-semibold text-[#1e3a5f] text-lg mt-1 mb-1">
                  {r.ime}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.opis}</p>
                <div className="mt-3 text-sm text-[#f97316] font-medium group-hover:underline">
                  Oglejte si stran →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
