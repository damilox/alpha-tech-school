"use client"
import { Program, ProgramCard } from "./ProgramCard";

interface ProgramsGridProps {
programs: Program[];
}

export function ProgramsGrid({ programs }: ProgramsGridProps) {
return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
    {programs.map((program) => (
    <ProgramCard key={program.id} program={program}/>
    ))}
    </div>
  );
}