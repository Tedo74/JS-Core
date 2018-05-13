function coloredNums(n) {
    let result = '<ul>\n';
    let currentColor = '';
    for (let i = 1; i <= n; i++) {
        i % 2 == 0 ? currentColor = 'blue' : currentColor= 'green';
        result +=`  <li><span style='color':${currentColor}>${i}</span></li>\n`;
    }
    result += '</ul>';
    console.log(result);
}