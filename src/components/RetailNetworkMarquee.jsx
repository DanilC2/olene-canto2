"use client";

import React from "react";
import Image from "next/image";
import { Handshake } from "lucide-react";

const partnerLogos = [
  {
    id: "lulu",
    name: "LuLu Hypermarket",
    category: "Hypermarket Network",
    logo: "/partners/lulu.jpg",
  },
  {
    id: "bismi",
    name: "Bismi",
    category: "Supermarket & Hypermarket",
    logo: "/partners/bismi.png",
  },
  {
    id: "nesto",
    name: "Nesto Hypermarket",
    category: "International Retail Chain",
    logo: "/partners/nesto.png",
  },
  {
    id: "carrefresh",
    name: "Carrefresh",
    category: "Hypermart & Fresh Retail",
    logo: "/partners/carrefresh.jpg",
  },
  {
    id: "aak",
    name: "AAK Middle East",
    category: "Distribution & Retail",
    logo: "/partners/aak.jpg",
  },
];

export default function RetailNetworkMarquee({
  title = "Collaborating with Leading Retailers",
  subtitle = "Our bakery and wholesale products are proudly supplied and partnered across premier retail and hypermarket networks.",
  badge = "Trusted Retail Collaborations",
  theme = "dark",
}) {
  // Multiply the partners list to create a seamless, uninterrupted loop
  const repeatedPartners = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  const isDark = theme === "dark";

  return (
    <div className="mt-20 border-t border-[#3a312d] pt-14 sm:pt-16">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center px-4">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-[#d9b578]/30 bg-[#d9b578]/10 text-[#d9b578] text-xs font-bold uppercase tracking-[0.24em]">
          <Handshake className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
        <h3
          className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${
            isDark ? "text-[#f5f1ea]" : "text-[#090909]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 text-sm sm:text-base leading-7 max-w-2xl mx-auto ${
            isDark ? "text-[#d9d2ca]" : "text-zinc-600"
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Infinite Scrolling Logo Marquee Container */}
      <div className="relative mt-12 w-full overflow-hidden py-4">
        {/* Left and Right Smooth Fade Overlays */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r ${
            isDark
              ? "from-[#090909] via-[#090909]/80 to-transparent"
              : "from-white via-white/80 to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l ${
            isDark
              ? "from-[#090909] via-[#090909]/80 to-transparent"
              : "from-white via-white/80 to-transparent"
          }`}
        />

        {/* Continuous Moving Track */}
        <div className="flex animate-infinite-scroll gap-5 sm:gap-6 py-2">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-[230px] sm:w-[270px] h-[130px] sm:h-[145px] rounded-2xl bg-white p-4 sm:p-5 flex flex-col items-center justify-between border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.02] hover:border-[#d9b578] hover:shadow-[0_12px_32px_rgba(217,181,120,0.25)] group"
            >
              {/* Logo Container */}
              <div className="relative w-full h-[65px] sm:h-[75px] flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 200px, 240px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority={index < 5}
                />
              </div>

              {/* Tag / Category Badge */}
              <div className="w-full pt-2 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-bold text-zinc-800 tracking-wide truncate">
                  {partner.name}
                </span>
                <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-[#b58c42] bg-[#fbf6ed] px-2 py-0.5 rounded-md border border-[#edd7af]/50 whitespace-nowrap">
                  Partner
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Trust Indicator */}
      <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-[#a89f91]">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="tracking-wide">Supplying across premier hypermarket shelves & regional distribution networks</span>
      </div>
    </div>
  );
}
