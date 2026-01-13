"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* 🔹 Animation Variants */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function OurSchool() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:max-w-6xl px-6 md:px-10 grid-cols-1 md:grid-cols-2 m-auto gap-12 items-center"
    >
      {/* Text */}
      <motion.div variants={fadeUp}>
        <p className="text-gray-900 leading-relaxed text-[18px]">
          Alpha Tech School is a tech hub dedicated to training individuals in
          practical, in-demand technology skills. With a strong foundation in
          hands-on, in-person learning, we are transitioning into a scalable
          digital platform that enables smooth student onboarding, efficient
          course management, and secure payment processing. This evolution
          positions Alpha Tech School to expand access to quality tech education
          across Nigeria, both online and offline.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={imageReveal}
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100"
      >
        <Image
          src="/images/class.jpg"
          alt="Our Class"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
