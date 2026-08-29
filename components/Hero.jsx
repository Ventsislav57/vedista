"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Wheat, TrendingUp } from "lucide-react";
import { company } from "@/lib/site";

function Stalk({ x, y = 330, delay, scale = 1, tone = "#e3a72f" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "bottom",
          animation: `sway ${5 + delay}s ease-in-out ${delay}s infinite`,
        }}
      >
      <path
        d="M0 0 C -2 -45 -2 -90 0 -128"
        stroke="#b9822a"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      {[...Array(5)].map((_, i) => {
        const hy = -46 - i * 17;
        return (
          <g key={i}>
            <path d={`M0 ${hy} q -11 -5 -15 -18 q 11 3 15 18`} fill={tone} />
            <path
              d={`M0 ${hy} q 11 -5 15 -18 q -11 3 -15 18`}
              fill={tone}
              opacity="0.85"
            />
          </g>
        );
      })}
      <path d="M0 -129 q -3 -14 0 -27 q 3 12 0 27" fill={tone} />
      </g>
    </g>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yField = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800 pt-28 pb-16 text-cream"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-forest-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-wheat-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div style={{ y: yText }}>
          <span
            className="rise inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-medium tracking-wide text-wheat-300"
            style={{ animationDelay: "0.05s" }}
          >
            <Wheat className="h-3.5 w-3.5" strokeWidth={2} />
            Реколта 2025 · приемаме заявки за форуърд
          </span>

          <h1
            className="rise mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Зърното на
            <br />
            <span className="relative inline-block text-wheat-400">
              доверието
              <motion.svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.path
                  d="M2 8 C 80 2, 220 2, 298 7"
                  stroke="#e3a72f"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: "easeInOut" }}
                />
              </motion.svg>
            </span>
          </h1>

          <p
            className="rise mt-7 max-w-lg text-lg leading-relaxed text-cream/75"
            style={{ animationDelay: "0.3s" }}
          >
            {company.name} свързва българското поле с пазара — изкупуване и
            търговия със зърно, съхранение, логистика и агрономическо обслужване
            под един покрив.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.42s" }}
          >
            <Link
              href="/kontakti"
              className="group flex items-center gap-2 rounded-full bg-wheat-500 px-7 py-3.5 text-sm font-semibold text-forest-950 shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              Поискайте оферта
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/deynosti"
              className="flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Нашите дейности
            </Link>
          </div>

          <div
            className="rise mt-12 flex flex-wrap gap-x-8 gap-y-4"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              ["480 хил. т", "зърно годишно"],
              ["1200+", "партньори"],
              ["до 60 мин", "лабораторен анализ"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-wheat-400">{n}</div>
                <div className="text-xs text-cream/55">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wheat-field panel */}
        <motion.div
          style={{ y: yField }}
          className="rise relative hidden lg:block"
        >
          <div className="relative aspect-[42/34] overflow-hidden rounded-[2rem] border border-cream/10 bg-forest-900 shadow-lift">
            <svg viewBox="0 0 420 340" className="block h-full w-full">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1b4332" />
                  <stop offset="1" stopColor="#2d6a4f" />
                </linearGradient>
              </defs>
              <rect width="420" height="340" fill="url(#sky)" />
              <circle cx="350" cy="54" r="20" fill="#f7d98a" opacity="0.8" />
              {/* back row — smaller, dimmer */}
              {[15, 55, 95, 135, 175, 215, 255, 295, 335, 375, 410].map((x, i) => (
                <Stalk
                  key={`b${i}`}
                  x={x}
                  y={322}
                  delay={0.2 + (i % 4) * 0.3}
                  scale={0.62}
                  tone={i % 2 ? "#cf9a34" : "#d9ab3f"}
                />
              ))}
              {/* front row — larger, brighter */}
              {[
                [40, 0, 0.95, "#f0c14b"],
                [95, 0.6, 1.05, "#e3a72f"],
                [150, 0.25, 0.98, "#f0c14b"],
                [205, 0.9, 1.08, "#e3a72f"],
                [260, 0.45, 1.0, "#f7d98a"],
                [315, 1.0, 1.04, "#e3a72f"],
                [370, 0.35, 0.96, "#f0c14b"],
              ].map(([x, d, s, t], i) => (
                <Stalk key={`f${i}`} x={x} y={334} delay={d} scale={s} tone={t} />
              ))}
              <rect y="312" width="420" height="28" fill="#10281e" />
            </svg>
          </div>

          <div className="animate-floaty absolute -left-8 top-14 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-forest-900 shadow-lift">
            <TrendingUp className="h-5 w-5 text-forest-600" />
            <div>
              <div className="text-sm font-semibold">Форуърд цена</div>
              <div className="text-xs text-forest-800/60">
                фиксирана при сеитба
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 right-2 rounded-2xl bg-wheat-500 px-5 py-4 text-forest-950 shadow-lift">
            <div className="font-display text-3xl leading-none">15+</div>
            <div className="text-xs font-medium">години на пазара</div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
