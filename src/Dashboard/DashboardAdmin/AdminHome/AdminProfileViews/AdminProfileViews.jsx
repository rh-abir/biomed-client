import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminProfileViews = () => {
  const chartData = [
    { month: "January", views: 150 },
    { month: "February", views: 220 },
    { month: "March", views: 300 },
    { month: "April", views: 200 },
    { month: "May", views: 450 },
    { month: "June", views: 600 },
  ];

  return (
    <div className="mt-8 dark:bg-gray-800  dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Your Profile Views</h3>
      <div style={{ overflowX: "auto", position: "relative", zIndex: 1 }}>
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default AdminProfileViews;
