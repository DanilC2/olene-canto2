"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import SearchModal from "@/components/SearchModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
  CATEGORIES_SHOWCASE,
  getCategoryById,
  getProductsByCategory,
  getAllProducts,
} from "@/lib/categoriesData";
import {
  ChevronRight,
  ArrowLeft,
  Search,
  Sparkles,
  ShoppingBag,
  Eye,
  CheckCircle2,
  Wheat,
  Clock,
  Award,
  X,
  ShieldCheck,
  Store,
} from "lucide-react";

export default function CategoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const category = useMemo(() => getCategoryById(slug), [slug]);
  const allCategoryProducts = useMemo(() => getProductsByCategory(slug), [slug]);
  const allProductsCatalog = useMemo(() => getAllProducts(), []);

  // UI States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Filter products by internal page search
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return allCategoryProducts;
    const q = searchQuery.toLowerCase().trim();
    return allCategoryProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q)) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  }, [allCategoryProducts, searchQuery]);

  const handleOpenInquiry = (productName) => {
    setInquiryTargetItem(productName || (category ? category.title : undefined));
    setIsInquiryOpen(true);
  };

  // If category is not found in database
  if (!category) {
    return (
      <main className="min-h-screen bg-[#FCFAF6] text-zinc-900 flex flex-col justify-between">
        <Navbar
          onOpenSearch={() => setIsSearchModalOpen(true)}
          onOpenInquiry={() => handleOpenInquiry()}
        />
        <div className="pt-32 pb-20 max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
            <Wheat className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif-luxury font-medium text-zinc-900 mb-3">
            Category Not Found
          </h1>
          <p className="text-sm text-zinc-600 mb-6">
            The category &ldquo;{slug}&rdquo; could not be located in our bakery catalog.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#9B1B22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7e141a] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Categories</span>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FCFAF6] text-zinc-900 selection:bg-[#9B1B22] selection:text-white flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <div className="flex-1">
        {/* 1. BREADCRUMBS BAR */}
        <section className="pt-24 sm:pt-28 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <Link href="/categories" className="hover:text-zinc-900 transition-colors">
              Categories
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[#9B1B22] font-semibold uppercase tracking-wider">
              {category.title}
            </span>
          </nav>
        </section>

        {/* 2. CATEGORY HERO BANNER */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-10 sm:pb-12">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white shadow-xl min-h-[340px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            {/* Background Image */}
            <Image
              src={category.image}
              alt={category.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-black/30 pointer-events-none" />

            {/* Banner Content */}
            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-amber-200 border border-white/15">
                  {category.badge}
                </span>
                <span className="text-xs text-zinc-300 font-medium">
                  {category.tagline}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight tracking-tight uppercase">
                {category.title}
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                {category.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenInquiry(category.title)}
                  className="px-6 py-2.5 rounded-full bg-[#9B1B22] hover:bg-[#85161c] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  Enquire Range
                </button>
                <Link
                  href="/categories"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-semibold tracking-wider transition-all inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Categories</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Category Switcher Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIES_SHOWCASE.map((cat) => {
              const isActive = cat.id === category.id;
              return (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#9B1B22] text-white shadow-md scale-105"
                      : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. PRODUCT CATALOG GRID SECTION */}
        <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 sm:pb-24">
          {/* Subheader & Search Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-zinc-200 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-zinc-950">
                Inside {category.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-light mt-0.5">
                Showing {filteredProducts.length} artisan creation{filteredProducts.length === 1 ? "" : "s"}
              </p>
            </div>

            {/* Quick in-page product search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search inside ${category.title}...`}
                className="w-full pl-10 pr-8 py-2 text-xs bg-white border border-zinc-200 rounded-full focus:outline-none focus:border-[#9B1B22] transition-colors text-zinc-800 placeholder:text-zinc-400 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200 max-w-md mx-auto my-12 shadow-sm">
              <Wheat className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif-luxury font-medium text-zinc-800">
                No items match &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-xs text-zinc-500 mt-1 mb-4">
                Try searching for ingredients, flavors, or clear your query.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Product Image — Fully fits image without cropping, completely text-free */}
                  <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden p-2 sm:p-3">
                    <Image
                      src={product.image}
                      alt={product.name || "Product Image"}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="border-t border-zinc-100 p-2.5 sm:px-4 sm:py-3 flex-1 flex flex-col justify-between">
                    <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[10px] sm:text-xs text-zinc-500 line-clamp-1 sm:line-clamp-2 leading-tight">
                      {product.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 4. ASSURANCE & QUALITY STRIP */}
        <section className="bg-white border-t border-zinc-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-[#FCFAF6] border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] text-[#9B1B22] flex items-center justify-center shrink-0">
                <Wheat className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">100% Pure Butter & Ghee</h4>
                <p className="text-[11px] text-zinc-500 font-light">Zero palm oil or margarine</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-[#FCFAF6] border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] text-[#9B1B22] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Zero Preservatives</h4>
                <p className="text-[11px] text-zinc-500 font-light">Clean label natural recipes</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-[#FCFAF6] border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] text-[#9B1B22] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">ISO & Halal Certified</h4>
                <p className="text-[11px] text-zinc-500 font-light">Export-grade food standards</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-[#FCFAF6] border border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6EF] text-[#9B1B22] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">Daily Fresh Batches</h4>
                <p className="text-[11px] text-zinc-500 font-light">Slow hearth baked to order</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5. FOOTER */}
      <Footer />

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-scaleUp my-8 overflow-hidden text-zinc-900">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Product Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-zinc-200/80 flex items-center justify-center shadow-inner">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain object-center"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-zinc-900 shadow-md">
                  {selectedProduct.badge}
                </span>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B1B22]">
                    {selectedProduct.categoryName}
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-medium text-zinc-950 mt-1">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-600 mt-0.5">
                    {selectedProduct.tagline}
                  </p>
                </div>

                <div className="flex items-center space-x-3 py-2 border-y border-zinc-100">
                  <span className="text-xl font-bold text-zinc-900">
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
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-800 mb-2">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.highlights?.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#FAF6EF] text-zinc-800 border border-[#EBE3D3] px-2.5 py-1 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ingredients */}
                {selectedProduct.ingredients && (
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
                    onClick={() => {
                      const name = selectedProduct.name;
                      setSelectedProduct(null);
                      handleOpenInquiry(name);
                    }}
                    className="w-full py-3 rounded-xl bg-[#9B1B22] hover:bg-[#83141a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
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

      {/* Concierge Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialItem={inquiryTargetItem}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        items={allProductsCatalog}
        onSelectItem={(item) => {
          setIsSearchModalOpen(false);
          handleOpenInquiry(item.name);
        }}
      />
    </main>
  );
}
