"use client";
import { useState } from "react";
import { faq } from "@/lib/site.config";

export default function FAQ() {
  const [odprt, setOdprt] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Pogosta vprašanja
          </h2>
          <p className="text-[#6c757d]">
            Odgovori na najpogostejša vprašanja strank.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((f, i) => (
            <div
              key={i}
              className="bg-[#f8f9fa] rounded-xl border border-[#dee2e6] overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-[#212529] hover:bg-[#e9ecef] transition-colors"
                onClick={() => setOdprt(odprt === i ? null : i)}
              >
                <span>{f.vprasanje}</span>
                <span className="text-[#adb5bd] shrink-0 text-xl leading-none">
                  {odprt === i ? "−" : "+"}
                </span>
              </button>
              {odprt === i && (
                <div className="px-6 pb-5 text-[#495057] text-sm leading-relaxed border-t border-[#dee2e6] pt-4">
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
