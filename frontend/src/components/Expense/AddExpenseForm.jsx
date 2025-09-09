import React from 'react'
import { useState } from 'react'
import Input from '../Layout/Inputs/Input'
import EmojiPickerPopup from '../Modals/EmojiPickerPopup'

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  })

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value })

  return (
    <div>
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />
      <Input
        value={expense.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label="Category"
        placeholder="Food, Transportation, Entertainment, etc."
        type="text"
      />
    <Input
      value={expense.amount}
      onChange={({ target }) => handleChange("amount", target.value)}
      label="Amount"
      placeholder="0.00"
      type="number"
    />
    <Input
      value={expense.date}
      onChange={({ target }) => handleChange("date", target.value)}
      label="Date"
      placeholder="DD/MM/YYYY"
      type="date"
    />
    <button className="btn-primary" onClick={() => onAddExpense(expense)}>Add Expense</button>
  </div>
  );
}

export default AddExpenseForm