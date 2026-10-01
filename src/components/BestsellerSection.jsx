"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Store, ArrowRight } from "lucide-react";

const BESTSELLER_PRODUCTS = [
  {
    id: "whiteloaf-banaras-soan-papdi",
    name: "White Loaf Banaras Soan Papdi",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-banaras-soan-papdi.jpg",
  },
  {
    id: "whiteloaf-bombay-halwa",
    name: "White Loaf Bombay Halwa",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-bombay-halwa.jpg",
  },
  {
    id: "whiteloaf-beetroot-mysore-pak",
    name: "White Loaf Beetroot Mysore Pak",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-beetroot-mysore-pak.jpg",
  },
  {
    id: "whiteloaf-milk-cashew-laddu",
    name: "White Loaf Milk Cashew Laddu",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-milk-cashew-laddu.jpg",
  },
  {
    id: "whiteloaf-chocolate-mud-cake",
    name: "White Loaf Chocolate Mud Cake",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-chocolate-mud-cake.jpg",
  },
  {
    id: "whiteloaf-choco-chip-cookies",
    name: "White Loaf Choco Chip Cookies",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-choco-chip-cookies-new.jpg",
  },
  {
    id: "whiteloaf-nutty-buddy-cookies",
    name: "White Loaf Nutty Buddy Cookies",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-nutty-buddy-cookies.jpg",
  },
  {
    id: "whiteloaf-american-gold-cookies",
    name: "White Loaf American Gold Cookies",
    brand: "White Loaf Craft Bakers",
    badge: "Bestseller",
    image: "/bestsellers/whiteloaf-american-gold-cookies.jpg",
  },
];

export default function BestsellerSection({ onOpenInquiry }) {
  const handleInquiry = (productName) => {
    if (onOpenInquiry) {
      onOpenInquiry(productName);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#a4542d]">
              Curated Favorites
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1d1513] tracking-tight">
              Bestsellers
            </h2>
          </div>

          <Link
            href="/categories"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a4542d] hover:text-[#1d1513] transition-colors group"
          >
            <Store className="w-4 h-4 text-[#a4542d] group-hover:scale-110 transition-transform" />
            <span>Shop on Store</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#a4542d] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 
          Grid Layout:
          - Responsive view (mobile): 2 products in a row (grid-cols-2)
          - Desktop view: 4 products in a row, giving exactly 2 rows with 4 products each (md:grid-cols-4)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {BESTSELLER_PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => handleInquiry(product.name)}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-[#d9b578] transition-all duration-300 cursor-pointer"
            >
              {/* Product Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2 sm:p-3 mb-2.5 sm:mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Floating Bestseller Badge */}
                <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider bg-[#1d1513] text-white shadow-sm">
                  {product.badge}
                </span>
              </div>

              {/* Product Name Only Below Image */}
              <div className="pt-2 pb-1 text-center">
                <h3 className="font-serif-luxury text-sm sm:text-base lg:text-lg font-medium text-zinc-900 group-hover:text-[#a4542d] transition-colors leading-snug">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Shop on Store Button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2.5 px-7 py-3 sm:px-9 sm:py-3.5 rounded-full bg-[#1d1513] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#a4542d] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-md group"
          >
            <Store className="w-4 h-4 text-[#d9b578] group-hover:scale-110 transition-transform" />
            <span>Shop on Store</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
