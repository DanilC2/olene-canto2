"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function FounderMessageSection() {
  return (
    <section
      id="founder-message"
      className="py-20 sm:py-24 lg:py-32 bg-[#09090b] text-white relative overflow-hidden border-b border-zinc-800"
    >
      {/* Subtle Warm Luxury Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#d9b578]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Founder Image & Managing Director's Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-[520px] lg:max-w-[620px]">
              <div className="relative h-[470px] sm:h-[540px] lg:h-[680px] w-full overflow-hidden bg-zinc-950">
                <Image
                  src="/ashik-kv.jpg"
                  alt="Ashik K V - Managing Director of Olene Canto"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Managing Director's Message */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 order-2 lg:order-2 lg:pt-10">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-[#d9b578]">
                <Quote className="w-5 h-5 text-[#d9b578]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#d9b578]">
                  MANAGING DIRECTOR&apos;S MESSAGE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif-luxury font-medium text-white leading-[1.18]">
                A Collective Devotion to <br className="hidden sm:block" />
                <span className="italic text-[#d9b578] font-normal">
                  Hospitality & Quality
                </span>
              </h2>
            </div>

            <div className="relative">
              <Quote className="w-14 h-14 text-[#d9b578]/15 absolute -top-2 right-0 pointer-events-none" />
              <blockquote>
                <p className="text-lg sm:text-xl lg:text-2xl font-serif-luxury italic text-[#f4efe6] leading-relaxed sm:leading-[1.7]">
                  &ldquo;Olene Canto is all about the combined efforts of chefs, cooks, servers, farmers, and all other stakeholders and I see that partnership extending to our guests by providing the highest quality food and service in a warm and welcoming environment.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-base font-bold text-white tracking-wide font-sans-clean">
                Ashik K V
              </p>
              <p className="text-xs text-[#d9b578] font-semibold tracking-wider uppercase">
                Managing Director, Olene Foods Pvt. Ltd.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
