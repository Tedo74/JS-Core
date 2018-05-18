function compound(money) {
    let[sum, interest, freq, timePeriod] = money;
    interest = interest / 100;
    freq = 12 / freq;
    let result = sum * Math.pow(1 + interest / freq, freq * timePeriod);
    console.log(result.toFixed(2));
}