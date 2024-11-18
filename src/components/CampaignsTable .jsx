import React from "react";

const CampaignsTable = () => {
  const campaigns = [
    {
      id: 1,
      active: false,
      icon: "⚙️", // Replace with an appropriate icon
      name: "Summer Sale",
      type: "Promotional",
      status: "Completed",
      budget: "$20,000",
      conversions: "50%",
      startDate: "07 Nov 2024",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      active: true,
      icon: "🍃",
      name: "Back-to-School Promo",
      type: "Seasonal",
      status: "Active",
      budget: "$15,000",
      conversions: "35%",
      startDate: "12 Nov 2024",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      active: true,
      icon: "🌱",
      name: "New Product Launch",
      type: "Seasonal",
      status: "Active",
      budget: "$30,000",
      conversions: "60%",
      startDate: "15 Nov 2024",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      active: false,
      icon: "🚀",
      name: "Holiday Gift Guide",
      type: "Launch",
      status: "Scheduled",
      budget: "$50,000",
      conversions: "0%",
      startDate: "12 Nov 2024",
      statusColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 5,
      active: true,
      icon: "🎁",
      name: "Clearance Sale",
      type: "Promotional",
      status: "Active",
      budget: "$10,000",
      conversions: "20%",
      startDate: "12 Nov 2024",
      statusColor: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mx-8 mt-5 mb-4 min-w-[920px] ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Campaigns</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create campaign
        </button>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left text-gray-600 text-sm">
            <th className="py-2"> </th>
            <th className="py-2">CAMPAIGN</th>
            <th className="py-2">STATUS</th>
            <th className="py-2">BUDGET</th>
            <th className="py-2">CONVERSIONS</th>
            <th className="py-2">START</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr
              key={campaign.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3">
                <input
                  type="checkbox"
                  checked={campaign.active}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-300"
                  readOnly
                />
              </td>
              <td className="py-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100"
                  aria-label="icon"
                >
                  {campaign.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{campaign.name}</p>
                  <p className="text-sm text-gray-500">{campaign.type}</p>
                </div>
              </td>
              <td className="py-3">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${campaign.statusColor}`}
                >
                  {campaign.status}
                </span>
              </td>
              <td className="py-3 text-gray-800">{campaign.budget}</td>
              <td className="py-3 text-gray-800">{campaign.conversions}</td>
              <td className="py-3 text-gray-800">{campaign.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignsTable;
