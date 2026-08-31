import Link from "next/link";

export default function PageHeroLink({ href, children, delay = "0.4s" }) {
  return (
    <Link
      href={href}
      className="rise mt-8 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
      style={{ animationDelay: delay }}
    >
      {children}
    </Link>
  );
}
