function ancient(arr) {
    let all = arr.join(" ");
    let regexTakeLength = /32656 19759 32763 0 (\d+) 0/;
    let match;
    let words = [];
    while ((match = regexTakeLength.exec(all)) !== null) {
        let innerRegex = new RegExp(`32656 19759 32763 0 ` + match[1] + ` 0 ((\\d+\\s?){` + match[1] + `})`);
        let innerMatch = innerRegex.exec(all);
        let letters = innerMatch[1].split(' ');
        let word = '';
        for (let letter of letters) {
            word += String.fromCharCode(Number(letter));
        }
        words.push(word);
        all = all.replace(innerMatch[0], '');
    }
    console.log(words.join('\n'));
}

ancient([
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0',
]);