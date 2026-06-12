"use client";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "./icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("tema", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Preklopi na svetli način" : "Preklopi na temni način"}
      className={`p-2 rounded-lg text-[var(--fg)] hover:bg-[var(--surface-2)] transition-colors ${className}`}
    >
      {dark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
    </button>
  );
}
