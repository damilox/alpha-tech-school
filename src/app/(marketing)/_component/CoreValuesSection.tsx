"use client";

import {
  Globe,
  Zap,
  Headphones,
  Target,
  ThumbsUp,
  Box,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const values = [
  {
    title: "Respect",
    description:
      "We embrace and celebrate diversity and foster an inclusive environment.",
    icon: Globe,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Fast is Better than Slow",
    description:
      "We believe timing plays a huge factor in the success of any business and place great value on agility and timeliness.",
    icon: Zap,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Customer Obsession",
    description:
      "We place our customers at the core of everything we do and are constantly working towards making the lives of our customers better.",
    icon: Headphones,
    bg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "A Will to Win",
    description:
      "We empower our customers to win a big share of the market and service their customers better than their competitors.",
    icon: Target,
    bg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Ownership",
    description:
      "Being proactive is our second nature, we carry out extensive checks to ensure uninterrupted service delivery to our customers.",
    icon: ThumbsUp,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Quality",
    description:
      "We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.",
    icon: Box,
    bg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

/* ------------------ ANIMATION VARIANTS ------------------ */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CoreValuesSection() {
  return (
    <section className="bg-[#fafaf7] pb-24">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${value.bg} mb-6`}
                >
                  <Icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
