"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    id: 6,
    title: "Milk Bread Package",
    src: "/Milk_bread_package_rotating_202609021547.mp4",
  },
];

export default function ProductVideoCarousel() {
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTime = 0;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPausedRef.current) {
        container.scrollLeft += delta * 0.05;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const pauseAutoScrollTemporarily = (duration = 4000) => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        isPausedRef.current = false;
      }
    }, duration);
  };

  const scrollByCards = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    pauseAutoScrollTemporarily(4500);

    const card = container.querySelector("[data-carousel-card]");
    const gap = 18;
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    const scrollAmount = cardWidth + gap;

    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      if (currentScroll + scrollAmount >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (currentScroll - scrollAmount <= 5) {
        container.scrollTo({ left: maxScroll / 2, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-14 select-none">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a4542d]">
              Product stories
            </p>
            <h2 className="font-serif-luxury text-[1.8rem] leading-none text-[#1d1513] sm:text-[2.4rem] lg:text-[3rem]">
              See the products in motion
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 font-medium">
            <span>Scroll or use arrows</span>
          </div>
        </div>

        <div
          className="relative group/carousel"
          onMouseEnter={() => {
            isHoveredRef.current = true;
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            isPausedRef.current = false;
          }}
          onTouchStart={() => {
            pauseAutoScrollTemporarily(5000);
          }}
        >
          {/* Left Navigation Arrow */}
          <button
            type="button"
            aria-label="Scroll product videos left"
            onClick={() => scrollByCards("prev")}
            className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9b578]/50 bg-white/95 text-[#2a1d18] shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#f8f3ec] hover:border-[#d9b578] hover:text-black active:scale-95 lg:left-4 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 text-zinc-900" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            className="overflow-x-auto px-12 pb-2 sm:px-14 lg:px-16"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex min-w-max gap-[18px]">
              {[...videos, ...videos, ...videos].map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  data-carousel-card="true"
                  className="group relative h-[290px] w-[220px] shrink-0 overflow-hidden rounded-[24px] border border-[#ebdfd2] bg-[#f8f4ee] shadow-[0_12px_28px_rgba(74,54,40,0.08)] sm:h-[330px] sm:w-[270px] lg:h-[360px] lg:w-[300px] block transition-transform duration-300 hover:scale-[1.02]"
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
                      className="h-full w-full object-cover pointer-events-none"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 text-white pointer-events-none">
                    <span className="text-[0.76rem] font-semibold tracking-[0.14em] uppercase text-white drop-shadow sm:text-[0.84rem]">
                      {video.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            aria-label="Scroll product videos right"
            onClick={() => scrollByCards("next")}
            className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d9b578]/50 bg-white/95 text-[#2a1d18] shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#f8f3ec] hover:border-[#d9b578] hover:text-black active:scale-95 lg:right-4 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 text-zinc-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
