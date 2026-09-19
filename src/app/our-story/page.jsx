"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import OurStoryIntro from "@/components/OurStoryIntro";
import HistorySection from "@/components/HistorySection";
import FounderMessageSection from "@/components/FounderMessageSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import DefiningQualitySection from "@/components/DefiningQualitySection";
import WhiteLoafWholesaleSection from "@/components/WhiteLoafWholesaleSection";
import ScrollReveal from "@/components/ScrollReveal";
import InquiryModal from "@/components/InquiryModal";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { fetchStory } from "@/lib/api";

export default function OurStoryPage() {
  const [story, setStory] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  useEffect(() => {
    async function loadData() {
      const str = await fetchStory();
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

      {/* 1. OUR STORY INTRO SECTION */}
      <OurStoryIntro />

      {/* 2. THE CHRONICLES OF OLENE CANTO & 12-YEAR TIMELINE */}
      <HistorySection />

      {/* 3. FOUNDER & MANAGING DIRECTOR'S MESSAGE */}
      <ScrollReveal>
        <FounderMessageSection />
      </ScrollReveal>

      {/* 4. WHITE LOAF WHOLESALE SECTION */}
      <WhiteLoafWholesaleSection />

      {/* 5. PURPOSE, VISION & MISSION */}
      <ScrollReveal>
        <VisionMissionSection />
      </ScrollReveal>

      {/* 6. DEFINING QUALITY & CERTIFICATIONS */}
      <ScrollReveal>
        <DefiningQualitySection />
      </ScrollReveal>

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
        items={[]}
        onSelectItem={(item) => handleOpenInquiry(item.name)}
      />
    </main>
  );
}
