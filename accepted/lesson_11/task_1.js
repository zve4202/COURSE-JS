const getDateFormat = (date, separator = '.') => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateArr = [day, month, year].map((item) => {
        //return item < 10 ? `0${item}` : String(item);
        // или
        return String(item).length === 1 ? `0${item}` : String(item);
    });
    return dateArr.join(separator);
};
console.log(getDateFormat(new Date()));
console.log(getDateFormat(new Date(), "-"));