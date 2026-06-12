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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="font-bold text-xl text-[#1e3a5f]">
          {"<"}
          <span className="text-[#f97316]">kodit</span>
          {"/>"}
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#1e3a5f] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-block bg-[#f97316] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#ea6c0a] transition-colors"
        >
          Pridobite ponudbo
        </a>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Meni"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-[#1e3a5f]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 bg-[#f97316] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-[#ea6c0a]"
            onClick={() => setOpen(false)}
          >
            Pridobite ponudbo
          </a>
        </div>
      )}
    </nav>
  );
}
