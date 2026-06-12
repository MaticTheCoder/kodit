"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Zakaj Kodit", href: "#zakaj" },
  { label: "Paketi", href: "#paketi" },
  { label: "Reference", href: "#reference" },
  { label: "O meni", href: "#omeni" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // bel postane, ko zapustimo hero (hero je visok cel ekran)
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[var(--bg)] backdrop-blur border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="/" className="font-bold text-xl text-[var(--fg)]">
          {"<"}
          <span className="text-[var(--muted)]">kodit</span>
          {"/>"}
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-[var(--muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--fg)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#kontakt"
            className="border border-[var(--fg)] text-[var(--fg)] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#212529] hover:text-white transition-colors"
          >
            Pridobite ponudbo
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-[var(--fg)]"
            onClick={() => setOpen(!open)}
            aria-label="Meni"
          >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] backdrop-blur border-t border-[var(--border)] px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--fg)] hover:text-[var(--fg)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-2 border border-[var(--fg)] text-[var(--fg)] text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-[#212529] hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Pridobite ponudbo
          </a>
        </div>
      )}
    </nav>
  );
}
