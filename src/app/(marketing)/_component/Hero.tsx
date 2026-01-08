"use client"
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-black text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
       
        <div>
          
          <span className="inline-block bg-gray-900 border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Transform Your Career
          </span>

         
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            LEARN TECH SKILLS <br />
            THAT MATTERS
          </h1>

        
          <p className="text-gray-400 mb-8 text-lg max-w-lg">
            Join thousands of students mastering in-demand tech skills with industry experts. 
            Start your journey to a successful tech career today.
          </p>

         
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/programs" className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition">
              Explore Programs
            </Link>
            <Link href="/login" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>

          
          <div className="flex items-center divide-x divide-white/20">
            <div className="pr-8">
              <h3 className="text-2xl md:text-3xl font-bold">500k+</h3>
              <p className="text-gray-400 text-sm">Active Student</p>
            </div>
            <div className="px-8">
              <h3 className="text-2xl md:text-3xl font-bold">50k+</h3>
              <p className="text-gray-400 text-sm">Expert Instructors</p>
            </div>
            <div className="pl-8">
              <h3 className="text-2xl md:text-3xl font-bold">95%</h3>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </div>
          </div>
        </div>

        
        <div className="relative">
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.4)] border border-white/10">
           
            <Image 
              src="/images/hero.jpg" 
              alt="Alpha Tech School Setup" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}