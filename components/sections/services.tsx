"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { ServiceCard } from "../ui/ServiceCard";
import { HandCoins, BookOpenCheck, ChartLine } from "lucide-react";
import type { Dictionary } from "@/lib/types";

const Icons = {
  Bookkeeping: <BookOpenCheck className="text-brand-main" />,
  Payroll: <HandCoins className="text-brand-main" />,
  CFO: <ChartLine className="text-brand-main" />,
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection({ dict }: { dict: Dictionary }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="flex w-full flex-col items-center border-t border-brand-assets"
    >
      <div className="flex w-full max-w-7xl flex-col border-x border-brand-assets">
        <motion.div
          className="flex flex-col gap-6 border-b border-brand-assets px-8 py-24 sm:px-16 lg:flex-row lg:items-end lg:justify-between"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <div className="max-w-2xl">
            <h2 className="font-switzer text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {dict.services.header.title} <br />
              <span className="text-gray-500">
                {dict.services.header.highlight}
              </span>
            </h2>
          </div>
          <p className="mb-1 max-w-xs text-lg text-brand-main font-medium">
            {dict.services.header.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 divide-y divide-brand-assets lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={cardVariants} className="h-full">
            <ServiceCard
              title={dict.services.cards.bookkeeping.title}
              icon={Icons.Bookkeeping}
              items={dict.services.cards.bookkeeping.items}
            />
          </motion.div>

          <motion.div variants={cardVariants} className="h-full">
            <ServiceCard
              title={dict.services.cards.payroll.title}
              icon={Icons.Payroll}
              items={dict.services.cards.payroll.items}
            />
          </motion.div>

          <motion.div variants={cardVariants} className="h-full">
            <ServiceCard
              title={dict.services.cards.cfo.title}
              icon={Icons.CFO}
              items={dict.services.cards.cfo.items}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
