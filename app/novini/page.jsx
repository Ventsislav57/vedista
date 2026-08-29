import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/lib/site";

export const metadata = {
  title: "Новини",
  description:
    "Пазарни коментари, съвети за управление на ценовия риск и новини за компанията Vedista.",
};

const extra = [
  {
    slug: "susha-2025-carevica",
    date: "28 май 2025",
    category: "Пазари",
    title: "Сушата в Южна България натиска сроковете за сеитба на царевицата",
    excerpt:
      "Анализ на почвените влагозапаси по области и очаквано влияние върху добивите и цените до есента.",
  },
  {
    slug: "kak-chetem-laboratoren-analiz",
    date: "9 май 2025",
    category: "Съвети",
    title: "Как да четете лабораторния анализ на пшеницата",
    excerpt:
      "Число на падане, протеин, хектолитър и седиментация — кой показател какво означава за цената.",
  },
  {
    slug: "vedista-partnyorstvo-bdz-cargo",
    date: "21 април 2025",
    category: "Компания",
    title: "Vedista удвоява жп капацитета си с ново партньорство",
    excerpt:
      "Допълнителни маршрутни влакове до пристанище Варна ще скъсят времето за експедиция с два дни.",
  },
];

const all = [...news, ...extra];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Новини"
        title="От пазара, от полето и от компанията"
        intro="Кратки, полезни материали за земеделеца — без излишен шум. Абонирайте се за седмичния бюлетин от формата за контакт."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <article className="group grid gap-6 overflow-hidden rounded-[2rem] border border-forest-900/10 bg-forest-900 p-8 text-cream sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-xs text-cream/55">
                <span className="rounded-full bg-wheat-400/20 px-2.5 py-1 font-medium text-wheat-300">
                  {all[0].category}
                </span>
                {all[0].date}
              </div>
              <h2 className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
                {all[0].title}
              </h2>
              <p className="mt-3 max-w-lg text-cream/70">{all[0].excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-wheat-300">
                Прочети целия материал
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="rounded-2xl bg-forest-800/50 p-6 text-sm text-cream/70">
              <p className="font-display text-lg text-cream">Акцент от броя</p>
              <p className="mt-2">
                Среден протеин в приетите партиди пшеница по области — Добрич
                13.4%, Плевен 12.9%, Стара Загора 12.1%.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {all.slice(1).map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col rounded-3xl border border-forest-900/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center gap-3 text-xs text-forest-800/55">
                  <span className="rounded-full bg-wheat-400/20 px-2.5 py-1 font-medium text-wheat-600">
                    {n.category}
                  </span>
                  {n.date}
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-forest-900">
                  {n.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-800/70">
                  {n.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                  Прочети
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
