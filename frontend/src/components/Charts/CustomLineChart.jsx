import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const p = payload[0]?.payload || {};
      const title = p.source || p.category || p.month || "";
      return (
        <div className="bg-white p-3 rounded-lg shadow-md shadow-gray-100/50 border border-gray-200/50">
          <p className="text-xs font-semibold text-gray-500 mb-1">{title}</p>
          <p className="text-xs font-semibold text-gray-500">
            Amount:
            <span className="text-sm font-medium text-gray-950">
              {" "}
              €{p.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Build stable tick set: first, last, and a few spaced mids
  const labels = Array.from(new Set((data || []).map((d) => d.month)));
  const count = labels.length;
  const step = count > 8 ? Math.ceil(count / 4) : 1;
  const ticksToShow = labels.filter(
    (_, i) => i === 0 || i === count - 1 || (step > 1 && i % step === 0)
  );

  return (
    <div className="mt-7 bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 28, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2AB6A6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#2AB6A6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="none" />

          <XAxis
            dataKey="month"
            ticks={ticksToShow}
            interval={0}
            allowDuplicatedCategory={false}
            padding={{ left: 0, right: 28 }}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            stroke="none"
          />

          <Tooltip content={CustomTooltip} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#2AB6A6"
            strokeWidth={3}
            fill="url(#lineGradient)"
            dot={{ r: 4, strokeWidth: 2, fill: "#2AB6A6" }}
            activeDot={{ r: 5, fill: "#2AB6A6" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
