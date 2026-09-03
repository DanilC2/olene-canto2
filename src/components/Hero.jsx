"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero({ onExploreClick, onStoryClick }) {
  return (
    <section className="relative min-h-screen w-full bg-zinc-950 text-white pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-between overflow-hidden">
      {/* Background Video — Fully Responsive with Complete Visibility */}
      <video
        src="/erasio_Staff_baking_and_packaging_cake_202608271633.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Light, Soft Directional Scrim — Only on Left Behind Text, keeping the Video Crisp & Visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 pointer-events-none" />

      {/* Main Grid: Copy on Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Brand Typography & Action Calls with High-Legibility Shadows */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7">
            
            {/* Headline in Pure White & Golden Amber with Shadow */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] leading-[1.08] font-normal tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]">
              <span className="block font-serif-luxury font-medium text-white">
                For a Healthier
              </span>
              <span className="block font-serif-luxury italic text-amber-300 font-normal mt-1 sm:mt-2">
                Slice Of Your Life
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/95 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Premium baked goods crafted with quality ingredients, authentic recipes, and a passion for better taste.
            </p>

            {/* Brand Quote & Olene Foods Insignia */}
            <div className="pt-1 space-y-2.5">
              <p className="text-xs sm:text-sm font-serif-luxury italic text-amber-300 font-medium tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                &ldquo;A Brand of Olene Foods&rdquo;
              </p>
              <div className="inline-block rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-black/60 backdrop-blur-md p-1 sm:p-1.5 transition-transform hover:scale-[1.02]">
                <Image
                  src="/olene-foods.png"
                  alt="Olene Foods - A Brand of Olene Foods"
                  width={408}
                  height={112}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain rounded"
                  priority
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:bg-zinc-100 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 group shadow-2xl transition-all active:scale-95 hover:shadow-white/20"
              >
                <span>EXPLORE OUR CATEGORIES</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onStoryClick}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-black/40 border border-white/35 text-white hover:bg-white hover:text-black rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm tracking-wider flex items-center justify-center space-x-2 backdrop-blur-md transition-all active:scale-95"
              >
                <span>OUR STORY</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator transitioning to the next section */}
      <div
        onClick={onExploreClick}
        className="mt-6 sm:mt-8 relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-1.5 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
      >
        <span className="text-[8px] sm:text-[10px] tracking-[0.3em] uppercase text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          EXPLORE OUR JOURNEY
        </span>
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/50 flex items-center justify-center animate-bounce bg-black/35 backdrop-blur-md text-white shadow-md">
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>

    </section>
  );
}
