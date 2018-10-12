function table(arr) {
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    let html = "<table>\n";
    arr.forEach(line => {
        html += "    <tr>\n";
        Object.values(JSON.parse(line))
            .forEach(e => {
                if (typeof e === 'string') {
                    e = escapeHtml(e);
                }
                html += "		<td>" + e + "</td>\n";
            });
        html += "    <tr>\n";
    });
    html += "</table>";
    console.log(html);
}

table([
    '{"name":"Pesho","position":"Pron<liva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])