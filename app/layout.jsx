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
  openGraph: {
    title: "Vedista — Търговия със зърнени и маслодайни култури",
    description:
      "Изкупуване и търговия със зърнени култури, маслодайни семена и фуражни суровини — в България и региона.",
    type: "website",
    locale: "bg_BG",
    siteName: "Vedista",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
