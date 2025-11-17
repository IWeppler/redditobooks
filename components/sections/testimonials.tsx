"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Dictionary } from "@/lib/types";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const headerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const carouselContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemFadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function TestimonialsSection({ dict }: { dict: Dictionary }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const testimonialsRow1 = dict.testimonials.row1;
  const testimonialsRow2 = dict.testimonials.row2;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="w-full bg-background border-t border-brand-assets"
    >
      <div className="py-24 mx-auto w-full max-w-7xl px-6 lg:px-8 border-x border-brand-assets">
        {/* HEADER */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
          variants={headerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h2
            variants={itemFadeUp}
            className="font-switzer lg:px-10 text-5xl font-bold text-white md:text-6xl"
          >
            {dict.testimonials.title}
          </motion.h2>

          <motion.p
            variants={itemFadeUp}
            className="max-w-md text-base text-gray-400"
          >
            {dict.testimonials.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto mt-16 flex flex-col gap-4"
          variants={carouselContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="overflow-hidden" variants={itemFadeIn}>
            <InfiniteMovingCards
              items={testimonialsRow1}
              direction="right"
              speed="slow"
            />
          </motion.div>

          <motion.div className="overflow-hidden" variants={itemFadeIn}>
            <InfiniteMovingCards
              items={testimonialsRow2}
              direction="left"
              speed="slow"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
