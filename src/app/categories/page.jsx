"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import InquiryModal from "@/components/InquiryModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Sparkles,
  Quote,
  ChevronRight,
  ArrowRight,
  ShoppingBag,
  Store,
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Wheat,
} from "lucide-react";

const CATEGORIES_SHOWCASE = [
  {
    id: "savory-snacks",
    title: "TRADITIONAL SAVORIES",
    subtitle: "Savory Bites, Samosa Crisps & Spiced Snacks",
    description: "Crispy, aromatic spices, and traditional stoneground savory crunch crafted using authentic coastal recipes and zero artificial additives.",
    badge: "Authentic Savory",
    tagline: "Everyday Tea-Time Companion",
    image: "/categories/savory-bites.jpg",
    items: [
      "Mini Crispy Samosa Bites",
      "Traditional Spiced Mixture",
      "Salted Malabar Banana Chips",
      "Crunchy Ribbon Pakoda",
    ],
    inquiryItem: "Traditional Savory Bites",
    linkText: "Enquire Savory Range",
  },
  {
    id: "artisan-biscuits",
    title: "ARTISAN BISCUITS",
    subtitle: "Butter Fruit Biscuits & Crunch Cookies",
    description: "Hand-rolled with 100% pure cultured butter, studded with candied fruits and slow-baked to a melt-in-mouth golden crumb.",
    badge: "Bestseller Reserve",
    tagline: "100% Normandy Butter",
    image: "/categories/fruit-biscuits.jpg",
    items: [
      "Karachi-Style Tutti-Frutti Biscuits",
      "Nutty Buddy Crunchy Canisters",
      "Artisan Butter Cookie Tins",
      "Oatmeal Golden Honey Crisps",
    ],
    inquiryItem: "Artisan Fruit Biscuits",
    linkText: "Enquire Biscuit Range",
  },
  {
    id: "heritage-sweets",
    title: "HERITAGE SWEETS",
    subtitle: "Festive Ladoos, Halwa & Confectionery",
    description: "Centuries of celebration heritage captured in rich pure ghee, roasted gram, and slow-simmered festive confections.",
    badge: "Celebration Reserve",
    tagline: "Pure Ghee & Heritage Recipes",
    image: "/categories/heritage-sweets.jpg",
    items: [
      "Traditional Ghee Boondi Ladoos",
      "Slow-Crafted Malabar Halwa",
      "Festive Rich Spiced Plum Cake",
      "Handcrafted Milk Peda Delights",
    ],
    inquiryItem: "Heritage Sweets",
    linkText: "Enquire Sweets Range",
  },
  {
    id: "coconut-macaroons",
    title: "COCONUT MACAROONS",
    subtitle: "Coastal Crunch & Chewy Coconut Confections",
    description: "Sun-dried shredded coconut toasted to amber perfection with a delicate crisp shell and tender, aromatic center.",
    badge: "Coastal Classic",
    tagline: "Fresh Coastal Coconuts",
    image: "/categories/coconut-macaroons.jpg",
    items: [
      "Crisp Amber Coconut Macaroons",
      "Toasted Coconut Butter Drops",
      "Vanilla Infused Coconut Bites",
      "Festive Coconut Gift Tins",
    ],
    inquiryItem: "Coconut Macaroons",
    linkText: "Enquire Macaroons",
  },
  {
    id: "viennoiserie",
    title: "HAUTE VIENNOISERIE",
    subtitle: "27-Layer French Croissants & Pâtisserie",
    description: "Crafted in temperature-controlled marble ateliers featuring 27 micro-layers of cultured French butter lamination and wild levain.",
    badge: "Atelier Signature",
    tagline: "Baked Fresh at 6:00 AM",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Signature 27-Layer Croissants",
      "Valrhona Noir 70% Pain au Chocolat",
      "San Sebastián Basque Cheesecake",
      "Tahitian Vanilla Mille-Feuille",
    ],
    inquiryItem: "Signature Feuilletée Croissant",
    linkText: "Enquire Viennoiserie",
  },
  {
    id: "white-loaf",
    title: "WHITE LOAF WHOLESALE",
    subtitle: "Supermarket & Retail Sliced Breads",
    description: "Our dedicated wholesale brand supplying supermarkets, hypermarkets, and cafes with daily fresh bread and retail-ready bakery staples.",
    badge: "Wholesale & FMCG",
    tagline: "Statewide Retail Reach",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop",
    items: [
      "Daily Sliced White Loaf Bread",
      "Multigrain & Seeded Sandwich Breads",
      "Artisan Sourdough Hearth Batards",
      "Commercial Brioche Burger Buns",
    ],
    inquiryItem: "White Loaf Wholesale Supply",
    linkText: "Discuss Wholesale Supply",
  },
];

export default function CategoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  const filteredCategories =
    selectedFilter === "all"
      ? CATEGORIES_SHOWCASE
      : CATEGORIES_SHOWCASE.filter((cat) => cat.id === selectedFilter);

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
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif-luxury leading-[1.08] font-normal tracking-tight text-zinc-950">
            Diverse Categories. One Trusted Name.
          </h1>

          {/* Centered Golden Diamond Ornament */}
          <div className="flex items-center justify-center py-1">
            <span className="text-[#C59B4B] text-base sm:text-lg select-none">◆</span>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6 sm:pt-8">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === "all"
                  ? "bg-[#9B1B22] text-white shadow-md scale-105"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
              }`}
            >
              All Categories ({CATEGORIES_SHOWCASE.length})
            </button>

            {CATEGORIES_SHOWCASE.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedFilter === cat.id
                    ? "bg-[#9B1B22] text-white shadow-md scale-105"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. CATEGORY CARDS GRID (INSPIRED BY REFERENCE IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Card Banner Image with Top-Left Overlay Title (Exact reference style) */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-950">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle dark gradient for high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />

                {/* Top-Left Bold Uppercase Category Title */}
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] uppercase">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-zinc-900 px-2.5 py-1 rounded-full shadow-md">
                    {category.badge}
                  </span>
                </div>

                {/* Bottom Tagline Overlay on Image */}
                <div className="absolute bottom-4 left-5 right-5 text-white/90">
                  <p className="text-xs font-medium tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {category.tagline}
                  </p>
                </div>
              </div>


            </div>
          ))}

          </div>
        </ScrollReveal>
      </section>

      {/* 4. TRUST & CERTIFICATION ACCREDITATION SECTION */}
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

      {/* 5. FOOTER */}
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
        items={[]}
        onSelectItem={(item) => handleOpenInquiry(item.name)}
      />
    </main>
  );
}
