// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Student Analytics</h1>
//       <div className="p-6 bg-white rounded-xl shadow-sm">
//         <p>Charts and graphs will go here.</p>
//       </div>
//     </div>
//   );
// }

import { StatsCard } from "../_components/StatsCard";
import { kpiData } from "@/lib/mockData"; // Importing the data we made
import { RefreshCcw, Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black">Student Analytics</h1>
          <p className="text-gray-500 text-sm">Track course registrations and student engagement</p>
        </div>
        
        {/* Header Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 text-black transition">
            <Calendar size={16} />
            Last 30 days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((item, index) => (
          <StatsCard 
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            trend={item.trend}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Placeholder for Charts (We will do this next) */}
      <div className="p-10 border-2 border-dashed border-gray-300 rounded-xl text-center text-gray-400">
        Charts will go here...
      </div>

    </div>
  );
}