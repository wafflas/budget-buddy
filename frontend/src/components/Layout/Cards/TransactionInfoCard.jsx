import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      <div className="w-12 h-12 flex items-center justify-center text-[26px] text-gray-700  rounded-full drop-shadow-xl">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col justify-between items-start">
          <p className="text-sm text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>

        <div className="flex items-center gap-2">
          {!hideDeleteBtn && (
            <button
              className="text-gray-700 hover:text-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
              onClick={onDelete}
            >
              <LuTrash2 size={18} />
            </button>
          )}

          <div
            className={`flex items-center gap02 px-3 py-1.5 rounded-lg ${
              type === "income" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"
            }`}
          >
            <h6 className="text-xs font-medium mr-1">
              {type === "income" ? "+" : "-"} €{amount}
            </h6>
            {type === "income" ? <LuTrendingUp size={18} /> : <LuTrendingDown size={18} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
