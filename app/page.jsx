import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PriceTicker from "@/components/PriceTicker";
import PriceBoard from "@/components/PriceBoard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import { values, howWeWork } from "@/lib/site";

const overview = [
  {
    icon: "Wheat",
    title: "Търговия",
    text: "Зърнени и маслодайни култури, шротове и фуражни суровини според пазарното търсене.",
    href: "/targoviya",
  },
  {
    icon: "ClipboardCheck",
    title: "Проби и анализ",
    text: "Пробовземане и лабораторен анализ на качеството преди всяка покупка.",
    href: "/probovzemane-i-analiz",
  },
  {
    icon: "Globe",
    title: "Международна търговия",
    text: "Партньорства с компании от региона и следене на близките пазари.",
    href: "/mezhdunarodna-targoviya",
  },
  {
    icon: "Route",
    title: "Транспорт",
    text: "Организираме превоза по сделката или координираме собствен транспорт на клиента.",
    href: "/transport-i-logistika",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <PriceTicker />
      <Marquee />

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
                alt="Ръкостискане в житно поле — сделка между земеделец и търговец"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Кои сме ние"
              title="Надежден партньор в търговията със земеделска продукция"
              intro="Vedista развива дейност в областта на изкупуването и търговията със зърнени култури, маслодайни семена и фуражни суровини. Работим с производители и търговски партньори, като следим активно пазарните условия и възможностите за реализация на различните видове продукция."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean-900/8 text-ocean-700">
                      <Icon name={v.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-900">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ocean-800/70">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/za-nas"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean-700 transition-colors hover:text-wheat-600"
              >
                Повече за компанията
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Как работим"
            title="От запитването до изпълнението"
            intro="Ясен процес на всяка стъпка — от първия контакт до транспортирането на стоката."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-ocean-900/10 bg-cream p-7">
                  <span className="font-display text-5xl text-sand-dark">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ocean-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-800/70">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Дейности"
          title="С какво се занимава Vedista"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-3xl border border-ocean-900/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-wheat-400/60 hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-900 text-wheat-400 transition-colors group-hover:bg-wheat-500 group-hover:text-ocean-950">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ocean-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ocean-800/70">
                  {s.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-700">
                  Научете повече
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <PriceBoard />

      <CTA />
    </>
  );
}
