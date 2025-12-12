"use client"
import Link from "next/link";
import { CourseCard } from "./CourseCard";

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

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">Featured Programs</h2>
            <p className="text-gray-500">Start your journey with our most popular tech courses</p>
          </div>
          <Link href="/programs" className="text-black font-semibold hover:underline">
            Explore Programs
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

      </div>
    </section>
  );
}