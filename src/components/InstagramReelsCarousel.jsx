"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useInView from "@/lib/useInView";

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const reelsData = [
  {
    id: "C5-gHqbAX9P",
    permalink: "https://www.instagram.com/reel/C5-gHqbAX9P/",
    embedUrl: "https://www.instagram.com/reel/C5-gHqbAX9P/embed/",
    title: "Retail Partnerships & Collaborations",
    aspect: "square",
  },
  {
    id: "CX8Rw0YLfo9",
    permalink: "https://www.instagram.com/tv/CX8Rw0YLfo9/",
    embedUrl: "https://www.instagram.com/tv/CX8Rw0YLfo9/embed/",
    title: "Artisan Cakes & Bakes Showcase",
    aspect: "portrait",
  },
  {
    id: "C5npRIryzBA",
    permalink: "https://www.instagram.com/reel/C5npRIryzBA/",
    embedUrl: "https://www.instagram.com/reel/C5npRIryzBA/embed/",
    title: "Store Visit & Tasting Highlights",
    aspect: "portrait",
  },
  {
    id: "CZJLQ-avwKB",
    permalink: "https://www.instagram.com/tv/CZJLQ-avwKB/",
    embedUrl: "https://www.instagram.com/tv/CZJLQ-avwKB/embed/",
    title: "Atelier Baking Moments & Fresh Bread",
    aspect: "portrait",
  },
  {
    id: "CijYEviJIgc",
    permalink: "https://www.instagram.com/reel/CijYEviJIgc/",
    embedUrl: "https://www.instagram.com/reel/CijYEviJIgc/embed/",
    title: "Signature Sweets & Gift Boxes",
    aspect: "portrait",
  },
  {
    id: "C47Rpy4J4Db",
    permalink: "https://www.instagram.com/reel/C47Rpy4J4Db/",
    embedUrl: "https://www.instagram.com/reel/C47Rpy4J4Db/embed/",
    title: "Kalyan Mall Kozhikode Store Experience",
    aspect: "portrait",
  },
  {
    id: "CZTZDsGAW1i",
    permalink: "https://www.instagram.com/tv/CZTZDsGAW1i/",
    embedUrl: "https://www.instagram.com/tv/CZTZDsGAW1i/embed/",
    title: "Tradition, Passion & Taste",
    aspect: "portrait",
  },
];

const emptySubscribe = () => () => {};

export default function InstagramReelsCarousel() {
  const trackRef = useRef(null);
  const scrollPosRef = useRef(0);
  const isPausedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const singleSetWidthRef = useRef(2000);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Instagram embeds are heavy: only create them once the section is near the viewport,
  // and only for cards near the visible part of the track. Auto-scroll pauses while off screen.
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { rootMargin: "200px 0px" });
  const hasApproached = useInView(sectionRef, { rootMargin: "800px 0px", once: true });
  const [nearCardKeys, setNearCardKeys] = useState(() => new Set());

  // Multiply the reels array for a seamless, uninterrupted loop
  const repeatedReels = [
    ...reelsData,
    ...reelsData,
    ...reelsData,
    ...reelsData,
  ];

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    // Dynamically calculate the width of a single set of cards
    const updateSetWidth = () => {
      const cards = container.querySelectorAll("[data-reel-card]");
      if (cards.length >= reelsData.length) {
        let total = 0;
        for (let i = 0; i < reelsData.length; i++) {
          total += cards[i].offsetWidth + 18;
        }
        if (total > 0) {
          singleSetWidthRef.current = total;
        }
      }
    };
    updateSetWidth();

    // Start centered in the buffer so scrolling left/right works immediately
    const initialPos = singleSetWidthRef.current;
    scrollPosRef.current = initialPos;
    container.scrollLeft = initialPos;

    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Continuous auto-scroll, only while the section is on screen
  useEffect(() => {
    const container = trackRef.current;
    if (!container || !sectionInView) return;

    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      // Cap delta to prevent leaps when tab is in background
      const safeDelta = Math.min(delta, 64);

      // Continuous movement right-to-left while the arrow/cursor is not pointing to the video
      if (!isPausedRef.current && container) {
        // High-precision float increment ensures continuous subpixel motion
        scrollPosRef.current += safeDelta * 0.055;

        const setWidth = singleSetWidthRef.current;
        if (scrollPosRef.current >= setWidth * 2.5) {
          scrollPosRef.current -= setWidth;
        }

        container.scrollLeft = scrollPosRef.current;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [sectionInView]);

  // Mark cards that come within reach of the visible track so their embeds can load
  useEffect(() => {
    const container = trackRef.current;
    if (!container || !hasApproached) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyNear = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.dataset.cardKey);
        if (newlyNear.length === 0) return;
        setNearCardKeys((prev) => {
          if (newlyNear.every((key) => prev.has(key))) return prev;
          const next = new Set(prev);
          newlyNear.forEach((key) => next.add(key));
          return next;
        });
      },
      { root: container, rootMargin: "0px 300px" }
    );

    container.querySelectorAll("[data-reel-card]").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [hasApproached]);

  const pauseTemporarily = (duration = 2000) => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (trackRef.current) {
        scrollPosRef.current = trackRef.current.scrollLeft;
      }
      if (!isHoveredRef.current) {
        isPausedRef.current = false;
      }
    }, duration);
  };

  const scrollByCards = (direction) => {
    const container = trackRef.current;
    if (!container) return;

    pauseTemporarily(2200);

    const setWidth = singleSetWidthRef.current;
    const scrollAmount = 280;

    if (direction === "next") {
      if (scrollPosRef.current >= setWidth * 2.5) {
        scrollPosRef.current -= setWidth;
        container.scrollLeft = scrollPosRef.current;
      }
      scrollPosRef.current += scrollAmount;
    } else {
      if (scrollPosRef.current <= setWidth * 0.5) {
        scrollPosRef.current += setWidth;
        container.scrollLeft = scrollPosRef.current;
      }
      scrollPosRef.current -= scrollAmount;
    }

    container.scrollTo({
      left: scrollPosRef.current,
      behavior: "smooth",
    });
  };

  return (
    <div ref={sectionRef} className="w-full bg-black py-8 sm:py-10 lg:py-12 flex flex-col justify-center select-none relative overflow-hidden text-white">
      {/* Compact Section Header with Navigation Arrows positioned in header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          {/* Header Left: Badge, Title & Subtitle */}
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-amber-500/30 bg-amber-500/10 text-amber-300 backdrop-blur-sm">
              <InstagramIcon className="w-3 h-3 text-amber-400" />
              <span>Community &amp; Social Reels</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-white">
              Moments from the Oven to the World
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              Watch our latest reels, behind-the-scenes bakery craft, retail collaborations, and tasting stories directly on Instagram.
            </p>
          </div>

          {/* Header Right: Navigation Arrows & Follow Button */}
          <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
            {/* Left & Right Navigation Arrows located cleanly outside the video track */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Scroll Instagram reels left"
                onClick={() => scrollByCards("prev")}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-zinc-800 hover:border-amber-400 active:scale-95 cursor-pointer"
                title="Previous reels"
              >
                <ChevronLeft className="h-5 w-5 text-zinc-200" />
              </button>
              <button
                type="button"
                aria-label="Scroll Instagram reels right"
                onClick={() => scrollByCards("next")}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-zinc-800 hover:border-amber-400 active:scale-95 cursor-pointer"
                title="Next reels"
              >
                <ChevronRight className="h-5 w-5 text-zinc-200" />
              </button>
            </div>

            <a
              href="https://www.instagram.com/olenecanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full bg-white hover:bg-amber-400 text-black text-xs font-semibold tracking-wider transition-colors duration-200 shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Follow @olenecanto</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* 
        Continuous Right-to-Left Carousel Track
        - Moves continuously from right to left while the mouse arrow is NOT hovering the track
        - Pauses when the user hovers over the track so they can easily click any reel
      */}
      <div
        className="relative w-full"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          if (trackRef.current) {
            scrollPosRef.current = trackRef.current.scrollLeft;
          }
          isPausedRef.current = false;
        }}
        onTouchStart={() => {
          pauseTemporarily(3000);
        }}
      >
        {/* Subtle Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-black to-transparent" />

        {/* Scrollable Cards Track */}
        <div
          ref={trackRef}
          className="overflow-x-auto px-4 sm:px-8 py-1 flex gap-[18px] items-center"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {repeatedReels.map((reel, index) => {
            const isSquare = reel.aspect === "square";
            const cardKey = `${reel.id}-${index}`;

            return (
              <a
                key={cardKey}
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                data-reel-card="true"
                data-card-key={cardKey}
                aria-label={`${reel.title} - Watch on Instagram`}
                className={`group/card relative shrink-0 block overflow-hidden rounded-[20px] transition-all duration-300 border border-zinc-800 bg-zinc-950 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_36px_rgba(217,181,120,0.25)] hover:border-amber-400 hover:scale-[1.02] cursor-pointer ${
                  isSquare
                    ? "w-[280px] sm:w-[325px] h-[280px] sm:h-[325px]"
                    : "w-[224px] sm:w-[260px] h-[280px] sm:h-[325px]"
                }`}
              >
                {/* 
                  Precisely cropped embed frame:
                  - pointer-events-none ensures any clicks anywhere on the card open Instagram directly via the anchor tag, instead of playing inside the website iframe
                  - Top is cropped by 56px to hide Instagram header
                */}
                <div className="relative w-full h-full overflow-hidden rounded-[20px] bg-black pointer-events-none">
                  {mounted && nearCardKeys.has(cardKey) && (
                    <iframe
                      data-reel-iframe="true"
                      data-reel-key={cardKey}
                      src={reel.embedUrl}
                      title={reel.title}
                      className="w-full border-0 absolute left-0 pointer-events-none"
                      style={{
                        top: "-56px",
                        height: "calc(100% + 180px)",
                      }}
                      scrolling="no"
                      tabIndex={-1}
                      aria-hidden="true"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Hover overlay with 'Watch on Instagram' button only */}
                <div className="absolute inset-0 z-20 flex items-end justify-center p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-400 text-black text-xs font-bold tracking-wide shadow-xl transition-transform duration-200 group-hover/card:scale-105">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
