"use client";

import React from "react";
import Image from "next/image";

export default function DefiningQualitySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black text-white border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Defining Quality Asset - Pure Black Background */}
        <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center">
          <Image
            src="/defining-quality-dark.png"
            alt="Defining Quality - ISO 9001-2015, ISO 22000, HACCP, Halal India Certified"
            width={800}
            height={360}
            className="w-full h-auto object-contain max-h-[200px] sm:max-h-[260px] drop-shadow-[0_4px_24px_rgba(255,255,255,0.06)]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
