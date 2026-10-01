"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { markIntroStarted } from "@/lib/loaderSignal";

const FADE_DURATION_MS = 650;
// How long the intro video is shown once it is actually playing.
const MAX_LOADER_DURATION_MS = 3000;
// Safety net: if the video cannot start at all (very slow network, autoplay blocked), reveal the site anyway.
const LOADER_TIMEOUT_MS = 5000;

// Once the loader is gone, stop the rest of its video from downloading so it
// doesn't compete with the hero video and the rest of the page.
function releaseVideoOnUnmount(video) {
  if (!video) return undefined;
  return () => {
    // React (Strict Mode in dev) can detach and re-attach refs while the element
    // stays on screen; only release the video once it has really left the page.
    window.setTimeout(() => {
      if (video.isConnected) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    }, 0);
  };
}

export default function InitialPageLoader({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);
  const playTimerRef = useRef(null);

  const dismissLoader = useCallback(() => {
    if (isFading) return;

    setIsFading(true);
    window.setTimeout(() => setIsVisible(false), FADE_DURATION_MS);
  }, [isFading]);

  // Start the 3-second countdown from when the intro video is really on screen,
  // so slow connections still see it instead of a blank white screen.
  const handleIntroPlaying = useCallback(() => {
    markIntroStarted();
    if (playTimerRef.current) return;
    playTimerRef.current = window.setTimeout(dismissLoader, MAX_LOADER_DURATION_MS);
  }, [dismissLoader]);

  const attachVideo = useCallback((video) => {
    videoRef.current = video;
    return releaseVideoOnUnmount(video);
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeoutId = window.setTimeout(dismissLoader, LOADER_TIMEOUT_MS);

    // The video may already be playing before React hydrated and attached onPlaying.
    const video = videoRef.current;
    if (video && !video.paused && video.currentTime > 0) handleIntroPlaying();

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
    };
  }, [dismissLoader, handleIntroPlaying, isVisible]);

  useEffect(() => {
    if (isFading) markIntroStarted();
  }, [isFading]);

  useEffect(() => {
    return () => {
      if (playTimerRef.current) window.clearTimeout(playTimerRef.current);
    };
  }, []);

  return (
    <>
      {children}
      {isVisible && (
        <div
          className={`fixed inset-0 z-[100] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white transition-opacity duration-700 ease-out ${
            isFading ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <video
            ref={attachVideo}
            src="/intro-loader.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onPlaying={handleIntroPlaying}
            onEnded={dismissLoader}
            onError={dismissLoader}
            className="block h-auto max-h-[100dvh] w-auto max-w-[100vw] object-contain brightness-[1.06] mix-blend-multiply"
          />
        </div>
      )}
    </>
  );
}
