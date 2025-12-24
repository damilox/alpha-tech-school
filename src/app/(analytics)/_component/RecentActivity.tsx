import { recentActivity } from "../../../lib/mockData"; 

export function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
      <h3 className="text-lg font-bold text-black mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {recentActivity.map((student, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition">
            
            {/* Left: Avatar & Name */}
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              {/* Initials Avatar */}
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
                {student.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-black text-sm">{student.name}</h4>
                <p className="text-gray-400 text-xs">{student.email}</p>
              </div>
            </div>

            {/* Middle: Course & Time */}
            <div className="text-left md:text-right mb-2 md:mb-0">
              <p className="text-black font-medium text-sm">{student.course}</p>
              <p className="text-gray-400 text-xs">{student.time}</p>
            </div>

            {/* Right: Status Badge */}
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                student.status === "Completed" 
                  ? "bg-green-100 text-green-600" 
                  : "bg-yellow-100 text-yellow-600"
              }`}>
                {student.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}