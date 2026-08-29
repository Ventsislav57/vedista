import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import { stats, values, company } from "@/lib/site";

export const metadata = {
  title: "За нас",
  description:
    "Историята, екипът и принципите на Vedista — търговец на зърнени култури с национално покритие от 2009 г.",
};

const timeline = [
  { year: "2009", text: "Основаване на Vedista като локален изкупвач на зърно в Плевенско." },
  { year: "2013", text: "Първа собствена силозна база с капацитет 25 000 тона и лаборатория." },
  { year: "2017", text: "Разширяване към маслодайни култури и стартиране на форуърдни договори." },
  { year: "2020", text: "Изградена жп връзка и партньорства с пристанищата Варна и Русе." },
  { year: "2023", text: "Въвеждане на сателитен мониторинг и агрономически екип на терен." },
  { year: "2025", text: "Нова база край Добрич; годишен оборот над 480 хил. тона зърно." },
];

const team = [
  { name: "инж. Николай Ведрин", role: "Управител", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Елена Костова", role: "Директор „Търговия“", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Мартин Радев", role: "Ръководител „Логистика“", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" },
  { name: "д-р Ива Пенкова", role: "Главен агроном", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="За нас"
        title="Компания, изградена върху думата, дадена на земеделеца"
        intro={`${company.name} е независим търговец на зърнени култури с екип от агрономи, търговци и логистици. Не сме борса и не сме посредник на посредник — купуваме директно и плащаме в срок.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} direction="scale">
              <div className="rounded-3xl border border-forest-900/10 bg-cream p-7 text-center">
                <div className="font-display text-4xl text-forest-800">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-forest-800/65">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=80"
                alt="Житно поле по залез"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Мисия"
              title="Да направим реализацията на зърното предвидима"
              intro="Вярваме, че земеделецът заслужава да знае цената, срока и условията предварително. Затова изградихме собствена инфраструктура за приемане, анализ и съхранение — за да поемем риска там, където можем да го управляваме."
            />
            <div className="mt-8 space-y-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-wheat-400">
                      <Icon name={v.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-900">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="История" title="Пътят до тук" />
        <div className="mt-14 space-y-0">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="flex gap-6 border-l-2 border-forest-900/12 pb-10 pl-8 last:pb-0 sm:gap-10">
                <div className="relative">
                  <span className="absolute -left-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-wheat-500 text-xs font-bold text-forest-950">
                    ●
                  </span>
                </div>
                <div className="-mt-1.5">
                  <div className="font-display text-2xl text-forest-900">
                    {t.year}
                  </div>
                  <p className="mt-1 max-w-xl text-forest-800/70">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Екип"
            title="Хората, с които говорите"
            intro="Един контакт за търговия, един за агрономия, един за логистика — без прехвърляне между отдели."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-3xl border border-forest-900/10 bg-cream">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-forest-900">
                      {m.name}
                    </h3>
                    <p className="text-sm text-forest-800/60">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
