"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { crops } from "@/lib/site";
import CropArt from "@/components/CropArt";

export default function CropShowcase() {
  const [active, setActive] = useState(0);
  const crop = crops[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          {crops.map((c, i) => (
            <button
              key={c.slug}
              onClick={() => setActive(i)}
              className={`group relative flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                i === active
                  ? "bg-forest-900 text-cream shadow-lift"
                  : "bg-sand/60 text-forest-800 hover:bg-sand"
              }`}
            >
              <span className="font-display text-xl">{c.name}</span>
              <ArrowUpRight
                className={`h-4 w-4 transition-all ${
                  i === active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[26rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={crop.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2rem] border border-forest-900/10 bg-cream shadow-soft"
          >
            <div className="relative h-60 w-full overflow-hidden sm:h-72">
              <CropArt
                slug={crop.slug}
                accent={crop.accent}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <span className="absolute bottom-4 left-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-forest-900">
                {crop.season}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-forest-900">
                  {crop.name}
                </h3>
                <span className="text-sm italic text-forest-800/50">
                  {crop.latin}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-forest-800/75">
                {crop.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {crop.facts.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-forest-900/12 bg-sand/50 px-3 py-1 text-xs font-medium text-forest-800"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Link
                href={`/kulturi#${crop.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-wheat-600"
              >
                Спецификация и договори
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
