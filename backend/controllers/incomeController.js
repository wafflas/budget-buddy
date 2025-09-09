const xlsx = require("xlsx");
const Income = require("../models/Income");

//add income
exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;
    //validation check for missing fields
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //create income
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });
    await newIncome.save();
    res.status(200).json( newIncome );
  } catch (error) {
    return res
      .status(500)
      .json({ message: "SERVER ERROR", error: error.message });
  }
};

//get all income
exports.getAllIncome = async (req, res) => {

    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        res.json(income);
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};

//delete income

exports.deleteIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: "Income deleted successfully" });
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};

//download income excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        

        //preparing data for excel
        const data = income.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));

        //creating workbook and worksheet
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, "income-details.xlsx");
        res.download("income-details.xlsx");
        
    } catch (error) {
        return res
        .status(500)
        .json({ message: "SERVER ERROR", error: error.message });
    }
};
