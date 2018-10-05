function hungryProgrammer(mealsArr, commandsArr) {

    let totalEaten = 0;
    for (let currentCommand of commandsArr) {
        currentCommand = currentCommand.split(' ').filter(e => e !== '');

        switch (currentCommand[0]) {
            case 'Serve':
                if (mealsArr.length > 0) {
                    console.log(`${mealsArr.pop()} served!`);
                }
                break;
            case 'Eat':
                if (mealsArr.length > 0) {
                    console.log(`${mealsArr.shift()} eaten`);
                    totalEaten += 1;
                }
                break;
            case 'Add':
                if (currentCommand[1] !== undefined) {
                    mealsArr.unshift(currentCommand[1]);
                }
                break;
            case 'Shift':
                if (mealsArr.length > 1) {
                    let first = Number(currentCommand[1]);
                    let second = Number(currentCommand[2]);
                    if (first >= 0 && first < mealsArr.length && second >= 0 && second < mealsArr.length) {
                        let temp = mealsArr[first];
                        mealsArr[first] = mealsArr[second];
                        mealsArr[second] = temp;
                    }
                }
                break;
            case 'Consume':
                let start = Number(currentCommand[1]);
                let end = Number(currentCommand[2]) - start + 1;
                if (mealsArr.length > 0 && start >= 0 && start < mealsArr.length
                    && end >= start && end <= mealsArr.length) {
                    let temp = mealsArr.splice(start, end);
                    totalEaten += temp.length;
                    console.log('Burp!');
                }
                break;
            case 'End':
                if (mealsArr.length > 0) {
                    console.log('Meals left: ' + mealsArr.join(', '));
                } else {
                    console.log('The food is gone');
                }
                console.log('Meals eaten: ' + totalEaten);
                return;
        }
    }
}

hungryProgrammer(
    ['a'],
    [
        'Consume 0 1','End'
        ]

);