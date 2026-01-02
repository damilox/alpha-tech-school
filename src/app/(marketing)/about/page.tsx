"use client"
import Image from "next/image";
import Link from "next/link";
import { TeamCard } from "../_component/TeamCard";


const teamMembers = [
  { name: "Olasupo Sodiq", role: "CEO", image: "/images/team-image-1.jpg" },
  { name: "Oyinkansola Adisa", role: "Project Manager", image: "/images/team-image-2.jpg" },
  { name: "Omirin Adebayo", role: "FullStack Developer", image: "/images/team-image-3.jpg" },
  { name: "Ajetomobi Damilola", role: "Frontend Developer", image: "/images/team-image-4.jpg" },
  { name: "Favour Bakare", role: "Frontend Developer", image: "/images/team-image-5.jpg" },
  { name: "Balogun Khadija", role: "Frontend Developer", image: "/images/team-image-6.jpg" },
  { name: "Bash", role: "Product Designer", image: "/images/team-image-7.jpg" },
  { name: "Ahmed", role: "Project Manager", image: "/images/team-image-8.jpg" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      
      
      <section className="container mx-auto px-6 md:px-12 pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About Alpha Tech</h1>
        <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mb-12">
          The ALPHA TECH is a hybrid EduTech learning management system designed to bridge 
          the gap between physical tech training and online course delivery.
        </p>

        
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden bg-gray-100 mb-20">
          <Image 
            src="/images/about-hero.jpg" 
            alt="Alpha Tech Classroom" 
            fill 
            className="object-cover" 
          />
        </div>

      
        <div className="space-y-24 mb-24">
          
          
          <div className="max-w-4xl">
            <span className="inline-block border border-gray-300 rounded-full px-6 py-1.5 mb-4 text-sm font-bold text-black">
              Our Story
            </span>
            <p className="text-gray-600 leading-relaxed text-lg">
              Pod Alpha Tech will design, build, and launch the Alpha Tech School web platform 
              digitizing an established over 5-year-old tech education center in Ilorin that 
              has mentored 100+ students, currently mentoring 150+ students through a University 
              of Ilorin partnership and serves local youth ages 15-30.
            </p>
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block border border-gray-300 rounded-full px-6 py-1.5 mb-4 text-sm font-bold text-black">
                Mission
              </span>
              <p className="text-gray-600 leading-relaxed">
                Transform Alpha Tech School's proven in-person training model from manual operations 
                to a scalable digital platform, enabling seamless student onboarding, course management, 
                and payment processing with the foundation to expand nationwide online tech education across Nigeria.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image src="/images/mission-image.jpg" alt="Mission" fill className="object-cover" />
            </div>
          </div>

   
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 -rotate-2 hover:rotate-0 transition-transform duration-500">
               <Image src="/images/vision-image.jpg" alt="Vision" fill className="object-cover" />
            </div>
            <div>
              <span className="inline-block border border-gray-300 rounded-full px-6 py-1.5 mb-4 text-sm font-bold text-black">
                Vision
              </span>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to transform Alpha Tech School's proven in-person training model 
                from manual operations to a scalable digital platform, enabling seamless student 
                onboarding, course management, and payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-4xl font-bold text-black">500k+</h3>
            <p className="text-gray-500 font-medium">Active Student</p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div>
            <h3 className="text-4xl font-bold text-black">50k+</h3>
            <p className="text-gray-500 font-medium">Expert Instructors</p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div>
            <h3 className="text-4xl font-bold text-black">95%</h3>
            <p className="text-gray-500 font-medium">Success Rate</p>
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="mb-10">
          <span className="inline-block border border-gray-300 rounded-full px-6 py-1.5 mb-4 text-sm font-bold text-black">
            Our Team
          </span>
          <p className="text-gray-600">We provide everything you need to succeed in your tech career journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>

      <section className="bg-black py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Start your journey with Alpha Tech today and became part of a thriving community of learners and professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/programs" className="bg-white text-black font-bold px-4 py-2.5 rounded-full hover:bg-gray-200 transition">
              Explore Programs
            </Link>
            <Link href="/contact" className="border border-white/30 text-white font-bold px-4 py-2.5 rounded-full hover:bg-white/10 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}