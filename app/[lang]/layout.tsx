import type { Metadata } from "next";
import { Suspense } from "react"; // <--- IMPORTANTE
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import Analytics from "@/components/Analytics";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es"],
} as const;

type SupportedLang = (typeof i18n.locales)[number];

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: LangLayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang: SupportedLang = i18n.locales.includes(resolvedParams.lang as SupportedLang)
    ? (resolvedParams.lang as SupportedLang)
    : i18n.defaultLocale;

  const dict = await getDictionary(lang);

  return {
    metadataBase: new URL("https://www.redditobooks.com"),
    title: {
      default: "Reddito Books | Modern Bookkeeping for Miami Businesses",
      template: "%s | Reddito Books",
    },
    description: dict.hero.subtitle,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: "Reddito Books",
      description: dict.hero.subtitle,
      url: `https://www.redditobooks.com/${lang}`,
      siteName: "Reddito Books",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const resolvedParams = await params;
  const lang: SupportedLang = i18n.locales.includes(resolvedParams.lang as SupportedLang)
    ? (resolvedParams.lang as SupportedLang)
    : i18n.defaultLocale;

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,601,700,701,800,801,900,901,1,2&f[]=general-sans@400,401,500,501,600,601,700,701&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Envolvemos Navbar en Suspense por si usa useSearchParams internamente */}
        <Suspense fallback={<div className="h-16 w-full" />}>
            <Navbar lang={lang} dict={dict} />
        </Suspense>

        {children}
        
        <Footer dict={dict} />
        
        <Suspense fallback={null}>
            <Analytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        </Suspense>
      </body>
    </html>
  );
}