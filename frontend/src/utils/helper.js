import moment from 'moment'

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};




export const addThousandSeparator = (num) => {
    if(num == null || isNaN(num)) return "";

    const [integerPart, fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;
};


export const prepareExpenseBarChartData = (data = []) => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    const chartData = sortedData.map((item) => ({
        category: moment(item?.date).format("Do MMM"),
        amount: Number(item?.amount) || 0,
    }));
    return chartData;
};
export const prepareIncomeBarChartData = (data = []) => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

    const dateCounts = {};
    const chartData = sortedData.map((item) => {
        const dateStr = moment(item?.date).format("Do MMM");
        dateCounts[dateStr] = (dateCounts[dateStr] || 0) + 1;
        const category = `${dateStr} (${dateCounts[dateStr]})`;
        return {
            category,
            displayDate: dateStr,
            amount: Number(item?.amount) || 0,
            source: item?.source,
        };
    });
    return chartData;
};
export const prepareExpenseLineChartData = (data = []) => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

    const chartData = sortedData.map((item) => ({
        month: moment(item?.date).format("Do MMM"),
        amount: item?.amount,
        category: item?.category,
    }));

    return chartData;
};