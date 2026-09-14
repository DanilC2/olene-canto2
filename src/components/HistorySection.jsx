"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  CheckCircle2,
  Maximize2,
  X,
  ShieldCheck,
  Award,
  Target,
  TrendingUp,
  Quote,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const MILESTONES = [
  {
    year: "2014",
    title: "Entered into Food Industry",
    subtitle: "A Humble Beginning in Northern Kerala",
    description:
      "Our first outlet in 2014 was a humble beginning with a modest initial vision of what a good restaurant and bakery were. Driven by a genuine passion for food and community service, this first step laid the ethical foundation for everything we would build.",
    achievements: [
      "Inaugural restaurant and bakery outlet opened in Northern Kerala",
      "Crafted early batches of traditional breads, daily tea snacks, and confections",
      "Built initial customer trust through welcoming service and pure recipes",
    ],
    image: "/history3.jpeg",
    imageCaption: "2014: The humble beginning with our very first outlet in Northern Kerala",
    badge: "The Beginning",
  },
  {
    year: "2016",
    title: "Oges Group Acquisition",
    subtitle: "Backed by Manufacturing Pedigree (Est. 1970)",
    description:
      "Founded in 1970, the renowned Oges Group took over operations with a singular, transformative vision: to establish a truly premium bakery brand. Backed by multi-decade manufacturing discipline, the organization upgraded production infrastructure, instituted rigorous hygiene protocols, and set long-term growth in motion.",
    achievements: [
      "Backed by Oges Group's multi-decade manufacturing pedigree (Est. 1970)",
      "Strategic transition from a local eatery into a structured bakery organization",
      "Major investments in specialized baking machinery and professional talent",
    ],
    image: "/history2.jpeg",
    imageCaption: "2016: Elevating production infrastructure under the guidance of Oges Group",
    badge: "Oges Group Takeover",
  },
  {
    year: "2017",
    title: "Re-branded to Olene Canto & Incorporated",
    subtitle: "The Birth of the Ethical 'People's Bakery'",
    description:
      "As part of our organic growth, the brand adopted a more befitting avatar—'Olene Canto'—and was formally incorporated as Olene Foods Pvt. Ltd. We committed firmly to the motto of being a healthy, ethical, fast 'People's Bakery', taking a principled stand against conventional unethical industry practices, with zero tolerance for compromises on quality.",
    achievements: [
      "Officially incorporated as Olene Foods Pvt. Ltd.",
      "Unveiled 'Olene Canto' brand with the motto of being an ethical People's Bakery",
      "Strict company-wide pledge: zero tolerance for unethical additives or chemical compromises",
      "Established an in-house R&D system where master bakers use the best local authentic ingredients",
    ],
    image: "/history4.jpeg",
    imageCaption: "2017: Official incorporation and birth of the Olene Canto brand identity",
    badge: "Olene Foods Pvt. Ltd.",
  },
  {
    year: "2020",
    title: "Bakery Production Focus & 'White Loaf' Wholesale Launch",
    subtitle: "Spreading Healthy Food Culture to Supermarkets",
    description:
      "Following the lockdown, dine-in restaurant operations were strategically put on hold to channel 100% of our focus onto specialized bakery production. To share our healthier food culture with a wider public, we launched 'White Loaf'—our dedicated wholesale and retail support division exclusively for established supermarkets and hypermarkets.",
    achievements: [
      "Strategic pivot from restaurant operations to 100% specialized bakery manufacturing",
      "Created and launched 'White Loaf' wholesale brand for daily breads and cookies",
      "Formulated pure, healthy confectioneries tailored for high-traffic supermarket shelves",
    ],
    image: "/whieloaf2.png",
    imageCaption: "2020: Dedicated bakery production and wholesale expansion under White Loaf",
    badge: "White Loaf Launch",
  },
  {
    year: "2021",
    title: "Associated with Top Brand Companies in Kerala",
    subtitle: "Statewide Retail Alliances with Leading Hypermarkets",
    description:
      "White Loaf established strategic supply partnerships with Kerala's foremost supermarket and hypermarket giants, including LuLu Hypermarket, Nesto, Smart, Kalyan, and AB Grand Hyper. We backed our products with comprehensive retail support, visual merchandising, and active counter management to guarantee peak freshness daily.",
    achievements: [
      "Supply partnerships signed with LuLu, Nesto, Kalyan, Smart, and premier retail chains",
      "Deployed White Loaf dedicated retail support system, counter management, and merchandising",
      "Earning widespread customer loyalty for ethical, fresh daily bakery staples",
    ],
    image: "/canto-shelf.png",
    imageCaption: "2021: Statewide retail presence across Kerala's premier hypermarkets and supermarkets",
    badge: "Retail Alliances",
  },
  {
    year: "2022",
    title: "Reliance Agreement, Beach Flagships & 'Du Four' Export",
    subtitle: "10 Outlets Across Malabar & International Expansion",
    description:
      "A landmark milestone year: an agreement was entered into with Reliance India Pvt., and two scenic destination branches opened at Kozhikode Beach and Ramanattukara, growing our retail presence to 10 outlets spread across Malabar. Recognizing the universal appeal of our rich cookie pantry, we launched 'Du Four' to promote high-quality bakery exports globally.",
    achievements: [
      "Landmark supply agreement entered into with Reliance India Pvt.",
      "Opened destination branches at Kozhikode Beach and Ramanattukara (10 outlets across Malabar)",
      "Launched 'Du Four' export brand to share signature cookies with global markets",
    ],
    image: "/olene-canto-building.jpg",
    imageCaption: "2022: Flagship seaside outlet at Kozhikode Beach and international export launch",
    badge: "Reliance & Du Four",
  },
  {
    year: "Today",
    title: "A Decade of Taste, Quality, and Tradition",
    subtitle: "The Three Pillars: Olene Canto • White Loaf • Du Four",
    description:
      "Today, Olene Foods stands as a flourishing, ethical food organization. Guided by our core values—Faith & Trust, Competency, Discipline, and Growth—we serve thousands of loyal patrons across three dedicated verticals: Olene Canto retail bakeries, White Loaf wholesale distribution, and Du Four global exports.",
    achievements: [
      "Retail: Olene Canto (The Bakery in Supermarket, Bakes & Treats with Café, Expresso Franchise)",
      "Wholesale: White Loaf (Exclusive bread & cookies in established supermarkets statewide)",
      "Export: Du Four (Sharing our pantry of premium cookies with international markets)",
      "Uncompromising zero-tolerance policy against unethical food practices and artificial shortcuts",
    ],
    image: "/canto restaurant.jpg.jpeg",
    imageCaption: "Today: A decade of ethical craftsmanship, community trust, and organic growth",
    badge: "Our Ethos Today",
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
              A Decade of <br className="hidden sm:inline" />
              <span className="italic font-normal text-amber-900">Ethical Taste & Heritage</span>
            </h2>

            <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-amber-800/40 to-transparent mx-auto my-2" />

            <p className="text-zinc-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              From our humble beginning in 2014 to Malabar’s beloved People’s Bakery, statewide wholesale with White Loaf, and global exports with Du Four — discovered through an uncompromising commitment to healthy food culture.
            </p>
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
