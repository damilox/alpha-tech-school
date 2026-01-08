import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { 
  Code2, 
  Palette, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  Zap,
  Search,
  Rocket,
  Settings,
  ShieldCheck,
  Clock,
  Trophy
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-20 md:py-32 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Alpha Tech Solutions
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          We Build Digital Products <br className="hidden md:block" />
          <span className="text-primary">That Drive Growth.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          From stunning UI/UX design to robust web and mobile applications. 
          We provide the technology, the strategy, and the team to bring your vision to life.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8">
              Start a Project
            </Button>
          </Link>
          <Link href="/programs">
          <Button variant="outline" size="lg" className="h-12 px-8">
            View Our Programs
          </Button>
          </Link>
        </div>
      </section>

      
      <section className="border-y bg-secondary/5 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Powering solutions with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale transition-all hover:grayscale-0">
            
            {["React", "Next.js", "TypeScript", "Node.js", "Flutter", "Python", "AWS", "Figma"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg py-2 px-4 border-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just write code; we build comprehensive solutions tailored to your specific business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-secondary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Web & App Development</CardTitle>
                <CardDescription>Scalable solutions for web and mobile.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Custom Websites
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Web Applications (SaaS)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Mobile Apps (iOS & Android)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-secondary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Product Design (UI/UX)</CardTitle>
                <CardDescription>Crafting intuitive and beautiful experiences.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> User Research
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Wireframing & Prototyping
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> High-Fidelity UI Design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-secondary/10">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Tech Consultancy</CardTitle>
                <CardDescription>Expert advice to optimize your tech stack.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Digital Strategy
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> System Architecture
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Code Audits
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground">Our proven methodology ensures your project is delivered on time and on budget.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
            <div className="relative p-6 border rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 left-6 bg-background px-2 text-primary font-bold text-lg">01</div>
              <Search className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">We analyze your requirements, goals, and target audience to build a solid roadmap.</p>
            </div>
            
            
            <div className="relative p-6 border rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 left-6 bg-background px-2 text-primary font-bold text-lg">02</div>
              <Palette className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">We create prototypes and high-fidelity visuals to ensure the look and feel is perfect.</p>
            </div>

           
            <div className="relative p-6 border rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 left-6 bg-background px-2 text-primary font-bold text-lg">03</div>
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Develop</h3>
              <p className="text-sm text-muted-foreground">Our engineers write clean, scalable code using the latest modern technologies.</p>
            </div>

            
            <div className="relative p-6 border rounded-xl hover:border-primary transition-colors">
              <div className="absolute -top-4 left-6 bg-background px-2 text-primary font-bold text-lg">04</div>
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p className="text-sm text-muted-foreground">We deploy your product, handle the testing, and ensure a smooth go-live experience.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-primary-foreground/80 font-medium">
                <Users className="w-5 h-5" />
                <span>Team Augmentation & Recruitment</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Need a dedicated IT Team for your project?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Skip the hassle of interviewing and onboarding. We provide ready-to-deploy tech teams tailored to your project requirements. From developers to project managers, we have the talent you need.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="mt-4">
                  Get a Quote for a Team <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            
            <div className="flex-1 w-full relative">
              <div className="w-full aspect-video bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl flex items-center justify-center shadow-2xl">
                <Image 
                              src="/images/group.jpg" 
                              alt="Alpha Tech School Setup" 
                              width={600} 
                              height={400} 
                              className="w-full h-auto object-cover"
                              priority
                            />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Alpha Tech?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">We adhere to strict coding standards and rigorous testing protocols.</p>
           </div>
           <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">We respect deadlines and communicate transparently throughout the project.</p>
           </div>
           <div className="flex flex-col items-center text-center p-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Work with seasoned professionals who are passionate about technology.</p>
           </div>
        </div>
      </section>

      
      <section className="py-20 text-center container mx-auto px-4 bg-secondary/10 rounded-t-[3rem]">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Whether you need a single website or a full IT department, Alpha Tech is ready to deliver. Reach out today to discuss pricing and requirements.
        </p>
        <Link href="/contact">
          <Button size="lg" className="px-10">
            Contact Us
          </Button>
        </Link>
      </section>

    </div>
  );
}