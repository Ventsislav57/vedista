import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import CropArt from "@/components/CropArt";
import { crops } from "@/lib/site";

export const metadata = {
  title: "Култури",
  description:
    "Пшеница, царевица, слънчоглед, ечемик и рапица — критерии за качество, сезон на изкупуване и видове договори с Vedista.",
};

const specs = {
  pshenitsa: [
    ["Влага", "до 13.5%"],
    ["Хектолитрово тегло", "76 kg/hl и нагоре"],
    ["Протеин", "11.5% – 14%"],
    ["Число на падане", "220 – 320 s"],
    ["Натрошени зърна", "до 5%"],
    ["Примеси", "до 2%"],
  ],
  tsarevitsa: [
    ["Влага при приемане", "до 30% (сушим до 14%)"],
    ["Счупени зърна", "до 5%"],
    ["Примеси", "до 3%"],
    ["Микотоксини", "в рамките на ЕС норми"],
    ["Хектолитрово тегло", "70 kg/hl и нагоре"],
    ["Опаковка", "насипно или бигбег"],
  ],
  slanchogled: [
    ["Влага", "до 8%"],
    ["Масленост", "44% и нагоре"],
    ["Примеси", "до 3%"],
    ["Свободни мастни киселини", "до 2%"],
    ["Хай-олеик", "по договор, ≥ 82% олеинова к-на"],
    ["Сезон", "август – септември"],
  ],
  echemik: [
    ["Влага", "до 13.5%"],
    ["Протеин (пивоварен)", "9.5% – 11.5%"],
    ["Калибър", "над 2.5 mm — мин. 85%"],
    ["Кълняемост", "мин. 95%"],
    ["Примеси", "до 2%"],
    ["Сезон", "юни"],
  ],
  rapitsa: [
    ["Влага", "до 9%"],
    ["Масленост", "40% и нагоре"],
    ["Примеси", "до 3%"],
    ["Ерукова киселина", "до 2%"],
    ["Глюкозинолати", "до 25 µmol/g"],
    ["Сезон", "юни – юли"],
  ],
};

export default function CropsPage() {
  return (
    <>
      <PageHero
        eyebrow="Култури"
        title="Ясни критерии за всяка култура"
        intro="Публикуваме базовите изисквания за качество предварително, за да няма изненади на кантара. Отклоненията се остойностяват по прозрачна рефакционна таблица."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="space-y-20">
          {crops.map((c, i) => (
            <Reveal key={c.slug}>
              <article
                id={c.slug}
                className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div
                  className={`relative aspect-4/3 overflow-hidden rounded-[2rem] shadow-lift ${
                    i % 2 ? "lg:order-2" : ""
                  }`}
                >
                  <CropArt
                    slug={c.slug}
                    accent={c.accent}
                    className="h-full w-full object-cover"
                  />
                  <span
                    className="absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold text-forest-950"
                    style={{ backgroundColor: c.accent }}
                  >
                    {c.season}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <h2 className="font-display text-3xl text-forest-900 sm:text-4xl">
                      {c.name}
                    </h2>
                    <span className="text-sm italic text-forest-800/45">
                      {c.latin}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg leading-relaxed text-forest-800/75">
                    {c.blurb}
                  </p>

                  <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {specs[c.slug].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between gap-3 border-b border-forest-900/10 py-2 text-sm"
                      >
                        <dt className="text-forest-800/60">{k}</dt>
                        <dd className="text-right font-medium text-forest-900">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Спот", "Форуърд", "Отговорно пазене", "Замяна за вложения"].map(
                      (t) => (
                        <span
                          key={t}
                          className="rounded-full border border-forest-900/12 bg-sand/50 px-3 py-1 text-xs font-medium text-forest-800"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
