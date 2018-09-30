function orbit([rows, cols, startRow, startCol]) {

    function createMatrix(inputRows, inputCols) {
        let matrix = [];
        for (let row = 0; row < inputRows; row++) {
            let arr = [];
            for (let col = 0; col < inputCols; col++) {
                arr[col] = 0;
            }
            matrix.push(arr);
        }
        return matrix;
    }
    let matrix = createMatrix(rows, cols);

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

orbit([4, 4, 0, 0]);