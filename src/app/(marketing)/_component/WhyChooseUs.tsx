"use client"

import { Award, Users, Briefcase, MonitorPlay, Clock, HelpCircle } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
const features = [
  {
    icon: Award, 
    title: "Industry Certification",
    description: "Earn recognized certificates that validate your expertise and boost your credibility."
  },
  {
    icon: Users, 
    title: "Expert Instructor",
    description: "Learn from industry experts who have real-world experience and passion for teaching."
  },
  {
    icon: Briefcase, 
    title: "Hands-On-Project",
    description: "Work on real-world projects that build your portfolio and prepare you for the job market."
  },
  {
    icon: Clock, 
    title: "Flexible Learning",
    description: "Study at your own pace with our flexible schedule and recorded sessions."
  },
  {
    icon: MonitorPlay, 
    title: "Live Sessions",
    description: "Join interactive live sessions to ask questions and collaborate with peers."
  },
  {
    icon: HelpCircle, 
    title: "Career Support",
    description: "Get guidance on resume building, interview prep, and job placement opportunities."
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block border border-gray-300 rounded-full px-6 py-2 mb-4">
            <h2 className="text-lg font-bold text-black">Why Choose Alpha Tech?</h2>
          </div>
          <p className="text-gray-600">
            We provide everything you need to succeed in your tech career journey.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}