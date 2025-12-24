import { ArrowUpRight, ArrowDownRight, Users, BookOpen, DollarSign, Activity } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: string; 
  icon: string;
}

export function StatsCard({ title, value, change, trend, icon }: StatsCardProps) {
  

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users": return <Users size={20} />;
      case "book": return <BookOpen size={20} />;
      case "dollar": return <DollarSign size={20} />;
      default: return <Activity size={20} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-36">
      
     
      <div className="flex justify-between items-start">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        
        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
          {getIcon(icon)}
        </div>
      </div>

     
      <div>
        <h3 className="text-2xl font-bold text-black mb-2">{value}</h3>
        
        <div className="flex items-center gap-2">
          
          <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
            trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
          }`}>
            {trend === "up" ? <ArrowUpRight size={14} className="mr-1"/> : <ArrowDownRight size={14} className="mr-1"/>}
            {change}
          </span>
          <span className="text-gray-400 text-xs">vs last month</span>
        </div>
      </div>

    </div>
  );
}