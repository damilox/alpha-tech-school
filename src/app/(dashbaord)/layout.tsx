import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar will go here */}
      <aside className="w-64 bg-white border-r hidden md:block p-4">
        Sidebar
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}