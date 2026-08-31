import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Международна търговия",
  description:
    "Vedista поддържа партньорства с търговски компании от региона и следи възможностите за реализация на земеделска продукция на близките пазари.",
};

const points = [
  {
    icon: "Globe",
    title: "Партньорства извън България",
    text: "Vedista работи с търговски партньори не само на българския пазар, но и с компании от държави в региона.",
  },
  {
    icon: "MapPinned",
    title: "Следим близките пазари",
    text: "Поддържаме партньорства и следим възможностите за реализация на земеделска продукция на близките пазари.",
  },
  {
    icon: "Handshake",
    title: "Гъвкави възможности за сделка",
    text: "Търсим подходящи възможности за покупка и продажба според текущото търсене и конкретните условия по сделката.",
  },
];

export default function InternationalTradePage() {
  return (
    <>
      <PageHero
        eyebrow="Международна търговия"
        title="Партньорства извън България"
        intro="Vedista работи с търговски партньори не само на българския пазар, но и с компании от държави в региона. Поддържаме партньорства и следим възможностите за реализация на земеделска продукция на близките пазари."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem] border border-forest-900/10 bg-forest-900 p-10 sm:p-14">
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-wheat-500/15 blur-3xl" />
              <svg viewBox="0 0 300 220" className="relative z-10 h-full w-full">
                <circle cx="150" cy="110" r="86" fill="none" stroke="#2d6a4f" strokeWidth="1.5" />
                <ellipse cx="150" cy="110" rx="86" ry="34" fill="none" stroke="#2d6a4f" strokeWidth="1.2" />
                <ellipse cx="150" cy="110" rx="40" ry="86" fill="none" stroke="#2d6a4f" strokeWidth="1.2" />
                <line x1="64" y1="110" x2="236" y2="110" stroke="#2d6a4f" strokeWidth="1.2" />
                {[
                  [150, 60],
                  [96, 92],
                  [204, 92],
                  [126, 150],
                  [178, 150],
                  [150, 172],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="5" fill="#e3a72f" />
                    <circle cx={x} cy={y} r="10" fill="#e3a72f" opacity="0.18" />
                  </g>
                ))}
                <circle cx="150" cy="110" r="7" fill="#f7d98a" />
              </svg>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Как работим"
              title="Възможности отвъд местния пазар"
              intro="Благодарение на работата ни с партньори от региона можем да търсим подходящи възможности за покупка и продажба на различни видове зърнени култури, маслодайни семена и фуражни суровини според текущото търсене и конкретните условия по сделката."
            />
            <div className="mt-8 space-y-5">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-wheat-400">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-900">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Търсите партньор за покупка или продажба в региона?"
        text="Споделете с нас продукта, количеството и пазара, който ви интересува."
      />
    </>
  );
}
