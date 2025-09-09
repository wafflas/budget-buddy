import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

const RecentIncome = ( {transactions, onSeeMore} ) => {
  return (
    <div className='card mt-6 '>
        <div className='flex justify-between items-center'>
            <h5 className='text-lg font-medium'>Recent Income</h5>
            <button className='card-btn' onClick={onSeeMore}>
                <span>See All</span>
                <LuArrowRight />
            </button>
        </div>
        <div className='mt-6'>
            {transactions?.slice(0,5)?.map((income) => (
                <TransactionInfoCard
                key={income._id}
                title={income.source}
                icon={income.icon}
                date={moment(income.date).format("DD MMM YYYY")}
                amount={income.amount}
                type="income"
                hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default RecentIncome