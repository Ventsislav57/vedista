import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Пробовземане и анализ",
  description:
    "Преди всяка покупка Vedista извършва пробовземане и лабораторен анализ на основните качествени показатели на зърнената продукция.",
  alternates: { canonical: "/probovzemane-i-analiz" },
};

const steps = [
  {
    icon: "ClipboardCheck",
    title: "Пробовземане",
    text: "Преди всяка покупка на зърнена продукция извършваме пробовземане, за да бъде определено качеството на предлаганата стока.",
  },
  {
    icon: "FlaskConical",
    title: "Лабораторен анализ",
    text: "След вземането на проба се извършва лабораторен анализ, който дава необходимата информация за основните качествени показатели на продукцията.",
  },
  {
    icon: "Handshake",
    title: "Коректна цена",
    text: "На база резултатите предлагаме конкретна цена, съобразена с реалното качество на стоката и актуалните пазарни условия.",
  },
];

export default function SamplingPage() {
  return (
    <>
      <PageHero
        eyebrow="Пробовземане и анализ"
        title="Качеството се проверява, преди да се договори цена"
        intro="Преди всяка покупка на зърнена продукция извършваме пробовземане, за да бъде определено качеството на предлаганата стока."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-ocean-900/10 bg-cream p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-900 text-wheat-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ocean-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ocean-800/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Защо е важно"
            title="Прозрачност още преди финализиране на сделката"
          />
          <Reveal delay={0.08}>
            <p className="mt-6 text-lg leading-relaxed text-ocean-800/80">
              Въз основа на резултатите от анализа можем да предложим
              най-конкретна и коректна цена, съобразена с реалното качество
              на стоката и актуалните пазарни условия. По този начин
              условията по сделката са ясни и прозрачни още преди нейното
              финализиране.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Искате да проверите качеството на своята продукция?"
        text="Свържете се с нас, за да организираме пробовземане и да обсъдим следващите стъпки."
      />
    </>
  );
}
