function radicalMarketing(arr) {
    let peoples = new Map();
    for (let input of arr) {
        let command = input.split('-').filter(e => e !== '');
        if (command.length === 1) {
            let name = command[0];
            if (!peoples.has(name)) {
                peoples.set(name, new Set());
            }
        } else if (command.length === 2) {
            let firstPerson = command[0];
            let secondPerson = command[1];
            if (!peoples.has(firstPerson) || !peoples.has(secondPerson)) {
                continue;
            } else {
                if (firstPerson !== secondPerson) {
                    peoples.get(secondPerson).add(firstPerson);
                }
            }
        }
    }
    let sortedPeoples = [...peoples].sort((a, b) => {
        let result = b[1].size - a[1].size;
        if (result === 0) {
            let searchedA = a[0];
            let searchedB = b[0];
            let countA = 0;
            let countB = 0;
            peoples.forEach(e => {
                if (e.has(searchedA)) {
                    countA++
                }
                if (e.has(searchedB)) {
                    countB++
                }
            });
            return countB - countA;
        }
        return result;
    });

    console.log(sortedPeoples[0][0]);
    [...sortedPeoples[0][1]].forEach((e, i) => console.log(`${i + 1}. ${e}`));
}