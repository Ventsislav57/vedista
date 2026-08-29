import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import CropShowcase from "@/components/CropShowcase";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { services, stats, process, values, news } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80"
                  alt="Ръкостискане в житно поле — сделка между земеделец и търговец"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-forest-900 px-6 py-5 text-cream shadow-lift sm:block">
                <div className="font-display text-3xl text-wheat-400">
                  <Counter value={120} suffix=" хил. т" />
                </div>
                <div className="text-xs text-cream/60">складов капацитет</div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Кои сме ние"
              title="Между полето и пазара — от 2009 година"
              intro="Vedista започва като локален изкупвач в Северна България и днес е сред утвърдените търговци на зърно в страната. Работим с над 1200 стопанства — от семейни ферми до големи арендатори."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-900/8 text-forest-700">
                      <Icon name={v.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-900">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
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
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-wheat-600"
              >
                Повече за компанията
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Дейности"
            title="Пълен цикъл на обслужване на зърното"
            intro="От договаряне на цената до експедиция към пристанището — всяка стъпка се управлява от един екип."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-forest-900/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-wheat-400/60 hover:shadow-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400 transition-colors group-hover:bg-wheat-500 group-hover:text-forest-950">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-forest-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-forest-800/70">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/deynosti"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              Вижте всички услуги
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Crops */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Култури"
          title="Културите, с които работим"
          intro="Изкупуваме хлебни, фуражни и маслодайни култури с ясни критерии за качество и прозрачно ценообразуване."
        />
        <div className="mt-14">
          <CropShowcase />
        </div>
      </section>

      {/* Numbers */}
      <section className="grain relative overflow-hidden bg-forest-900 py-20 text-cream lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#40916c,transparent_40%),radial-gradient(circle_at_80%_80%,#e3a72f,transparent_35%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} direction="scale">
                <div className="text-center lg:text-left">
                  <div className="font-display text-4xl text-wheat-400 sm:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-cream/65">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Как работим"
          title="Четири стъпки от нива до плащане"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-forest-900/10 bg-cream p-7">
                <span className="font-display text-5xl text-sand-dark">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-xl text-forest-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/70">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="grain relative overflow-hidden bg-gradient-to-b from-forest-800 to-forest-950 py-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Testimonials />
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Новини"
            title="От пазара и от полето"
          />
          <Reveal>
            <Link
              href="/novini"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 transition-colors hover:text-wheat-600"
            >
              Всички новини
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.1}>
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
