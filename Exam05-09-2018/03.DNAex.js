function dnaEx(inputStr) {
    let validOrganisms = {};
    let regexDNA = /^([!@#$?a-z]+)=(\d+)--(\d+)<<([a-z]+)$/;
    //let line = inputStr.split('\n').filter(l => l != '');
    for (let l of inputStr) {
        if (l === 'Stop!') {
            break;
        }
        if (regexDNA.test(l)) {
            let result = regexDNA.exec(l);
            let code = result[1].replace(/[!@#$?]+/g, '');
            let codeLength = Number(result[2]);
            if (codeLength === code.length) {
                let countOfGenes = Number(result[3]);
                let organism = result[4];
                if (!validOrganisms.hasOwnProperty(organism)) {
                    validOrganisms[organism] = 0;
                }
                validOrganisms[organism] += countOfGenes;
            }
        }
    }
    let keys = Object.keys(validOrganisms);
    keys.sort((a, b) => {
        return validOrganisms[b] - validOrganisms[a];
    });

    for (let key of keys) {
        console.log(`${key} has genome size of ${validOrganisms[key]}`);
    }
}

dnaEx(['!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!']);