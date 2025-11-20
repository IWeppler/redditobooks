"use client";

import { Dictionary } from "@/lib/types";
import Spline from "@splinetool/react-spline";
import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

const staggerContainer: Variants = {
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
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <main
      id="hero"
      className="grid w-full max-w-7xl min-h-[90dvh] grid-cols-1 items-center gap-8 border-x border-brand-assets py-24 px-8 sm:px-16 lg:grid-cols-2"
    >
      {/* --- COLUMNA IZQUIERDA --- */}
      <motion.div
        className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded border border-brand-assets bg-white/5 px-3 py-1 text-xs font-medium text-white">
          {dict.about.left.location}
        </div>

        <motion.h1
          className="font-switzer text-4xl font-semibold leading-none text-white sm:text-4xl lg:text-6xl"
          variants={itemFadeUp}
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-lg text-lg text-gray-300"
          variants={itemFadeUp}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.a
          href="#booking"
          className="mt-8 flex items-center justify-center rounded bg-brand-main px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-brand-main/70 cursor-pointer"
          variants={itemFadeUp}
          whileTap={{ scale: 0.95 }}
        >
          {dict.hero.button}
          <ArrowRightIcon
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </motion.a>
      </motion.div>

      {/* --- COLUMNA DERECHA: SPLINE ANIMADO --- */}
      <motion.div
        className="hidden md:block relative h-[400px] w-full lg:h-[500px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
      >
        <Spline scene="https://prod.spline.design/oO0gVwvWumAzpeQZ/scene.splinecode" />
      </motion.div>
    </main>
  );
}