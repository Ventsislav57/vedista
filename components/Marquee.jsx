const defaultItems = [
  "Пшеница",
  "Царевица",
  "Ечемик",
  "Ръж",
  "Овес",
  "Тритикале",
  "Слънчоглед",
  "Рапица",
  "Соя",
  "Слънчогледов шрот",
  "Соев шрот",
  "Рапичен шрот",
];

export default function Marquee({ items = defaultItems }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-ocean-900/10 bg-sand/50 py-6">
      <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
        {row.map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-lg text-ocean-800/45"
          >
            {p}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="animate-marquee flex shrink-0 items-center gap-16 pr-16"
      >
        {row.map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-lg text-ocean-800/45"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
