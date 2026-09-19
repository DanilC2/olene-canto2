"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCampaignCollage({ onOpenInquiry }) {
  const router = useRouter();

  const handleClick = (itemTitle) => {
    if (onOpenInquiry) {
      onOpenInquiry(itemTitle);
    } else {
      router.push("/categories");
    }
  };

  return (
    <section className="w-full bg-black py-7 sm:py-9 lg:py-12 overflow-hidden border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collage Grid matching reference layout: Left large hero banner, Right 2 stacked banners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">

          {/* Left Column: Large Hero Poster (Spicy Crunch in Every Bite) */}
          <div className="md:col-span-7 flex flex-col">
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick("White Loaf Potato Chilli - Spicy Crunch")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick("White Loaf Potato Chilli - Spicy Crunch");
                }
              }}
              className="group relative w-full flex-1 aspect-square sm:aspect-[4/3] md:aspect-auto overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none"
              title="Click to view details / order"
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
            </div>
          </div>

          {/* Right Column: Two Stacked Posters */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">

            {/* Top Right: Crunch in Every Bite Banner */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick("White Loaf Artisan Crunch Collection")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick("White Loaf Artisan Crunch Collection");
                }
              }}
              className="group relative w-full aspect-[1024/682] overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none"
              title="Click to view details / order"
            >
              <Image
                src="/campaign-crunch-bite.jpg"
                alt="White Loaf Crunch in Every Bite"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Bottom Right: From Everyday Snacks to Festive Feasts Banner */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick("White Loaf Festive Feasts & Everyday Snacks")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick("White Loaf Festive Feasts & Everyday Snacks");
                }
              }}
              className="group relative w-full aspect-[1024/629] overflow-hidden rounded-2xl sm:rounded-3xl bg-zinc-950 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 cursor-pointer select-none"
              title="Click to view details / order"
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
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
