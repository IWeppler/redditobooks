"use client";

import { InlineWidget } from "react-calendly";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Dictionary } from "@/lib/types";

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

export const BookingSection = ({ dict }: { dict: Dictionary }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative flex w-full flex-col items-center border-t border-brand-assets"
    >
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-7xl border-x border-brand-assets"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* IZQUIERDA */}
        <motion.div
          variants={itemFadeUp}
          className="flex w-full max-w-3xl flex-col items-start border-r border-brand-assets px-8 md:px-16 pt-24 pb-8 md:pb-24 text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-brand-assets bg-white/5 px-3 py-1 text-xs font-medium text-white">
            {dict.booking.badge}
          </div>

          {/* Título */}
          <h2 className="mb-6 font-switzer text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {dict.booking.title.main} <br />
            <span className="text-gray-500">
              {dict.booking.title.highlight}
            </span>
          </h2>

          {/* Descripción */}
          <p className="mb-8 max-w-xl text-lg text-gray-400 leading-relaxed">
            {dict.booking.description}
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-main text-white">
                <CheckIcon size={14} />
              </div>
              <span className="text-lg text-white font-medium">
                {dict.booking.points.p1}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-main text-white">
                <CheckIcon size={14} />
              </div>
              <span className="text-lg text-white font-medium">
                {dict.booking.points.p2}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="mt-12 w-full text-sm text-gray-400">
            {dict.booking.emailText}{" "}
            <a
              href="mailto:info@redditobooks.com"
              className="font-medium text-white underline decoration-gray-600 underline-offset-4 transition-colors hover:text-brand-main hover:decoration-brand-main"
            >
              info@redditobooks.com
            </a>
          </div>
        </motion.div>

        {/* DERECHA — Calendly */}
        <motion.div variants={itemFadeUp} className="flex-1">
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
        </motion.div>
      </motion.div>

    </section>
  );
};
