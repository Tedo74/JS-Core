function processOddPositions(arr) {
    console.log(arr.filter((el, index) => index % 2 === 1)
        .map(el => el * 2)
        .reverse()
        .join(" "));
}