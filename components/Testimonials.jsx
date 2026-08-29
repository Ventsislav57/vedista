"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto h-10 w-10 text-wheat-400" />
      <div className="relative mt-6 min-h-[9rem]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-2xl leading-relaxed text-cream sm:text-[1.7rem]">
              „{t.quote}“
            </p>
            <footer className="mt-6 text-sm text-cream/60">
              <span className="font-semibold text-wheat-300">{t.name}</span>
              {" · "}
              {t.role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Отзив ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-wheat-400" : "w-2 bg-cream/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
