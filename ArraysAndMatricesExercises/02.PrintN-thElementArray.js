function printArrNth(arr) {
    let n = +arr.pop();
    for (let i = 0; i < arr.length; i+=n) {
        console.log(arr[i]);
    }
}