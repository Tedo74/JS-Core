function multiplicationTable(n) {
    let result = "<table border='1'>\n";
    let row = '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {//top row
        row += `<th>${i}</th>`;
    }
    row += '</tr>\n'; // end top row

    for (let i = 1; i <= n; i++) {//other rows
        row += `<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            row += `<td>${i * j}</td>`;
        }
        row += `</tr>\n`;
    }//end other rows

    console.log(result+= row+"</table>");
}