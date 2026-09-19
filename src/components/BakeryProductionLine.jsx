"use client";

import React, { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    label: "Gather",
    title: "Ingredients arrive",
    video: "/generate_the_same._20260917153310.mp4",
  },
  {
    label: "Mix",
    title: "The batter comes together",
    video: "/generate_the_same._20260917153314.mp4",
  },
  {
    label: "Bake",
    title: "The cake enters the oven",
    video: "/generate_the_same._20260917153320.mp4",
  },
  {
    label: "Finish",
    title: "Every detail is decorated",
    video: "/generate_the_same._20260917153324.mp4",
  },
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function BakeryProductionLine() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const updateProgress = () => {
      frame = null;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      setProgress(clamp(-rect.top / travel, 0, 1));
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeStage = Math.min(Math.floor(progress * STAGES.length), STAGES.length - 1);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeStage) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeStage]);

  return (
    <section
      ref={sectionRef}
      id="production-line"
      className="relative h-[240vh] bg-[#f5f2ec]"
    >
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-visible py-4 sm:py-6">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-900 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.45)] ring-1 ring-black/10 sm:rounded-[2rem]">
            <div className="relative aspect-video w-full bg-[#2b241d]">
              {STAGES.map((stage, index) => (
                <video
                  key={stage.video}
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  className="absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-out"
                  style={{ opacity: index === activeStage ? 1 : 0 }}
                  src={stage.video}
                  muted
                  loop
                  playsInline
                  preload={index === 0 ? "auto" : "metadata"}
                  aria-label={stage.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
