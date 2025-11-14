import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesSection from "@/components/sections/services";
import AboutSection from "@/components/sections/about";
import { BookingSection, FaqSection } from "@/components/sections/faq";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Navbar />
      <main className="flex min-h-[85dvh] w-full max-w-6xl flex-col items-center justify-center border-x border-b border-brand-assets py-32 px-8 sm:items-start sm:px-16">
        <h1 className="font-switzer text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Bookkeeping that drives your Business forward
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          At Reddito Books, we simplify your financial management with accuracy
          and dependability, giving you more time to focus on growing your
          business.
        </p>

        {/* Ejemplo de botón */}
        <button className="mt-8 rounded bg-brand-main px-6 py-3 font-medium text-white hover:bg-brand-secondary transition-colors cursor-pointer">
          Get Started
        </button>
      </main>
      <ServicesSection />
      <AboutSection />
      <FaqSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
