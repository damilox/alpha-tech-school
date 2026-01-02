"use client"; // Required for the mobile menu to work

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* 1. Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          Alpha Tech
        </Link>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-black-300 hover:text-black-200">Home</Link>
          <Link href="/programs" className="text-sm font-medium text-black-300 hover:text-black-200">Programs</Link>
          <Link href="/about" className="text-sm font-medium text-black-300 hover:text-black-200">About us</Link>
          <Link href="/services" className="text-sm font-medium text-black-300 hover:text-black-200">Services</Link>
        </div>

        {/* 3. Auth Buttons (Hidden on Mobile) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact" className="text-sm font-medium text-black-300 hover:text-black-200">Contact us</Link>
          <button className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* 4. Mobile Menu Button (Hamburger) */}
        <button 
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"} {/* Simple toggle icon */}
        </button>
      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <Link href="/" className="text-lg text-gray-300">Home</Link>
            <Link href="/programs" className="text-lg text-gray-300">Programs</Link>
            <Link href="/about" className="text-lg text-gray-300">About us</Link>
            <Link href="/contact" className="text-lg text-gray-300">Contact us</Link>
            <div className="h-px bg-white/10 my-2" />
            <Link href="/services" className="text-lg text-white">Services</Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}