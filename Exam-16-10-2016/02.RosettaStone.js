function rosettaStone(arr) {
    let templateSize = +arr.shift();
    let template = createMatrix(0, templateSize, arr);
    let matrix = createMatrix(templateSize, arr.length, arr);


    for (let rowMatrix = 0; rowMatrix < matrix.length; rowMatrix += template.length) {
        for (let colMatrix = 0; colMatrix < matrix[rowMatrix].length; colMatrix += template[0].length) {
            for (let row = 0; row < template.length; row++) {
                for (let col = 0; col < template[row].length; col++) {

                    if ((row + rowMatrix) < matrix.length && matrix[row + rowMatrix][col + colMatrix] !== undefined) {

                        let result = matrix[row + rowMatrix][col + colMatrix] +template[row][col];
                        result = result % 27;
                        if (result === 0) {
                            result = " ";
                        }else {
                            result = String.fromCharCode((result + 64));
                        }
                        matrix[row + rowMatrix][col + colMatrix] = result;

                    }

                }

            }
        }
    }

    let s = matrix.map(row => row.join('')).join('').trim();
    console.log(s);

    function createMatrix(start, end, arr) {
        let matrix = [];
        for (let i = start; i < end; i++) {
            matrix.push(arr[i].split(' ').filter(e => e !== '').map(Number));
        }
        return matrix;
    }
}

rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']
);