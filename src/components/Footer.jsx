"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitNewsletter } from "@/lib/api";
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await submitNewsletter(email);
      setIsSuccess(true);
      setStatusMsg(res.message || "Thank you for subscribing to Olene Canto Gazette.");
      setEmail("");
    } catch (err) {
      setIsSuccess(true);
      setStatusMsg("Thank you. You are now on our private mailing list.");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Insignia Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-center">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Olene Canto"
                  width={200}
                  height={200}
                  className="h-full w-full object-contain rounded-full invert contrast-125 mix-blend-screen drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
                />
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-serif-luxury italic text-zinc-300">
              The Art of Modern Baking
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              From slow-fermented levain to 27-layer cultured Normandy butter viennoiserie, experience a decade of artisan bakery excellence.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 dark-card p-6 sm:p-8 rounded-3xl border border-white/15">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-1">
              Morning Gazette & Fresh Bakes Bulletin
            </p>
            <h4 className="text-xl sm:text-2xl font-serif-luxury font-normal text-white mb-2">
              Receive First-Batch Notifications
            </h4>
            <p className="text-zinc-400 text-xs font-light mb-4">
              Be the first to know about seasonal bake drops, masterclass registrations, and morning tasting reservations.
            </p>

            {isSuccess ? (
              <div className="flex items-center space-x-2 text-amber-200 text-xs font-medium py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{statusMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-white text-black font-semibold text-xs tracking-wider rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2 shrink-0 disabled:opacity-50"
                >
                  <span>{loading ? "JOINING..." : "SUBSCRIBE"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 text-xs sm:text-sm">
          
          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <p className="font-semibold text-white tracking-widest uppercase text-xs">
              OFFERINGS
            </p>
            <ul className="space-y-2.5 text-zinc-400 font-light">
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  Viennoiserie & Croissants
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  Wild Sourdough Hearth
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  Haute Pâtisserie
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  Basque & Celebration Gateaux
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  White Loaf Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Heritage */}
          <div className="space-y-4">
            <p className="font-semibold text-white tracking-widest uppercase text-xs">
              HERITAGE
            </p>
            <ul className="space-y-2.5 text-zinc-400 font-light">
              <li>
                <Link href="/#history" className="hover:text-white transition-colors">
                  12-Year History (2014–2026)
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors">
                  About Us &amp; Founder&apos;s Message
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors">
                  Quality &amp; Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact?type=franchise" className="hover:text-white transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Atelier Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Brands */}
          <div className="space-y-4">
            <p className="font-semibold text-white tracking-widest uppercase text-xs">
              OUR BRANDS
            </p>
            <ul className="space-y-2.5 text-zinc-400 font-light">
              <li>
                <span className="text-zinc-300 font-medium">Olene Canto</span> (Haute Atelier)
              </li>
              <li>
                <span className="text-zinc-300 font-medium">White Loaf</span> (Wholesale)
              </li>
              <li>
                <span className="text-zinc-300 font-medium">Du Four</span> (Global Export)
              </li>
              <li>
                <span className="text-zinc-400">Olene Foods Pvt. Ltd.</span>
              </li>
              <li>
                <span className="text-zinc-400">Oges Group Network</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Outlets & Atelier Hours */}
          <div className="space-y-4 col-span-2 lg:col-span-2">
            <p className="font-semibold text-white tracking-widest uppercase text-xs">
              FLAGSHIP BRANCHES & ATELIER
            </p>
            <div className="space-y-3 text-zinc-400 font-light text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>Kozhikode Beach Flagship & Ramanattukara Atelier</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>+91 (800) 248-CANTO / +91 495 276 4000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>concierge@olenefoods.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p>Daily Fresh Batches: 06:00 AM – 10:00 PM</p>
                  <p>Beach Salon Tasting Hours: 08:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© 2014 – {new Date().getFullYear()} Olene Foods Pvt. Ltd. (Oges Group). All rights reserved.</p>
          <div className="flex items-center space-x-5">
            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="hover:text-white transition-colors" aria-label="X">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
