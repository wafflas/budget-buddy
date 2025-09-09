import React from "react";
import { useState } from "react";
import Input from "../Layout/Inputs/Input";
import EmojiPickerPopup from "../Modals/EmojiPickerPopup";
const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });
  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      {/* income source */}
      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance,Salary,etc."
        type="text"
      />
      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="0.00"
        type="number"
      />
      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder="DD/MM/YYYY"
        type="date"
      />
      <div className="">
        <button
          type="button"
          className="btn-primary"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
