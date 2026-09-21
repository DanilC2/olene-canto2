"use client";

import { useCallback, useEffect, useState } from "react";

const FADE_DURATION_MS = 650;
const MAX_LOADER_DURATION_MS = 3000;

export default function InitialPageLoader({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const dismissLoader = useCallback(() => {
    if (isFading) return;

    setIsFading(true);
    window.setTimeout(() => setIsVisible(false), FADE_DURATION_MS);
  }, [isFading]);

  useEffect(() => {
    if (!isVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timeoutId = window.setTimeout(dismissLoader, MAX_LOADER_DURATION_MS);

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
            src="/erasio_give_this_in_white_background._20260921135855.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={dismissLoader}
            onError={dismissLoader}
            className="block h-auto max-h-[100dvh] w-auto max-w-[100vw] object-contain brightness-[1.06] mix-blend-multiply"
          />
        </div>
      )}
    </>
  );
}
