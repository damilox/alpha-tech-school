"use client"
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Adelaja Daniel",
    role: "Full Stack Developer At Alpha Tech",
    quote: "This program completely transformed my career. I went from having zero coding experience to landing a full-stack developer role at a top tech company. The instructors were amazing and the curriculum was perfectly structured.",
    rating: 5,
    image: "/images/hero.jpg"
  },
  {
    name: "Adeleke Fatimah",
    role: "UI/UX Designer",
    quote: "Before this program, I had no experience in design-just curiosity and a drive to learn. By the end, I had a full UI/UX portfolio, real-world projects under my belt, and the skills to confidently apply for jobs.",
    rating: 5,
    image: "/images/hero.jpg"
  },
  {
    name: "Oloyede Taiwo",
    role: "Data Analyst",
    quote: "I had no background in data analysis-just a strong interest in numbers and problem-solving. By the end, I was building dashboards, writing SQL queries, and uncovering insights from real datasets.",
    rating: 5,
    image: "/images/hero.jpg"
  },
  {
    name: "Paul Priscilla",
    role: "Graphics Designer",
    quote: "I came into this program with no graphic design experience-just a love for creativity. Throughout the course, I learned how to use tools like Photoshop and Illustrator, worked on real-world design projects, and built a professional portfolio.",
    rating: 5,
    image: "/images/hero.jpg"
  },
  {
    name: "Adebayo Ebenezer",
    role: "Product Manager",
    quote: "Before this program, I had no experience in product management only a strong interest in building meaningful products. The course broke down concepts like roadmap planning, user research, and agile workflows.",
    rating: 5,
    image: "/images/hero.jpg"
  },
  {
    name: "Obey Goodness",
    role: "Digital Marketer",
    quote: "I had no background in digital marketing before registering with Alpha Tech Schools. The course covered everything from SEO and social media strategy to email campaigns and analytics.",
    rating: 5,
    image: "/images/hero.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Pill Style Header */}
          <div className="inline-block border border-gray-300 rounded-full px-8 py-2 mb-4">
            <h2 className="text-lg font-bold text-black">What Our Students Says</h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Join thousands of successful graduate who transformed their career
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((student, index) => (
            <TestimonialCard
              key={index}
              name={student.name}
              role={student.role}
              quote={student.quote}
              rating={student.rating}
              image={student.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}