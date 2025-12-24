"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { trafficData } from "../../../lib/mockData";


const COLORS = ["#FACC15", "#A855F7", "#22C55E", "#3B82F6"];

export function TrafficSources() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
      <h3 className="text-lg font-bold text-black mb-6">Traffic Sources</h3>
      <p className="text-gray-500 text-sm mb-4">Where your visitors come from</p>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={trafficData} barSize={20}>
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "#6B7280" }}
              width={60}
            />
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {trafficData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      
      <div className="flex justify-between mt-4 text-xs text-gray-500">
         {trafficData.map((item, index) => (
           <div key={index} className="text-center">
             <span className="block font-bold text-black text-sm">{item.value >= 1000 ? (item.value/1000) + 'k' : item.value}</span>
           </div>
         ))}
      </div>
    </div>
  );
}