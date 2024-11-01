export const months = ({ count }) => {
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return allMonths.slice(0, count); // Returns the first 'count' months
};
