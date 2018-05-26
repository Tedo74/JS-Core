function lastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let currentElement = result.slice(start, i).reduce((a, b) => a + b);
        result.push(currentElement);
    }
    console.log(result.join(" "));
}