"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";

export default function SearchModal({
  isOpen,
  onClose,
  items,
  onSelectItem,
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? items.filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery) ||
          item.ingredients.some((ing) => ing.toLowerCase().includes(normalizedQuery))
      )
    : items;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-start justify-center p-4 pt-20 sm:pt-28 overflow-y-auto">
      <div className="relative bg-[#121212] border border-white/15 rounded-3xl max-w-2xl w-full p-6 shadow-2xl animate-scaleUp">
        
        {/* Search Input Header */}
        <div className="flex items-center space-x-3 pb-5 border-b border-white/10">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search croissants, sourdough, basque cake, ingredients (e.g. Valrhona, Normandy)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-zinc-600 focus:outline-none text-base sm:text-lg font-light"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-3 pr-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-serif-luxury text-base">
              No creations found matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-serif-luxury font-medium text-white group-hover:text-amber-200 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5">
                        {item.category.replace("-", " ")}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0 pl-3">
                  <span className="text-sm font-semibold text-white">
                    {item.price}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Tip: Press ESC or click outside to dismiss</span>
          <span>{filtered.length} results</span>
        </div>
      </div>
    </div>
  );
}
