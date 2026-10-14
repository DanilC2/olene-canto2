"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Muted, looping-friendly <video> that only plays while it is on (or near) screen
 * and pauses as soon as it leaves, so off-screen videos stop downloading and decoding.
 *
 * @param {React.RefObject} rootRef - Optional scroll container to measure visibility against
 * @param {string} rootMargin - How far outside the root a video may be and still count as visible
 * @param {boolean} enabled - Extra gate (e.g. the parent section is on screen)
 * @param {string} posterSrc - First-frame image shown instantly, attached once the video is within `posterMargin`
 * @param {boolean} preloadWhenNear - Start buffering once within `posterMargin`, so playback starts smoothly instead of mid-scroll
 */
export default function ViewportVideo({
  rootRef,
  rootMargin = "200px",
  enabled = true,
  preload = "none",
  posterSrc,
  posterMargin = "1200px 0px",
  preloadWhenNear = false,
  ...props
}) {
  const videoRef = useRef(null);
  const [isNear, setIsNear] = useState(false);
  const isIntersectingRef = useRef(false);
  const enabledRef = useRef(enabled);

  const syncPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (enabledRef.current && isIntersectingRef.current) {
      const playPromise = video.play();
      // Autoplay can still be refused (e.g. iOS Low Power Mode); the element simply stays on its current frame.
      if (playPromise) playPromise.catch(() => {});
    } else if (!video.paused) {
      video.pause();
    }
  }, []);

  useEffect(() => {
    enabledRef.current = enabled;
    syncPlayback();
  }, [enabled, syncPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { root: rootRef?.current ?? null, rootMargin }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, [rootRef, rootMargin, syncPlayback]);

  // Attach the poster only when the video is getting close, so it never competes with above-the-fold content
  useEffect(() => {
    const video = videoRef.current;
    if (!video || (!posterSrc && !preloadWhenNear)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: posterMargin }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, [posterSrc, posterMargin, preloadWhenNear]);

  const poster = posterSrc && isNear && enabled ? posterSrc : props.poster;
  const effectivePreload = preloadWhenNear && isNear && enabled ? "auto" : preload;

  return <video ref={videoRef} muted playsInline preload={effectivePreload} {...props} poster={poster} />;
}
