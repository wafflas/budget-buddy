import React, { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper";

const ExpenseOverview = ({ transactions, onAddExpense }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result =  prepareExpenseLineChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex justify-between items-center">
      <div className="">
        <h5 className="text-lg font-medium">Expense Overview</h5>
        <p>Track your spending trends over time and gain insights into where your money goes.</p>
      </div>
      <button className="card-btn" onClick={onAddExpense}>
        <span>Add Expense</span>
        <LuPlus className="text-lg" />
      </button>
    </div>
    <div className="mt-10">
      {transactions?.length ? (
        <CustomLineChart data={chartData} />
      ) : (
        <p className="text-sm text-gray-500">No expense data to display.</p>
      )}
    </div>
  </div>
  );
};

export default ExpenseOverview;
