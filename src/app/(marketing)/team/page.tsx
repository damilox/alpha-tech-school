"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Globe,
  Briefcase // I added Briefcase for Behance (optional, or reuse Globe)
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 1. Define the interface so TypeScript knows these keys exist (Optional but good practice)
interface Socials {
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  behance?: string;
  portfolio?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: Socials;
}

const teamMembers: TeamMember[] = [
  {
    name: "Olasupo Sodiq",
    role: "C.E.O/Lead Product Designer",
    image: "/images/alpha.jpg", 
    bio: "Enthusiastic and curious individual passionate about technology, AI, and exploring new ideas. Always eager to learn, connect with interesting people, and tackle challenging questions. Open to collaborations, discussions, and making meaningful connections!",
    socials: {
      linkedin: "https://www.linkedin.com/in/olasupo-sodiq-872304238/",
      twitter: "https://x.com/saintQ19"
    }
  },
  {
    name: "Oyinkansola Adisa",
    role: "Project Manager",
    image: "/images/pm.jpg", 
    bio: "I focus on understanding real user problems and turning them into practical solutions that help products grow and deliver lasting value.",
    socials: {
      linkedin: "https://linkedin.com",
      behance: "https://behance.net", 
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Omirin Adebayo",
    role: "Full-Stack Developer",
    image: "/images/team3.jpg", 
    bio: "Architecting robust server-side solutions. Expert in Node.js, Python, and Database management.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Ajetomobi Damilola",
    role: "Frontend Developer",
    image: "/images/dammy.jpg", 
    bio: "Frontend Developer focused on scalability and precision. I use Next.js, TypeScript and other stacks to build applications that are strictly faithful to the design and performant under load.",
    socials: {
      linkedin: "https://linkedin.com/in/ajetomobi-damilola",
      github: "https://github.com/damilox",
      instagram: "https://instagram.com/ajetomobi-damilola",
      twitter: "https://x.com/AjetomobiD28536",
      portfolio: "https://ajetomobi-damilola.vercel.app/" 
    }
  }, 
  {
    name: "Favour Bakare",
    role: "Frontend Developer",
    image: "/images/favour.jpg", 
    bio: "I solve real problems through thoughtful frontend work, building user-focused web experiences that scale cleanly as products grow.",
    socials: {
      linkedin: "https://www.linkedin.com/in/favour25",
      github: "https://github.com/oluwaduyilemi",
      twitter: "https://x.com/Duyilemi_Code",
    }
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      
      <div className="container mx-auto px-4 text-center mb-16">
        <Badge variant="outline" className="mb-4">Our People</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Meet the Minds Behind Alpha Tech</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are a group of developers, designers, and strategists passionate about building the future of tech.
        </p>
      </div>

      {/* TEAM GRID */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none bg-secondary/10">
              
              {/* IMAGE SECTION */}
              <div className="relative aspect-[4/5] w-full bg-gray-200">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* CONTENT SECTION */}
              <CardHeader className="text-center pb-2">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex justify-center gap-3 flex-wrap">
                  
                  {member.socials.linkedin && (
                    <Link href={member.socials.linkedin} target="_blank">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-blue-600 hover:border-blue-600">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {member.socials.github && (
                    <Link href={member.socials.github} target="_blank">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-black hover:border-black">
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {member.socials.twitter && (
                    <Link href={member.socials.twitter} target="_blank">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-sky-500 hover:border-sky-500">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {member.socials.instagram && (
                    <Link href={member.socials.instagram} target="_blank">
                      <Button variant="outline" size="icon" className="rounded-full hover:text-pink-600 hover:border-pink-600">
                        <Instagram className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  
                  {/* BEHANCE (Using Briefcase or Globe icon) */}
                  {member.socials.behance && (
                    <Link href={member.socials.behance} target="_blank">
                       <Button variant="outline" size="icon" className="rounded-full hover:text-blue-800 hover:border-blue-800">
                        <Briefcase className="h-4 w-4" /> 
                      </Button>
                    </Link>
                  )}

                  {/* PORTFOLIO / WEBSITE (Using Globe icon) */}
                  {member.socials.portfolio && (
                    <Link href={member.socials.portfolio} target="_blank">
                       <Button variant="outline" size="icon" className="rounded-full hover:text-green-600 hover:border-green-600">
                        <Globe className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                </div>
              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </div>
  );
}