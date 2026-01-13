"use client";

import Link from "next/link";
import { CourseCard } from "./CourseCard";
import { motion, Variants } from "framer-motion";

const courses = [
  {
    title: "Full Stack Web Development",
    category: "Web Development",
    image: "/images/code.jpg",
    duration: "16 weeks",
    students: "19776",
    rating: 4.8,
    level: "Intermediate" as const,
  },
  {
    title: "Data Analysis",
    category: "Data Analysis",
    image: "/images/analysis.jpg",
    duration: "16 weeks",
    students: "19776",
    rating: 4.8,
    level: "Beginner" as const,
  },
  {
    title: "UI/UX Design",
    category: "UI/UX Design",
    image: "/images/design.jpg",
    duration: "16 weeks",
    students: "19776",
    rating: 4.8,
    level: "Intermediate" as const,
  },
];

/* 🔹 Animation Variants */
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 md:px-12"
      >
        {/* Header Row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">
              Featured Programs
            </h2>
            <p className="text-gray-500">
              Start your journey with our most popular tech courses
            </p>
          </div>

          <Link
            href="/programs"
            className="text-black font-semibold hover:underline"
          >
            Explore Programs
          </Link>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
