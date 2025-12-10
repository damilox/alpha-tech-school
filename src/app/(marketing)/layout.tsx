import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Navbar at the top */}
      <Navbar />
      
      {/* 2. Main content in the middle (flex-1 makes it push footer down) */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* 3. Footer at the bottom */}
      <Footer />
    </div>
  );
}