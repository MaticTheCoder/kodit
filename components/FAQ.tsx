"use client";
import { useState } from "react";
import { faq } from "@/lib/site.config";

export default function FAQ() {
  const [odprt, setOdprt] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Pogosta vprašanja
          </h2>
          <p className="text-gray-500">
            Odgovori na najpogostejša vprašanja strank.
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-[#1e3a5f] hover:bg-gray-50 transition-colors"
                onClick={() => setOdprt(odprt === i ? null : i)}
              >
                <span>{f.vprasanje}</span>
                <span className="text-gray-400 shrink-0 text-xl leading-none">
                  {odprt === i ? "−" : "+"}
                </span>
              </button>
              {odprt === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
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
