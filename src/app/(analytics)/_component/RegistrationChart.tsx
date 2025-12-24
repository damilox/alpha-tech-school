"use client"; // Charts need to be client-side

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { registrationData } from "../../../lib/mockData"; // Import your mock data

export function RegistrationChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px]">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-black">Registration Trends</h3>
        <p className="text-gray-500 text-sm">Monthly registration & revenue overview</p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={registrationData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            {/* The Blue Curve Line */}
            <Line 
              type="monotone" 
              dataKey="students" 
              stroke="#4F46E5" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: '#4F46E5' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}