import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
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

//Reemplazar esto con tu ID real de Google Analytics cuando lo tenga
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
  const lang: SupportedLang = i18n.locales.includes(
    resolvedParams.lang as SupportedLang
  )
    ? (resolvedParams.lang as SupportedLang)
    : i18n.defaultLocale;

  const dict = await getDictionary(lang);
  const baseUrl = "https://www.redditobooks.com";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Reddito Books | Bookkeeping for Miami Businesses",
      template: "%s | Reddito Books",
    },
    description: dict.hero.subtitle,
    applicationName: "Reddito Books",
    authors: [
      {
        name: "Marcos Garro",
        url: "https://www.linkedin.com/in/marcos-garro-28092a175/",
      },
    ],
    generator: "Next.js",
    keywords: [
      "Bookkeeping Miami",
      "Accounting Services Florida",
      "QuickBooks Online Experts",
      "Fractional CFO",
      "Small Business Accounting",
      "Contabilidad Miami",
      "Impuestos negocios Florida",
      "Reddito Books",
    ],
    referrer: "origin-when-cross-origin",
    creator: "Reddito Books LLC",
    publisher: "Reddito Books LLC",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: "Reddito Books | Financial Clarity",
      description: dict.hero.subtitle,
      url: `${baseUrl}/${lang}`,
      siteName: "Reddito Books",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Reddito Books - Strategic Bookkeeping in Miami",
        },
      ],
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Reddito Books",
      description: dict.hero.subtitle,
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const resolvedParams = await params;
  const lang: SupportedLang = i18n.locales.includes(
    resolvedParams.lang as SupportedLang
  )
    ? (resolvedParams.lang as SupportedLang)
    : i18n.defaultLocale;

  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Reddito Books",
    image: "https://www.redditobooks.com/og-image.png",
    description:
      "Bookkeeping and fractional CFO services for Miami businesses.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8325 NE 2nd Ave",
      addressLocality: "Miami",
      addressRegion: "FL",
      postalCode: "33138",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.8525,
      longitude: -80.1918,
    },
    url: "https://www.redditobooks.com",
    telephone: "+1-786-402-9312",
    email: "info@redditobooks.com",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/marcos-garro-28092a175/",
      "https://www.instagram.com/marcos_accounting/",
      "https://www.facebook.com/redditobooks",
    ],
  };

  return (
    <html lang={lang}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,601,700,701,800,801,900,901,1,2&f[]=general-sans@400,401,500,501,600,601,700,701&display=swap"
          rel="stylesheet"
        />
        <Script
          id="schema-org-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-white">
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
