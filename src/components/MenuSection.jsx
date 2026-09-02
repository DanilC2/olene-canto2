"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Sparkles, Plus, Eye, X, Play, Flame } from "lucide-react";

export default function MenuSection({
  items,
  selectedCategory,
  onOpenInquiry,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-[#050507] text-white relative border-t border-white/5">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-amber-300 font-medium flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              Fresh From Our Stone Ovens
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-normal text-white">
              Signature Bakes & Pâtisserie
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Crafted with certified Normandy AOP butter, single-origin Valrhona cacao, and living wild sourdough levain.
          </p>
        </div>

        {/* Menu Grid */}
        {items.length === 0 ? (
          <div className="text-center py-16 sm:py-20 dark-card rounded-2xl">
            <p className="text-zinc-400 font-serif-luxury text-lg">No bakes found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-7">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="dark-card rounded-lg sm:rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                {/* Card Media Preview */}
                <div className="relative h-40 sm:h-48 lg:h-56 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/75 backdrop-blur-md border border-white/20 text-amber-200 text-[9px] sm:text-[11px] font-medium tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>

                  {/* Video indicator badge if present */}
                  {item.video && (
                    <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white" />
                      <span>REEL</span>
                    </span>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
                    title="Quick Details"
                  >
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>

                {/* Card Details */}
                <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    {/* Rating & Calorie */}
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400 mb-2">
                      <div className="flex items-center space-x-1 text-amber-300">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-300" />
                        <span className="font-semibold text-white text-xs sm:text-sm">{item.rating}</span>
                      </div>
                      <span className="text-zinc-500 text-[9px] sm:text-xs">{item.calories}</span>
                    </div>

                    {/* Title & Price */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif-luxury text-base sm:text-lg lg:text-xl text-white font-medium group-hover:text-amber-200 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm sm:text-base font-semibold text-white tracking-wide whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[10px] sm:text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Ingredients Chips */}
                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1">
                    {item.ingredients.slice(0, 2).map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] sm:text-[10px] bg-white/5 border border-white/10 text-zinc-300 px-1.5 sm:px-2 py-0.5 rounded-md"
                      >
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 2 && (
                      <span className="text-[8px] sm:text-[10px] text-zinc-500 self-center">
                        +{item.ingredients.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInquiry(item.name);
                    }}
                    className="w-full py-2 sm:py-2.5 bg-white/5 hover:bg-white hover:text-black border border-white/15 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-200 transition-all duration-300 flex items-center justify-center space-x-1.5 sm:space-x-2"
                  >
                    <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>PRE-ORDER THIS BAKE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Item Detail & Video Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="relative bg-[#111114] border border-white/20 rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-scaleUp max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-48 sm:h-64 md:h-full min-h-[200px] sm:min-h-[280px] bg-zinc-950">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    poster={selectedItem.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/70 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-lg border border-white/20 text-[10px] sm:text-xs text-white flex items-center gap-1.5">
                  <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  <span>Artisanal Bake Reel</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-3 sm:space-y-4 lg:space-y-5">
                <div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2">
                    <span className="text-[9px] sm:text-[11px] uppercase tracking-wider font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-white/10 text-amber-200 border border-white/10">
                      {selectedItem.badge}
                    </span>
                    <div className="flex items-center text-[10px] sm:text-xs text-amber-300">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-300 mr-1" />
                      {selectedItem.rating} / 5.0
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-white mb-1">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {selectedItem.price}
                  </p>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-300 font-light leading-relaxed mb-3 sm:mb-4">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-[8px] sm:text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Fine Ingredients
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedItem.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] sm:text-[11px] bg-white/10 text-zinc-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/10"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/10 flex gap-2 sm:gap-3">
                  <button
                    onClick={() => {
                      const name = selectedItem.name;
                      setSelectedItem(null);
                      onOpenInquiry(name);
                    }}
                    className="w-full py-2.5 sm:py-3 lg:py-3.5 bg-white text-black font-semibold text-xs sm:text-sm tracking-wider rounded-lg sm:rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    PRE-ORDER THIS FRESH BAKE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
