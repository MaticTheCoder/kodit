"use client";
import { useState } from "react";
import { faq } from "@/lib/site.config";

export default function FAQ() {
  const [odprt, setOdprt] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
            Pogosta vprašanja
          </h2>
          <p className="text-[var(--muted)]">
            Odgovori na najpogostejša vprašanja strank.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((f, i) => (
            <div
              key={i}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-[var(--fg)] hover:bg-[var(--surface-2)] transition-colors"
                onClick={() => setOdprt(odprt === i ? null : i)}
              >
                <span>{f.vprasanje}</span>
                <span className="text-[var(--muted-2)] shrink-0 text-xl leading-none">
                  {odprt === i ? "−" : "+"}
                </span>
              </button>
              {odprt === i && (
                <div className="px-6 pb-5 text-[var(--fg-2)] text-sm leading-relaxed border-t border-[var(--border)] pt-4">
                  {f.odgovor}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
