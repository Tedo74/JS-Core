function xmlWrite(arr) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n';

    for (let i = 0; i < arr.length; i+=2) {
        xml += `  <question>\n     ${arr[i]}\n   </question>\n`;
        xml += `  <answer>\n     ${arr[i +1]}\n   </answer>\n`;
    }
    xml +='</quiz>';
    console.log(xml);
}
