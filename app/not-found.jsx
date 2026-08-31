import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Страницата не е намерена",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-ocean-950 to-ocean-800 px-5 py-32 text-center text-cream sm:px-8">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-wheat-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-ocean-600/25 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center">
        <Logo className="h-14 w-14" />
        <span className="mt-8 font-display text-7xl text-wheat-400">404</span>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
          Тази страница не е намерена
        </h1>
        <p className="mt-4 text-cream/70">
          Възможно е адресът да е сгрешен или страницата да е преместена.
          Върнете се към началото или разгледайте с какво търгуваме.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-wheat-500 px-7 py-3.5 text-sm font-semibold text-ocean-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Начало
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/targoviya"
            className="flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            С какво търгуваме
          </Link>
        </div>
      </div>
    </section>
  );
}
