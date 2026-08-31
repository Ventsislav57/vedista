import Link from "next/link";
import { priceBoard } from "@/lib/site";

export default function PriceTicker() {
  const row = [...priceBoard.items, ...priceBoard.items];
  return (
    <Link
      href="/#ceni"
      aria-label="Актуални изкупни цени на зърнени култури"
      className="group relative flex items-center gap-4 overflow-hidden border-b border-ocean-900/10 bg-ocean-900 py-2.5 text-cream"
    >
      <span className="z-10 hidden shrink-0 items-center gap-2 bg-ocean-900 pl-5 pr-3 text-[0.7rem] font-semibold uppercase tracking-wider text-wheat-300 sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ocean-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ocean-400" />
        </span>
        Изкупни цени
      </span>

      <div className="flex flex-1 overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {row.map((it, i) => {
            const up = it.change >= 0;
            return (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm">
                <span className="text-cream/80">
                  {it.name}
                  <span className="text-cream/40"> · {it.tag}</span>
                </span>
                <span className="font-semibold text-wheat-400">
                  {it.price} {priceBoard.unit}
                </span>
                <span className={up ? "text-ocean-300" : "text-[#e88a6f]"}>
                  {up ? "▲" : "▼"} {up ? "+" : ""}
                  {it.change.toFixed(1)}%
                </span>
                <span className="text-cream/20">|</span>
              </span>
            );
          })}
        </div>
        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {row.map((it, i) => {
            const up = it.change >= 0;
            return (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm">
                <span className="text-cream/80">
                  {it.name}
                  <span className="text-cream/40"> · {it.tag}</span>
                </span>
                <span className="font-semibold text-wheat-400">
                  {it.price} {priceBoard.unit}
                </span>
                <span className={up ? "text-ocean-300" : "text-[#e88a6f]"}>
                  {up ? "▲" : "▼"} {up ? "+" : ""}
                  {it.change.toFixed(1)}%
                </span>
                <span className="text-cream/20">|</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ocean-900 to-transparent" />
    </Link>
  );
}
