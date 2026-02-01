"use client";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export default function Service() {
  return (
    <div>
           <section className="pt-30 pb-12 container mx-auto px-4 text-center">
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

    </div>
  );
}
