import { Suspense } from "react";
import { getDictionary } from "@/lib/dictionaries";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import { FaqSection } from "@/components/sections/faq";
import { BookingSection } from "@/components/sections/booking";
// import ContactSection from "@/components/sections/contact";
import TestimonialsSection from "@/components/sections/testimonials";
import { i18n } from "./layout";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const candidate = lang as (typeof i18n.locales)[number];
  const validLang = i18n.locales.includes(candidate)
    ? candidate
    : i18n.defaultLocale;

  const dict = await getDictionary(validLang);

  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection dict={dict} />
        <ServicesSection dict={dict} />
        <AboutSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <FaqSection dict={dict} />
        <BookingSection dict={dict} />
      </Suspense>
    </main>
  );
}
