function arithmephile(arr) {
    arr = arr.map(Number);
    let biggest = Number.MIN_SAFE_INTEGER;
    arr.forEach((e, i) => {
        if (e >= 0 && e < 10) {
            let result = Number.MIN_SAFE_INTEGER;
            let temp = arr.slice(i + 1, i + 1 + e);
            if (temp.length > 0) {
                result = temp.reduce((a, b) => a * b);
            }
            if (result > biggest) {
                biggest = result;
            }
        }
    });
    console.log(biggest);
}