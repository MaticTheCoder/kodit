import { paketi, vzdrzevanje } from "@/lib/site.config";
import { IconStar, IconCheck, IconChevronDown } from "./icons";

export default function Paketi() {
  return (
    <section id="paketi" className="min-h-screen pt-20 pb-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-3">
            Paketi in cene
          </h2>
          <p className="text-[#6c757d] max-w-xl mx-auto">
            Jasne cene, brez skritih stroškov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {paketi.map((p) => (
            <div
              key={p.ime}
              className={`relative rounded-2xl p-6 flex flex-col bg-white ${
                p.priljubljen
                  ? "border-2 border-[#212529] shadow-sm"
                  : "border border-[#dee2e6]"
              }`}
            >
              {p.priljubljen && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#212529] text-white text-xs font-bold px-4 py-1 rounded-full inline-flex items-center gap-1.5">
                  <IconStar className="w-3 h-3" />
                  Najbolj priljubljen
                </span>
              )}

              <h3 className="text-xl font-bold mb-1 text-[#212529]">{p.ime}</h3>
              <p className="text-sm mb-4 text-[#6c757d]">{p.podnaslov}</p>
              <div className="text-3xl font-bold mb-6 text-[#212529]">{p.cena}</div>

              <ul className="flex-1 space-y-2 mb-6">
                {p.lastnosti.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#212529]" />
                    <span className="text-[#495057]">{l}</span>
                  </li>
                ))}
                {p.brez.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[#ced4da]">
                    <span className="mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs mb-6 text-[#adb5bd]">Rok: {p.rok}</div>

              <a
                href="#kontakt"
                className={`text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  p.priljubljen
                    ? "border border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white"
                    : "border border-[#dee2e6] text-[#343a40] hover:border-[#adb5bd] hover:bg-[#f8f9fa]"
                }`}
              >
                Izberite paket
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-2 text-center">
          <h3 className="text-2xl font-bold text-[#212529]">
            Vzdrževanje in gostovanje
          </h3>
          <p className="text-[#6c757d] text-sm mt-2 max-w-xl mx-auto">
            Po izdelavi za vse poskrbim jaz — vi se ne ukvarjate z ničemer tehničnim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vzdrzevanje.map((v) => (
            <div
              key={v.ime}
              className={`relative rounded-2xl p-6 flex flex-col bg-white ${
                v.priljubljen
                  ? "border-2 border-[#212529] shadow-sm"
                  : "border border-[#dee2e6]"
              }`}
            >
              {v.priljubljen && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#212529] text-white text-xs font-bold px-4 py-1 rounded-full inline-flex items-center gap-1.5">
                  <IconStar className="w-3 h-3" />
                  Za rast posla
                </span>
              )}

              <h4 className="text-lg font-bold text-[#212529]">{v.ime}</h4>
              <div className="mt-2 mb-4">
                <span className="text-3xl font-bold text-[#212529]">{v.cena}</span>
                <span className="text-[#6c757d] text-sm">{v.obdobje}</span>
                <div className="text-[#adb5bd] text-xs mt-0.5">{v.letno}</div>
              </div>

              <ul className="flex-1 space-y-2">
                {v.lastnosti.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#212529]" />
                    <span className="text-[#495057]">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[#6c757d] text-sm mt-4">
          Niste prepričani, kateri paket je pravi?{" "}
          <a href="#kontakt" className="text-[#212529] font-medium hover:underline">
            Pišite mi — svetujem brezplačno.
          </a>
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="#reference"
            aria-label="Poglejte naše projekte"
            className="group flex flex-col items-center gap-1 text-[#6c757d] hover:text-[#212529] transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              Poglejte naše delo
            </span>
            <IconChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
