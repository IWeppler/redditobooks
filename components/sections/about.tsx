"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import type { Dictionary } from "@/lib/types";
import Link from "next/link";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutSection({ dict }: { dict: Dictionary }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex w-full justify-center bg-background border-t border-brand-assets"
    >
      <div className="flex w-full max-w-7xl flex-col border-x border-brand-assets lg:flex-row">
        {/* === COLUMNA IZQUIERDA === */}
        <div className="relative w-full border-b border-brand-assets lg:w-1/2 lg:border-b-0 lg:border-r">
          <div className="sticky top-24 flex h-full min-h-[400px] flex-col justify-between p-8 sm:p-12">
            <motion.div
              className="relative z-10"
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {/* Ubicación */}
              <div className="mb-8 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-main animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  {dict.about.left.location}
                </span>
              </div>

              {/* Nombres & Descripción */}
              <div className="relative mt-auto">
                <h3
                  className="font-switzer text-4xl font-bold leading-none text-white lg:text-5xl"
                  dangerouslySetInnerHTML={{
                    __html: dict.about.left.founders.replace("\n", "<br />"),
                  }}
                />
                <p className="mt-4 max-w-md text-lg text-white/80">
                  {dict.about.left.description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 z-0 h-full w-full overflow-hidden grayscale transition-all duration-700 hover:grayscale-0"
              variants={fadeIn}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <Image
                src="/redditoteam2.jpg"
                alt="Founders"
                fill
                className="object-cover right-0"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* === COLUMNA DERECHA === */}
        <motion.div
          className="flex w-full flex-col justify-center bg-background lg:w-1/2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* BLOQUE 1 */}
          <motion.div
            variants={itemFadeUp}
            className="border-b border-brand-assets p-8 sm:py-16"
          >
            <h4 className="mb-6 font-switzer text-2xl font-semibold text-white">
              {dict.about.right.block1.title}
            </h4>
            <p className="leading-relaxed text-gray-400">
              {dict.about.right.block1.body}
            </p>
          </motion.div>

          {/* BLOQUE 2 */}
          <motion.div
            variants={itemFadeUp}
            className="grid grid-cols-1 sm:grid-cols-2"
          >
            {/* Icono 1 */}
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
                {dict.about.right.block2.card1.title}
              </h5>
              <p className="text-gray-500">
                {dict.about.right.block2.card1.body}
              </p>
            </div>

            {/* Icono 2 */}
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
                {dict.about.right.block2.card2.title}
              </h5>
              <p className="text-gray-500">
                {dict.about.right.block2.card2.body}
              </p>
            </div>
          </motion.div>

          {/* BLOQUE 3 */}
          <motion.div variants={itemFadeUp} className="p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-brand-assets bg-white/5 px-3 py-1 text-xs font-medium text-white">
              <span>{dict.about.right.block3.badge}</span>
            </div>

            <p className="mb-6 text-gray-400">{dict.about.right.block3.body}</p>

            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Proud Member
              </span>
              <Link
                href="https://m.floridaprofessionals.com/miami/financial-services/reddito-books-llc?from=badge"
                className="relative h-32 w-32"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/member-badge.png"
                  alt="Florida Professionals Association"
                  fill
                  className="object-contain object-left"
                />
              </Link>
            </div>

            <Link
              href="#booking"
              className="group inline-flex items-center text-sm font-semibold uppercase tracking-widest text-brand-main transition-colors duration-300 hover:text-white"
            >
              {dict.about.right.block3.link}
              <ArrowRightIcon
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
