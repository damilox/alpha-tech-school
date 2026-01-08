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
    title: "Full stack web development",
    category: "Web Development",
    description: "Learn React from scratch.",
    image: "/images/code.jpg",
    duration: "3h 30m",
    students: 120,
    rating: 4.5,
    featured: true,
  },
  {
    id: "2",
    slug: "Data analysis ",
    title: "Data analysis ",
    category: "Data analysis ",
    description: "Learn how to analyze data, create reports, and make better decisions using real-world data tools.",
    image: "/images/analysis.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
   {
    id: "3",
    slug: "nextjs-advanced",
    title: "UI/UX design",
    category: "UI/UX design",
    description: "Learn how to design beautiful and user-friendly websites and mobile apps.",
    image: "/images/design.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
   {
    id: "4",
    slug: "nextjs-advanced",
    title: "Graphic design",
    category: "Graphic design",
    description: "Learn how to create eye-catching designs, logos, and visuals using design tools.",
    image: "/images/gragic.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
   {
    id: "5",
    slug: "nextjs-advanced",
    title: "Cyber security ",
    category: "Cyber security ",
    description: "Learn how to protect systems, networks, and data from online threats and attacks.",
    image: "/images/cybal.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "6",
    slug: "nextjs-advanced",
    title: "Copy writing",
    category: "Copy writing",
    description: "Learn how to write clear and persuasive content for websites, ads, and social media.",
    image: "/images/writing.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "7",
    slug: "nextjs-advanced",
    title: "Motion graphic",
    category: "Motion graphic",
    description: "Learn how to create animated graphics and visual effects for videos and digital media.",
    image: "/images/motion.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "8",
    slug: "nextjs-advanced",
    title: "Video editing",
    category: "Video editing",
    description: "Learn how to edit videos, add effects, and create professional-quality content.",
    image: "/images/video.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "9",
    slug: "nextjs-advanced",
    title: "Product management",
    category: "Product management",
    description: "Learn how to plan, build, and manage digital products from idea to launch.",
    image: "/images/product.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "10",
    slug: "nextjs-advanced",
    title: "Digital marketing",
    category: "Digital marketing",
    description: "Learn how to promote businesses online using social media, ads, and SEO strategies.",
    image: "/images/digital.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
  },
     {
    id: "11",
    slug: "nextjs-advanced",
    title: "Social media management",
    category: "Social media management",
    description: "Learn how to manage social media accounts, grow audiences, and create engaging content.",
    image: "/images/social.jpg",
    duration: "4h",
    students: 85,
    rating: 4.7,
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
