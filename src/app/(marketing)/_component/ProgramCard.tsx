"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Star, Users } from "lucide-react";

export interface Program {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  featured?: boolean;
}

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group rounded-2xl bg-background shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />

        {program.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 text-xs text-white">
            Featured
          </span>
        )}

        <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2 py-1 text-xs font-medium">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-3">
        <h3 className="text-base font-semibold">{program.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {program.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {program.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {program.students}
          </span>
          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500" /> {program.rating}
          </span>
        </div>
      </div>
    </div>
  );
}



