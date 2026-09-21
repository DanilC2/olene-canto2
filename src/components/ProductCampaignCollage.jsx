"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCampaignCollage() {
  return (
    <section className="w-full bg-black py-7 sm:py-9 lg:py-12 overflow-hidden border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collage Grid: Left large hero banner, Right 2 stacked banners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">

          {/* Left Column: Large Hero Poster (White Loaf Potato Chilli -> Whiteloaf Snacks) */}
          <div className="md:col-span-7 flex flex-col">
            <Link
              href="/categories/whiteloaf-snacks"
              className="group relative w-full flex-1 aspect-square sm:aspect-[4/3] md:aspect-auto overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none block"
              title="Explore White Loaf Snacks"
            >
              <Image
                src="/campaign-potato-chilli-hero.jpg"
                alt="White Loaf Potato Chilli Craft Bakers Poster"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
            </Link>
          </div>

          {/* Right Column: Two Stacked Posters */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">

            {/* Top Right: White Loaf Cookies Banner -> Whiteloaf Cookies */}
            <Link
              href="/categories/whiteloaf-cookies"
              className="group relative w-full aspect-[1024/670] overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none block"
              title="Explore White Loaf Cookies"
            >
              <Image
                src="/campaign-cookies-crunch.jpg"
                alt="White Loaf Masala Cookies & American Gold Cookies - Crunch in Every Bite"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
            </Link>

            {/* Bottom Right: From Everyday Snacks to Festive Feasts Banner -> Whiteloaf Snacks */}
            <Link
              href="/categories/whiteloaf-snacks"
              className="group relative w-full aspect-[1024/629] overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none block"
              title="Explore White Loaf Snacks"
            >
              <Image
                src="/campaign-festive-feasts.jpg"
                alt="White Loaf - From Everyday Snacks to Festive Feasts"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
