function messenger(str) {
    let regexAllMessage = /^<message\s*([a-z]+="[A-Za-z0-9 .]+"\s*)+>([\s\S]+)<\/message>$/m;

    if (!regexAllMessage.test(str)) {
        console.log('Invalid message format');
        return;
    }

    let from;
    let to;
    let regexFrom = /\bfrom="([A-Za-z0-9 .]+)"/;
    let regexTo = /\bto="([A-Za-z0-9 .]+)"/;
    if (regexFrom.test(str) && regexTo.test(str)) {
        from = regexFrom.exec(str)[1];
        to = regexTo.exec(str)[1];
    } else {
        console.log('Missing attributes');
        return;
    }
    let message = regexAllMessage.exec(str)[2];
    let paragraphs = message.split('\n');

    let html = '<article>' + '\n';
    html += `  <div>From: <span class="sender">${from}</span></div>` + '\n';
    html += `  <div>To: <span class="recipient">${to}</span></div>` + '\n';
    html += `  <div>` + '\n';
    for (let paragraph of paragraphs) {
        html += `    <p>${paragraph}</p>` + '\n';
    }
    html += `  </div>` + '\n';
    html += `</article>` + '\n';

    console.log(html);
}