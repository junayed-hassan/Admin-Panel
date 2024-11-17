import React from "react";

const KpiSummary = () => {
  const kpis = [
    {
      icon: "👤", // Replace with an appropriate icon (e.g., SVG or FontAwesome)
      title: "Total marketing spend",
      value: "$192,817",
      change: "+5.3%",
      description: "vs last month",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: "📋",
      title: "ROI",
      value: "270%",
      change: "+8.1%",
      description: "vs last month",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: "🔄",
      title: "Conversion rates",
      value: "4.5%",
      change: "+0.9%",
      description: "vs last month",
      color: "bg-green-100 text-green-500",
    },
    {
      icon: "📎",
      title: "Total leads",
      value: "1,289",
      change: "+16.2%",
      description: "vs last month",
      color: "bg-purple-100 text-purple-500",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mx-8 mt-5 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">KPI Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="flex flex-col items-center text-center border-r last:border-none border-gray-200">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${kpi.color}`}
            >
              <span className="text-2xl">{kpi.icon}</span>
            </div>
            <h3 className="text-sm text-gray-500 mt-2">{kpi.title}</h3>
            <p className="text-2xl font-semibold text-gray-800">{kpi.value}</p>
            <p className="text-sm text-green-500 font-medium">{kpi.change}</p>
            <p className="text-xs text-gray-400">{kpi.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiSummary;
