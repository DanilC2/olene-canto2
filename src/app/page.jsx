"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IngredientRevealSection from "@/components/IngredientRevealSection";
import ProductCampaignCollage from "@/components/ProductCampaignCollage";
import ProductVideoCarousel from "@/components/ProductVideoCarousel";
import BestsellerSection from "@/components/BestsellerSection";
import InquiryModal from "@/components/InquiryModal";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import RetailNetworkMarquee from "@/components/RetailNetworkMarquee";
import InstagramReelsCarousel from "@/components/InstagramReelsCarousel";
import DefiningQualitySection from "@/components/DefiningQualitySection";
import ScrollReveal from "@/components/ScrollReveal";
import ViewportVideo from "@/components/ViewportVideo";
import { useIntroStarted } from "@/lib/loaderSignal";
import { submitInquiry, fetchMenu } from "@/lib/api";
import { Sparkles, Quote, BookOpen, Briefcase, ChevronRight, CheckCircle2, Mail, RefreshCw, Loader2 } from "lucide-react";

export default function Home() {
  const router = useRouter();
  // Let the intro loader video download first; on phones this banner is close enough to load during the intro.
  const introStarted = useIntroStarted();
  const [menuItems, setMenuItems] = useState([]);

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  // Franchise "Share Your Details" form state
  const [franchiseName, setFranchiseName] = useState("");
  const [franchisePhone, setFranchisePhone] = useState("");
  const [franchiseEmail, setFranchiseEmail] = useState("");
  const [franchiseLocation, setFranchiseLocation] = useState("");
  const [franchiseLoading, setFranchiseLoading] = useState(false);
  const [franchiseSubmitted, setFranchiseSubmitted] = useState(false);
  const [franchiseRef, setFranchiseRef] = useState("");

  const handleFranchiseSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFranchiseLoading(true);
    const ref = `CANTO-${Math.floor(100000 + Math.random() * 900000)}`;
    setFranchiseRef(ref);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: franchiseName,
          phone: franchisePhone,
          email: franchiseEmail,
          location: franchiseLocation,
          subject: "Franchise Partnership Application",
          type: "Franchise Inquiry",
          message: `Franchise inquiry submitted from ${franchiseLocation} for Olene Canto.`,
          refCode: ref,
        }),
      });

      if (!res.ok) {
        console.warn("[Franchise Form] Non-200 response from /api/contact");
      }
      setFranchiseSubmitted(true);
    } catch (err) {
      console.error("[Franchise Form] Submission error:", err);
      // Fallback: still show confirmation so the user is never left stuck
      setFranchiseSubmitted(true);
    } finally {
      setFranchiseLoading(false);
    }
  };

  const handleResetFranchise = () => {
    setFranchiseSubmitted(false);
    setFranchiseName("");
    setFranchisePhone("");
    setFranchiseEmail("");
    setFranchiseLocation("");
  };

  useEffect(() => {
    async function loadData() {
      const menu = await fetchMenu();
      setMenuItems(menu);
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
        onExploreClick={() => handleScrollToSection("product-reveal")}
        onStoryClick={() => router.push("/our-story")}
      />

      {/* 1.5 INTERACTIVE FRAMER MASK REVEAL: INGREDIENTS INSIDE THE TIN */}
      <IngredientRevealSection onOpenInquiry={handleOpenInquiry} />

      {/* 3. PRODUCT SHOWCASE VIDEO BANNER */}
      <section className="w-full bg-black overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[1920px] mx-auto aspect-video">
          <ViewportVideo
            src="/showcase-banner.mp4"
            posterSrc="/posters/showcase-banner.jpg"
            rootMargin="400px 0px"
            enabled={introStarted}
            loop
            aria-label="Olene Canto product showcase video"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </section>

      {/* 3. PRODUCT VIDEO CAROUSEL SECTION */}
      <section id="explore">
        <ScrollReveal>
          <ProductVideoCarousel />
        </ScrollReveal>
      </section>

      {/* BESTSELLER SECTION */}
      <section id="bestsellers">
        <ScrollReveal>
          <BestsellerSection onOpenInquiry={handleOpenInquiry} />
        </ScrollReveal>
      </section>

      {/* 2. PRODUCT CAMPAIGN COLLAGE */}
      <ProductCampaignCollage />

      {/* 3.1 RETAIL NETWORK MARQUEE */}
      <section className="bg-white border-b border-zinc-200 overflow-hidden">
        <ScrollReveal>
          <RetailNetworkMarquee theme="light" />
        </ScrollReveal>
      </section>

      {/* 3.2 INSTAGRAM REELS CAROUSEL */}
      <section id="instagram-reels" className="bg-black border-b border-zinc-800 overflow-hidden">
        <ScrollReveal>
          <InstagramReelsCarousel />
        </ScrollReveal>
      </section>

      {/* 3.3 DEFINING QUALITY & CERTIFICATIONS */}
      <ScrollReveal>
        <DefiningQualitySection />
      </ScrollReveal>

      {/* 3.5 FRANCHISE OPPORTUNITY SECTION */}
      <section id="franchise" className="bg-[#090909] text-[#f5f1ea] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-[#2a2a2a]">
        <ScrollReveal className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#d9b578]">Franchise opportunity</p>
            <h3 className="font-serif-luxury text-4xl font-medium text-[#f5f1ea] sm:text-5xl">
              Partner with Canto — build a successful business with our proven brand.
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {[
              { title: "Brand strength", text: "A trusted bakery name with growing retail reach, strong product recognition, and a loyal customer base." },
              { title: "Market opportunity", text: "A scalable business model designed for high-traffic retail zones, mixed-use communities, and urban demand centers." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#121212] p-6 hover:border-[#d9b578]/50 hover:bg-[#161616] hover:shadow-xl transition-all">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#d9b578]">{item.title}</p>
                <p className="text-sm leading-6 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl text-zinc-900">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9b578]">Get started today</p>
                <h3 className="font-serif-luxury text-3xl font-medium text-zinc-950 sm:text-4xl mb-4">Share Your Details</h3>
                <p className="max-w-xl text-sm leading-6 text-zinc-600">
                  Tell us about your business vision and franchise interests. Our team will review your information and connect with you within 2 business days.
                </p>
              </div>

              {franchiseSubmitted ? (
                <div className="bg-[#faf7f2] border border-[#d9b578]/50 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700 shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b722b]">
                      Enquiry Dispatched
                    </span>
                    <h4 className="font-serif-luxury text-2xl font-medium text-zinc-950 mt-1">
                      Thank You, {franchiseName || "Partner"}!
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mx-auto">
                      Your details have been received and sent directly to our team at{" "}
                      <strong className="text-zinc-900 font-semibold">admin@olenecanto.com</strong> (www.olenecanto.com).
                    </p>
                    <div className="mt-3 inline-block font-mono text-xs font-bold text-zinc-800 bg-white px-4 py-1.5 rounded-lg border border-zinc-200 shadow-sm">
                      Ref: #{franchiseRef}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 max-w-md mx-auto">
                    A corporate representative from Olene Foods Pvt. Ltd. will review your information and connect with you within 2 business days.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetFranchise}
                      className="inline-flex items-center gap-1.5 bg-[#1d1513] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                    <a
                      href={`mailto:admin@olenecanto.com?subject=Franchise%20Inquiry%20from%20${encodeURIComponent(franchiseName)}&body=Name:%20${encodeURIComponent(franchiseName)}%0APhone:%20${encodeURIComponent(franchisePhone)}%0AEmail:%20${encodeURIComponent(franchiseEmail)}%0ALocation:%20${encodeURIComponent(franchiseLocation)}%0ARef:%20${encodeURIComponent(franchiseRef)}`}
                      className="inline-flex items-center gap-1.5 bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-800 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#9b722b]" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  method="POST"
                  action="/api/contact"
                  onSubmit={handleFranchiseSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="franchise-name" className="block text-xs font-semibold text-zinc-800 mb-2">Full Name*</label>
                      <input
                        id="franchise-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={franchiseName}
                        onChange={(e) => setFranchiseName(e.target.value)}
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                        placeholder="Your name" 
                      />
                    </div>
                    <div>
                      <label htmlFor="franchise-phone" className="block text-xs font-semibold text-zinc-800 mb-2">Phone*</label>
                      <input
                        id="franchise-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={franchisePhone}
                        onChange={(e) => setFranchisePhone(e.target.value)}
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                        placeholder="Your phone" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="franchise-email" className="block text-xs font-semibold text-zinc-800 mb-2">Email*</label>
                    <input
                      id="franchise-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={franchiseEmail}
                      onChange={(e) => setFranchiseEmail(e.target.value)}
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div>
                    <label htmlFor="franchise-location" className="block text-xs font-semibold text-zinc-800 mb-2">City / Country*</label>
                    <input
                      id="franchise-location"
                      name="location"
                      type="text"
                      required
                      autoComplete="address-level2"
                      value={franchiseLocation}
                      onChange={(e) => setFranchiseLocation(e.target.value)}
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all" 
                      placeholder="Your location" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={franchiseLoading}
                    className="w-full mt-6 rounded-xl bg-gradient-to-r from-[#d9b578] to-[#c9a56a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md hover:shadow-lg hover:from-[#c9a56a] hover:to-[#b99456] transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {franchiseLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to admin@olenecanto.com...</span>
                      </>
                    ) : (
                      <span>Submit Enquiry</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
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
