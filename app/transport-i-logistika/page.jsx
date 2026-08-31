import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Транспорт и логистика",
  description:
    "Vedista организира транспорта и логистиката по сделките според конкретните условия и договорености — или координира взимане/доставка със собствен транспорт на клиента.",
};

const options = [
  {
    icon: "Route",
    title: "Организиран от Vedista",
    text: "Нашият екип координира необходимото транспортиране на продукцията според конкретните условия и договорености, за да осигури удобно и навременно изпълнение на сделката.",
  },
  {
    icon: "Truck",
    title: "Собствен транспорт на клиента",
    text: "При желание от страна на клиента предлагаме и възможност продукцията да бъде взета или доставена със собствен транспорт, когато това е по-удобно за него.",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Транспорт и логистика"
        title="Организация на транспорта от начало до край"
        intro="Vedista организира транспорта и логистиката по сделките, като координира необходимото транспортиране на продукцията според конкретните условия и договорености."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {options.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-forest-900/10 bg-cream p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900 text-wheat-400">
                  <Icon name={o.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-forest-900">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-forest-800/70">
                  {o.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Гъвкав подход"
            title="Всеки клиент избира най-подходящия вариант"
            align="center"
          />
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-forest-800/80">
              По този начин предлагаме гъвкав подход и възможност всеки
              клиент да избере най-подходящия вариант за транспортиране на
              своята продукция.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Имате нужда от организиран транспорт по сделка?"
        text="Споделете детайлите — количество, продукт и локация, а ние ще предложим подходящ вариант."
      />
    </>
  );
}
