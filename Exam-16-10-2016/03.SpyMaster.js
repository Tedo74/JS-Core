function spyMaster(arr) {

    let specialKey = arr[0];
    let pattern = `(^| )(${specialKey}\\s+)([A-Z!%$#]{8,})([., ]|$)`;
    let regex = new RegExp(pattern, 'gmi');
    let resultText = [];

    for (let i = 1; i < arr.length; i++) {
        let text = arr[i];
        let match;
        while (match = regex.exec(text)) {
            if (match[3] === match[3].toUpperCase()) {
                let word = match[3];
                word = word.replace(/!/g, '1');
                word = word.replace(/%/g, '2');
                word = word.replace(/#/g, '3');
                word = word.replace(/\$/g, '4');

                text = text.replace(match[0], match[1] + match[2] + word.toLowerCase() + match[4]);
            }
        }
        resultText.push(text)
    }

    console.log(resultText.join('\n'));
}