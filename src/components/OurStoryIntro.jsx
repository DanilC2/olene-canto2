"use client";

import React from "react";
import Image from "next/image";
import { Compass } from "lucide-react";

export default function OurStoryIntro() {
  return (
    <section className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen w-full bg-black text-white flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-20 lg:pb-6 overflow-hidden border-b border-zinc-800">
      {/* Subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Main Grid: Vision, Story & Stat on Left, Architectural Sketch Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Vision Statement, Supporting Story & 10+ Years Stat */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 lg:space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm w-fit backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                Our Vision &amp; Heritage
              </span>
            </div>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem] font-medium text-white leading-[1.2] tracking-tight">
              Wholesome food, <span className="italic text-amber-400">thoughtfully crafted</span>, built on lasting partnerships.
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-zinc-300/90 leading-relaxed font-light max-w-xl">
              From our roots in Northern Kerala, we continue to grow through quality, consistency and meaningful collaborations. Our products are built to reach customers through trusted retail and distribution networks across Kerala and beyond.
            </p>

            {/* 10+ Years of Experience Highlight */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-4 bg-zinc-900/90 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-zinc-800 shadow-xl backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                  10+
                </div>
                <div className="border-l border-zinc-700 pl-4">
                  <div className="text-xs sm:text-sm font-bold text-zinc-100 uppercase tracking-wider">
                    Years of Experience
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                    <span className="font-semibold text-amber-400 uppercase tracking-wider">QUALITY</span> • Driven by uncompromising standards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Sketch Image */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-none h-[300px] sm:h-[380px] lg:h-[440px] xl:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <Image
                src="/canto-atelier-sketch.jpg"
                alt="Olene Canto Flagship Atelier Architecture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">Flagship Atelier</span>
                <p className="font-serif-luxury text-base sm:text-lg font-medium mt-0.5 text-white">Olene Canto Architecture &amp; Craftsmanship</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
