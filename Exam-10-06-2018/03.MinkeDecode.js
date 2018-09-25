function decodeMinke(arr) {
    let startIndex = +(arr[0]);
    let endIndex = +(arr[1]);//inclusive
    let replacePart = arr[2];
    let text = arr[3];

    let countryRegex = /[A-Z][a-z]*[A-Z]/;
    let country = countryRegex.exec(text)[0];
    let subStrToReplase = country.substring(startIndex, endIndex + 1);
    country = country.replace(subStrToReplase, replacePart);
    let lastChar = country.substr(-1).toLowerCase();
    country = country.substring(0, country.length - 1) + lastChar;

    let digitRegex = /\d{3}[.]?\d*/g;
    let match = text.match(digitRegex);
    let digitsToDecode = match.map(n => {
        return Math.ceil(Number(n))
    });
    let town = '';
    for (let i = 0; i < digitsToDecode.length; i++) {
        if (i === 0) {
            town += String.fromCharCode(digitsToDecode[i]).toUpperCase();
        }else {
            town += String.fromCharCode(digitsToDecode[i]);
        }
    }
    console.log(`${country} => ${town}`);
}

decodeMinke(
    ["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]
);