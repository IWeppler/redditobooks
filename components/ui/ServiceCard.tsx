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

export const ServiceCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) => {
  return (
    <div className="h-full group flex flex-col p-8 transition-colors hover:bg-white/2 sm:p-12">
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