function unique(arr) {
    let arrays = new Map();
    arr.forEach(line => {
        let currArr = JSON.parse(line);
        currArr.sort((a, b) => {
            return b - a;
        });
        arrays.set(JSON.stringify(currArr), currArr);
    });
    let sortedArrays = [...arrays].sort((a,b)=>{
        return a[1].length - b[1].length;
    });

    sortedArrays.forEach(a=>{
        console.log(`[${a[1].join(', ')}]`);
    });
}

unique(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
)