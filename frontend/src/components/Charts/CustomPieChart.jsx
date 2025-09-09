import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "../Charts/CustomToolTip";
import CustomLegend from "../Charts/CustomLegend";
const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showtextAnchor,
}) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={data}
            dataKey={"amount"}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            content={CustomToolTip}
            animationDuration={200}
            animationEasing="ease-out"
          />
          <Legend content={CustomLegend} />
          {showtextAnchor && (
            <>
              <text
                x="50%"
                y="50%"
                dy={-20}
                textAnchor="middle"
                fill="#666"
                className="text-sm font-medium"
              >
                {label}
              </text>
              <text
                x="50%"
                y="50%"
                dy={25}
                textAnchor="middle"
                fill="#333"
                fontSize="24px"
                className="font-medium"
              >
                {totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
