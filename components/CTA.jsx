import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal direction="scale">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-900 to-forest-700 px-7 py-14 text-cream sm:px-14 sm:py-18">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-wheat-500/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Имате зърно за реализация или въпрос към агроном?
              </h2>
              <p className="mt-4 text-cream/75">
                Свържете се с нас — ще получите оферта и обвързваща цена в
                рамките на един работен ден.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakti"
                className="group flex items-center justify-center gap-2 rounded-full bg-wheat-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Поискайте оферта
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
