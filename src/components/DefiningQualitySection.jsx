"use client";

import React from "react";
import Image from "next/image";

export default function DefiningQualitySection({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 border-b ${
        isDark
          ? "bg-black text-white border-white/10"
          : "bg-white text-zinc-900 border-zinc-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Defining Quality Asset */}
        <div className="relative w-full max-w-4xl sm:max-w-5xl mx-auto flex items-center justify-center">
          <Image
            src={isDark ? "/defining-quality-dark.png" : "/defining-quality.png"}
            alt="Defining Quality - ISO 9001-2015, ISO 22000, HACCP, Halal India Certified"
            width={isDark ? 1000 : 1024}
            height={isDark ? 450 : 501}
            className={`w-full h-auto object-contain ${
              isDark
                ? "max-h-[260px] sm:max-h-[340px] drop-shadow-[0_4px_24px_rgba(255,255,255,0.06)]"
                : "max-h-[360px] sm:max-h-[460px] lg:max-h-[520px]"
            }`}
            priority
          />
        </div>
      </div>
    </section>
  );
}
