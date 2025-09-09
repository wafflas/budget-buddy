import React from "react";
import CustomPieChart from "../../Charts/CustomPieChart";
const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalIncome, totalExpenses, totalBalance }) => {
  const balanceData = [
    {
      name: "Total Balance",
      amount: totalBalance,
    },
    {
      name: "Total Expenses",
      amount: totalExpenses,
    },
    {
      name: "Total Income",
      amount: totalIncome,
    },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-medium">Financial Overview</h5>
      </div>
      <CustomPieChart data={balanceData} label="Total Balance" totalAmount={`€${totalBalance}`} colors={COLORS} showtextAnchor/>
    </div>
  );
};

export default FinanceOverview;
