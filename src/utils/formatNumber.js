// A simple function to convert number like 3500 to 3,500

const formatNumber = (num) => {
    return Number(num).toLocaleString();
};

export default formatNumber
