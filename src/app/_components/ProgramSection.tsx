"use client"

import { Program } from "../(marketing)/_component/ProgramCard";
import ProgramFilter from "../(marketing)/_component/ProgramFilter"
import ProgramHero from "../(marketing)/_component/ProgramHero"
import { ProgramsGrid } from "../(marketing)/_component/ProgramsGridProps";

const categories = [
  { id: "all", label: "All Programs" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data Analysis" },
  { id: "design", label: "Graphic Design" },
  { id: "cyber", label: "Cyber Security" },
  { id: "copy", label: "Copy Writing" },
  { id: "motion", label: "Motion Graphic" },
  { id: "video", label: "Video Editing" },
  { id: "pm", label: "Product Management" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "social", label: "Social Media Management" },
];

const programs: Program[] = [
  {
    id: "1",
    slug: "react-basics",
    title: "React Basics",
    category: "Web Development",
    description: "Learn React from scratch.",
    image: "/images/code.jpg",
    duration: "3h 30m",
    students: 120,
    rating: 4.5,
    level: "Beginner",
    featured: true,
  },
  {
    id: "2",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/analysis.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
   {
    id: "3",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/design.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
   {
    id: "4",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/gragic.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
   {
    id: "5",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/cybal.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "6",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/writing.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "7",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/motion.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "8",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/video.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "9",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/product.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "10",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/digital.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },
     {
    id: "11",
    slug: "nextjs-advanced",
    title: "Next.js Advanced",
    category: "Web Development",
    description: "Deep dive into Next.js features.",
    image: "/images/social.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
    level: "Intermediate",
  },

];


export default function ProgramSection() {
  return (
    <div>
        <ProgramHero
        title="Explore Our Programs"
        subtitle="Discover comprehensive tech education programs designed to help you succeed in your career. From web development to data analysis, find the perfect course for you."
        backgroundImage="/images/proHero.jpg"
      />
     <div className="p-5">
        <ProgramFilter categories={categories} />   
        <ProgramsGrid programs={programs} />
      </div>
    </div>
  )
}
