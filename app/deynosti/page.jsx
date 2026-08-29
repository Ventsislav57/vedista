import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import { services, process } from "@/lib/site";

export const metadata = {
  title: "Дейности",
  description:
    "Изкупуване и търговия със зърно, съхранение и заготовка, логистика, вложения за реколтата, лаборатория и агрономически консултации.",
};

const details = [
  {
    icon: "Handshake",
    title: "Изкупуване и търговия",
    points: [
      "Спот изкупуване на място по актуална борсова котировка",
      "Форуърдни договори с фиксиране на цена преди жътва",
      "Договори за преработка и експорт през пристанищата",
      "Плащане до 3 работни дни след приемане",
    ],
  },
  {
    icon: "Warehouse",
    title: "Съхранение и заготовка",
    points: [
      "Силозни клетки с активна аерация и температурен мониторинг",
      "Сушилни за царевица, слънчоглед и рапица",
      "Почистване, калибриране и обеззаразяване",
      "Отговорно пазене с фиксирана такса на тон/месец",
    ],
  },
  {
    icon: "Truck",
    title: "Логистика и транспорт",
    points: [
      "Собствен и партньорски автопарк за силоз-камиони",
      "Жп изпращане с директен коловоз в базата край Добрич",
      "Организация на превоза до Варна, Бургас и Русе",
      "Проследимост и електронни кантарни бележки",
    ],
  },
  {
    icon: "Sprout",
    title: "Вложения за реколтата",
    points: [
      "Сертифицирани семена от водещи селекционни къщи",
      "Азотни, фосфорни и комплексни торове",
      "Продукти за растителна защита с агрономическа препоръка",
      "Стоков кредит срещу договор за реколта",
    ],
  },
  {
    icon: "FlaskConical",
    title: "Лаборатория и качество",
    points: [
      "Влага, хектолитрово тегло, примеси, натрошени зърна",
      "Протеин, глутен и число на падане за пшеница",
      "Масленост и киселинност за маслодайни",
      "Резултат до 60 минути от постъпване на пробата",
    ],
  },
  {
    icon: "BarChart3",
    title: "Агрономи и пазарни анализи",
    points: [
      "Консултации на терен през целия вегетационен сезон",
      "Сателитен мониторинг на състоянието на посевите",
      "Седмичен бюлетин с борсови котировки и прогнози",
      "Помощ при планиране на сеитбооборота",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Дейности"
        title="Един партньор за целия път на зърното"
        intro="Vedista покрива всяка стъпка между полето и купувача. Можете да ползвате отделна услуга или целия цикъл — с общ договор и общо отчитане."
      />

      <section className="bg-sand/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <a
                  href={`#${i}`}
                  className="group flex h-full items-start gap-4 rounded-3xl border border-forest-900/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400 transition-colors group-hover:bg-wheat-500 group-hover:text-forest-950">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-forest-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                      {s.text}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="space-y-16">
          {details.map((d, i) => (
            <Reveal key={d.title}>
              <div
                id={String(i)}
                className="grid scroll-mt-28 gap-8 rounded-[2rem] border border-forest-900/10 bg-cream p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400">
                    <Icon name={d.icon} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl text-forest-900 sm:text-3xl">
                    {d.title}
                  </h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {d.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-2xl bg-sand/50 px-4 py-3 text-sm text-forest-800/80"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest-900 py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Процес"
            title="Как протича една сделка"
            tone="light"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-cream/12 bg-forest-800/40 p-7">
                  <span className="font-display text-4xl text-wheat-400">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {p.text}
                  </p>
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
