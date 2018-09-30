function diagonalAttack(arr) {
 let matrix = arr.map(row => row.split(' ').filter(e => e!== '').map(Number));
 let sum1 = 0;
 let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length -1 -i];
    }
    if (sum1 !== sum2){
        matrix.forEach(e => console.log(e.join(' ')));
        return;
    }else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j !== i && j !== matrix.length -1 -i){
                        matrix[i][j] = sum1;
                }
            }
        }
    }
    matrix.forEach(e => console.log(e.join(' ')));
}