"use client"
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Have question? we'd love to hear from you. Send us a message <br className="hidden md:block" />
            and we'll respond as soon as possible
          </p>
        </div>

        {/* Grid Layout: Left (Info) - Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Takes 1/3 width */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Right Side: Takes 2/3 width */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}