const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/za-nas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/targoviya", priority: 0.9, changeFrequency: "weekly" },
  { path: "/probovzemane-i-analiz", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mezhdunarodna-targoviya", priority: 0.7, changeFrequency: "monthly" },
  { path: "/transport-i-logistika", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakti", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  const base = "https://vedista.bg";
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
