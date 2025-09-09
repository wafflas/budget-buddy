import React, { useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const RecentTransactions = ({ transactions }) => {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 5;
  const visibleTransactions = expanded
    ? transactions
    : transactions?.slice(0, LIMIT);

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-medium">Recent Transactions</h5>
        <button className="card-btn" onClick={() => setExpanded((v) => !v)}>
          <span>{expanded ? "Show Less" : "Show All"}</span>
          <LuArrowRight className={`${expanded ? "rotate-90" : ""}`} />
        </button>
      </div>
      <div className={`mt-6 ${expanded ? "" : "max-h-96 overflow-hidden"}`}>
        {visibleTransactions?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format("DD MMM YYYY")}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
