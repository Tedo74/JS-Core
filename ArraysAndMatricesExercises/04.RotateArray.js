function rotateArr(arr) {
    let rotations = +arr.pop();
    rotations = rotations % arr.length;

    for (let i = 0; i < rotations; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotateArr([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
])