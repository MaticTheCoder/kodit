"use client";
import { useState } from "react";

const links = [
  { label: "Zakaj Kodit", href: "#zakaj" },
  { label: "Paketi", href: "#paketi" },
  { label: "Kako poteka", href: "#postopek" },
  { label: "Reference", href: "#reference" },
  { label: "O meni", href: "#omeni" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#dee2e6] shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="font-bold text-xl text-[#212529]">
          {"<"}
          <span className="text-[#6c757d]">kodit</span>
          {"/>"}
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-[#6c757d]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#212529] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-block bg-[#212529] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#343a40] transition-colors"
        >
          Pridobite ponudbo
        </a>

        <button
          className="md:hidden p-2 text-[#343a40]"
          onClick={() => setOpen(!open)}
          aria-label="Meni"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#dee2e6] px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#343a40] hover:text-[#212529]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 bg-[#212529] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-[#343a40]"
            onClick={() => setOpen(false)}
          >
            Pridobite ponudbo
          </a>
        </div>
      )}
    </nav>
  );
}
