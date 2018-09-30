function airPollution(arrMatrix, commandsArr) {
    let matrix = [];
    for (let row of arrMatrix) {
        row = row.split(' ').filter(x => x !== '').map(Number);
        matrix.push(row)
    }
    let commands = {
        breeze: function (n) {
            for (let i = 0; i < matrix[n].length; i++) {
                matrix[n][i] -= 15;

                if (matrix[n][i] < 0) {
                    matrix[n][i] = 0;
                }
            }
        },
        gale: function (n) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][n] -= 20;

                if (matrix[i][n] < 0) {
                    matrix[i][n] = 0;
                }
            }
        },
        smog: function (n) {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] += n;
                }
            }
        }
    }

    for (let line of commandsArr) {
        let currentCommand = line.split(' ').filter(e => e !== '');
        let command = currentCommand[0];
        let number = Number(currentCommand[1]);
        commands[command](number);
    }
    let pollutedBlocks = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 49) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log(`No polluted areas`);
    }
}

airPollution(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
);