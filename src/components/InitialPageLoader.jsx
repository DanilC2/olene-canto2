"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { markIntroStarted } from "@/lib/loaderSignal";

const FADE_DURATION_MS = 650;
// Show about 3 seconds of the intro video, measured by the video itself so slow starts still get seen.
const INTRO_SHOW_SECONDS = 2.9;
// Never block the site longer than this, even if the video is slow or cannot play.
const LOADER_TIMEOUT_MS = 4500;

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
  const isFadingRef = useRef(false);

  const dismissLoader = useCallback(() => {
    if (isFadingRef.current) return;
    isFadingRef.current = true;
    markIntroStarted();
    setIsFading(true);
    window.setTimeout(() => setIsVisible(false), FADE_DURATION_MS);
  }, []);

  // Driven by the video's own clock (works even if playback started before React hydrated).
  const handleIntroProgress = useCallback(
    (event) => {
      const video = event.currentTarget;
      if (video.currentTime > 0) markIntroStarted();
      if (video.currentTime >= INTRO_SHOW_SECONDS) dismissLoader();
    },
    [dismissLoader]
  );

  const attachVideo = useCallback((video) => {
    videoRef.current = video;
    return releaseVideoOnUnmount(video);
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeoutId = window.setTimeout(dismissLoader, LOADER_TIMEOUT_MS);

    // The video may already be playing before React hydrated.
    const video = videoRef.current;
    if (video && video.currentTime > 0) markIntroStarted();

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
    };
  }, [dismissLoader, isVisible]);

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
            onPlaying={markIntroStarted}
            onTimeUpdate={handleIntroProgress}
            onEnded={dismissLoader}
            onError={dismissLoader}
            width={1920}
            height={1080}
            className="block aspect-video h-auto w-[min(1920px,100vw,177.78dvh)] max-h-[100dvh] max-w-[100vw] object-contain brightness-[1.06] mix-blend-multiply"
          />
        </div>
      )}
    </>
  );
}
