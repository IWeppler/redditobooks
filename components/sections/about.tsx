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
          {/* BLOQUE 1 (Texto Intro) */}
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

          {/* BLOQUE 2 (Iconos Grid) */}
          <motion.div
            variants={itemFadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 border-b border-brand-assets"
          >
            {/* Icono 1 */}
            <div className="p-8 border-b sm:border-b-0 border-brand-assets sm:border-r">
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
            <div className="p-8">
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

          {/* BLOQUE 3 (Certified Experts & Member) */}
          <motion.div
            variants={itemFadeUp}
            className="p-8 border-b border-brand-assets"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-brand-assets bg-white/5 px-3 py-1 text-xs font-medium text-white">
              <span>{dict.about.right.block3.badge}</span>
            </div>

            <p className="mb-6 text-gray-400">{dict.about.right.block3.body}</p>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                {dict.about.right.block3.certified}
              </span>
              <Link
                href="https://m.floridaprofessionals.com/miami/financial-services/reddito-books-llc?from=badge"
                className="relative h-24 w-24 transition-all duration-300"
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
          </motion.div>

          {/* BLOQUE 4: PARTNERS & LINK FINAL */}
          <motion.div variants={itemFadeUp} className="p-8">
            {/* SECCIÓN DE PARTNERS */}
            <div className="mb-12">
              <span className="mb-6 block text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                {dict.about.right.block3.partners}
              </span>

              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                {/* QUICKBOOKS */}
                <div className="relative h-10 w-36">
                  <Image
                    src="/partner1.svg"
                    alt="Intuit QuickBooks"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* RAMP */}
                <div className="relative h-6 w-24 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="20"
                    fill="none"
                    viewBox="0 0 71 20"
                    aria-label="Ramp Logo"
                    className="w-full h-full"
                  >
                    <g fill="currentColor" clipPath="url(#a)">
                      <path d="M5.098 6.736c-1.768 0-2.636 1.57-2.636 3.669v5.256H-.032V4.568h2.45v2.878h.042c.524-1.77 1.565-3.2 3.174-3.2 1.132 0 1.607.399 1.607.399L6.116 6.93s-.358-.194-1.018-.194M35.237 8.26v7.401h-2.428v-6.5c0-1.865-.58-2.853-2.064-2.853s-2.28 1.251-2.28 3.647v5.706h-2.407v-6.5c0-1.794-.574-2.853-2.043-2.853-1.676 0-2.321 1.48-2.321 3.647v5.706h-2.45V4.568h2.45V7.08h.022c.38-1.737 1.424-2.811 3.182-2.811s2.878.943 3.31 2.62c.41-1.613 1.504-2.62 3.182-2.62 2.341 0 3.847 1.479 3.847 3.99M12.141 4.249c-2.255 0-3.728 1.067-4.4 2.993l2.074.762c.378-1.162 1.167-1.823 2.37-1.823 1.355 0 2.149.602 2.149 1.523 0 .922-.633 1.14-2.064 1.374-1.59.258-5.375.344-5.375 3.56 0 1.886 1.562 3.304 3.911 3.304 1.765 0 2.97-.728 3.526-2.082h.022v1.804h2.428V8.842c0-2.986-1.491-4.59-4.643-4.59zm2.257 6.19c0 2.328-1.142 3.822-2.966 3.822-1.29 0-2.065-.73-2.065-1.782 0-.988.796-1.671 2.322-1.954 1.56-.29 2.346-.646 2.707-1.501v1.418zm29.48-6.17c-1.857 0-3.086 1.03-3.61 2.575V4.568h-2.579V19.93h2.557v-6.547h.022c.569 1.676 1.755 2.598 3.61 2.598 2.944 0 5.05-2.445 5.05-5.9 0-3.431-2.106-5.812-5.05-5.812m-.636 9.655c-2.04 0-3.17-1.492-3.17-3.81 0-2.316 1.267-3.808 3.17-3.808s3.17 1.563 3.17 3.809-1.266 3.809-3.17 3.809M70.028 15.612v.07h-9.983v-.07c1.439-.82 2.432-1.654 3.327-2.526h4.1zm-2.473-13.11L65.027 0h-.074s.042 4.664-4.205 8.906c-4.156 4.15-9.046 4.16-9.046 4.16v.074l2.578 2.546s4.819.05 9.074-4.16c4.24-4.195 4.205-9.022 4.205-9.022z"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h70.06v20H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* GUSTO */}
                <div className="relative h-6 w-24">
                  <Image
                    src="/partner3.svg"
                    alt="Gusto"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>

            {/* LINK FINAL */}
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
