function calendar(arr) {
    [day, month, year] = arr.map(Number);
    let html = "<table>\n";
    html += " <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    let startDate = new Date(year, month - 1, 1);//first day in current month
    let lastDayPrevMonth = new Date(year, month - 1, 0).getDay();
    if (startDate.getDay() !== 0) {
        startDate = new Date(year, month - 1, 0 - lastDayPrevMonth)
    }
    let previousMonth = new Date(year, month - 2, 1).getMonth();
    let nextMonth = new Date(year, month, 1).getMonth();

    while (startDate.getMonth() !== nextMonth || startDate.getDay() !== 0) {
        if (startDate.getDay() === 0){
            html +=' <tr>';
        }
        if (startDate.getMonth() === previousMonth) {
            html +=`<td class="prev-month">${startDate.getDate()}</td>`;
        }else if (startDate.getMonth() === nextMonth){
            html +=`<td class="next-month">${startDate.getDate()}</td>`;
        }else if (startDate.getDate() === day){
            html +=`<td class="today">${startDate.getDate()}</td>`;
        }
        else {
            html +=`<td>${startDate.getDate()}</td>`;
        }

        if (startDate.getDay() === 6){
            html +='</tr>\n';
        }
        startDate.setDate(startDate.getDate()+1);
    }
    html += "</table>\n";
    return html;
}