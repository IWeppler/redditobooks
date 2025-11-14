import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="flex w-full justify-center bg-background">
      {/* Mantenemos el borde lateral para consistencia con la sección anterior */}
      <div className="flex w-full max-w-6xl flex-col border-x border-brand-assets lg:flex-row">
        {/* COLUMNA IZQUIERDA: La Imagen (Sticky para efecto moderno) */}
        <div className="relative w-full border-b border-brand-assets lg:w-1/2 lg:border-b-0 lg:border-r">
          <div className="sticky top-24 flex h-full min-h-[400px] flex-col justify-between p-8 sm:p-12">
            {/* Badge de Localización */}
            <div className="mb-8 flex items-center gap-2 z-20">
              <div className="h-2 w-2 rounded-full bg-brand-main animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Based in South Florida
              </span>
            </div>

            {/* Título Visual sobre la imagen */}
            <div className="relative z-10 mt-auto">
              <h3 className="font-switzer text-4xl font-bold leading-none text-white lg:text-5xl">
                Nicolas <br /> & Marcos
              </h3>
              <p className="mt-4 max-w-md text-lg text-white/80">
                Degreed accountants combining big-firm expertise with boutique
                attention.
              </p>
            </div>

            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-40 grayscale transition-all duration-700 hover:grayscale-0">
              <Image
                src="/redditoteam2.jpg"
                alt="Founders"
                fill
                className="object-cover right-0"
              />
              <div className="h-full w-full bg-linear-to-t from-background via-background/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: La Narrativa y los Valores */}
        <div className="flex w-full flex-col justify-center bg-background lg:w-1/2">
          {/* Bloque 1: Intro */}
          <div className="border-b border-brand-assets p-8 sm:p-16">
            <h4 className="mb-6 font-switzer text-2xl font-semibold text-white">
              Your trusted partners in financial management
            </h4>
            <p className="leading-relaxed text-gray-400">
              Founded by Nicolas Torres and Marcos Garro, both seasoned
              accountants with over 7 years of experience. We decided to break
              away from the traditional rigid models to build{" "}
              <strong>Reddito</strong>: a firm dedicated to providing top-notch
              bookkeeping tailored to your unique needs.
            </p>
          </div>

          {/* Bloque 2: Los 3 Iconos (Ahora integrados elegantemente) */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-b border-brand-assets p-8 border-r sm:border-r-brand-assets">
              <span className="mb-3 block text-brand-main">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
              </span>
              <h5 className="mb-2 font-switzer text-lg font-medium text-white">
                Personal Touch
              </h5>
              <p className="text-gray-500">
                You won&apos;t talk to a bot. You get direct access to a
                dedicated expert who knows your business.
              </p>
            </div>

            <div className="border-b border-brand-assets p-8">
              <span className="mb-3 block text-brand-main">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </span>
              <h5 className="mb-2 font-switzer text-lg font-medium text-white">
                Fast & Experienced
              </h5>
              <p className="text-gray-500">
                Over 7 years of specialized industry experience ensuring quick
                turnarounds and accuracy.
              </p>
            </div>
          </div>

          {/* Bloque 3: Tech Stack & Closing */}
          <div className="p-8 sm:p-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-brand-assets bg-white/5 px-3 py-1 text-xs font-medium text-white">
              <span>Certified Experts</span>
            </div>
            <p className="mb-6 text-gray-400">
              Our team’s deep experience with <strong>QuickBooks Online</strong>{" "}
              ensures you receive top-tier support. We focus on providing
              reliable, professional support tailored to your unique financial
              need {" "}
              <span className="text-white">
                without the big-firm price tag.
              </span>
            </p>

            <a
              href="/about"
              className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-main hover:text-white"
            >
              More about us
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
