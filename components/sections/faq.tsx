"use client";

import React, { useState } from "react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";

// --- COMPONENTE 1: TESTIMONIOS + BADGE FLORIDA ---
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Since switching to Reddito, our books have never been cleaner. It feels like they are part of our in-house team.",
      author: "Sarah J.",
      role: "CEO, TechStart",
    },
    {
      quote:
        "The peace of mind I get knowing Nicolas and Marcos are handling my tax compliance is worth every penny.",
      author: "David R.",
      role: "Founder, Miazon LLC",
    },
    {
      quote:
        "Fast, responsive, and incredibly detailed. They caught errors my previous accountant missed for years.",
      author: "Elena M.",
      role: "Director, DesignCo",
    },
    {
      quote:
        "Finally, accountants who speak plain English and understand modern digital businesses.",
      author: "Tom B.",
      role: "E-com Owner",
    },
  ];

  return (
    <section className="flex w-full justify-center border-b border-brand-assets bg-background">
      <div className="flex w-full max-w-7xl flex-col md:flex-row">
        {/* COLUMNA IZQUIERDA: El Sello de Calidad (Sticky) */}
        <div className="flex flex-col border-b border-brand-assets p-8 md:w-1/3 md:border-b-0 md:border-r md:p-12 lg:p-16">
          <div className="sticky top-24">
            <h3 className="mb-6 font-switzer text-3xl font-semibold text-white">
              Trusted by Florida&quot;s best.
            </h3>
            <p className="mb-8 text-gray-400">
              We don’t just balance books; we build long-term partnerships based
              on precision and trust.
            </p>

            {/* BADGE: Florida Association */}
            {/* Creamos una tarjeta blanca/crema para que el logo resalte y se vea como un certificado físico */}
            <div className="group relative flex w-full max-w-60 flex-col items-center rounded bg-[#FFF8F0] p-6 text-center transition-transform hover:scale-105">
              <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                {/* Icono de Check */}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              {/* Aquí iría la imagen que subiste. Uso un placeholder por ahora */}
              <div className="mb-2 font-bold text-orange-500 text-xs uppercase tracking-widest">
                Proud Member
              </div>
              <Image
                src="/member-badge.png"
                width={100}
                height={100}
                alt="Florida Professionals Association"
              />
              <div className="h-24 w-24 rounded-full bg-linear-to-tr from-orange-400 to-teal-400 opacity-80 blur-[2px] group-hover:blur-0 transition-all"></div>
              <p className="mt-4 text-xs font-bold text-teal-700 uppercase leading-tight">
                Florida Professionals <br /> Association
              </p>
              <a
                href="#"
                className="mt-4 text-[10px] underline text-gray-500 hover:text-gray-800"
              >
                Verify Membership
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Grid de Testimonios */}
        <div className="grid flex-1 grid-cols-1 divide-y divide-brand-assets md:grid-cols-2 md:divide-x">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 transition-colors hover:bg-white/2 sm:p-12"
            >
              <p className="mb-6 font-switzer text-lg font-medium leading-relaxed text-gray-200">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-brand-main">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE 2: FAQ ---
const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-assets last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left hover:bg-white/1"
      >
        <span className="font-switzer text-lg font-medium text-white">
          {question}
        </span>
        <span
          className={`ml-4 flex h-6 w-6 items-center justify-center rounded border border-white/20 text-white transition-all ${
            isOpen ? "rotate-45 border-brand-main text-brand-main" : ""
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 1V11M1 6H11" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const FaqSection = () => {
  const faqs = [
    {
      q: "What services do you offer?",
      a: "We provide a comprehensive range of services including bookkeeping, financial reporting, payroll management, and CFO advisory services.",
    },
    {
      q: "What types of businesses do you work with?",
      a: "We work with a diverse range of clients, including small businesses, corporations, non-profits, and homeowners associations.",
    },
    {
      q: "What is the cost of your services?",
      a: "Our fees vary depending on the specific services you require. We offer customized packages tailored to meet the unique needs of each client.",
    },
    {
      q: "How can I switch my accounting to your firm?",
      a: "Switching to our firm is simple. We will guide you through the process, including the transfer of financial data and the setup of new systems if needed.",
    },
    {
      q: "Do you offer virtual accounting services?",
      a: "Yes, we offer virtual accounting services, allowing us to serve clients regardless of their location through secure online platforms.",
    },
    {
      q: "How often will I receive financial reports?",
      a: "We provide financial reports on a schedule that suits your needs, whether that’s monthly, quarterly, or annually.",
    },
    {
      q: "Can you help me set up an accounting system for my new business?",
      a: "Yes, we can assist you in selecting and implementing an accounting system tailored to your business needs. This includes setting up a chart of accounts, configuring software, and training your staff.",
    },
    {
      q: "Can you assist with financial forecasting and budgeting?",
      a: "Absolutely! We help clients create detailed financial forecasts and budgets, providing insights that support strategic planning and informed decision-making.",
    },
    {
      q: "What measures do you take to ensure timely delivery of services?",
      a: "We prioritize efficiency and have structured processes to ensure timely completion of tasks. Our team is committed to meeting deadlines and providing prompt responses to client inquiries.",
    },
    {
      q: "What if I decide to cancel?",
      a: "Our services operate on a month-to-month basis, so you can cancel at any time without any fees. Your QuickBooks Online account remains yours, and you can take it with you when you leave.",
    },
  ];

  return (
    <section className="flex w-full max-w-6xl border-x border-t border-brand-assets justify-center bg-background py-24 px-6">
      <div className="w-full max-w-3xl">
        <h3 className="mb-12 text-center font-switzer text-3xl font-semibold text-white">
          Common Questions
        </h3>
        <div className="border-t border-brand-assets">
          {faqs.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE 3: CALENDLY + FINAL CTA ---
export const BookingSection = () => {
  return (
    <section className="relative flex w-full max-w-6xl flex-col items-center border-x border-t border-brand-assets pt-24">
      {/* 1. BLOQUE DE TEXTO (ARRIBA) */}
      <div className="mb-12 flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-6 inline-block rounded bg-brand-main/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-main">
          Ready to start?
        </div>

        <h2 className="mb-6 font-switzer text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Expert & Unique <br />
          <span className="text-gray-500">Bookkeeping Solutions.</span>
        </h2>

        <p className="mb-8 max-w-xl text-lg text-gray-400 leading-relaxed">
          Join us at Reddito Books. Let us help you achieve your financial goals
          with precision, integrity, and dedication.
        </p>

        {/* Lista de beneficios horizontal */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-main text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="10 3 4.5 9 2 6.5" />
              </svg>
            </div>
            <span className="text-lg text-white font-medium">
              Free initial consultation
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-main text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="10 3 4.5 9 2 6.5" />
              </svg>
            </div>
            <span className="text-lg text-white font-medium">
              Full roadmap provided
            </span>
          </div>
        </div>
      </div>

      {/* 2. BLOQUE DEL CALENDARIO (ABAJO) */}
      <div className="w-full max-w-6xl px-4 sm:px-6">
          <InlineWidget
            url="https://calendly.com/redditobooks/reditto-books-llc-free-consultation"
            styles={{
              width: "100%",
              height: "1060px",
            }}
            pageSettings={{
              backgroundColor: "0a0c0f",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "3269ff",
              textColor: "ffffff",
            }}
          />
        </div>
    </section>
  );
};
