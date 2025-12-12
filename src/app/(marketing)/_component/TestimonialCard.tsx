"use client"
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  image?: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, role, image, quote, rating }: TestimonialProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white hover:bg-gray-50 rounded-2xl transition-colors duration-300">
      
      {/* 1. Large Quote Icon */}
      <div className="mb-4 text-gray-400">
        <Quote size={40} fill="currentColor" className="opacity-50 rotate-180" />
      </div>

      {/* 2. Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < rating ? "#FBBF24" : "none"} // Yellow for active stars
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>

      {/* 3. The Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        "{quote}"
      </p>

      {/* 4. User Profile */}
      <div className="flex items-center gap-4 mt-auto">
        {/* Avatar Circle */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative shrink-0">
          {image ? (
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover"
            />
          ) : (
            // Fallback if no image (using initials)
            <div className="w-full h-full flex items-center justify-center bg-black text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        {/* Name & Role */}
        <div>
          <h4 className="font-bold text-black text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}