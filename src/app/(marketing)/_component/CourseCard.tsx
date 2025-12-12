"use client"
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";

interface CourseProps {
  title: string;
  category: string;
  image: string;
  duration: string;
  students: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export function CourseCard({ title, category, image, duration, students, rating, level }: CourseProps) {
  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      {/* 1. Image Section */}
      <div className="relative h-60 w-full bg-gray-100">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
       
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Featured
        </div>

       
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">
          Learn to build complete websites with modern technologies and industry standards.
        </p>

        {/* Metadata Row (Icons) */}
        <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1.5 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-500">{rating}</span>
          </div>
        </div>

        {/* 3. Footer Row (Level & Button) */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
            {level}
          </span>
          
          <Link 
            href="/programs" 
            className="bg-black text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}