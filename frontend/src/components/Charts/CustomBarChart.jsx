import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const p = payload[0].payload;
    const title = p.source || p.category || "";
    return (
      <div className="bg-white p-3 rounded-lg shadow-md shadow-gray-100/50 border border-gray-200/50">
        <p className="text-xs font-semibold text-gray-500 mb-1">{title}</p>
        <p className="text-xs font-semibold text-gray-500">
          Amount:
          <span className="text-sm font-medium text-gray-950">€{p.amount}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarChart = ({ data }) => {
  return (
    <div className="mt-7 bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={CustomTooltip} />

          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "#yellow" }}
            activeStyle={{ fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={index % 2 === 0 ? "#2AB6A6" : "#BFEAE6"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
