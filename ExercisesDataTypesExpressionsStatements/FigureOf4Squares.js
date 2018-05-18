function drawrSquare(n) {
    let verticals = n - 3;
    if (verticals % 2 == 1) {
        verticals -= 1;
    }

    function drawRow(n) {
        let row = '+'
        row += '-'.repeat(n - 2);
        row += '+';
        row += '-'.repeat(n - 2);
        row += '+';
        return row;
    }

    function drawVerticals(verticals) {
        let vRow = '';
        if (verticals > 1) {
            verticals = verticals / 2;
            for (let i = 0; i < verticals; i++) {
                vRow += '|';
                vRow += ' '.repeat(n - 2);
                vRow += '|';
                vRow += ' '.repeat(n - 2);
                vRow += '|';
                if (i < verticals - 1) {
                    vRow += '\n';
                }
            }

        }
        return vRow;
    }

    if (n !== 2) {
        console.log(drawRow(n));
        if (drawVerticals(verticals)) {
            console.log(drawVerticals(verticals));
        }
        console.log(drawRow(n));
        if (drawVerticals(verticals)) {
            console.log(drawVerticals(verticals));
        }
        console.log(drawRow(n));
    } else {
        console.log(drawRow(n));
    }

}