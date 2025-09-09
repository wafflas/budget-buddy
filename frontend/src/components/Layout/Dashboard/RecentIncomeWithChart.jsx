import React from 'react'
import CustomPieChart from '../../Charts/CustomPieChart'
import { useState, useEffect } from 'react'

const COLORS = ["#875CF5", "#FA2C37", "#FF6900" ,"#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {

    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item)=>
        ({
            name: item?.source,
            amount: item?.amount,
        })
        )
        setChartData(dataArr);
    }

    useEffect(() => {
        prepareChartData();
    }, [data]);

  return (
    <div className='card'>
        <div className='flex justify-between items-center'>
            <h5 className='text-lg font-medium'>Last 60 Days Income</h5>
        </div>
        <CustomPieChart 
        data={chartData}
        label="Total Income"
        totalAmount={`€${totalIncome}`}
        colors={COLORS}
        showtextAnchor
        />
    </div>
  )
}

export default RecentIncomeWithChart