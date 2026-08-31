import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";
import { values, howWeWork } from "@/lib/site";

export const metadata = {
  title: "За нас",
  description:
    "Vedista — надежден партньор в търговията със зърнени култури, маслодайни семена и фуражни суровини.",
  alternates: { canonical: "/za-nas" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="За нас"
        title="Надежден партньор в търговията със земеделска продукция"
        intro="Vedista развива дейност в областта на изкупуването и търговията със зърнени култури, маслодайни семена и фуражни суровини. Работим с производители и търговски партньори, като следим активно пазарните условия и възможностите за реализация на различните видове продукция."
      />

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=80"
                alt="Житно поле по залез"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Как подхождаме"
              title="Индивидуален подход към всяка сделка"
              intro="Подхождаме индивидуално към всяка сделка, като се съобразяваме с вида и качеството на стоката, количеството, мястото на товарене и актуалната пазарна ситуация. Нашата цел е да предложим коректни условия, ясна комуникация и добра организация от първоначалното запитване до финализирането на сделката."
            />
            <div className="mt-8 space-y-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-900 text-wheat-400">
                      <Icon name={v.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ocean-900">{v.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ocean-800/70">
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
        <SectionHeading
          eyebrow="Как работим"
          title="От запитването до изпълнението"
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
      </section>

      <CTA />
    </>
  );
}
