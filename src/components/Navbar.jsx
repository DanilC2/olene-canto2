"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Mail, Search, Menu as MenuIcon, X, ChevronRight } from "lucide-react";

export default function Navbar({ onOpenSearch, onOpenInquiry }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isLightNav = !isHome || isScrolled;

  const navLinks = [
    { name: "BUSINESS", href: "/" },
    { name: "OUR STORY", href: "/our-story" },
    { name: "CATEGORIES", href: "/categories" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightNav
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-zinc-200/80"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              href="/"
              className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isLightNav
                    ? "h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                    : "h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                }`}
              >
                <Image
                  src="/logo.jpg"
                  alt="Olene Canto Logo"
                  width={220}
                  height={220}
                  className={`h-full w-full object-contain rounded-full transition-all duration-300 ${
                    isLightNav
                      ? "mix-blend-multiply"
                      : "invert contrast-125 mix-blend-screen drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]"
                  }`}
                  priority
                />
              </div>
              <span className="sr-only">Olene Canto</span>
            </Link>

            {/* Center: Desktop Navigation links — Black on Light/Scrolled pages, White on Home Hero */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group py-1 text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 whitespace-nowrap ${
                      isLightNav
                        ? isActive
                          ? "text-black font-bold"
                          : "text-zinc-900 hover:text-black font-semibold"
                        : "text-white/90 hover:text-white drop-shadow"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                        isActive
                          ? "w-full " + (isLightNav ? "bg-black" : "bg-white")
                          : "w-0 group-hover:w-full " + (isLightNav ? "bg-black" : "bg-white shadow-sm")
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Action Icons */}
            <div className="hidden sm:flex items-center space-x-2.5">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${
                    isLightNav
                      ? "border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 shadow-sm"
                      : "border-white/30 bg-black/40 hover:bg-white hover:text-black text-white backdrop-blur-md"
                  }`}
                  aria-label="Language Selector"
                >
                  <Globe className="w-4 h-4" />
                </button>
                {langDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 z-50 text-xs">
                    {["EN (English)", "FR (Français)", "DE (Deutsch)", "IT (Italiano)"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang.substring(0, 2));
                          setLangDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors font-medium"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <button
                onClick={onOpenSearch}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-sm ${
                  isLightNav
                    ? "border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 shadow-sm"
                    : "border-white/30 bg-black/40 hover:bg-white hover:text-black text-white backdrop-blur-md"
                }`}
                aria-label="Search Bakery Offerings"
                title="Search Bakes & Ingredients"
              >
                <Search className="w-4 h-4" />
              </button>

            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={onOpenSearch}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  isLightNav
                    ? "border-zinc-300 bg-white text-zinc-900 shadow-sm"
                    : "border-white/30 bg-black/40 text-white"
                }`}
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  isLightNav
                    ? "border-zinc-300 bg-white text-zinc-900 shadow-sm"
                    : "border-white/30 bg-black/40 text-white"
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="space-y-6">
            <div className="border-b border-zinc-200 pb-4">
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Olene Canto Atelier</p>
              <p className="text-base font-serif-luxury italic text-zinc-900 font-semibold">The Art of Modern Baking</p>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-semibold tracking-wider text-zinc-900 hover:text-black py-2 border-b border-zinc-100"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-200">
            <Link
              href="/contact?type=product-inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-black text-white font-semibold text-sm rounded-xl tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>PRE-ORDER FRESH BAKES</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
