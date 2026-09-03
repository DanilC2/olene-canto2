"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200 pt-16 pb-12 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" threshold={0.15}>
        
        {/* 1. Header Banner */}
        <div className="pb-12 border-b border-zinc-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#9b722b] font-bold mb-2">
              We&apos;re Listening
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-950 max-w-2xl leading-tight">
              Need to talk to us? Contact us today.
            </h2>
          </div>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d9b578] hover:bg-[#c9a56a] text-black font-semibold text-xs uppercase tracking-[0.16em] px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-zinc-200">
          
          {/* Column 1: Brand & Locations */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="Olene Canto"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain rounded-full mix-blend-multiply"
                />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-medium text-zinc-950 leading-none">Olene Canto</h3>
                <p className="text-[11px] text-zinc-500 mt-1">Artisan Bakery &amp; Pâtisserie</p>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b722b] mb-2.5">
                Our Locations
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9b578]" />
                  <span>Manjeri - Malappuram</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9b578]" />
                  <span>Perinthalmanna</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9b578]" />
                  <span>Calicut</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9b578]" />
                  <span>Ramanattukara</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b722b] mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-black transition-colors">
                  Our Story &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-black transition-colors">
                  Bakery &amp; Pâtisserie Menu
                </Link>
              </li>
              <li>
                <Link href="/#white-loaf" className="hover:text-black transition-colors">
                  White Loaf Wholesale
                </Link>
              </li>
              <li>
                <Link href="/#franchise" className="hover:text-black transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Office Address */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b722b] mb-4">
              Registered Office
            </p>
            <div className="space-y-3 text-xs text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9b722b] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="text-zinc-950 font-semibold text-sm">Olene Foods Pvt. Ltd.</p>
                  <p className="mt-1">Thadapparambu, Payyanad PO</p>
                  <p>Manjeri, Malappuram,</p>
                  <p>Kerala, India - 676122</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Globe className="w-4 h-4 text-[#9b722b] shrink-0" />
                <a
                  href="https://www.olenecanto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-black transition-colors font-medium"
                >
                  www.olenecanto.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Inquiries & Communications */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b722b] mb-4">
              Contact Inquiries
            </p>
            
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-zinc-500 font-medium mb-1">Corporate Sales:</p>
                <a
                  href="mailto:admin@olenecanto.com"
                  className="inline-flex items-center gap-2 text-zinc-950 font-medium hover:text-[#9b722b] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9b722b]" />
                  <span>admin@olenecanto.com</span>
                </a>
              </div>

              <div className="pt-1">
                <p className="text-zinc-500 font-medium mb-1">Other Inquiries:</p>
                <a
                  href="mailto:admin@olenecanto.com"
                  className="inline-flex items-center gap-2 text-zinc-950 font-medium hover:text-[#9b722b] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9b722b]" />
                  <span>admin@olenecanto.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Olene Foods Pvt. Ltd. All rights reserved.</p>
          <a
            href="https://www.olenecanto.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-black font-medium transition-colors"
          >
            www.olenecanto.com
          </a>
        </div>

      </ScrollReveal>
    </footer>
  );
}
