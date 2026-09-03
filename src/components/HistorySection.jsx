"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const MILESTONES = [
  {
    year: "2014",
    title: "Entered into Food Industry",
    subtitle: "The Inception of Culinary Craftsmanship",
    description:
      "Marked our official entry into the culinary and food industry, embarking on a mission to bring authentic European baking craft, sourdough fermentation, and premium quality standards to our patrons.",
    achievements: [
      "Inaugural operations in food & bakery production",
      "Strict zero-additive, pure ingredient sourcing protocols",
      "Foundation of slow-ferment recipes and living levain cultivation",
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "2014: Artisan sourdough dough formulation and poolish trials",
    badge: "Foundation",
  },
  {
    year: "2016",
    title: "Oges Group Acquisition & Premium Bakery Overhaul",
    subtitle: "Founded in 1970 — Multi-Decade Pedigree",
    description:
      "Founded in 1970, the renowned Oges Group took over operations with a singular vision: to establish and scale an ultra-premium bakery brand with world-class production infrastructure and temperature-controlled lamination.",
    achievements: [
      "Backed by Oges Group's multi-decade manufacturing pedigree (Est. 1970)",
      "Import of precision French dough laminators & refractory stone ovens",
      "Establishment of industrial consistency with artisan handcraft",
    ],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "2016: Installation of 27-layer European pastry lamination lines",
    badge: "Strategic Takeover",
  },
  {
    year: "2017",
    title: "Re-branded to Olene Canto & Incorporated as Olene Foods Pvt. Ltd.",
    subtitle: "Birth of the Luxury Brand Identity",
    description:
      "Officially re-branded as 'Olene Canto' and incorporated the company as Olene Foods Pvt. Ltd., laying the permanent corporate groundwork for luxury culinary identity, proprietary recipes, and retail expansion.",
    achievements: [
      "Officially incorporated as Olene Foods Pvt. Ltd.",
      "Launch of the distinctive Olene Canto luxury brand identity & insignia",
      "Launch of signature viennoiserie, entremets, and bespoke gateaux",
    ],
    image: "/brand-history-card.png",
    imageCaption: "2017: Official incorporation & brand registration archive",
    badge: "Olene Foods Pvt. Ltd.",
  },
  {
    year: "2020",
    title: "Bakery Pivot & 'White Loaf' Wholesale Brand Launch",
    subtitle: "100% Specialized Bakery Manufacturing",
    description:
      "After the lockdown, restaurant operations were strategically put on hold to channel 100% focus into specialized bakery manufacturing. Successfully launched the dedicated brand 'White Loaf' to enter and capture the commercial wholesale market.",
    achievements: [
      "100% production pivot to high-volume artisan & daily sliced breads",
      "Creation and launch of 'White Loaf' commercial wholesale brand",
      "Rapid penetration into regional FMCG distribution and supermarket racks",
    ],
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "2020: High-capacity manufacturing line for White Loaf wholesale",
    badge: "White Loaf Launch",
  },
  {
    year: "2021",
    title: "Associated with Top Brand Companies in Kerala",
    subtitle: "Statewide Strategic Supply Alliances",
    description:
      "Formed strong distribution and manufacturing partnerships with top brand companies across Kerala, establishing Olene Foods as the preferred premier bakery partner for leading supermarket chains and retail leaders.",
    achievements: [
      "Supply partnerships signed with leading retail chains in Kerala",
      "Over 500+ daily retail touchpoints established statewide",
      "Certified for highest standards of hygiene and quality consistency",
    ],
    image: "https://images.unsplash.com/photo-1579697096985-41fe1430e5df?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "2021: Statewide retail network across premier shopping destinations",
    badge: "Market Leadership",
  },
  {
    year: "2022",
    title: "Reliance India Agreement, Beach Branches & 'Du Four' Export",
    subtitle: "National Agreement & International Export Launch",
    description:
      "A milestone year marked by a landmark agreement with Reliance India Pvt. Ltd. Expanded the retail footprint with two iconic flagship branches at Kozhikode Beach and Ramanattukara. Launched the international export brand 'Du Four' to promote bakery exports globally.",
    achievements: [
      "Landmark commercial agreement signed with Reliance India Pvt. Ltd.",
      "Opened flagship branches at Kozhikode Beach and Ramanattukara",
      "Launched 'Du Four' brand dedicated to international bakery exports",
    ],
    image: "/olene-canto-building.jpg",
    imageCaption: "2022: Flagship seaside outlet at Kozhikode Beach & Ramanattukara",
    badge: "Reliance Agreement & Du Four",
  },
  {
    year: "2024",
    title: "Du Four Global Expansion & MAP Packaging Facility",
    subtitle: "Expanding Freshness Across Borders",
    description:
      "Scaled the 'Du Four' export brand across the GCC and Southeast Asian markets. Deployed automated MAP (Modified Atmosphere Packaging) lines to guarantee peak aroma and freshness across international shipments without artificial preservatives.",
    achievements: [
      "Du Four exported to 6+ international markets across GCC & Asia",
      "Automated nitrogen-flushed packaging maintaining 100% natural shelf-life",
      "Doubled daily batch capacity for domestic and export commitments",
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "2024: Automated export packaging and quality assurance hub",
    badge: "Global Reach",
  },
  {
    year: "2026",
    title: "The Modern Era: Multi-Brand Haute Boulangerie",
    subtitle: "Olene Canto • White Loaf • Du Four",
    description:
      "Today in 2026, Olene Foods stands as a premier culinary powerhouse. Operating luxury dining salons, statewide wholesale supply under White Loaf, and international exports under Du Four, rooted in unrelenting artisan devotion.",
    achievements: [
      "Unified multi-brand ecosystem spanning luxury, wholesale & export",
      "1,200+ daily retail touchpoints and iconic coastal salons",
      "Zero compromise on 100% Normandy AOP butter and slow wild levain",
    ],
    image: "/olene-canto-building.jpg",
    imageCaption: "2026: The iconic Olene Canto flagship atelier and modern salon",
    badge: "Present Era (2026)",
  },
];

export default function HistorySection() {
  const [activeYear, setActiveYear] = useState("2026");
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentMilestone =
    MILESTONES.find((m) => m.year === activeYear) || MILESTONES[MILESTONES.length - 1];

  return (
    <section
      id="history"
      className="pt-24 pb-0 bg-white text-zinc-900 relative border-b border-zinc-200"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. THE CHRONICLES OF OLENE CANTO & 12-YEAR TIMELINE                       */}
        {/* ========================================================================= */}
        <div className="space-y-12 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-black leading-tight">
              A Decade Heritage of <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-900">Craft & Ambition</span>
            </h2>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-800/40 to-transparent mx-auto my-2" />

            <p className="text-zinc-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Discover the journey behind Olene Canto—from our beginnings in 2014 to the milestones that continue to shape our story today.</p>
          </div>

          {/* Interactive Year Ribbon Bar */}
          <div
            className="overflow-x-auto no-scrollbar pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="inline-flex items-center space-x-2 min-w-full w-max p-2 bg-zinc-100 rounded-2xl border border-zinc-200">
              {MILESTONES.map((m) => {
                const isSelected = activeYear === m.year;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    className={`shrink-0 sm:flex-1 min-w-[120px] py-3 px-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-0.5 ${
                      isSelected
                        ? "bg-black text-white font-bold shadow-lg scale-[1.02]"
                        : "text-zinc-600 hover:text-black hover:bg-zinc-200/80 font-medium"
                    }`}
                  >
                    <span className="text-sm font-bold tracking-wider">{m.year}</span>
                    <span
                      className={`text-[10px] uppercase truncate max-w-[110px] ${
                        isSelected ? "text-amber-300" : "text-zinc-500"
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
                <p className="text-xs sm:text-sm font-semibold text-amber-900 tracking-wider uppercase">
                  {currentMilestone.subtitle}
                </p>
              </div>

              <p className="text-zinc-700 text-sm sm:text-base font-light leading-relaxed">
                {currentMilestone.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-zinc-200">
                <p className="text-xs uppercase tracking-wider font-bold text-zinc-500">
                  Key Achievements in this Era:
                </p>
                <div className="space-y-2">
                  {currentMilestone.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-800 font-normal leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4">
                <button
                  disabled={MILESTONES.findIndex((m) => m.year === activeYear) === 0}
                  onClick={() => {
                    const idx = MILESTONES.findIndex((m) => m.year === activeYear);
                    if (idx > 0) setActiveYear(MILESTONES[idx - 1].year);
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← PREVIOUS YEAR
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
                  NEXT YEAR →
                </button>
              </div>

            </div>

          </div>

        </div>

      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 2. HERITAGE & PRODUCT BANNER                                              */}
      {/* ========================================================================= */}
      <ScrollReveal className="w-full bg-white flex items-center justify-center py-6 sm:py-10">
        <div className="relative w-full max-w-[560px] sm:max-w-[660px] lg:max-w-[740px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-black">
          <Image
            src="/heritage-banner.jpg"
            alt="Olene Canto - A Decade of Taste, Quality, and Tradition"
            fill
            sizes="(max-width: 768px) 100vw, 740px"
            className="object-contain w-full h-full"
            priority
          />
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
              Click anywhere outside or press Close to dismiss
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
