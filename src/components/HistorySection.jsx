"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Maximize2,
  X,
  ShieldCheck,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const MILESTONES = [
  {
    year: "2014",
    title: "From a Shop & Restaurant to a Growing Food Journey",
    description:
      "Olene Canto began its journey in 2014 with a shop and restaurant, creating a strong foundation through a passion for good food, quality ingredients and customer satisfaction. What started as a customer-focused food business became the first step toward building a larger food enterprise.",
    image: "/history3.jpeg",
    imageCaption: "2014: From a shop and restaurant to a growing food journey",
    badge: "The Beginning",
  },
  {
    year: "2020",
    title: "Expanding from Retail to Production",
    description:
      "In 2020, Olene Canto expanded into bakery production and wholesale, moving beyond direct customer service to supplying products to a wider network of businesses and customers. This marked an important step toward developing stronger production capabilities and a broader distribution network.",
    image: "/whieloaf2.png",
    imageCaption: "2020: Expanding from retail to dedicated bakery production and wholesale",
    badge: "Bakery & Wholesale",
  },
  {
    year: "2022",
    title: "Taking Our Products Beyond Borders",
    description:
      "In 2022, Olene Canto entered the food export market, opening opportunities to reach customers beyond its home market. This expansion strengthened the company's focus on product quality, packaging, consistency and reliable supply while introducing its food products to new markets.",
    image: "/olene-canto-building.jpg",
    imageCaption: "2022: Taking our products beyond borders into international food export markets",
    badge: "Food Exports",
  },
  {
    year: "Today",
    title: "Building a Scalable Food Production Company",
    description:
      "Today, Olene Canto is moving toward a production-focused food business, with greater emphasis on manufacturing capabilities, product development, quality standards and distribution. The focus is on creating products that can reach more customers while building long-term relationships with retailers, wholesalers and business partners.",
    closingQuote:
      "From a single shop and restaurant to a growing food production business — our journey continues with the same commitment to quality, consistency and good food.",
    image: "/today-selection-showcase.jpg",
    imageCaption: "Today: Building a scalable, production-focused food company",
    badge: "Production Focus",
  },
];

const CORE_VALUES = [
  {
    title: "Faith & Trust",
    quote: "We have faith in the virtue of universe and we trust virtuous people.",
    desc: "Building authentic, lifelong bonds with our patrons, partners, and team through transparent, ethical practices.",
    icon: ShieldCheck,
  },
  {
    title: "Competency",
    quote: "Being competent at what we do is the way to excellence.",
    desc: "Mastering our craft with an R&D system where professional master bakers work with the finest local raw materials.",
    icon: Award,
  },
  {
    title: "Discipline",
    quote: "Being systematic and disciplined is key to success.",
    desc: "Practicing rigorous hygiene, punctuality, and unwavering quality control in both personal and professional standards.",
    icon: Target,
  },
  {
    title: "Growth",
    quote: "We aspire to grow and bloom.",
    desc: "Taking steady, principled steps toward expansion and success each day without compromising our core values.",
    icon: TrendingUp,
  },
];

export default function HistorySection() {
  const [activeYear, setActiveYear] = useState("Today");
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentMilestone =
    MILESTONES.find((m) => m.year === activeYear) || MILESTONES[MILESTONES.length - 1];

  return (
    <section
      id="history"
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-white text-zinc-900 relative border-b border-zinc-200"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. THE CHRONICLES OF OLENE CANTO & 12-YEAR TIMELINE                       */}
        {/* ========================================================================= */}
        <div className="space-y-12 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-black leading-tight">
              A Journey Built on <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-900">Taste, Trust &amp; Growth</span>
            </h2>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-800/40 to-transparent mx-auto my-2" />

            <p className="text-zinc-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              From our humble beginning in 2014 to Malabar’s beloved People’s Bakery, statewide wholesale with White Loaf, and global exports — discovered through an uncompromising commitment to healthy food culture.
            </p>
          </div>

          {/* Interactive Year Ribbon Bar */}
          <div
            className="overflow-x-auto no-scrollbar pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 w-full min-w-[560px] p-2 bg-zinc-100 rounded-2xl border border-zinc-200">
              {MILESTONES.map((m) => {
                const isSelected = activeYear === m.year;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    className={`flex-1 py-3 px-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-1 ${
                      isSelected
                        ? "bg-black text-white font-bold shadow-lg scale-[1.02]"
                        : "text-zinc-600 hover:text-black hover:bg-zinc-200/80 font-medium"
                    }`}
                  >
                    <span className="text-sm sm:text-base font-bold tracking-wider">{m.year}</span>
                    <span
                      className={`text-[10px] sm:text-[11px] uppercase tracking-wider text-center whitespace-nowrap ${
                        isSelected ? "text-amber-300 font-semibold" : "text-zinc-500"
                      }`}
                    >
                      {m.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Spotlight Presentation for Selected Year */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-2">
            
            {/* Visual Photo for the Year */}
            <div
              className="lg:col-span-6 relative h-80 sm:h-[400px] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-md cursor-pointer group"
              onClick={() =>
                setLightboxImage({
                  url: currentMilestone.image,
                  caption: currentMilestone.imageCaption,
                })
              }
            >
              <Image
                src={currentMilestone.image}
                alt={currentMilestone.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold tracking-wider flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentMilestone.year} MILESTONE</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <p className="text-xs sm:text-sm font-light text-zinc-200 max-w-sm line-clamp-2">
                  {currentMilestone.imageCaption}
                </p>
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition-colors text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Narrative & Milestone Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-5xl font-serif-luxury font-bold text-amber-900">
                    {currentMilestone.year}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {currentMilestone.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-black leading-snug">
                  {currentMilestone.title}
                </h3>
                {currentMilestone.subtitle && (
                  <p className="text-xs sm:text-sm font-semibold text-amber-900 tracking-wider uppercase">
                    {currentMilestone.subtitle}
                  </p>
                )}
              </div>

              <p className="text-zinc-700 text-sm sm:text-base font-light leading-relaxed">
                {currentMilestone.description}
              </p>

              {currentMilestone.closingQuote && (
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-xs sm:text-sm font-medium italic leading-relaxed">
                  &ldquo;{currentMilestone.closingQuote}&rdquo;
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
                <button
                  disabled={MILESTONES.findIndex((m) => m.year === activeYear) === 0}
                  onClick={() => {
                    const idx = MILESTONES.findIndex((m) => m.year === activeYear);
                    if (idx > 0) setActiveYear(MILESTONES[idx - 1].year);
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← PREVIOUS ERA
                </button>
                <span className="text-xs text-zinc-500 font-medium">
                  {MILESTONES.findIndex((m) => m.year === activeYear) + 1} of {MILESTONES.length} Eras
                </span>
                <button
                  disabled={
                    MILESTONES.findIndex((m) => m.year === activeYear) ===
                    MILESTONES.length - 1
                  }
                  onClick={() => {
                    const idx = MILESTONES.findIndex((m) => m.year === activeYear);
                    if (idx < MILESTONES.length - 1) setActiveYear(MILESTONES[idx + 1].year);
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-black text-white hover:bg-zinc-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  NEXT ERA →
                </button>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* AUTHENTIC COMPANY ETHOS CALLOUT                                           */}
          {/* ========================================================================= */}
          

          {/* ========================================================================= */}
          {/* OUR CORE VALUES (FROM COMPANY CHARTER)                                    */}
          {/* ========================================================================= */}
          <div className="space-y-6 pt-6">
            <div className="text-center space-y-2">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-amber-900">
                Foundational Principles
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-black">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {CORE_VALUES.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-amber-700/30 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif-luxury text-lg font-bold text-black pt-1">
                        {val.title}
                      </h4>
                      <p className="font-serif-luxury italic text-xs sm:text-sm text-amber-950 font-medium">
                        &ldquo;{val.quote}&rdquo;
                      </p>
                    </div>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed pt-2 border-t border-zinc-200">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </ScrollReveal>

      {/* Lightbox / Fullscreen Image Preview Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] h-full flex flex-col justify-between p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-white pb-3 border-b border-white/20">
              <p className="text-sm font-serif-luxury italic text-zinc-200">
                {lightboxImage.caption}
              </p>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 my-4 rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              <Image
                src={lightboxImage.url}
                alt="Enlarged Photo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-center text-xs text-zinc-400">
              Click anywhere outside or close to return
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
