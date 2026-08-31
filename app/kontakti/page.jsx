import { User, Phone, Mail, Briefcase } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { team } from "@/lib/site";

export const metadata = {
  title: "Контакти",
  description:
    "Свържете се с екипа на Vedista за оферта или запитване относно покупка, продажба или транспорт на земеделска продукция.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакти"
        title="Да обсъдим вашата сделка"
        intro="Оставете запитване през формата — ще получите отговор от нашия екип с оферта, съобразена с продукта, количеството и мястото на товарене."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="rounded-3xl border border-forest-900/10 bg-forest-900 p-8 text-cream sm:p-10">
                <h2 className="font-display text-2xl">
                  Какво да включите в запитването
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-cream/75">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-400" />
                    Вид на продукцията — зърнена, маслодайна или фуражна суровина
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-400" />
                    Ориентировъчно количество
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-400" />
                    Място на товарене
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wheat-400" />
                    Предпочитан срок за изпълнение
                  </li>
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-cream/60">
                  Ще се свържем с вас, за да уточним пробовземане и анализ,
                  преди да предложим конкретна цена.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Екип"
            title="Нашият екип"
            intro="Информацията за екипа на Vedista предстои да бъде публикувана."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-dashed border-forest-900/20 bg-cream/60 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900/8 text-forest-700/60">
                    <User className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 text-sm">
                    <Row icon={User} label="Име и фамилия" value={m.name} />
                    <Row icon={Briefcase} label="Длъжност" value={m.role} />
                    <Row icon={Phone} label="Телефон" value={m.phone} />
                    <Row icon={Mail} label="Имейл" value={m.email} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ icon: I, label, value }) {
  return (
    <div className="flex items-center gap-2.5 text-forest-800/50">
      <I className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
      <span className="text-xs uppercase tracking-wide">{label}:</span>
      <span className="italic text-forest-800/40">{value}</span>
    </div>
  );
}
