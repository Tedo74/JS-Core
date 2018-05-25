function dnaHelix(n) {

    let counter = 0;
        function getCurrentLetter(counter) {
            const sequence = "ATCGTTAGGG";
            let currentLetter = counter % sequence.length;
            return sequence[currentLetter];
        }

    for (let i = 0; i < n; i++) {
        let currentRow = i % 4;
        switch (currentRow){
            case 0:
                console.log(`**${getCurrentLetter(counter++)}${getCurrentLetter(counter++)}**`);
                break;
            case 2:
                console.log(`${getCurrentLetter(counter++)}----${getCurrentLetter(counter++)}`);
                break;
            case 1:
            case 3:
                console.log(`*${getCurrentLetter(counter++)}--${getCurrentLetter(counter++)}*`);
                break;
        }
    }
}