"use client";

import { motion } from "framer-motion";

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function ProgramHero({
  title,
  subtitle,
  backgroundImage,
}: ProgramHeroProps) {
  return (
    <section
      className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 " />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-4 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md md:p-12"
      >
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/80 md:text-base">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
