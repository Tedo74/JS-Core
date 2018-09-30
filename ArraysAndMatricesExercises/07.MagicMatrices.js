function areAllRowsColumnsEqual(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i].reduce((a, b) => a + b) !== sum) {
            return false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let columnSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            columnSum += matrix[row][col]
        }
        if (columnSum !== sum) {
            return false;
        }
    }
    return true;
}