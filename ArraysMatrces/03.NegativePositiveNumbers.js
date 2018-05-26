function negativePositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
           result.unshift(arr[i]);
        }else {
            result.push(arr[i]);
        }
    }
    result.forEach(e => console.log(e));
}