"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductVideoCarousel from "@/components/ProductVideoCarousel";
import HistorySection from "@/components/HistorySection";
import StorySection from "@/components/StorySection";
import InquiryModal from "@/components/InquiryModal";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import RetailNetworkMarquee from "@/components/RetailNetworkMarquee";
import { fetchMenu, fetchStory } from "@/lib/api";
import { Sparkles, Quote, BookOpen, Briefcase, ChevronRight, Wheat, Store, Truck } from "lucide-react";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const selectedCategory = "all";
  const [story, setStory] = useState(null);

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  useEffect(() => {
    async function loadData() {
      const [menu, str] = await Promise.all([fetchMenu(), fetchStory()]);
      setMenuItems(menu);
      setStory(str);
    }
    loadData();
  }, []);

  const handleOpenInquiry = (itemTitle) => {
    setInquiryTargetItem(itemTitle);
    setIsInquiryOpen(true);
  };

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* 1. FIRST SECTION: WHITE BACKGROUND HERO WITH AI BAKERY VIDEO */}
      <Hero
        onExploreClick={() => handleScrollToSection("history")}
        onStoryClick={() => handleScrollToSection("about")}
      />

      {/* 2. HISTORY & COMPANY PROGRESS SECTION (DIRECTLY BELOW HERO) */}
      <HistorySection />

      <ProductVideoCarousel />

      {/* 3. WHITE LOAF WHOLESALE BRAND */}
      <section id="white-loaf" className="text-[#f5f1ea] border-y border-[#2a2a2a]">
        <div className="bg-[#090909] px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-20 lg:grid-cols-[0.9fr_1.1fr] items-start lg:items-center">
              {/* Left Column - Logo and Intro */}
              <div className="space-y-5 sm:space-y-6 md:space-y-7 text-center lg:text-left">
                {/* Logo Container */}
                <div className="flex w-full justify-center lg:justify-start">
                  <div className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[22rem] rounded-lg sm:rounded-xl bg-[#050505] p-3 sm:p-4 md:p-5 flex items-center justify-center">
                    <Image
                      src="/whieloaf2.png"
                      alt="White Loaf Craft Bakers logo"
                      width={2826}
                      height={1504}
                      className="h-auto w-full max-h-[120px] sm:max-h-[160px] md:max-h-[200px] object-contain"
                      style={{ backgroundColor: "#050505" }}
                    />
                  </div>
                </div>

                {/* Title and Description */}
                <div>
                  <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#d9b578]">
                    Olene Foods Wholesale
                  </p>
                  <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#f5f1ea]">
                    Everyday baking, made better.
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-[#d9d2ca] max-w-xl mx-auto lg:mx-0">
                  White Loaf is our dedicated wholesale bakery brand, bringing dependable, fresh bread and cookies to supermarkets, hypermarkets, and retail partners.
                </p>
              </div>

              {/* Right Column - Concept and Features */}
              <div className="space-y-6 sm:space-y-8 lg:border-l-2 lg:border-[#d9b578] lg:pl-6">
                {/* Concept Section */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#d9b578]">
                    Our concept
                  </p>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-medium text-[#f5f1ea]">
                    Specialized traditional bakery with a clearly defined value system.
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-[#d9d2ca]">
                    We make accessible bakery staples with the care and consistency of an artisan kitchen, supporting retailers with reliable products, presentation, and service.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="border-t border-[#3a312d] pt-4">
                    <Store className="h-4 w-4 sm:h-5 sm:w-5 text-[#d9b578]" />
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-[#f5f1ea]">Retail ready</p>
                    <p className="mt-1 text-[10px] sm:text-xs leading-5 text-[#d9d2ca]">Products built for modern shelves and counters.</p>
                  </div>
                  <div className="border-t border-[#3a312d] pt-4">
                    <Wheat className="h-4 w-4 sm:h-5 sm:w-5 text-[#d9b578]" />
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-[#f5f1ea]">Pure ingredients</p>
                    <p className="mt-1 text-[10px] sm:text-xs leading-5 text-[#d9d2ca]">Familiar recipes made with thoughtful sourcing.</p>
                  </div>
                  <div className="border-t border-[#3a312d] pt-4">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-[#d9b578]" />
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-bold text-[#f5f1ea]">Partner support</p>
                    <p className="mt-1 text-[10px] sm:text-xs leading-5 text-[#d9d2ca]">Distribution and merchandising support for growth.</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/contact?type=wholesale"
                    className="inline-flex items-center gap-2 bg-[#f5f1ea] px-4 sm:px-6 py-2 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#090909] transition-colors hover:bg-[#d9b578]"
                  >
                    Discuss wholesale partnership <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Infinite Moving Retail Collaborations Marquee */}
          <div className="mt-16 sm:mt-20 md:mt-24">
            <RetailNetworkMarquee />
          </div>
        </div>
      </section>

      {/* 3.5 FRANCHISE OPPORTUNITY SECTION */}
      <section className="bg-white py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#d9b578]">Franchise opportunity</p>
            <h3 className="font-serif-luxury text-4xl font-medium text-[#090909] sm:text-5xl">
              Partner with Canto — build a successful business with our proven brand.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            {[
              { title: "Brand strength", text: "A trusted bakery name with growing retail reach, strong product recognition, and a loyal customer base." },
              { title: "Demand", text: "Consumers increasingly seek convenient, premium, and culturally relevant bakery products with everyday appeal." },
              { title: "Differentiators", text: "Signature recipes, premium ingredients, fresh-baked quality, and a retail-ready format built for repeat purchases." },
              { title: "Market opportunity", text: "A scalable business model designed for high-traffic retail zones, mixed-use communities, and urban demand centers." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d9b578]">{item.title}</p>
                <p className="text-sm leading-6 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#d9b578]">Launch journey</p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch md:items-center justify-between">
                {[
                  ["1", "Enquiry"],
                  ["2", "Qualification"],
                  ["3", "Discovery"],
                  ["4", "Agreement"],
                  ["5", "Training"],
                  ["6", "Opening"],
                ].map(([step, label], idx) => (
                  <div key={step} className="flex items-center gap-3 flex-1">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d9b578] to-[#c9a56a] text-xs font-bold text-white shadow-md">
                        {step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-gray-900">{label}</p>
                    </div>
                    {idx < 5 && (
                      <div className="hidden md:block flex-shrink-0 text-gray-300 text-xl">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b578]">Get started today</p>
                <h3 className="font-serif-luxury text-3xl font-medium text-gray-900 sm:text-4xl mb-4">Share Your Details</h3>
                <p className="max-w-xl text-sm leading-6 text-gray-700">
                  Tell us about your business vision and franchise interests. Our team will review your information and connect with you within 2 business days.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-2">Full Name*</label>
                    <input 
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 mb-2">Phone*</label>
                    <input 
                      type="tel"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                      placeholder="Your phone" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">Email*</label>
                  <input 
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-2">City / Country*</label>
                  <input 
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                    placeholder="Your location" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-6 rounded-xl bg-gradient-to-r from-[#d9b578] to-[#c9a56a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md hover:shadow-lg hover:from-[#c9a56a] hover:to-[#b99456] transition-all duration-200"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {false && (
      <section id="reviews" className="py-24 bg-[#09090b] text-white border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-medium flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Gastronomie Journal Acclaim
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-white">
              Connoisseur & Critic Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="dark-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <Quote className="w-8 h-8 text-amber-300/40" />
              <p className="text-zinc-300 font-serif-luxury italic text-lg leading-relaxed">
                &ldquo;The honeycomb crumb on Olene Canto&apos;s croissants is an architectural feat. 27 distinct layers of sheer butter crispness that melts into pure velvet.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">Le Guide Culinaire</p>
                <p className="text-xs text-zinc-400">European Bakery Review</p>
              </div>
            </div>

            <div className="dark-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <Quote className="w-8 h-8 text-amber-300/40" />
              <p className="text-zinc-300 font-serif-luxury italic text-lg leading-relaxed">
                &ldquo;Their 48-hour wild sourdough batard possesses a blistered, singing crust and deep lactic tang that elevates breakfast to high art.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">Artisan Baker Quarterly</p>
                <p className="text-xs text-zinc-400">Master Bread Feature</p>
              </div>
            </div>

            <div className="dark-card p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <Quote className="w-8 h-8 text-amber-300/40" />
              <p className="text-zinc-300 font-serif-luxury italic text-lg leading-relaxed">
                &ldquo;Olene Canto balances classic French technique with contemporary minimalist elegance. A true benchmark in modern pâtisserie.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">Vogue Gastronomie</p>
                <p className="text-xs text-zinc-400">Haute Patisserie Spotlight</p>
              </div>
            </div>
          </div>

          {/* Bakery Guild & Press Releases Preview */}
          <div className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Bakery Journal */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">Atelier Chronicle</p>
                  <h3 className="text-2xl font-serif-luxury text-white mt-1">Bakery Releases & News</h3>
                </div>
                <BookOpen className="w-5 h-5 text-zinc-500" />
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Seasonal Harvest: Sicilian Bronte Pistachio & Wild Fig Brioche Feuilletée",
                    date: "Fresh Batch • August 2026",
                    tag: "Seasonal Bake",
                  },
                  {
                    title: "Introduction of the 12-Year Mother Levain Sourdough Tasting Flight",
                    date: "Atelier Special • July 2026",
                    tag: "Tasting Menu",
                  },
                  {
                    title: "Masterclass: French Inverse Puff Pastry & Lamination Techniques",
                    date: "Private Salon • June 2026",
                    tag: "Masterclass",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 dark-card rounded-2xl hover:border-white/25 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-amber-300 tracking-wider">
                        {item.tag} • {item.date}
                      </span>
                      <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white mt-1">
                        {item.title}
                      </h4>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Careers at Atelier */}
            <div id="careers" className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold">Join Our Guild</p>
                  <h3 className="text-2xl font-serif-luxury text-white mt-1">Careers in Haute Boulangerie</h3>
                </div>
                <Briefcase className="w-5 h-5 text-zinc-500" />
              </div>

              <div className="dark-card p-6 rounded-2xl space-y-4">
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  We are looking for dedicated Viennoiserie laminators, Stone Hearth sourdough bakers, and Pâtisserie artists who take pride in perfection.
                </p>
                
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-semibold text-white">Lead Viennoiserie Chef (Lamination)</span>
                    <span className="text-zinc-400">Full Time • Atelier</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="font-semibold text-white">Hearth Sourdough Baker</span>
                    <span className="text-zinc-400">Full Time • Dawn Shift</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenInquiry("Bakery Guild Application")}
                  className="w-full py-3 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-semibold tracking-wider transition-all text-center"
                >
                  APPLY TO JOIN THE BAKERY GUILD
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
      )}

      {/* Footer */}
      <Footer />

      {/* Booking & Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialItem={inquiryTargetItem}
      />

      {/* Real-time Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={menuItems}
        onSelectItem={(item) => handleOpenInquiry(item.name)}
      />
    </main>
  );
}
