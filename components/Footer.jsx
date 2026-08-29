import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { nav, company, crops } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-700/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display text-2xl text-cream">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Партньор на българския земеделец в търговията, съхранението и
              логистиката на зърнени култури от {company.founded} г.
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
            <h4 className="eyebrow text-wheat-400">Култури</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {crops.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/kulturi#${c.slug}`}
                    className="transition-colors hover:text-cream"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-wheat-400">Контакти</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wheat-400" />
                {company.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-wheat-400" />
                <a href={company.phoneHref} className="hover:text-cream">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-wheat-400" />
                <a href={company.emailHref} className="hover:text-cream">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-wheat-400" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name} ЕООД. Всички права
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
