import { paketi } from "@/lib/site.config";

export default function Paketi() {
  return (
    <section id="paketi" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Paketi in cene
          </h2>
          <p className="text-[#6c757d] max-w-xl mx-auto">
            Jasne cene, brez skritih stroškov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {paketi.map((p) => (
            <div
              key={p.ime}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                p.priljubljen
                  ? "bg-[#212529] text-white border-[#212529] shadow-xl"
                  : "bg-white text-[#343a40] border-[#dee2e6]"
              }`}
            >
              {p.priljubljen && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#212529] text-xs font-bold px-4 py-1 rounded-full">
                  ⭐ Najbolj priljubljen
                </span>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${p.priljubljen ? "text-white" : "text-[#212529]"}`}
              >
                {p.ime}
              </h3>
              <p
                className={`text-sm mb-4 ${p.priljubljen ? "text-[#adb5bd]" : "text-[#6c757d]"}`}
              >
                {p.podnaslov}
              </p>
              <div
                className={`text-3xl font-bold mb-6 ${p.priljubljen ? "text-white" : "text-[#212529]"}`}
              >
                {p.cena}
              </div>

              <ul className="flex-1 space-y-2 mb-6">
                {p.lastnosti.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 ${p.priljubljen ? "text-[#adb5bd]" : "text-[#495057]"}`}>✓</span>
                    <span className={p.priljubljen ? "text-white/90" : "text-[#495057]"}>
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
                className={`text-xs mb-6 ${p.priljubljen ? "text-[#adb5bd]" : "text-[#adb5bd]"}`}
              >
                Rok: {p.rok}
              </div>

              <a
                href="#kontakt"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  p.priljubljen
                    ? "bg-white hover:bg-[#e9ecef] text-[#212529]"
                    : "bg-[#212529] hover:bg-[#343a40] text-white"
                }`}
              >
                Izberite paket
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#dee2e6] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-[#212529] mb-1">
              Vzdrževanje in gostovanje
            </div>
            <div className="text-[#6c757d] text-sm">
              Domena .si, gostovanje, SSL, e-pošta, varnostne kopije in manjši popravki
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-2xl font-bold text-[#212529]">15 €</span>
            <span className="text-[#adb5bd] text-sm">/mesec</span>
            <div className="text-[#adb5bd] text-xs">ali 150 €/leto</div>
          </div>
        </div>

        <p className="text-center text-[#6c757d] text-sm mt-6">
          Niste prepričani, kateri paket je pravi?{" "}
          <a href="#kontakt" className="text-[#212529] font-medium hover:underline">
            Pišite mi — svetujem brezplačno.
          </a>
        </p>
      </div>
    </section>
  );
}
