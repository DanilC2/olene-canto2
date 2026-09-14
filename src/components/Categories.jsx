"use client";

import React from "react";
import { Sparkles, Croissant, Wheat, CakeSlice, PartyPopper, Layers, ChevronRight, Cookie } from "lucide-react";

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
    case "biscuit-and-cookies":
    case "artisan-biscuits":
      return <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />;
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer rounded-xl sm:rounded-2xl p-3.5 sm:p-7 transition-all duration-300 relative border flex flex-col justify-between ${
                  isSelected
                    ? "bg-black text-white border-black shadow-xl scale-[1.02]"
                    : "bg-zinc-50/80 text-zinc-900 border-zinc-200 hover:border-zinc-400 hover:bg-white hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3 sm:mb-5">
                    <div
                      className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
                        isSelected
                          ? "bg-white text-black"
                          : "bg-zinc-200 text-zinc-800 group-hover:bg-black group-hover:text-white"
                      }`}
                    >
                      {getCategoryIcon(cat.id)}
                    </div>
                    <span
                      className={`text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap ml-1 sm:ml-2 ${
                        isSelected
                          ? "bg-zinc-800 text-amber-300 border border-zinc-700"
                          : "bg-white text-zinc-700 border border-zinc-200 group-hover:border-zinc-300"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-xl font-serif-luxury font-medium mb-1.5 sm:mb-2 line-clamp-2 ${
                      isSelected ? "text-white" : "text-black group-hover:text-amber-900"
                    }`}
                  >
                    {cat.name}
                  </h3>

                  <p
                    className={`text-[11px] sm:text-sm font-light leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none ${
                      isSelected ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>

                <div
                  className={`flex items-center text-[10px] sm:text-xs font-semibold tracking-wider transition-transform duration-300 group-hover:translate-x-1 ${
                    isSelected ? "text-amber-300" : "text-zinc-800 group-hover:text-black"
                  }`}
                >
                  <span className="truncate">{isSelected ? "FILTER ACTIVE" : "BROWSE"}</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 sm:ml-1 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
