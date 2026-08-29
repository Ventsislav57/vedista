"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [forced, setForced] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setForced(true), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!inView && !forced) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, forced, value, duration]);

  const formatted =
    value % 1 === 0
      ? Math.round(display).toLocaleString("bg-BG")
      : display.toFixed(1);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
