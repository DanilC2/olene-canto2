"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  animate,
  useReducedMotion,
} from "framer-motion";

export default function IngredientRevealSection({ onOpenInquiry }) {
  const boxRef = useRef(null);
  const bottomImgRef = useRef(null);
  const hasInteractedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const releaseTimeoutRef = useRef(null);
  const teaserAnimRef = useRef(null);
  const baseRadiusRef = useRef(175);
  const shouldReduceMotion = useReducedMotion();

  // Motion values for coordinates and mask radius
  const mouseX = useMotionValue(380);
  const mouseY = useMotionValue(380);
  const maskRadius = useMotionValue(0);

  // Responsive spring physics
  const springConfig = { damping: 28, stiffness: 260, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothRadius = useSpring(maskRadius, { damping: 24, stiffness: 220 });

  // CSS radial-gradient mask template
  const maskImage = useMotionTemplate`radial-gradient(circle ${smoothRadius}px at ${smoothX}px ${smoothY}px, #000 62%, rgba(0,0,0,0.55) 84%, transparent 100%)`;

  // Explicitly sync mask styles for full multi-browser & mobile WebKit compatibility
  useEffect(() => {
    const unsub = maskImage.on("change", (latest) => {
      if (bottomImgRef.current) {
        bottomImgRef.current.style.webkitMaskImage = latest;
        bottomImgRef.current.style.maskImage = latest;
      }
    });
    return () => unsub();
  }, [maskImage]);

  // Safe coordinate extraction that guarantees valid numbers for mouse, pen, and touch
  const getContainerCoords = useCallback((e) => {
    if (!boxRef.current) return null;
    const rect = boxRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;

    let clientX = e.clientX;
    let clientY = e.clientY;

    if (clientX === undefined || clientY === undefined) {
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      }
    }

    if (
      typeof clientX !== "number" ||
      typeof clientY !== "number" ||
      Number.isNaN(clientX) ||
      Number.isNaN(clientY)
    ) {
      return null;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    return { x, y, width: rect.width, height: rect.height };
  }, []);

  // Responsive radius calculation based on actual container width
  const calculateBaseRadius = useCallback((width) => {
    // Scales smoothly: ~80px on small mobile (320px), ~95px on standard mobile (375px), ~180px on desktop (760px)
    return Math.min(185, Math.max(78, width * 0.26));
  }, []);

  // Update bounds & radius automatically on window resize or container size shift
  useEffect(() => {
    if (!boxRef.current) return;

    const handleResize = () => {
      if (!boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const newRadius = calculateBaseRadius(rect.width);
      baseRadiusRef.current = newRadius;

      // If reveal is currently open, adapt radius and clamp coordinates to new container bounds
      if (isInteractingRef.current) {
        maskRadius.set(newRadius);
        if (mouseX.get() > rect.width) mouseX.set(rect.width * 0.5);
        if (mouseY.get() > rect.height) mouseY.set(rect.height * 0.5);
      }
    };

    handleResize();

    const ro = new ResizeObserver(handleResize);
    ro.observe(boxRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateBaseRadius, maskRadius, mouseX, mouseY]);

  // Unified pointer / touch handlers
  const handlePointerDown = useCallback(
    (e) => {
      if (releaseTimeoutRef.current) {
        clearTimeout(releaseTimeoutRef.current);
        releaseTimeoutRef.current = null;
      }
      if (teaserAnimRef.current) {
        teaserAnimRef.current.stop();
        teaserAnimRef.current = null;
      }

      hasInteractedRef.current = true;
      isInteractingRef.current = true;

      const coords = getContainerCoords(e);
      if (!coords) return;

      // Jump springs directly to interaction point if mask is currently closed
      if (maskRadius.get() === 0) {
        smoothX.jump(coords.x);
        smoothY.jump(coords.y);
      }

      mouseX.set(coords.x);
      mouseY.set(coords.y);
      maskRadius.set(baseRadiusRef.current);
    },
    [getContainerCoords, maskRadius, mouseX, mouseY, smoothX, smoothY]
  );

  const handlePointerMove = useCallback(
    (e) => {
      const coords = getContainerCoords(e);
      if (!coords) return;

      // Active if dragging or hovering with mouse
      if (e.pointerType === "mouse" || isInteractingRef.current) {
        hasInteractedRef.current = true;
        isInteractingRef.current = true;

        if (teaserAnimRef.current) {
          teaserAnimRef.current.stop();
          teaserAnimRef.current = null;
        }

        if (maskRadius.get() === 0) {
          smoothX.jump(coords.x);
          smoothY.jump(coords.y);
          maskRadius.set(baseRadiusRef.current);
        }

        mouseX.set(coords.x);
        mouseY.set(coords.y);
      }
    },
    [getContainerCoords, maskRadius, mouseX, mouseY, smoothX, smoothY]
  );

  const handlePointerUp = useCallback(
    (e) => {
      if (e.pointerType === "touch") {
        // On touch screens, linger for 2.2s so the user can view what was revealed
        if (releaseTimeoutRef.current) clearTimeout(releaseTimeoutRef.current);
        releaseTimeoutRef.current = setTimeout(() => {
          isInteractingRef.current = false;
          maskRadius.set(0);
        }, 2200);
      } else {
        isInteractingRef.current = false;
      }
    },
    [maskRadius]
  );

  const handlePointerLeave = useCallback(
    (e) => {
      if (e.pointerType === "touch") {
        return; // Handled by pointerup and timeout
      }
      isInteractingRef.current = false;
      maskRadius.set(0);
    },
    [maskRadius]
  );

  // Intro teaser animation on scroll into view
  useEffect(() => {
    if (!boxRef.current || shouldReduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasInteractedRef.current) {
          const rect = boxRef.current?.getBoundingClientRect();
          if (!rect) return;

          const teaserX = rect.width * 0.64;
          const teaserY = rect.height * 0.44;
          const teaserR = baseRadiusRef.current * 0.88;

          smoothX.jump(teaserX);
          smoothY.jump(teaserY);
          mouseX.set(teaserX);
          mouseY.set(teaserY);

          // Bloom teaser to catch user attention
          teaserAnimRef.current = animate(
            maskRadius,
            [0, teaserR, teaserR * 0.95, 0],
            {
              duration: 2.2,
              times: [0, 0.35, 0.65, 1],
              ease: "easeInOut",
              onComplete: () => {
                teaserAnimRef.current = null;
              },
            }
          );
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
      if (teaserAnimRef.current) teaserAnimRef.current.stop();
      if (releaseTimeoutRef.current) clearTimeout(releaseTimeoutRef.current);
    };
  }, [maskRadius, mouseX, mouseY, shouldReduceMotion, smoothX, smoothY]);

  return (
    <section
      id="product-reveal"
      className="relative w-full bg-white text-zinc-900 py-10 sm:py-16 lg:py-20 overflow-hidden border-b border-zinc-200"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Interactive Mask Reveal Box */}
          <div
            ref={boxRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onTouchCancel={handlePointerUp}
            className="relative w-full max-w-[760px] aspect-square overflow-hidden bg-transparent select-none cursor-crosshair group touch-pan-y"
            style={{
              aspectRatio: "1 / 1",
            }}
          >
            {/* TOP IMAGE: Clean Static Tin Packshot with Stacked Cookies */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <Image
                src="/packshot-explode.jpg"
                alt="Olene Canto Oatmeal Honey Raisin Cookies - Signature Packshot"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-contain w-full h-full select-none"
                draggable={false}
              />
            </div>

            {/* BOTTOM IMAGE: Explosive Ingredients Splash (Masked dynamically via Framer Motion Radial Gradient) */}
            <motion.div
              ref={bottomImgRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              <Image
                src="/splash.jpg"
                alt="Olene Canto Flying Ingredients Splash - Honey, Rolled Oats, Raisins, Cookies"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 760px"
                className="object-contain w-full h-full select-none"
                draggable={false}
              />
            </motion.div>
          </div>

          {/* Interactive hint */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium tracking-wide select-none">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>Hover or drag over the tin to reveal inside</span>
          </div>
        </div>
      </div>
    </section>
  );
}
