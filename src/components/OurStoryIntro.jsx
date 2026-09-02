"use client";

import React from "react";
import Image from "next/image";
import { Quote, Building2, ChevronDown } from "lucide-react";

export default function OurStoryIntro({ onExploreClick }) {
  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const founderEl = document.getElementById("founder-message");
      if (founderEl) {
        founderEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-[100dvh] lg:h-screen w-full bg-white text-zinc-900 flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-24 lg:pb-6 overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Main Grid: Story on Left & Image Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Story & Quote */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 shadow-sm">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-800" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                  Our Flagship Atelier
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl font-serif-luxury font-medium text-black leading-[1.12]">
                Where Tradition <br />
                <span className="italic text-amber-900 font-normal">
                  Meets Craftsmanship
                </span>
              </h1>
            </div>

            {/* Quote Card */}
            <div className="bg-zinc-50/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-sm border border-zinc-200/90">
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-amber-800 shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-serif-luxury italic text-zinc-800 leading-relaxed">
                    &ldquo;From 2014, Olene Canto has been a beacon of artisanal excellence. Starting as a vision to bring authentic European baking craft to discerning palates, we have grown into a multi-brand powerhouse spanning luxury dining, wholesale supply, and international exports—all rooted in our unrelenting devotion to slow fermentation, premium ingredients, and the timeless art of boulangerie.&rdquo;
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-amber-900">
                    — Olene Canto Heritage
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-50/70 p-3.5 sm:p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center space-x-3">
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-black">
                  12+
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  Years of Heritage
                </div>
              </div>
              <div className="bg-zinc-50/70 p-3.5 sm:p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center space-x-3">
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-black">
                  3
                </div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  Luxury Brands
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none h-[260px] sm:h-[340px] lg:h-[390px] xl:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100 group">
              <Image
                src="/canto-atelier-sketch.jpg"
                alt="Olene Canto Flagship Atelier Architecture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 text-white">
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.16em] uppercase drop-shadow-md">
                  KOZHIKODE BEACH FLAGSHIP & RAMANATTUKARA ATELIER
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div
        onClick={handleScrollDown}
        className="mt-2 relative z-10 flex flex-col items-center justify-center space-y-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-bold">
          DISCOVER OUR BAKING PHILOSOPHY
        </span>
        <ChevronDown className="w-4 h-4 text-zinc-500 animate-bounce" />
      </div>
    </section>
  );
}
