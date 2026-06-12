import { siteConfig } from "@/lib/site.config";

const sekcije = [
  { label: "Zakaj Kodit", href: "#zakaj" },
  { label: "Paketi", href: "#paketi" },
  { label: "Kako poteka", href: "#postopek" },
  { label: "Reference", href: "#reference" },
  { label: "O meni", href: "#omeni" },
  { label: "Kontakt", href: "#kontakt" },
];

const pravne = [
  { label: "Politika zasebnosti", href: "/zasebnost" },
  { label: "Pogoji poslovanja", href: "/pogoji" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e9ecef] text-[#6c757d] py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-bold text-xl text-[#212529] mb-3">
              {"<"}
              <span className="text-[#6c757d]">kodit</span>
              {"/>"}
            </div>
            <p className="text-sm leading-relaxed">
              Spletne strani na ključ za slovenska podjetja. Vse na enem mestu,
              brez skrbi.
            </p>
          </div>

          <div>
            <div className="font-semibold text-[#212529] mb-3 text-sm">Sekcije</div>
            <ul className="space-y-2">
              {sekcije.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm hover:text-[#212529] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[#212529] mb-3 text-sm">Kontakt</div>
            <div className="space-y-2 text-sm">
              <div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#212529] transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div>{siteConfig.location}</div>
            </div>
            <div className="mt-4">
              <div className="font-semibold text-[#212529] mb-3 text-sm">Pravno</div>
              <ul className="space-y-2">
                {pravne.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="text-sm hover:text-[#212529] transition-colors">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e9ecef] pt-6 text-sm text-center">
          © Kodit 2026. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
}
