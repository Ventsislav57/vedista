import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Устойчивост",
  description:
    "Как Vedista подкрепя устойчивото земеделие: сеитбообращение, прецизно торене, намаляване на въглеродния отпечатък и проследимост.",
};

const pillars = [
  {
    icon: "Leaf",
    title: "Здраве на почвата",
    text: "Стимулираме сеитбообращение и покривни култури с диференцирано ценообразуване за партньори, които ги прилагат.",
  },
  {
    icon: "Droplets",
    title: "Прецизно торене",
    text: "Агрономите ни изготвят карти за диференцирано внасяне на база почвен анализ и сателитни данни, за да няма преразход.",
  },
  {
    icon: "Truck",
    title: "По-къса логистика",
    text: "Оптимизираме маршрутите и залагаме на жп транспорт, който намалява емисиите на тон изтъргувано зърно.",
  },
  {
    icon: "ScrollText",
    title: "Проследимост",
    text: "Всяка партида носи история — стопанство, парцел, дата на прибиране и лабораторни показатели.",
  },
];

const metrics = [
  { value: 18, suffix: "%", label: "по-нисък разход на азот при партньорите ни с карти за торене" },
  { value: 40, suffix: "%", label: "от обемите пътуват с жп вместо с камиони" },
  { value: 100, suffix: "%", label: "проследими партиди до парцел" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Устойчивост"
        title="Добрата реколта днес не бива да ощетява следващата"
        intro="За нас устойчивостта не е маркетинг, а условие за бизнеса ни да съществува и след 20 години. Затова обвързваме търговските условия с практики, които пазят почвата и водата."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-4 rounded-3xl border border-forest-900/10 bg-cream p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400">
                  <Icon name={p.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[26rem] w-full">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80"
            alt="Млади посеви в обработена почва"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-950/55" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 sm:grid-cols-3">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.1} direction="scale">
                  <div className="text-cream">
                    <div className="font-display text-4xl text-wheat-400 sm:text-5xl">
                      <Counter value={m.value} suffix={m.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-cream/75">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Ангажимент"
              title="Какво поемаме до 2030 г."
              intro="Целите ни са конкретни и измерими — отчитаме напредъка в годишен доклад, достъпен за партньорите."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Всички дългосрочни партньори с план за сеитбообращение",
                "Намаляване на емисиите на тон зърно с 25%",
                "100% електроенергия от възобновяеми източници в базите",
                "Дигитален паспорт на партидата за всеки клиент",
              ].map((t) => (
                <Reveal key={t}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-600 text-[10px] text-cream">
                      ✓
                    </span>
                    <span className="text-forest-800/80">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal direction="right">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
                alt="Житно поле в златист цвят"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_70%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
