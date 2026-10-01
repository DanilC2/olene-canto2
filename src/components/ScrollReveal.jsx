"use client";

import React, { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

// On phones many sections are taller than the screen, so "22% visible" can mean
// scrolling through a blank area first. Below 768px, reveal as soon as a sliver shows.
const SMALL_SCREEN_QUERY = "(max-width: 767px)";
const SMALL_SCREEN_THRESHOLD = 0.04;

function subscribeToScreenSize(callback) {
  const mq = window.matchMedia(SMALL_SCREEN_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function useIsSmallScreen() {
  return useSyncExternalStore(
    subscribeToScreenSize,
    () => window.matchMedia(SMALL_SCREEN_QUERY).matches,
    () => false
  );
}

/**
 * ScrollReveal Component
 * Smooth, elegant fade-in and upward movement as elements enter the viewport.
 *
 * @param {React.ReactNode} children - The content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds (default 0.9s for slow, luxury pacing)
 * @param {number} yOffset - Starting downward offset in pixels (default 32px)
 * @param {number} threshold - Viewport visibility ratio (0.22 triggers at ~22% in view)
 * @param {boolean} once - If true, only animates once when scrolling into view
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  yOffset = 32,
  threshold = 0.22,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const isSmallScreen = useIsSmallScreen();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: isSmallScreen ? Math.min(threshold, SMALL_SCREEN_THRESHOLD) : threshold }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth luxury deceleration curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
