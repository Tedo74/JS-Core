function lastMonth(arr) {
    let [day, month, year] = arr;
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}