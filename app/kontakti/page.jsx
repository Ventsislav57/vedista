import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata = {
  title: "Контакти",
  description:
    "Свържете се с Vedista за оферта, отговорно пазене или агрономическа консултация. Централен офис в София и силозни бази в Северна България.",
};

const offices = [
  {
    city: "София — централен офис",
    address: company.address,
    phone: company.phone,
  },
  {
    city: "Силозна база Добрич",
    address: "Индустриална зона „Запад“, Добрич 9300",
    phone: "+359 58 60 22 10",
  },
  {
    city: "Изкупвателен пункт Плевен",
    address: "жк „Индустриален“, Плевен 5800",
    phone: "+359 64 80 15 40",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакти"
        title="Да поговорим за вашата реколта"
        intro="Оставете запитване през формата или се обадете директно. За спешни въпроси по време на жътва телефонът работи и в събота."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard icon={Phone} label="Телефон">
                  <a href={company.phoneHref} className="hover:text-wheat-600">
                    {company.phone}
                  </a>
                </InfoCard>
                <InfoCard icon={Mail} label="Имейл">
                  <a href={company.emailHref} className="hover:text-wheat-600">
                    {company.email}
                  </a>
                </InfoCard>
                <InfoCard icon={MapPin} label="Адрес">
                  {company.address}
                </InfoCard>
                <InfoCard icon={Clock} label="Работно време">
                  {company.hours}
                </InfoCard>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 font-display text-xl text-forest-900">
                Бази и пунктове
              </h3>
              <div className="mt-4 space-y-3">
                {offices.map((o) => (
                  <div
                    key={o.city}
                    className="flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-cream p-4"
                  >
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" />
                    <div className="text-sm">
                      <div className="font-semibold text-forest-900">
                        {o.city}
                      </div>
                      <div className="text-forest-800/65">{o.address}</div>
                      <div className="text-forest-800/65">{o.phone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tsarigradsko+shose+115+Sofia"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 block overflow-hidden rounded-2xl border border-forest-900/10"
              >
                <svg viewBox="0 0 600 260" className="h-64 w-full" aria-hidden="true">
                  <rect width="600" height="260" fill="#eef2e6" />
                  <g stroke="#d5ddc4" strokeWidth="2">
                    {[40, 90, 140, 190, 240].map((y) => (
                      <line key={y} x1="0" y1={y} x2="600" y2={y} />
                    ))}
                    {[80, 170, 260, 350, 440, 530].map((x) => (
                      <line key={x} x1={x} y1="0" x2={x} y2="260" />
                    ))}
                  </g>
                  <path
                    d="M-10 210 C 120 150 200 250 340 170 S 520 60 620 110"
                    stroke="#bcd0a0"
                    strokeWidth="14"
                    fill="none"
                  />
                  <path
                    d="M120 -10 C 150 90 90 150 180 220 S 240 300 210 360"
                    stroke="#cfe0e6"
                    strokeWidth="18"
                    fill="none"
                  />
                  <circle cx="316" cy="132" r="13" fill="#10281e" />
                  <circle cx="316" cy="132" r="26" fill="#10281e" opacity="0.15" />
                </svg>
                <div className="absolute bottom-3 left-3 rounded-xl bg-cream/95 px-3 py-2 text-xs font-medium text-forest-900 shadow-soft">
                  {company.address}
                  <span className="ml-2 text-forest-700 group-hover:underline">
                    Отвори в Google Maps →
                  </span>
                </div>
              </a>
            </Reveal>
          </div>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: I, label, children }) {
  return (
    <div className="rounded-2xl border border-forest-900/10 bg-cream p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-900/8 text-forest-700">
        <I className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-forest-800/50">
        {label}
      </div>
      <div className="mt-1 text-sm text-forest-900">{children}</div>
    </div>
  );
}
