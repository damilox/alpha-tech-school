"use client"
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

// Helper component for the social icons
const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition">
    <Icon size={16} />
  </div>
);

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-black mb-2">Contact Information</h3>
        <p className="text-gray-500 text-sm">
          Reach out to us through any of this channels. We are here to help!
        </p>
      </div>

      {/* The 4 Cards Stack */}
      <div className="space-y-4 flex-grow">
        
        {/* Card 1: Email */}
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-black">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Email</h4>
            <p className="text-gray-500 text-xs">Alphatechedu.com</p>
          </div>
        </div>

        {/* Card 2: Phone */}
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-black">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Phone</h4>
            <p className="text-gray-500 text-xs">+234 81 222 463 86</p>
          </div>
        </div>

        {/* Card 3: Office */}
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-black">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Office</h4>
            <p className="text-gray-500 text-xs">31, Ilorin, Lagos.</p>
          </div>
        </div>

        {/* Card 4: Hours */}
        <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-lg text-black">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Hours</h4>
            <p className="text-gray-500 text-xs">Mon-Fri - 9AM - 6PM PST</p>
          </div>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="mt-8">
        <h4 className="font-bold text-black text-sm mb-4">Follow Us</h4>
        <div className="flex gap-3">
          <Link href="#"><SocialIcon icon={Facebook} /></Link>
          <Link href="#"><SocialIcon icon={Linkedin} /></Link>
          <Link href="#"><SocialIcon icon={Instagram} /></Link>
          {/* Using Facebook icon as placeholder for TikTok since standard Lucide package might differ */}
          <Link href="#"><SocialIcon icon={Facebook} /></Link> 
        </div>
      </div>
    </div>
  );
}