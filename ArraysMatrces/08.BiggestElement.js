function biggestElement(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    for (let arrElement in arr) {
        let biggestFromSubArray = Math.max(...arr[arrElement]);
        if (biggestFromSubArray > biggest) {
            biggest = biggestFromSubArray;
        }
    }
    console.log(biggest);
}