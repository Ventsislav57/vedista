import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nav, company } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-700/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display text-2xl text-cream">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {company.tagline}. Търгуваме със зърнени култури, маслодайни
              семена и фуражни суровини според пазарното търсене.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-wheat-400">Навигация</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-wheat-400">Контакти</h4>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              За оферта, запитване или партньорство се свържете с нашия екип.
            </p>
            <Link
              href="/kontakti"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-wheat-400 transition-colors hover:text-wheat-300"
            >
              Изпратете запитване
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. Всички права
            запазени.
          </p>
          <p className="flex gap-4">
            <span className="cursor-default hover:text-cream/80">
              Общи условия
            </span>
            <span className="cursor-default hover:text-cream/80">
              Поверителност
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
