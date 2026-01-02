"use client"
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Globe, 
  Mail 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 1. THIS IS WHERE YOU ADD YOUR TEAM MEMBERS
// Just copy a block inside the brackets {}, paste it, and change the details.
const teamMembers = [
  {
    name: "Ajetomobi Damilola",
    role: "Frontend Developer",
    image: "/images/dammy.jpg", // Make sure this image exists in public/images folder
    bio: "Passionate about building pixel-perfect user interfaces and scalable web applications with Next.js and TypeScript.",
    socials: {
      linkedin: "https://linkedin.com/in/ajetomobi-damilola",
      github: "https://github.com/yourusername",
      instagram: "https://instagram.com/ajetomobi-damilola",
      twitter: "https://x.com/ajetomobi-damilola"
    }
  },
  {
    name: "Balogun Khadijah",
    role: "UI/UX Designer",
    image: "/images/team2.jpg", 
    bio: "Crafting intuitive digital experiences. Specialist in Figma, user research, and interactive prototyping.",
    socials: {
      linkedin: "https://linkedin.com",
      behance: "https://behance.net", 
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Favour Bakare",
    role: "Backend Engineer",
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
    image: "/images/dammy.jpg", // Make sure this image exists in public/images folder
    bio: "Passionate about building pixel-perfect user interfaces and scalable web applications with Next.js and TypeScript.",
    socials: {
      linkedin: "https://linkedin.com/in/ajetomobi-damilola",
      github: "https://github.com/yourusername",
      instagram: "https://instagram.com/ajetomobi-damilola",
      twitter: "https://x.com/ajetomobi-damilola"
    }
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/images/team2.jpg", 
    bio: "Crafting intuitive digital experiences. Specialist in Figma, user research, and interactive prototyping.",
    socials: {
      linkedin: "https://linkedin.com",
      behance: "https://behance.net", 
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Backend Engineer",
    image: "/images/team3.jpg", 
    bio: "Architecting robust server-side solutions. Expert in Node.js, Python, and Database management.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      
      {/* PAGE HEADER */}
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
              <div className="relative h-64 w-full bg-gray-200">
                {/* Note: If you don't have images yet, this placeholder <div> shows.
                   Once you have images, the <Image> tag below takes over.
                */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Image: {member.name}]
                </div>
                
                {/* Uncomment this when you have real images */}
                {/* <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                */}
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

                {/* SOCIAL LINKS (Generated Dynamically) */}
                <div className="flex justify-center gap-3">
                  
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
                  
                  {/* Fallback for Behance/Website using Globe Icon */}
                  {/* You can rename 'behance' in the data object above to trigger this */}
                  {(member.socials as any).behance && (
                    <Link href={(member.socials as any).behance} target="_blank">
                       <Button variant="outline" size="icon" className="rounded-full hover:text-blue-800 hover:border-blue-800">
                        <Globe className="h-4 w-4" /> {/* Behance/Portfolio */}
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