"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import InquiryModal from "@/components/InquiryModal";
import ScrollReveal from "@/components/ScrollReveal";
import { CATEGORIES_SHOWCASE, getAllProducts } from "@/lib/categoriesData";
import {
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Wheat,
  ShieldCheck,
  Store,
} from "lucide-react";

export default function CategoriesPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  const allProducts = getAllProducts();

  const handleOpenInquiry = (itemTitle) => {
    setInquiryTargetItem(itemTitle);
    setIsInquiryOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FCFAF6] text-zinc-900 selection:bg-[#9B1B22] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 1. MAIN HEADER SECTION */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif-luxury leading-[1.08] font-normal tracking-tight text-zinc-950">
            Diverse Categories. One Trusted Name.
          </h1>

          {/* Centered Golden Diamond Ornament */}
          <div className="flex items-center justify-center py-1">
            <span className="text-[#C59B4B] text-base sm:text-lg select-none">◆</span>
          </div>

          <p className="text-zinc-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Select a discipline below to browse our handcrafted products, ingredient origins, and ordering details.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. CATEGORY CARDS GRID — Clicking navigates INSIDE the category */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 overflow-hidden">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {CATEGORIES_SHOWCASE.map((category) => (
              <Link
                key={category.id}
                id={category.id}
                href={`/categories/${category.id}`}
                className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Card Banner Image with Top-Left Overlay Title */}
                <div className="relative w-full h-44 sm:h-60 lg:h-72 overflow-hidden bg-zinc-950">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle dark gradient for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

                  {/* Top-Left Bold Uppercase Category Title & Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                    <h3 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-sans font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] uppercase leading-tight line-clamp-2">
                      {category.title}
                    </h3>
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-zinc-900 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md w-fit shrink-0">
                      {category.badge}
                    </span>
                  </div>

                  {/* Bottom Tagline Overlay on Image */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-4 sm:left-5 sm:right-5 text-white/95">
                    <p className="text-[9px] sm:text-xs font-medium tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] line-clamp-2 leading-tight">
                      {category.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. TRUST & CERTIFICATION ACCREDITATION SECTION */}
      <section className="bg-white py-16 sm:py-20 border-t border-zinc-200 mt-12 overflow-hidden">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9B1B22]">
                Quality Assured &amp; Certified
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-zinc-950">
                Purity Guaranteed at Every Batch
              </h2>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                All food categories under Olene Foods Pvt. Ltd. operate under strict zero-preservative standards, certified European hygienic processing lines, and rigorous ISO &amp; Halal compliance.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center space-x-2 text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO 9001-2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>HACCP Food Safety</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Halal India Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Normandy Butter</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-48 sm:h-56 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src="/defining-quality.png"
                  alt="Olene Foods Certifications"
                  width={600}
                  height={200}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. FOOTER */}
      <Footer />

      {/* Inquiry & Search Modals */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialItem={inquiryTargetItem}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={allProducts}
        onSelectItem={(item) => handleOpenInquiry(item.name)}
      />
    </main>
  );
}
