"use client";

import React from "react";
import { Sparkles, Croissant, Wheat, CakeSlice, PartyPopper, Layers, ChevronRight } from "lucide-react";

const getCategoryIcon = (id) => {
  switch (id) {
    case "viennoiserie":
      return <Croissant className="w-5 h-5 sm:w-6 sm:h-6" />;
    case "artisanal-breads":
      return <Wheat className="w-5 h-5 sm:w-6 sm:h-6" />;
    case "haute-patisserie":
      return <CakeSlice className="w-5 h-5 sm:w-6 sm:h-6" />;
    case "bespoke-cakes":
      return <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6" />;
    default:
      return <Layers className="w-5 h-5 sm:w-6 sm:h-6" />;
  }
};

export default function Categories({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <section id="categories" className="py-20 sm:py-24 bg-white text-zinc-900 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FAF6EF] border border-[#E8DFC8] text-[#9B1B22] text-xs font-semibold tracking-[0.22em] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>CURATED FOOD DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal leading-tight">
            <span className="text-[#9B1B22]">Categories built on </span>
            <span className="text-black font-medium">trust &amp; craft</span>
          </h2>
          
          <div className="flex items-center justify-center py-0.5">
            <span className="text-[#C59B4B] text-sm select-none">◆</span>
          </div>

          <p className="text-zinc-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Explore the diverse culinary disciplines of Olene Foods and Olene Canto, each crafted to bring you authentic tastes, pure ingredients, and timeless baking mastery.
          </p>
        </div>

        {/* Categories Grid — Clean Luxury Light Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 relative border ${
                  isSelected
                    ? "bg-black text-white border-black shadow-xl scale-[1.02]"
                    : "bg-zinc-50/80 text-zinc-900 border-zinc-200 hover:border-zinc-400 hover:bg-white hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
                      isSelected
                        ? "bg-white text-black"
                        : "bg-zinc-200 text-zinc-800 group-hover:bg-black group-hover:text-white"
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ml-2 ${
                      isSelected
                        ? "bg-zinc-800 text-amber-300 border border-zinc-700"
                        : "bg-white text-zinc-700 border border-zinc-200 group-hover:border-zinc-300"
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>

                <h3
                  className={`text-xl font-serif-luxury font-medium mb-2 ${
                    isSelected ? "text-white" : "text-black group-hover:text-amber-900"
                  }`}
                >
                  {cat.name}
                </h3>

                <p
                  className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                    isSelected ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {cat.description}
                </p>

                <div
                  className={`flex items-center text-xs font-semibold tracking-wider transition-transform duration-300 group-hover:translate-x-1 ${
                    isSelected ? "text-amber-300" : "text-zinc-800 group-hover:text-black"
                  }`}
                >
                  <span>{isSelected ? "FILTER ACTIVE" : "BROWSE CREATIONS"}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
