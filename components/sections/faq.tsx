"use client";

import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import type { Dictionary } from "@/lib/types";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemFadeUp} className="border-b border-brand-assets">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span
          className={`font-switzer text-lg font-medium transition-colors ${
            isOpen ? "text-brand-main" : "text-white"
          }`}
        >
          {question}
        </span>
        <motion.span
          className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-white"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 1V11M1 6H11" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-base leading-relaxed text-gray-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FaqSection({ dict }: { dict: Dictionary }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const faqs = dict.faq.items;

  return (
    <section
      ref={sectionRef}
      className="flex w-full justify-center border-t border-brand-assets"
    >
      <div className="flex w-full max-w-7xl border-x border-brand-assets justify-center bg-background py-24 px-6">
        <motion.div
          className="w-full max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h3
            variants={itemFadeUp}
            className="mb-12 text-center font-switzer text-3xl font-semibold text-white"
          >
            {dict.faq.title}
          </motion.h3>

          <div className="border-t border-brand-assets">
            {faqs.map((f, i) => (
              <FaqItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
