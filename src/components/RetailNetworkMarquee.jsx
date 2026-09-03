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
  theme = "light",
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
    <div className={`w-full ${isDark ? "border-t border-[#3a312d] bg-[#090909] pt-14 sm:pt-16" : "bg-white py-14 sm:py-18"}`}>
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center px-4">
        <div
          className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.24em] ${
            isDark
              ? "border border-[#d9b578]/30 bg-[#d9b578]/10 text-[#d9b578]"
              : "border border-[#c59a54]/30 bg-[#fbf6ed] text-[#9b722b]"
          }`}
        >
          <Handshake className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
        <h3
          className={`font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${
            isDark ? "text-[#f5f1ea]" : "text-zinc-950"
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
          className={`pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 z-10 bg-gradient-to-r ${
            isDark
              ? "from-[#090909] via-[#090909]/80 to-transparent"
              : "from-white via-white/80 to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 z-10 bg-gradient-to-l ${
            isDark
              ? "from-[#090909] via-[#090909]/80 to-transparent"
              : "from-white via-white/80 to-transparent"
          }`}
        />

        {/* Continuous Moving Track - Logo Only */}
        <div className="flex items-center animate-infinite-scroll gap-14 sm:gap-20 md:gap-24 lg:gap-28 py-6 sm:py-8">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 w-44 sm:w-56 md:w-64 lg:w-72 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
                  className="object-contain mix-blend-multiply"
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Trust Indicator */}
      <div
        className={`mt-8 flex items-center justify-center gap-2 text-center text-xs ${
          isDark ? "text-[#a89f91]" : "text-zinc-600 font-medium"
        }`}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="tracking-wide">Supplying across premier hypermarket shelves & regional distribution networks</span>
      </div>
    </div>
  );
}
