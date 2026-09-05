"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function HeritageBanner() {
  return (
    <section className="w-full bg-white flex items-center justify-center py-6 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
      <ScrollReveal className="w-full flex items-center justify-center">
        {/* Mobile View Banner (Square 1:1, optimized for mobile screens) */}
        <div
          className="block md:hidden relative w-full max-w-[560px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-black"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src="/heritage-banner.jpg"
            alt="Olene Canto - A Decade of Taste, Quality, and Tradition"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Desktop View Banner (Widescreen 1024x415, optimized for desktop screens) */}
        <div
          className="hidden md:block relative w-full max-w-7xl aspect-[1024/415] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-black"
          style={{ aspectRatio: "1024 / 415" }}
        >
          <Image
            src="/heritage-banner-desktop.png"
            alt="Olene Canto - A Decade of Taste, Quality, and Tradition"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
