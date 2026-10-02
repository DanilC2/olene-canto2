"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Store, ArrowRight, ChevronDown, ChevronUp, X, ShoppingBag } from "lucide-react";

const BESTSELLER_PRODUCTS = [
  {
    id: "whiteloaf-banaras-soan-papdi",
    name: "White Loaf Banaras Soan Papdi",
    category: "sweets",
    categoryName: "Sweets",
    badge: "Bestseller",
    modalBadge: "Silky Flakes",
    price: "₹280",
    weight: "400g Presentation Box",
    image: "/bestsellers/whiteloaf-banaras-soan-papdi.jpg",
    tagline: "A bite of a moment of delight • The Heavenly Source of Happiness...!",
    description: "Famous Banarasi-style flaky sweet made with roasted gram flour and pure desi ghee, hand-pulled into paper-thin golden filaments that dissolve instantly on the tongue, garnished with crunchy pistachios and California almonds.",
    highlights: [
      "Hand-Pulled Porous Fibers",
      "Topped with Almonds & Pistachios",
      "Pure Desi Ghee Aroma",
      "ISO 9001:2015 Certified",
    ],
    ingredients: [
      "Bengal Gram Flour (Besan)",
      "Refined Wheat Flour",
      "Pure Desi Ghee",
      "Sugar Syrup",
      "Almonds & Pistachios",
      "Green Cardamom",
    ],
  },
  {
    id: "whiteloaf-bombay-halwa",
    name: "White Loaf Bombay Halwa",
    category: "sweets",
    categoryName: "Sweets",
    badge: "Bestseller",
    modalBadge: "Rich Ghee Halwa",
    price: "₹300",
    weight: "400g Presentation Box",
    image: "/bestsellers/whiteloaf-bombay-halwa.jpg",
    tagline: "A bite of a moment of delight • The Heavenly Source of Happiness...!",
    description: "Glossy, melt-in-mouth Karachi-style Bombay halwa cooked to a translucent, chewy perfection in pure cow ghee, generously studded with crunchy melon seeds, almonds, and pistachios. Certified ISO 9001:2015 quality by White Loaf Craft Bakers.",
    highlights: [
      "Translucent Chewy Texture",
      "Loaded with Melon Seeds & Nuts",
      "Slow-Cooked in Pure Ghee",
      "ISO 9001:2015 Certified",
    ],
    ingredients: [
      "Corn Starch",
      "Pure Cow Ghee",
      "Cane Sugar",
      "Melon Seeds (Magaz)",
      "Almonds & Pistachios",
      "Cardamom & Saffron Essence",
    ],
  },
  {
    id: "whiteloaf-beetroot-mysore-pak",
    name: "White Loaf Beetroot Mysore Pak",
    category: "sweets",
    categoryName: "Sweets",
    badge: "Bestseller",
    modalBadge: "Royal Innovation",
    price: "₹340",
    weight: "400g Presentation Box",
    image: "/bestsellers/whiteloaf-beetroot-mysore-pak.jpg",
    tagline: "A bite of a moment of delight • The Heavenly Source of Happiness...!",
    description: "A regal modern twist on the classic royal sweet: slow-roasted besan infused with the natural sweetness and vibrant ruby color of fresh farm beetroots, cooked with generous amounts of aromatic pure desi cow ghee.",
    highlights: [
      "Fresh Farm Beetroot Infusion",
      "Natural Ruby Red Color",
      "Porous Melt-In-Mouth Texture",
      "100% Pure Desi Ghee",
    ],
    ingredients: [
      "Fresh Beetroot Puree",
      "Gram Flour (Besan)",
      "100% Pure Desi Cow Ghee",
      "Sugar Syrup",
      "Cardamom",
    ],
  },
  {
    id: "whiteloaf-milk-cashew-laddu",
    name: "White Loaf Milk Cashew Laddu",
    category: "sweets",
    categoryName: "Sweets",
    badge: "Bestseller",
    modalBadge: "Rich Milk & Nut",
    price: "₹350",
    weight: "500g Presentation Box",
    image: "/bestsellers/whiteloaf-milk-cashew-laddu.jpg",
    tagline: "A bite of a moment of delight • The Heavenly Source of Happiness...!",
    description: "Velvety ivory spheres hand-rolled from condensed full-cream milk fudge, packed with crunchy roasted cashew halves and plump golden raisins, dusted in fine crystal sugar.",
    highlights: [
      "Full Cream Condensed Milk",
      "Loaded with Cashews & Raisins",
      "Sugar Crystal Dusting",
      "Rich Velvety Texture",
    ],
    ingredients: [
      "Full Cream Milk Solids (Mawa)",
      "Roasted Cashew Nuts",
      "Golden Raisins",
      "Pure Desi Ghee",
      "Cane Sugar",
      "Cardamom",
    ],
  },
  {
    id: "whiteloaf-chocolate-mud-cake",
    name: "White Loaf Chocolate Mud Cake",
    category: "cakes",
    categoryName: "Cakes",
    badge: "Bestseller",
    modalBadge: "Craft Bakers Special",
    price: "₹380",
    weight: "400g Fluted Baking Dish Box",
    image: "/bestsellers/whiteloaf-chocolate-mud-cake.jpg",
    tagline: "Decadent Cocoa Fudge, Silky Ganache & Rich Chocolate Chips",
    description: "An ultra-rich, velvety chocolate mud cake baked to moist perfection, coated with a glossy molten dark chocolate glaze and loaded with crunchy chocolate chips. Certified ISO 9001:2015 quality by White Loaf Craft Bakers.",
    highlights: [
      "ISO 9001:2015 Certified",
      "Dark Chocolate Chips Topping",
      "Silky Ganache Crust",
      "The Heavenly Source of Happiness",
    ],
    ingredients: [
      "Dutch Processed Dark Cocoa",
      "Belgian Chocolate Chips",
      "Pure Dairy Butter",
      "Farm Fresh Eggs",
      "Brown Cane Sugar",
      "Madagascar Vanilla",
    ],
  },
  {
    id: "whiteloaf-choco-chip-cookies",
    name: "White Loaf Choco Chip Cookies",
    category: "cookies",
    categoryName: "Cookies",
    badge: "Bestseller",
    modalBadge: "Decadent Cocoa",
    price: "₹240",
    weight: "350g Airtight Canister",
    image: "/bestsellers/whiteloaf-choco-chip-cookies-new.jpg",
    tagline: "Generously Studded with Dark Chocolate Drops in Golden Butter Dough",
    description: "Golden, crumbly butter cookies loaded with rich dark chocolate chips. Every bite delivers a mouthwatering contrast between crisp caramelized butter cookie and smooth cocoa melt, sealed in an airtight chocolate-brown canister.",
    highlights: [
      "Loaded with Dark Choco Chips",
      "Pure Dairy Butter Crumb",
      "A Taste to Remember Forever",
      "ISO & HACCP Certified Quality",
    ],
    ingredients: [
      "Fine Wheat Flour",
      "Dark Chocolate Chips",
      "Pure Dairy Butter",
      "Brown Cane Sugar",
      "Madagascar Vanilla Extract",
      "Baking Powder",
      "Sea Salt",
    ],
  },
  {
    id: "whiteloaf-nutty-buddy-cookies",
    name: "White Loaf Nutty Buddy Cookies",
    category: "cookies",
    categoryName: "Cookies",
    badge: "Bestseller",
    modalBadge: "Nutty Delight",
    price: "₹250",
    weight: "350g Airtight Canister",
    image: "/bestsellers/whiteloaf-nutty-buddy-cookies.jpg",
    tagline: "Golden Butter Cookies Studded with Roasted Cashews & Fruit Gems",
    description: "Generously studded with oven-roasted cashews, California almonds, and sweet caramelized fruit gems. Sealed in a signature deep burgundy airtight canister to ensure every crunchy bite stays fresh.",
    highlights: [
      "Roasted Cashews & Almonds",
      "Candied Fruit Gems",
      "A Taste to Remember Forever",
      "Airtight Locking Canister",
    ],
    ingredients: [
      "Fine Wheat Flour",
      "Pure Cultured Butter",
      "Roasted Cashews",
      "California Almonds",
      "Candied Fruit Bits",
      "Cane Sugar",
      "Vanilla Infusion",
    ],
  },
  {
    id: "whiteloaf-american-gold-cookies",
    name: "White Loaf American Gold Cookies",
    category: "cookies",
    categoryName: "Cookies",
    badge: "Bestseller",
    modalBadge: "Golden Crunch",
    price: "₹250",
    weight: "350g Airtight Canister",
    image: "/bestsellers/whiteloaf-american-gold-cookies.jpg",
    tagline: "Crispy Golden Chunky Cookies Studded with Crushed Roasted Nuts & Cranberries",
    description: "American-style golden crisp butter cookies loaded with crushed roasted almonds, pistachios, cranberries, and rich butter vanilla aroma. Packed in a signature forest green airtight canister.",
    highlights: [
      "Roasted Almonds & Pistachios",
      "Studded with Dried Cranberries",
      "Signature American Gold Recipe",
      "Airtight Locking Canister",
    ],
    ingredients: [
      "Fine Wheat Flour",
      "Pure Cultured Butter",
      "Crushed Roasted Almonds",
      "Pistachios",
      "Dried Cranberries",
      "Golden Cane Sugar",
      "Bourbon Vanilla",
      "Sea Salt",
    ],
  },
];

export default function BestsellerSection({ onOpenInquiry }) {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
          - Responsive view (mobile): 2 products in a row (grid-cols-2), 4 items initially
          - Desktop view: 4 products in a row, giving exactly 2 rows with 4 products each (md:grid-cols-4)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {BESTSELLER_PRODUCTS.map((product, index) => {
            const isHiddenOnMobile = !showAllMobile && index >= 4;

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`group flex-col justify-between rounded-2xl sm:rounded-3xl border border-zinc-200/90 bg-white p-3 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-[#d9b578] transition-all duration-300 cursor-pointer ${
                  isHiddenOnMobile ? "hidden md:flex" : "flex"
                }`}
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
            );
          })}
        </div>

        {/* Mobile See More / See Less Toggle Button */}
        {BESTSELLER_PRODUCTS.length > 4 && (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => {
                if (showAllMobile) {
                  const el = document.getElementById("bestsellers");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
                setShowAllMobile((prev) => !prev);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-300 bg-white text-zinc-900 text-xs font-bold uppercase tracking-wider hover:border-[#a4542d] hover:text-[#a4542d] active:scale-95 transition-all duration-200 shadow-sm"
              aria-expanded={showAllMobile}
            >
              <span>{showAllMobile ? "See Less" : "See More"}</span>
              {showAllMobile ? (
                <ChevronUp className="w-4 h-4 text-[#a4542d]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#a4542d]" />
              )}
            </button>
          </div>
        )}

        {/* Prominent Shop on Store Button */}
        <div className="mt-5 sm:mt-14 flex justify-center">
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

      {/* PRODUCT QUICK VIEW MODAL (MATCHING SECOND IMAGE) */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl animate-scaleUp my-8 overflow-hidden text-zinc-900 cursor-default max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close product details"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors z-20 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-start">
              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-zinc-200/80 flex items-center justify-center shadow-inner">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  unoptimized
                  className="object-contain object-center"
                />
                <span className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-zinc-900 shadow-md">
                  {selectedProduct.modalBadge || selectedProduct.badge}
                </span>
              </div>

              {/* Product Details */}
              <div className="space-y-3.5 sm:space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B1B22]">
                    {selectedProduct.categoryName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-zinc-950 mt-1">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-600 mt-0.5">
                    {selectedProduct.tagline}
                  </p>
                </div>

                <div className="flex items-center space-x-3 py-2 border-y border-zinc-100">
                  <span className="text-lg sm:text-xl font-bold text-zinc-900">
                    {selectedProduct.price}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    / {selectedProduct.weight}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                {/* Highlights */}
                {selectedProduct.highlights && selectedProduct.highlights.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAF6EF] text-zinc-800 border border-[#EBE3D3] px-2.5 py-1 rounded-md"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ingredients */}
                {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      Ingredients
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-normal">
                      {selectedProduct.ingredients.join(" • ")}
                    </p>
                  </div>
                )}

                {/* Action CTA inside modal */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const name = selectedProduct.name;
                      setSelectedProduct(null);
                      if (onOpenInquiry) {
                        onOpenInquiry(name);
                      }
                    }}
                    className="w-full py-3 rounded-xl bg-[#9B1B22] hover:bg-[#83141a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Enquire / Pre-Order Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
