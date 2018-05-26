function equalNeighbors(arr) {
    let foundedPairs = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let col = 1; col < arr[row].length; col++) {
            if (arr[row][col] === arr[row][col - 1]) {
                foundedPairs++;
            }
        }
    }

    for (let row = 1; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row -1][col] === arr[row][col]) {
                foundedPairs++;
            }
        }
    }
    console.log(foundedPairs);
}