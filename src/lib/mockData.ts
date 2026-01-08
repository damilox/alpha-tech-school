// src/lib/mockData.ts

// 1. KPI Cards Data (Top Row)
export const kpiData = [
  {
    title: "Total Student",
    value: "5,000",
    change: "+12%",
    trend: "up", // Used for Green color
    icon: "users",
  },
  {
    title: "Active course",
    value: "5",
    change: "+2%",
    trend: "up",
    icon: "book",
  },
  {
    title: "Total Revenue",
    value: "3000",
    change: "+10%",
    trend: "up",
    icon: "dollar",
  },
  {
    title: "Completion Rate",
    value: "78.56%",
    change: "-2%",
    trend: "down", // Used for Red color
    icon: "chart",
  },
];

// 2. Registration Trends (Line Chart - Left Side)
export const registrationData = [
  { name: "Jan", students: 800 },
  { name: "Feb", students: 1500 },
  { name: "Mar", students: 2500 },
  { name: "Apr", students: 3000 },
  { name: "May", students: 2800 },
  { name: "Jun", students: 3500 },
  { name: "Jul", students: 4200 },
  { name: "Aug", students: 5000 },
  { name: "Sep", students: 5800 },
  { name: "Oct", students: 5200 },
  { name: "Nov", students: 4500 },
  { name: "Dec", students: 4000 },
];

// 3. Course Popularity (Donut Chart - Right Side)

export const coursePopularityData = [
  { name: "Web development", value: 200, color: "#22c55e" }, 
  { name: "UI/UX Design", value: 350, color: "#0000FF" },    
  { name: "Data Analysis", value: 200, color: "#800080" },   
  { name: "Product Management", value: 150, color: "#FFFF00" }, 
  { name: "Graphics Design", value: 100, color: "#FFA500" }, 
];

// 4. Recent Activity (Bottom Left List)
export const recentActivity = [
  {
    name: "Kayode Sarah",
    email: "kayodesarah@gmail.com",
    course: "Web Development",
    time: "2 mins ago",
    status: "Completed",
  },
  {
    name: "Olujimi Favour",
    email: "olujimifavour22@gmail.com",
    course: "UI/UX Design",
    time: "30 mins ago",
    status: "Completed",
  },
  {
    name: "Aziz Adam",
    email: "azizadam66@gmail.com",
    course: "Data Analysis",
    time: "1 hr ago",
    status: "Pending",
  },
  {
    name: "Kayode Sarah",
    email: "kayodesarah@gmail.com",
    course: "Cyber Security",
    time: "1hr 30 mins ago",
    status: "Completed",
  },
];

// 5. Traffic Sources (Bottom Right Bar Chart)
export const trafficData = [
  { name: "Direct", value: 3000 },
  { name: "Google", value: 2500 },
  { name: "Twitter", value: 4500 }, // Matches the long green bar
  { name: "Github", value: 4000 },
];