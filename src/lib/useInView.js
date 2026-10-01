"use client";

import { useEffect, useState } from "react";

/**
 * Reports whether an element is within (or within `rootMargin` of) the viewport.
 * With `once`, the value stays true after the first time the element comes near.
 */
export default function useInView(ref, { rootMargin = "0px", once = false } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (once && entry.isIntersecting) observer.disconnect();
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, rootMargin, once]);

  return inView;
}
