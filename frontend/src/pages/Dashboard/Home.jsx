import React, { useEffect } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { IoMdCard } from "react-icons/io";
import InfoCard from "../../components/Layout/Cards/InfoCard";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { addThousandSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Layout/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Layout/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Layout/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Layout/Dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/Layout/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Layout/Dashboard/RecentIncome";
const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto p-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandSeparator(dashboardData?.totalBalance)}
            color="bg-primary"
          />
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandSeparator(dashboardData?.totalIncome)}
            color="bg-green-500"
          />
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expenses"
            value={addThousandSeparator(dashboardData?.totalExpenses)}
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-5 mb-5">
          <RecentTransactions
            transactions={dashboardData?.recentTransactions || []}
          />
          <FinanceOverview
            totalIncome={dashboardData?.totalIncome}
            totalExpenses={dashboardData?.totalExpenses}
            totalBalance={dashboardData?.totalBalance}
          />
        </div>

        <ExpenseTransactions
          transactions={dashboardData?.last30DaysExpenses?.transactions}
          onSeeMore={() => navigate("/expense")}
        />

        <Last30DaysExpenses
          data={dashboardData?.last30DaysExpenses?.transactions || []}
        />

        <RecentIncomeWithChart
          data={
            dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []
          }
          totalIncome={dashboardData?.last60DaysIncome?.total || 0}
        />
        <RecentIncome
          transactions={dashboardData?.last60DaysIncome?.transactions || []}
          onSeeMore={() => navigate("/income")}
        />
      </div>
    </DashboardLayout>
  );
};

export default Home;
