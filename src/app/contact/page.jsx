"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import SearchModal from "@/components/SearchModal";
import InquiryModal from "@/components/InquiryModal";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import { submitInquiry } from "@/lib/api";

const PRODUCT_LIST = [
  "Signature Croissants",
  "Pain au Chocolat",
  "Wild Sourdough",
  "Basque Cheesecake",
  "Mille-Feuille",
  "Butter Cookies Tin",
  "White Loaf Wholesale",
  "Du Four Export",
];

function ContactContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";
  const typeParam = searchParams.get("type") || "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    if (productParam) {
      setSubject(`Product Inquiry: ${productParam}`);
      setMessage(`Hello, I would like to inquire about ordering ${productParam}. Please let me know available batches and pricing.`);
    } else if (typeParam) {
      if (typeParam.toLowerCase().includes("wholesale")) {
        setSubject("White Loaf Wholesale & Retail Supply Partnership");
        setMessage("Hello, I am interested in wholesale supply of White Loaf bakery products for our retail store / supermarket.");
      } else if (typeParam.toLowerCase().includes("franchise")) {
        setSubject("Franchise & Atelier Dealership Inquiry");
        setMessage("Hello, I would like to explore opening an Olene Canto franchise / retail atelier.");
      } else if (typeParam.toLowerCase().includes("export")) {
        setSubject("Du Four Global Export Distribution");
        setMessage("Hello, I am interested in international export shipments under Du Four.");
      } else {
        setSubject("Atelier Tasting & Reservation");
      }
    }
  }, [productParam, typeParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const generatedRef = `CANTO-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);

    try {
      await submitInquiry({
        name: fullName,
        email,
        phone,
        type: subject,
        message,
        refCode: generatedRef,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Olene Canto Concierge, I submitted an inquiry for "${subject || "Bakery Order"}". Ref: ${refCode || "Direct"}. Name: ${fullName || "A Guest"}.`
  );

  return (
    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center">
      
      {/* Screen-Fitted Pure White Card matching reference model */}
      <div className="w-full bg-white border-2 border-zinc-900 rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] p-3.5 sm:p-5 lg:p-5 shadow-xl flex flex-col justify-between overflow-hidden">
        
        {/* 1. TOP SUB-HEADER: BACK LINK & BADGE */}
        <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-zinc-200 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center space-x-1.5 text-[11px] sm:text-xs font-semibold tracking-wide text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back Home</span>
          </Link>

          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-300">
            Atelier Concierge Desk
          </span>
        </div>

        {/* 2. HERO TITLE SECTION: "Contact us" + SOCIALS */}
        <div className="pt-1.5 sm:pt-2 pb-2 sm:pb-2.5 border-b border-zinc-200 shrink-0">
          <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] leading-[0.92] font-black tracking-tighter text-zinc-950 select-none mb-1.5">
            Contact us
          </h1>

          {/* Social Channels Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold text-zinc-800 tracking-wide">
            <a
              href="https://wa.me/919846000000"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:concierge@olenefoods.com"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              Email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* 3. MIDDLE 2-COLUMN SECTION: GET IN TOUCH & SEND US A MESSAGE FORM */}
        <div className="py-2.5 sm:py-3.5 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-zinc-200 items-start shrink-0">
          
          {/* Left: Get In Touch */}
          <div className="lg:col-span-5 space-y-2.5">
            <div>
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-zinc-950">
                Get In Touch
              </h2>
              <p className="text-[11px] text-zinc-600 leading-tight mt-0.5">
                Have a question or want to order? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] sm:text-xs font-medium text-zinc-900">
              {/* Email */}
              <a
                href="mailto:concierge@olenefoods.com"
                className="flex items-center space-x-2 group hover:text-black transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">concierge@olenefoods.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+914952764000"
                className="flex items-center space-x-2 group hover:text-black transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">+91 495 276 4000 / +91 (800) 248-CANTO</span>
              </a>

              {/* Location */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-semibold">
                  Kozhikode Beach &amp; Ramanattukara, Kerala
                </span>
              </div>
            </div>

            {/* Quick Product Inquiry Pills */}
            <div className="pt-2 border-t border-zinc-100">
              <p className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 mb-1">
                Quick Product Selector:
              </p>
              <div className="flex flex-wrap gap-1">
                {PRODUCT_LIST.slice(0, 6).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSubject(`Order: ${item}`);
                      setMessage(`Hello, I would like to place an inquiry for ${item}.`);
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded border transition-all ${
                      subject.includes(item)
                        ? "bg-zinc-900 text-white border-zinc-900 font-bold shadow-sm"
                        : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Send Us A Message Form */}
          <div className="lg:col-span-7">
            <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-zinc-950 mb-1.5">
              Send us a message
            </h2>

            {submitted ? (
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 sm:p-4 space-y-2.5 animate-fadeIn">
                <div className="flex items-center space-x-2 text-emerald-700">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-bold font-sans">
                    Thank You, {fullName || "Valued Guest"}!
                  </span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  Your inquiry has been logged under Reference:{" "}
                  <strong className="font-mono text-zinc-900 bg-zinc-200 px-1.5 py-0.5 rounded border border-zinc-300">
                    {refCode}
                  </strong>
                  . Our concierge typically responds within 2 hours.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={`https://wa.me/919846000000?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wider rounded-md flex items-center space-x-1.5 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Connect</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-3.5 py-1.5 bg-zinc-900 text-white font-bold text-[11px] uppercase tracking-wider rounded-md flex items-center space-x-1 hover:bg-zinc-800 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>New Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="space-y-0.5">
                    <label className="block text-[9px] font-bold tracking-widest uppercase text-zinc-600">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label className="block text-[9px] font-bold tracking-widest uppercase text-zinc-600">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Subject & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="space-y-0.5">
                    <label className="block text-[9px] font-bold tracking-widest uppercase text-zinc-600">
                      SUBJECT / INQUIRY TYPE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Croissant Pre-Order / Wholesale"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label className="block text-[9px] font-bold tracking-widest uppercase text-zinc-600">
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98460 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-0.5">
                  <label className="block text-[9px] font-bold tracking-widest uppercase text-zinc-600">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-md px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-950 hover:bg-black text-white px-5 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase flex items-center space-x-1.5 transition-all active:scale-95 disabled:opacity-50 shadow"
                  >
                    <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

        {/* 4. BOTTOM 2-COLUMN SECTION: OUR ATELIERS & WE'RE HERE TO HELP */}
        <div className="py-2 sm:py-2.5 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 border-b border-zinc-200 items-center shrink-0">
          
          {/* Left: Our Ateliers */}
          <div className="lg:col-span-6 flex items-center space-x-3">
            <div className="relative h-14 sm:h-16 w-20 sm:w-24 rounded-lg overflow-hidden border border-zinc-300 shadow-sm shrink-0 bg-black">
              <Image
                src="/olene-canto-building.jpg"
                alt="Olene Canto Flagship Seaside Atelier"
                fill
                className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-700 space-y-0.5">
              <p className="font-bold text-xs text-zinc-950">Our Ateliers</p>
              <p className="line-clamp-1"><strong>Beach Flagship:</strong> Beach Road, Old Pier, Kozhikode</p>
              <p className="line-clamp-1"><strong>Ramanattukara:</strong> Production &amp; Wholesale Depot</p>
            </div>
          </div>

          {/* Right: We're here to help */}
          <div className="lg:col-span-6 flex items-center space-x-3">
            <div className="relative h-14 sm:h-16 w-20 sm:w-24 rounded-lg overflow-hidden border border-zinc-300 shadow-sm shrink-0 bg-zinc-950">
              <Image
                src="/defining-quality.png"
                alt="Olene Foods Quality & Certification"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-700 space-y-0.5">
              <p className="font-bold text-xs text-zinc-950">We&apos;re here to help</p>
              <p className="text-zinc-600">Our concierge typically replies within 2 hours.</p>
              <p className="text-[10px] font-bold text-amber-900">ISO 9001 &bull; HACCP &bull; HALAL</p>
            </div>
          </div>

        </div>

        {/* 5. BOTTOM MINIMAL FOOTER BAR INSIDE CARD */}
        <div className="pt-1.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-[10px] sm:text-[11px] font-semibold text-zinc-600 shrink-0">
          <div className="flex items-center space-x-1.5">
            <span className="font-mono font-bold text-zinc-950">+</span>
            <span className="font-black tracking-tighter uppercase text-zinc-950">OLENE CANTO</span>
            <span className="text-zinc-400">|</span>
            <span className="font-serif-luxury italic text-zinc-900 font-medium hidden md:inline">
              &ldquo;For a Healthier Slice Of Your Life.&rdquo;
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 uppercase tracking-wider text-zinc-600 text-[10px]">
            <Link href="/" className="hover:text-black transition-colors">Business</Link>
            <Link href="/our-story" className="hover:text-black transition-colors">About</Link>
            <Link href="/#categories" className="hover:text-black transition-colors">Offerings</Link>
            <Link href="/contact" className="hover:text-black transition-colors font-bold text-black">Contact</Link>
            <span>&bull;</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default function ContactPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  return (
    <main className="min-h-screen lg:h-screen lg:max-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white flex flex-col justify-between pt-14 sm:pt-16 pb-2 px-2 sm:px-4 lg:px-6 overflow-y-auto lg:overflow-hidden">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Area: Fits 100% in viewport without scrolling */}
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center text-zinc-600 font-serif-luxury italic text-base">
            Loading Olene Canto Contact...
          </div>
        }
      >
        <ContactContent />
      </Suspense>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialItem={inquiryTargetItem}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={[]}
        onSelectItem={(item) => {
          setIsSearchOpen(false);
          setIsInquiryOpen(true);
          setInquiryTargetItem(item.name);
        }}
      />
    </main>
  );
}
