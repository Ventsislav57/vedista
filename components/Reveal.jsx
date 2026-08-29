"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const offsets = {
  up: { x: 0, y: 28 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  scale: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  className = "",
  amount = 0.25,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  const [forced, setForced] = useState(false);

  // Safety net: if the observer never fires (headless, edge browsers,
  // reduced-motion quirks) reveal the content anyway.
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const show = inView || forced;
  const o = offsets[direction] || offsets.up;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y, scale: direction === "scale" ? 0.94 : 1 }}
      animate={
        show
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity: 0, x: o.x, y: o.y, scale: direction === "scale" ? 0.94 : 1 }
      }
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
