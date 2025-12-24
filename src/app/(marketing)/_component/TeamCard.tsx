"use client"
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-gray-100">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
      
    
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-gray-300 text-xs uppercase tracking-wider mb-3">{role}</p>
        
     
        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}