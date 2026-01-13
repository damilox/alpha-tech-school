"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="bg-black text-white py-20 lg:py-28 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={container}>
          <motion.span
            variants={fadeUp}
            className="inline-block bg-gray-900 border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            Transform Your Career
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            LEARN TECH SKILLS <br />
            THAT MATTERS
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mb-8 text-lg max-w-lg"
          >
            Join thousands of students mastering in-demand tech skills with
            industry experts. Start your journey to a successful tech career
            today.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/programs"
              className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition"
            >
              Explore Programs
            </Link>
            <Link
              href="/login"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center divide-x divide-white/20"
          >
            <div className="pr-8">
              <h3 className="text-2xl md:text-3xl font-bold">500k+</h3>
              <p className="text-gray-400 text-sm">Active Students</p>
            </div>
            <div className="px-8">
              <h3 className="text-2xl md:text-3xl font-bold">50k+</h3>
              <p className="text-gray-400 text-sm">Expert Instructors</p>
            </div>
            <div className="pl-8">
              <h3 className="text-2xl md:text-3xl font-bold">95%</h3>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.4)] border border-white/10"
          >
            <Image
              src="/images/hero.jpg"
              alt="Alpha Tech School Setup"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
