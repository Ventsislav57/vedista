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
    default: "Vedista — Зърнени култури, търговия и агрономия",
    template: "%s · Vedista",
  },
  description:
    "Vedista е партньор на българския земеделец: изкупуване и търговия със зърно, съхранение, логистика и агрономическо обслужване за пшеница, царевица, слънчоглед, ечемик и рапица.",
  keywords: [
    "зърнени култури",
    "изкупуване на зърно",
    "търговия със зърно",
    "пшеница",
    "царевица",
    "слънчоглед",
    "земеделие",
    "Vedista",
  ],
  openGraph: {
    title: "Vedista — Зърнени култури, търговия и агрономия",
    description:
      "Партньор на българския земеделец в търговията, съхранението и логистиката на зърнени култури.",
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
