import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-brand-assets bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* SECCIÓN IZQUIERDA: Logo + Navegación */}
        <div className="flex items-center gap-8">
          {/* 1. Logo */}
          <Link href="/">
            <Image src="/logowhite.png" alt="logo de reddito" height={120} width={120} />
          </Link>

          {/* Separador vertical (Toque financiero/estructural) */}
          <div className="hidden h-6 w-px bg-white/10 md:block"></div>

          {/* 2. Navegación (Ahora a la izquierda) */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SECCIÓN DERECHA: Idioma + CTA */}
        <div className="flex items-center gap-6">
          {/* Selector de Idioma (Sobrio: Texto + Icono) */}
          <button className="group flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors">
            {/* Icono Globe SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 opacity-70 group-hover:opacity-100"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            <span className="tracking-wide">EN</span>
            {/* Pequeña flecha para indicar dropdown */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 opacity-50"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Botón CTA */}
          <button className="hidden md:block rounded bg-brand-main px-5 py-2 tracking-wider text-white transition-all hover:bg-brand-secondary cursor-pointer">
            Contact Us
          </button>

          {/* Mobile Menu Trigger */}
          <button className="flex flex-col gap-1.5 md:hidden text-white">
            <span className="h-0.5 w-6 bg-current"></span>
            <span className="h-0.5 w-6 bg-current"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
