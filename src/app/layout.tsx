import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LanguageModal } from "@/components/layout/LanguageModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Руслан Чистяков | Fullstack-разработчик",
  description:
    "Full-stack разработчик и системный администратор. Создаю цифровые экосистемы с нуля: от серверной инфраструктуры до кастомных интерфейсов.",
  keywords: [
    "разработчик",
    "fullstack",
    "react",
    "next.js",
    "typescript",
    "портфолио",
    "системный администратор",
  ],
  authors: [{ name: "Руслан Чистяков" }],
  openGraph: {
    title: "Руслан Чистяков | Fullstack-разработчик",
    description:
      "Full-stack разработчик и системный администратор. Создаю цифровые экосистемы с нуля.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <LanguageProvider>
            <SmoothScroll>
              <LanguageModal />
              <Navbar />
              <main className="relative">{children}</main>
              <Footer />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
