function diagonalSums(arr) {
    let sum = 0;
    let sumSecond = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
        sumSecond += arr[i][arr.length - 1 - i];
    }
    console.log(`${sum} ${sumSecond}`);
}