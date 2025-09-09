import React from "react";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md shadow-gray-100/50 border border-gray-200/50">
        <p className="text-sm text-gray-500">{payload[0].name}</p>
        <p className="text-sm text-gray-500">
          Amount:{" "}
          <span className="font-medium text-gray-950 text-sm">
            ${payload[0].value}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
