"use client";

import { useEffect, useRef, useState } from "react";

// Anima un número hacia su nuevo valor; salta directo con prefers-reduced-motion
export function useCountUp(value: number, duration = 600): number {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const from = prev.current;
    prev.current = value;
    if (from === value) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ms = reduced ? 0 : duration;
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now: number) {
      const t = ms === 0 ? 1 : Math.min((now - start) / ms, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return display;
}
