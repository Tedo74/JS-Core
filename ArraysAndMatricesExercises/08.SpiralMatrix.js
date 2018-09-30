function spiralMatrix(inputRows, inputCols) {

    function createMatrix() {
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
    let matrix = createMatrix();

    let counter = 1;
    let startRow = 0;
    let lastColumn = inputCols -1;
    let lastRow = matrix.length -1;
    let startColumn = 0;

    function leftToRight(row) {
        for (let i = startColumn; i <= lastColumn; i++) {
            matrix[row][i] = counter++;
        }
        startRow++;
    }

    function topBottom(col){
        for (let i = startRow; i <= lastRow; i++) {
            matrix[i][col] = counter++;
        }
        lastColumn--;
    }

    function rightToLeft(row){
        for (let i = lastColumn; i >= startColumn; i--) {
            matrix[row][i] = counter++;
        }
        lastRow--;
    }

    function bottomTop(col){
        for (let i = lastRow; i >= startRow; i--) {
            matrix[i][col] = counter++;
        }
        startColumn++;
    }

    while (counter <= inputCols * inputRows) {
        leftToRight(startRow);
        topBottom(lastColumn);
        rightToLeft(lastRow);
        bottomTop(startColumn);
    }

    matrix.forEach(e => console.log(e.join(' ')));

}

spiralMatrix(2, 2);