import React from "react";
import TransactionInfoCard from "../Layout/Cards/TransactionInfoCard";
import { LuDownload } from "react-icons/lu";
import moment from "moment";

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
    return (
        <div className='card'>
            <div className='flex justify-between items-center'>
                <h5 className='text-lg font-medium'>Expense List</h5>
                <button className='card-btn' onClick={onDownload}>
                    <span>Download</span>
                    <LuDownload />
                </button>
            </div>
            <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 '>
                {transactions?.map((expense) => (
                    <TransactionInfoCard
                    key={expense._id}
                    title={expense.category}
                    icon={expense.icon}
                    date={moment(expense.date).format("DD MMM YYYY")}
                    amount={expense.amount}
                    type="expense"
                    onDelete={() => onDelete(expense._id)}
                    />
                ))}
            </div>
        </div>
      )
    }

export default ExpenseList;
