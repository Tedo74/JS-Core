function addRemove(commands) {
    let counter = 1;
    let arr = [];
    for (let command of commands) {
        if (command === 'add') {
            arr.push(counter++);
        } else if (command === 'remove') {
            arr.pop();
            counter++;
        }
    }
    if (arr.length < 1) {
        console.log('Empty');
    }else {
        console.log(arr.join('\n'));
    }
}