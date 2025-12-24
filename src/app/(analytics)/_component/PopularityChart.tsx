"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { coursePopularityData } from "../../../lib/mockData";

export function PopularityChart() {
 
  const total = coursePopularityData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px]">
      <h3 className="text-lg font-bold text-black mb-6">Course Popularity</h3>

      <div className="flex flex-col md:flex-row items-center gap-8 h-[300px]">
        
     
        <div className="w-full md:w-1/2 h-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={coursePopularityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {coursePopularityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold text-black">{total}</span>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 space-y-3">
          {coursePopularityData.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }} 
                />
                <span className="text-gray-600">{item.name}</span>
              </div>
              <span className="font-bold text-black">{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}