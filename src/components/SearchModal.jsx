"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { getAllProducts } from "@/lib/categoriesData";

export default function SearchModal({
  isOpen,
  onClose,
  items,
  onSelectItem,
}) {
  const [query, setQuery] = useState("");
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setQuery("");
    }
  }

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  // Dismiss on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  // Use real Olene Canto catalog products, excluding placeholder items
  const catalog =
    items && items.length > 0
      ? items.filter((p) => !p.image?.startsWith("http") && p.category !== "viennoiserie")
      : getAllProducts().filter((p) => !p.image?.startsWith("http") && p.category !== "viennoiserie");

  const normalizedQuery = query.trim().toLowerCase();
  // Only display products when the user has typed a query
  const filtered = normalizedQuery
    ? catalog.filter(
        (item) =>
          item.name?.toLowerCase().includes(normalizedQuery) ||
          item.description?.toLowerCase().includes(normalizedQuery) ||
          item.tagline?.toLowerCase().includes(normalizedQuery) ||
          item.categoryName?.toLowerCase().includes(normalizedQuery) ||
          item.category?.toLowerCase().includes(normalizedQuery) ||
          (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(normalizedQuery))) ||
          (item.highlights && item.highlights.some((h) => h.toLowerCase().includes(normalizedQuery)))
      )
    : [];

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-start justify-center p-4 pt-20 sm:pt-28 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#121212] border border-white/15 rounded-3xl max-w-2xl w-full p-6 shadow-2xl animate-scaleUp"
      >
        {/* Search Input Header */}
        <div className="flex items-center space-x-3 pb-5 border-b border-white/10">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            autoFocus
            aria-label="Search Olene Canto products"
            placeholder="Search cakes, sweets, cookies, savouries, plum cake, murukku, kaju katli..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none text-base sm:text-lg font-light"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5 transition-colors shrink-0 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            aria-label="Close search"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/5 text-zinc-400 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results or Initial Clean State */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-3 pr-1">
          {!normalizedQuery ? (
            <div className="py-10 text-center">
              <p className="text-sm text-zinc-400 font-light">
                Type a product name, category, or ingredient to search...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-serif-luxury text-base">
              No Olene Canto products found matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  handleClose();
                }}
                className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4 min-w-0">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-zinc-800 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-x-2 gap-y-1 flex-wrap">
                      <h4 className="text-sm font-serif-luxury font-medium text-white group-hover:text-amber-200 transition-colors line-clamp-2 basis-full sm:basis-auto sm:line-clamp-none sm:truncate">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 shrink-0">
                        {item.categoryName || (item.category ? item.category.replace("-", " ") : "Canto")}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light line-clamp-1 mt-0.5">
                      {item.tagline || item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 shrink-0 pl-3">
                  <span className="text-sm font-semibold text-amber-200/90 whitespace-nowrap">
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
          {normalizedQuery && (
            <span>
              {filtered.length} {filtered.length === 1 ? "product found" : "products found"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
