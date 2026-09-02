"use client";

import React from "react";
import Image from "next/image";

export default function DefiningQualitySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Defining Quality Asset */}
        <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
          <Image
            src="/defining-quality.png"
            alt="Defining Quality - ISO 9001-2015, ISO 22000, HACCP, Halal India Certified"
            width={1200}
            height={500}
            className="w-full h-auto object-contain max-h-[280px] sm:max-h-[340px]"
            priority
          />
        </div>

      </div>
    </section>
  );
}
