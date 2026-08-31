import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import PageHeroLink from "@/components/PageHeroLink";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CropArt from "@/components/CropArt";
import CTA from "@/components/CTA";
import { tradeCategories, crops } from "@/lib/site";

export const metadata = {
  title: "Търговия",
  description:
    "Vedista търгува със зърнени култури, маслодайни семена, шротове и фуражни суровини според актуалното пазарно търсене.",
};

export default function TradePage() {
  return (
    <>
      <PageHero
        eyebrow="Търговия"
        title="Търговия със зърно, маслодайни култури и фуражни суровини"
        intro="Работим с различни видове земеделска продукция в зависимост от актуалното пазарно търсене и възможностите за реализация. Подхождаме индивидуално към всяка сделка, съобразявайки се с вида и качеството на стоката, количеството, мястото на товарене и актуалната пазарна ситуация."
      >
        <PageHeroLink href="/#ceni">
          Вижте актуални пазарни нива
          <ArrowUpRight className="h-4 w-4" />
        </PageHeroLink>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {tradeCategories.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 2) * 0.08}>
              <div className="group h-full overflow-hidden rounded-3xl border border-forest-900/10 bg-cream transition-all duration-300 hover:-translate-y-1.5 hover:border-wheat-400/60 hover:shadow-lift">
                {cat.crops.length > 0 && (
                  <div className="grid grid-cols-3 gap-px bg-forest-900/10">
                    {cat.crops.map((slug) => {
                      const c = crops.find((x) => x.slug === slug);
                      return (
                        <div key={slug} className="relative aspect-4/3 overflow-hidden">
                          <CropArt
                            slug={slug}
                            accent={c?.accent}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400 transition-colors group-hover:bg-wheat-500 group-hover:text-forest-950">
                    <Icon name={cat.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-forest-900">
                    {cat.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-forest-800/70">
                    {cat.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-forest-900/10 bg-sand/50 p-8 text-center sm:p-10">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-forest-800/80">
              За конкретен продукт, количество или възможност за продажба се
              свържете с нашия екип — ще обсъдим условията индивидуално.
            </p>
            <Link
              href="/kontakti"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              Изпратете запитване
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTA
        title="Търсите купувач или доставчик на конкретна суровина?"
        text="Опишете ни продукта, количеството и локацията — ще проверим възможностите за реализация."
      />
    </>
  );
}
