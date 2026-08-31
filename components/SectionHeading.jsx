import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "";
  const titleColor = tone === "light" ? "text-cream" : "text-ocean-900";
  const introColor = tone === "light" ? "text-cream/70" : "text-ocean-800/70";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow flex items-center gap-3 text-wheat-600">
            <span className="h-px w-8 bg-wheat-500" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`text-lg leading-relaxed ${introColor}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
