"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Butter Cookies",
    src: "/Camera_orbiting_butter_cookies_c…_202608281632.mp4",
  },
  {
    id: 2,
    title: "Cake & Tin",
    src: "/Camera_orbiting_cake_and_tin_202608281644.mp4",
  },
  {
    id: 3,
    title: "Orange Sweets",
    src: "/Camera_orbits_orange_sweets_show…_202608281633.mp4",
  },
  {
    id: 4,
    title: "Cookie Tin",
    src: "/Canto_cookie_tin_product_showcase_202608281632.mp4",
  },
  {
    id: 5,
    title: "Nutty Buddy",
    src: "/Nutty_Buddy_Cookies_canister_rot…_202608281632.mp4",
  },
];

export default function ProductVideoCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTime = 0;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      container.scrollLeft += delta * 0.08;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const scrollByCards = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    const gap = 18;
    const scrollAmount = card ? card.offsetWidth + gap : 320;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a4542d]">
            Product stories
          </p>
          <h2 className="font-serif-luxury text-[1.8rem] leading-none text-[#1d1513] sm:text-[2.4rem] lg:text-[3rem]">
            See the products in motion
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll product videos left"
            onClick={() => scrollByCards("prev")}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dcc8] bg-white/90 text-[#2a1d18] shadow-[0_10px_24px_rgba(57,38,24,0.12)] transition hover:scale-105 hover:bg-[#f8f3ec] lg:left-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto px-12 pb-2 sm:px-14 lg:px-16"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            <div className="flex min-w-max gap-[18px]">
              {[...videos, ...videos].map((video, index) => (
                <Link
                  key={`${video.id}-${index}`}
                  href={`/contact?product=${encodeURIComponent(video.title)}`}
                  className="group relative h-[290px] w-[220px] overflow-hidden rounded-[24px] border border-[#ebdfd2] bg-[#f8f4ee] shadow-[0_12px_28px_rgba(74,54,40,0.08)] sm:h-[330px] sm:w-[270px] lg:h-[360px] lg:w-[300px] block cursor-pointer transition-transform hover:scale-[1.02]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[24px]">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controls={false}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Top Right Enquire badge on hover */}
                  <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-white/20 shadow-md">
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3.5 pb-3 pt-8 text-white">
                    <span className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-white drop-shadow sm:text-[0.8rem]">
                      {video.title}
                    </span>
                    <span className="rounded-full border border-white/40 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white">
                      Order / Inquire
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll product videos right"
            onClick={() => scrollByCards("next")}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8dcc8] bg-white/90 text-[#2a1d18] shadow-[0_10px_24px_rgba(57,38,24,0.12)] transition hover:scale-105 hover:bg-[#f8f3ec] lg:right-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
