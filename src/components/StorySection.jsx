"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Flame, ArrowUpRight, Clock, Sparkles } from "lucide-react";

export default function StorySection({ story, onOpenInquiry }) {
  const stats = story?.stats || [
    { value: "48h", label: "Slow Wild Ferment Time" },
    { value: "27", label: "Micro-Layers of Hand Lamination" },
    { value: "100%", label: "AOP French Cultured Butter" },
    { value: "0%", label: "Artificial Additives or Preservatives" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white text-zinc-900 relative overflow-hidden border-t border-zinc-200">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Editorial Story & Visual Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          
          {/* Left Column: Heritage Story */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 lg:space-y-7">
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-flex items-center space-x-2 text-[9px] sm:text-xs uppercase tracking-[0.25em] text-amber-900 font-semibold">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Our Bakery Atelier Heritage</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif-luxury font-normal text-black leading-tight">
                Slow Ferments, <br />
                <span className="italic text-amber-900 font-normal">Cultured Normandy Butter</span>
              </h2>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              At <strong className="text-black font-semibold">Olene Canto</strong>, our morning ritual starts when the city is still asleep. We believe exceptional baking cannot be rushed — our sourdoughs steep over a 48-hour cold fermentation, and our viennoiserie dough rests on chilled marble to achieve crisp perfection.
            </p>

            <blockquote className="p-4 sm:p-6 bg-zinc-50 border-l-4 border-l-amber-900 rounded-xl sm:rounded-2xl italic text-zinc-800 font-serif-luxury text-lg sm:text-xl shadow-sm">
              &ldquo;True baking is an intimate dialogue between living wild yeasts, patient heat, and uncompromised craftsmanship.&rdquo;
            </blockquote>

            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              We exclusively utilize stoneground heritage grains, Normandy AOP butter with 84% butterfat, raw Brittany fleur de sel, and pure single-origin grand cru chocolate.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={onOpenInquiry}
                className="btn-dark-primary px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs tracking-wider flex items-center justify-center sm:justify-start space-x-2 shadow-md w-full sm:w-auto"
              >
                <span>BOOK AN ATELIER TASTING TABLE</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Bakery Imagery */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 relative">
            <div className="relative h-48 sm:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop"
                alt="Flour Dusting and Dough Lamination"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-[10px] sm:text-xs font-semibold text-white tracking-wider">
                Marble Lamination
              </span>
            </div>

            <div className="relative h-48 sm:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg border border-zinc-200 mt-4 sm:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=900&auto=format&fit=crop"
                alt="Crusty Sourdough Bread"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-[10px] sm:text-xs font-semibold text-white tracking-wider">
                Stone Hearth
              </span>
            </div>

            {/* Central Badge Overlay */}
            <div className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-2xl shadow-xl flex items-center space-x-2 sm:space-x-3 border border-zinc-800">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
              <div className="text-left">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Artisanal Guild</p>
                <p className="text-[10px] sm:text-xs font-bold text-white">Master French Boulangerie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bakery Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-zinc-50 rounded-3xl border border-zinc-200 mb-20 shadow-sm">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-black">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pillars of Baking Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="light-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury font-semibold text-black">
              Stone Hearth Physics
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Baking on refractory stone slabs distributes intense convective heat, expanding wild levain air pockets into an open honeycomb crumb.
            </p>
          </div>

          <div className="light-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury font-semibold text-black">
              Pure Provenance
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Every grain is sustainably cultivated by heritage millers. We say no to dough conditioners, commercial volume boosters, and artificial shortcuts.
            </p>
          </div>

          <div className="light-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif-luxury font-semibold text-black">
              The 6 AM Dawn Batch
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Our pastries are never frozen or re-heated. What you enjoy in the morning was sculpted, proved, and baked just moments before our doors opened.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
