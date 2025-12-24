import { StatsCard } from "../../(analytics)/_component/StatsCard";
import { RegistrationChart } from "../../(analytics)/_component/RegistrationChart";
import { PopularityChart } from "../../(analytics)/_component/PopularityChart";
import { RecentActivity } from "../_component/RecentActivity"; 
import { TrafficSources } from "../_component/TrafficSources"; 
import { kpiData } from "../../../lib/mockData";
import { RefreshCcw, Calendar } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">Student Analytics</h1>
          <p className="text-gray-500 text-sm">Track course registrations and student engagement</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50 text-black">
             <Calendar size={16} /> Last 30 days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium">
             <RefreshCcw size={16} /> Refresh
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <RegistrationChart />
        </div>
        <div className="lg:col-span-1">
          <PopularityChart />
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <TrafficSources />
        </div>
      </div>

    </div>
  );
}