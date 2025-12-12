"use client"
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 text-center">
    
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Start Your Tech Journey?
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of students who are already learning and building their 
          dream careers in tech. Get started with our expert-led programs.
        </p>

        <Link 
          href="/programs" 
          className="inline-block bg-white text-black text-base md:text-lg font-bold px-10 py-4 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300"
        >
          Enroll now
        </Link>

      </div>
    </section>
  );
}