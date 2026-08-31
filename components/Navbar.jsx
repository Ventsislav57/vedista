"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, company } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="relative z-10 flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span
            className={`font-display text-xl tracking-tight transition-colors ${
              onDark || open ? "text-cream" : "text-forest-900"
            }`}
          >
            {company.name}
          </span>
        </Link>

        <nav className="hidden items-center xl:gap-0.5 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[0.82rem] font-medium transition-colors xl:text-sm ${
                  onDark
                    ? active
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                    : active
                    ? "text-forest-900"
                    : "text-forest-800/70 hover:text-forest-900"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-wheat-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/kontakti"
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-transform duration-300 hover:-translate-y-0.5 ${
              onDark
                ? "bg-wheat-500 text-forest-950 hover:bg-wheat-400"
                : "bg-forest-900 text-cream hover:bg-forest-800"
            }`}
          >
            Изпратете запитване
          </Link>
        </div>

        <button
          type="button"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            onDark && !open
              ? "border-cream/40 bg-cream/15 text-cream"
              : "border-forest-900/20 bg-forest-900 text-cream"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-0 bg-forest-950/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-cream/10 py-4 font-display text-2xl text-cream"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col gap-4"
              >
                <Link
                  href="/kontakti"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-wheat-500 px-6 py-3 text-center text-sm font-semibold text-forest-950"
                >
                  Изпратете запитване
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
