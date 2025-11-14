import React from "react";

const CheckIcon = () => (
  <svg
    className="mt-1 h-4 w-4 shrink-0 text-brand-main"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Iconos para cada servicio (SVGs minimalistas)
const Icons = {
  Bookkeeping: (
    <svg
      className="h-6 w-6 text-brand-main"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  Payroll: (
    <svg
      className="h-6 w-6 text-brand-main"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  CFO: (
    <svg
      className="h-6 w-6 text-brand-main"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h20" />
      <path d="M5 16v-4" />
      <path d="M9 16v-8" />
      <path d="M13 16V4" />
      <path d="M17 16v-2" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    // Contenedor principal centrado
    <section className="flex w-full flex-col items-center bg-background">
      <div className="flex w-full max-w-6xl flex-col border-x border-brand-assets">
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex flex-col gap-6 border-b border-brand-assets px-8 py-24 sm:px-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-switzer text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Services crafted for <br />
              <span className="text-gray-500">financial clarity.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-xs text-lg text-brand-main font-medium">
            Fully customizable for multiple entities & complex needs.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 divide-y divide-brand-assets lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {/* 1. Bookkeeping */}
          <ServiceCard
            title="Bookkeeping Services"
            icon={Icons.Bookkeeping}
            items={[
              "Dedicated bookkeeping expert",
              "Monthly reconciliations & book reports",
              "Monthly call reviews",
              "Accounts Receivable & Payable",
              "Fully customizable Chart of Accounts",
            ]}
          />

          {/* 2. Payroll */}
          <ServiceCard
            title="Payroll"
            icon={Icons.Payroll}
            items={[
              "Payroll tax obligations",
              "W-2s and 1099s management",
              "Precise Time tracking",
              "Full-service payroll execution",
              "Compliance monitoring",
            ]}
          />

          {/* 3. Fractional CFO */}
          <ServiceCard
            title="Fractional CFO"
            icon={Icons.CFO}
            items={[
              "Continuous engagement: Cash flows & Modeling",
              "Budgeting & Financial Forecasts",
              "Sales Efficiency Analysis",
              "Business drivers & KPIs tracking",
              "Global overview of business strategy",
            ]}
          />
        </div>

        {/* Cierre inferior del borde para consistencia */}
        <div className="h-px w-full bg-brand-assets"></div>
      </div>
    </section>
  );
}

// COMPONENTE DE TARJETA REUTILIZABLE
const ServiceCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) => {
  return (
    <div className="group flex flex-col p-8 transition-colors hover:bg-white/2 sm:p-12">
      {/* Icono y Título */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-main/10 border border-brand-main/20">
          {icon}
        </div>
        <h3 className="font-switzer text-xl font-semibold text-white transition-colors">
          {title}
        </h3>
      </div>

      {/* Lista de items */}
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-400 leading-relaxed"
          >
            <CheckIcon />
            <span className="text-sm sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
