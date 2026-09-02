"use client";

import React from "react";

export default function VisionMissionSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 sm:space-y-20">
        
        {/* VISION */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black uppercase font-sans-clean">
            VISION
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-900 leading-relaxed font-sans-clean">
            &ldquo;We deliver <strong className="font-bold text-black">Ideal</strong> products and <strong className="font-bold text-black">Cordial</strong> services to receive the reflections of divine feeling of <strong className="font-bold text-black">Gratitude</strong>.&rdquo;
          </p>
        </div>

        {/* MISSION */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-black uppercase font-sans-clean">
            MISSION
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-900 leading-relaxed font-sans-clean">
            &ldquo;To become a world class food brand offering unique tastes garnished with goodness of quality and trust&rdquo;.
          </p>
        </div>

      </div>
    </section>
  );
}
