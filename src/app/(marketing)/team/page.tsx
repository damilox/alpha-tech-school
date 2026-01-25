"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      twitter: "https://x.com/saintQ19",
    },
  },
  {
    name: "Adesina Abdulkareem",
    role: "Co- founder & Financial Analyst",
    image: "/images/adesina (1).jpeg",
    bio: "Expert in Dynamic and results-driven Shipping & Trading Analyst with over 5 years of hands-on experience at NNPC Limited, Nigeria's leading energy company. Currently based in Dubai, United Arab Emirates, contributing to the organization's international crude oil trading and shipping operations through NNPC's global trading arm.",
    socials: {
      linkedin: "https://www.linkedin.com/in/abdulkareem-adesina-a69182124/",
    },
  },
  {
    name: "Oyinkansola Adisa",
    role: "Project Manager",
    image: "/images/pm.jpg",
    bio: "I focus on understanding real user problems and turning them into practical solutions that help products grow and deliver lasting value.",
    socials: {
      linkedin: "https://www.linkedin.com/in/oyinkansola-adisa-0413a6256",
      instagram: "https://www.instagram.com/_oiinkann_?igsh=enFndjdobml4eDFs",
    },
  },
  {
    name: "Omirin Adebayo",
    role: "Full-Stack Developer",
    image: "/images/adebayo.jpg",
    bio: "I specialize in architecting and scaling systems for web applications, using core technologies like Typescript, Python, and Rust, paired with comprehensive database and infrastructure management.",
    socials: {
      linkedin: "https://linkedin.com/in/odysseusoma",
      github: "https://github.com/odysseusoma",
      twitter: "https://x.com/odysseusoma",
      portfolio: "https://odysseusoma.github.io/",
    },
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
      portfolio: "https://ajetomobi-damilola.vercel.app/",
    },
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
    },
  },
  {
    name: "Naseer Shagaya",
    role: " Product Designer",
    image: "/images/adesina (2).jpeg",
    bio: "My name is Naseer Shagaya. I am a product designer passionate about learning and building meaningful digital experiences. I enjoy solving real user problems through thoughtful and simple design",
    socials: {
      linkedin: "https://www.linkedin.com/in/olasupo-sodiq-872304238/",
      twitter: "https://x.com/saintQ19",
    },
  },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen bg-background py-24">
      {/* HEADER */}
      <div className="container mx-auto px-4 text-center mb-20">
        <Badge variant="outline" className="mb-4">
          Our People
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Meet the Minds Behind Alpha Tech
        </h1>

        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Alpha Tech School is powered by a team of experienced instructors,
          mentors, and support staff committed to helping students build
          real-world tech skills and launch successful careers in technology.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            ["500+", "Students Trained"],
            ["10+", "Expert Instructors"],
            ["80+", "Years Combined Experience"],
            ["Nigeria & Beyond", "Community"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group overflow-hidden border-none bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="text-primary text-xs font-medium uppercase tracking-wider">
                  {member.role}
                </p>

                <div className="h-px w-12 bg-primary/30 mx-auto" />

                <p className="text-sm text-muted-foreground line-clamp-4">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3 flex-wrap pt-2">
                  {member.socials.linkedin && (
                    <SocialIcon href={member.socials.linkedin}>
                      <Linkedin />
                    </SocialIcon>
                  )}
                  {member.socials.github && (
                    <SocialIcon href={member.socials.github}>
                      <Github />
                    </SocialIcon>
                  )}
                  {member.socials.twitter && (
                    <SocialIcon href={member.socials.twitter}>
                      <Twitter />
                    </SocialIcon>
                  )}
                  {member.socials.instagram && (
                    <SocialIcon href={member.socials.instagram}>
                      <Instagram />
                    </SocialIcon>
                  )}
                  {member.socials.portfolio && (
                    <SocialIcon href={member.socials.portfolio}>
                      <Globe />
                    </SocialIcon>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* BENEFITS SECTION (ADDED AFTER TEAM) */}
      <div className="container mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4">Benefits At Alpha Tech</Badge>

            <h2 className="text-4xl font-bold mb-6">
              Get What You Need To Succeed
            </h2>

            <ul className="space-y-4 text-muted-foreground">
              {[
                "Paid Time Off",
                "Comprehensive Medical Insurance",
                "Internet Stipend",
                "Career Development Courses",
                "Awesome Colleagues",
                "Hybrid Work Model",
                "Shuttlers Access for Work Commute",
                "Quarterly Grocery Allowance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="contact">
            <Button className="mt-8">
             Talk to the Team
            </Button>
          </Link>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden border">
            <Image
              src="/images/gse.jpeg"
              alt="Team at Alpha Tech"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} target="_blank">
      <Button variant="outline" size="icon" className="rounded-full">
        {children}
      </Button>
    </Link>
  );
}
