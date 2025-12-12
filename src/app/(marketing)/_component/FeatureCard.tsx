"use client"
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      
      <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full mb-4">
        <Icon size={24} />
      </div>
      
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}