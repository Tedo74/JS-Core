function buildWall(input) {
    let result =[];
    let totalPrice = 0;
    let pricePerDay = 195 * 1900;
    let arr = input.map(Number);
    let minNum = Math.min(...arr);
    for (let i = minNum; i < 30; i++) {
        let resultPerDay = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < 30) {
                resultPerDay += 195;
                totalPrice += pricePerDay;
                arr[j]++;
            }

        }
        result.push(resultPerDay);
    }
    console.log(result.join(', '));
    console.log(`${totalPrice} pesos`);
}

buildWall(['17','22', '17', '19', '17']);