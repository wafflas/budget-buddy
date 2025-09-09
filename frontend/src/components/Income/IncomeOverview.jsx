import React from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../../components/Charts/CustomBarChart";
import { useState, useEffect } from "react";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <div className="">
          <h5 className="text-lg font-medium">Income Overview</h5>
          <p>Track your earning over time and analyze your income sources.</p>
        </div>
        <button className="card-btn" onClick={onAddIncome}>
          <span>Add Income</span>
          <LuPlus className="text-lg" />
        </button>
      </div>
      <div className="mt-10">
        {chartData?.length ? (
          <CustomBarChart data={chartData}/>
        ) : (
          <p className="text-sm text-gray-500">No income data to display.</p>
        )}
      </div>
    </div>
  );
};

export default IncomeOverview;
