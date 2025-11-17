"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/types";

export const Navbar = ({
  lang,
  dict,
}: {
  lang: "en" | "es";
  dict: Dictionary;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: dict.nav.about, href: "#about" },
    { name: dict.nav.services, href: "#services" },
    { name: dict.nav.clients, href: "#testimonials" },
  ];

  const getLanguageLink = (newLang: "en" | "es") => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = newLang;
    } else {
      return `/${newLang}`;
    }
    return segments.join("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-brand-assets bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-8">
            <Link href={`/${lang}`} onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/logowhite.png"
                alt="logo de reddito"
                height={120}
                width={120}
                className="h-auto w-24 sm:w-32"
              />
            </Link>
            <div className="hidden h-6 w-px bg-white/10 md:block"></div>

            {/* MENU DESKTOP */}
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

          <div className="flex items-center gap-6">
            {/* IDIOMA */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="group flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
              >
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
                <span className="tracking-wide">{lang.toUpperCase()}</span>
                <motion.svg
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
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
                </motion.svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-24 rounded border border-brand-assets bg-background shadow-lg"
                  >
                    <Link
                      href={getLanguageLink("en")}
                      className="block w-full px-4 py-2 text-left text-xs text-gray-300 hover:bg-white/5"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      English
                    </Link>
                    <Link
                      href={getLanguageLink("es")}
                      className="block w-full px-4 py-2 text-left text-xs text-gray-300 hover:bg-white/5"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Español
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA BUTTON DESKTOP */}
            <Link
              href="#booking"
              className="hidden md:block rounded bg-brand-main px-5 py-2 tracking-wider text-white transition-all duration-300 hover:bg-brand-main/70 cursor-pointer"
            >
              {dict.nav.contact}
            </Link>

            {/* BOTÓN HAMBURGUESA (MÓVIL) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                initial={false}
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-6 bg-current origin-center"
              ></motion.span>

              <motion.span
                initial={false}
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-0.5 w-6 bg-current origin-center"
              ></motion.span>
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL A PANTALLA COMPLETA */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background px-6 pt-24 pb-10 md:hidden"
          >
            <ul className="flex flex-col items-center gap-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium uppercase tracking-widest text-white transition-colors hover:text-brand-main"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 h-px w-12 bg-white/10"></div>

            <Link
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-12 rounded bg-brand-main px-8 py-4 text-lg tracking-wider text-white"
            >
              {dict.nav.contact}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
