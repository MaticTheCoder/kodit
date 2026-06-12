import Image from "next/image";
import { siteConfig } from "@/lib/site.config";

const sekcije = [
  { label: "Zakaj Kodit", href: "#zakaj" },
  { label: "Paketi in cene", href: "#paketi" },
  { label: "Reference", href: "#reference" },
  { label: "O meni", href: "#omeni" },
  { label: "Pogosta vprašanja", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const pravne = [
  { label: "Politika zasebnosti", href: "/zasebnost" },
  { label: "Pogoji poslovanja", href: "/pogoji" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] text-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-3" aria-label="Kodit">
              <Image
                src="/kodit_logo.png"
                alt="Kodit logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-[var(--fg)] -ml-0.5 relative top-[3px]">odit</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Spletne strani na ključ za slovenska podjetja. Vse na enem mestu,
              brez skrbi.
            </p>
            <a
              href="#kontakt"
              className="inline-block mt-4 border border-[var(--fg)] text-[var(--fg)] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#212529] hover:text-white transition-colors"
            >
              Pridobite ponudbo
            </a>
          </div>

          <div>
            <div className="font-semibold text-[var(--fg)] mb-3 text-sm">Vsebina</div>
            <ul className="space-y-2">
              {sekcije.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm hover:text-[var(--fg)] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[var(--fg)] mb-3 text-sm">Pravno</div>
            <ul className="space-y-2">
              {pravne.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-sm hover:text-[var(--fg)] transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[var(--fg)] mb-3 text-sm">Kontakt</div>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block hover:text-[var(--fg)] transition-colors"
              >
                {siteConfig.email}
              </a>
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block hover:text-[var(--fg)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              )}
              <p className="leading-relaxed">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-sm">
          <span>© Kodit 2026. Vse pravice pridržane.</span>
          <span className="text-[var(--muted-2)]">Maribor · Slovenija</span>
        </div>
      </div>
    </footer>
  );
}
