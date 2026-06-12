import { paketi } from "@/lib/site.config";

export default function Paketi() {
  return (
    <section id="paketi" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Paketi in cene
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Jasne cene, brez skritih stroškov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {paketi.map((p) => (
            <div
              key={p.ime}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                p.priljubljen
                  ? "bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-xl"
                  : "bg-white text-gray-800 border-gray-200"
              }`}
            >
              {p.priljubljen && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-xs font-bold px-4 py-1 rounded-full">
                  ⭐ Najbolj priljubljen
                </span>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${p.priljubljen ? "text-white" : "text-[#1e3a5f]"}`}
              >
                {p.ime}
              </h3>
              <p
                className={`text-sm mb-4 ${p.priljubljen ? "text-white/70" : "text-gray-500"}`}
              >
                {p.podnaslov}
              </p>
              <div
                className={`text-3xl font-bold mb-6 ${p.priljubljen ? "text-[#f97316]" : "text-[#1e3a5f]"}`}
              >
                {p.cena}
              </div>

              <ul className="flex-1 space-y-2 mb-6">
                {p.lastnosti.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span className={p.priljubljen ? "text-white/90" : "text-gray-600"}>
                      {l}
                    </span>
                  </li>
                ))}
                {p.brez.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm opacity-40">
                    <span className="mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`text-xs mb-6 ${p.priljubljen ? "text-white/60" : "text-gray-400"}`}
              >
                Rok: {p.rok}
              </div>

              <a
                href="#kontakt"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  p.priljubljen
                    ? "bg-[#f97316] hover:bg-[#ea6c0a] text-white"
                    : "bg-[#1e3a5f] hover:bg-[#2a5280] text-white"
                }`}
              >
                Izberite paket
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-[#1e3a5f] mb-1">
              Vzdrževanje in gostovanje
            </div>
            <div className="text-gray-500 text-sm">
              Domena .si, gostovanje, SSL, e-pošta, varnostne kopije in manjši popravki
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-bold text-[#1e3a5f]">15 €</span>
            <span className="text-gray-400 text-sm">/mesec</span>
            <div className="text-gray-400 text-xs">ali 150 €/leto</div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Niste prepričani, kateri paket je pravi?{" "}
          <a href="#kontakt" className="text-[#f97316] font-medium hover:underline">
            Pišite mi — svetujem brezplačno.
          </a>
        </p>
      </div>
    </section>
  );
}
