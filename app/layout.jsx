import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vedista.bg"),
  title: {
    default: "Vedista — Търговия със зърнени и маслодайни култури",
    template: "%s · Vedista",
  },
  description:
    "Vedista изкупува и търгува със зърнени култури, маслодайни семена и фуражни суровини. Пробовземане и анализ на качеството, международна търговия и организация на транспорта по всяка сделка.",
  keywords: [
    "зърнени култури",
    "маслодайни култури",
    "фуражни суровини",
    "изкупуване на зърно",
    "търговия със зърно",
    "пшеница",
    "царевица",
    "слънчоглед",
    "Vedista",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vedista — Търговия със зърнени и маслодайни култури",
    description:
      "Изкупуване и търговия със зърнени култури, маслодайни семена и фуражни суровини — в България и региона.",
    type: "website",
    locale: "bg_BG",
    siteName: "Vedista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedista — Търговия със зърнени и маслодайни култури",
    description:
      "Изкупуване и търговия със зърнени култури, маслодайни семена и фуражни суровини — в България и региона.",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#0f2438",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vedista",
  url: "https://vedista.bg",
  description:
    "Vedista изкупува и търгува със зърнени култури, маслодайни семена и фуражни суровини.",
  logo: "https://vedista.bg/icon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-wheat-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ocean-950"
        >
          Към съдържанието
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
