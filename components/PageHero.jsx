export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-b from-forest-950 to-forest-800 pt-36 pb-20 text-cream sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-wheat-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-forest-600/25 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <span
          className="rise eyebrow flex items-center gap-3 text-wheat-300"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-px w-8 bg-wheat-400" />
          {eyebrow}
        </span>
        <h1
          className="rise mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-cream/75"
            style={{ animationDelay: "0.28s" }}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
