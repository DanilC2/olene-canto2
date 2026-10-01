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
  CheckCircle2,
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
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#9B1B22] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* CATEGORY CARDS GRID — Clean Luxury Showcase with Professional Naming */}
      <section className="pt-28 sm:pt-32 lg:pt-36 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-12 sm:pb-16 overflow-hidden bg-white">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {CATEGORIES_SHOWCASE.map((category) => (
              <Link
                key={category.id}
                id={category.id}
                href={`/categories/${category.id}`}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* 1. Pristine Product Photo — Completely text-free, un-obscured with soft hover zoom */}
                <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* 2. Prominent & Attractive Category Name Only */}
                <div className="py-5 sm:py-6 lg:py-7 px-4 bg-white border-t border-zinc-100 flex flex-col items-center justify-center text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-medium tracking-wide text-zinc-950 group-hover:text-[#9B1B22] transition-colors duration-300">
                    {category.title}
                  </h2>
                  <div className="w-8 h-[2px] bg-[#C59B4B]/80 group-hover:w-16 group-hover:bg-[#9B1B22] transition-all duration-300 rounded-full mt-2.5" />
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TRUST & CERTIFICATION ACCREDITATION SECTION */}
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

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={allProducts}
        onSelectItem={(item) => handleOpenInquiry(item.name)}
      />
    </main>
  );
}
