const xlsx = require("xlsx");
const Expense = require("../models/Expense");

//add expense
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;
    //validation check for missing fields
    if (!category || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //create expense
    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date),
    });
    await newExpense.save();
    res.status(200).json( newExpense );
  } catch (error) {
    return res
      .status(500)
      .json({ message: "SERVER ERROR", error: error.message });
  }
};

//get all expense
exports.getAllExpense = async (req, res) => {

    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.json(expense);
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};

//delete expense
exports.deleteExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};

//download expense excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        

        //preparing data for excel
        const data = expense.map((item) => ({
            Category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        //creating workbook and worksheet
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, "expense-details.xlsx");
        res.download("expense-details.xlsx");
        
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};
