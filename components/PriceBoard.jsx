"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";
import Reveal from "@/components/Reveal";
import Sparkline from "@/components/Sparkline";
import { priceBoard } from "@/lib/site";

const UP = "#74c69d";
const DOWN = "#e88a6f";

export default function PriceBoard() {
  return (
    <section
      id="ceni"
      className="grain relative scroll-mt-20 overflow-hidden bg-forest-950 py-20 text-cream lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-forest-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-wheat-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-wheat-300">
                <span className="h-px w-8 bg-wheat-400" />
                Пазар
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
                Актуални изкупни цени
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-sm text-cream/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-400" />
              </span>
              Обновено {priceBoard.updatedAt}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {priceBoard.items.map((it, i) => {
            const up = it.change >= 0;
            const color = up ? UP : DOWN;
            const Arrow = up ? ArrowUpRight : ArrowDownRight;
            return (
              <Reveal key={it.key} delay={(i % 3) * 0.07} direction="up">
                <div className="group relative overflow-hidden rounded-3xl border border-cream/12 bg-forest-900/60 p-6 transition-colors duration-300 hover:border-wheat-400/40">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl text-cream">{it.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-cream/10 px-2.5 py-0.5 text-xs font-medium text-cream/70">
                        {it.tag}
                      </span>
                    </div>
                    <span
                      className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
                      style={{ color, backgroundColor: `${color}1f` }}
                    >
                      <Arrow className="h-3.5 w-3.5" strokeWidth={2.5} />
                      {up ? "+" : ""}
                      {it.change.toFixed(1)}%
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl text-wheat-400 tabular-nums">
                        {it.price}
                      </span>
                      <span className="text-sm text-cream/55">{priceBoard.unit}</span>
                    </div>
                    <Sparkline data={it.spark} stroke={color} className="h-10 w-28 shrink-0" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-5 border-t border-cream/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-cream/55 sm:max-w-xl">
              <RefreshCw className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {priceBoard.note}
            </p>
            <Link
              href="/kontakti"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-wheat-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Поискайте обвързваща оферта
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
