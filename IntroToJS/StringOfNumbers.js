function stringOfNumbers(num) {
    let n = Number(num);
    let result = '';

    for (let i = 1; i <= n; i++) {
        result = result + i;
    }
    console.log(result);
}

stringOfNumbers('11');