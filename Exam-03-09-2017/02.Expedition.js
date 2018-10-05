function expedition(primaryMatrix, secondMatrix, overlay, startCoordinates) {

    let mapMatrix = encryptMap(primaryMatrix, secondMatrix, overlay);

    let topExitPointsArr = endPointsTop(mapMatrix, startCoordinates);
    let leftExitPointsArr = endPointsLeft(mapMatrix, startCoordinates);
    let bottomExitPointsArr = endPointsBottom(mapMatrix, startCoordinates);
    let rightExitPointsArr = endPointsRight(mapMatrix, startCoordinates);

    function checkPoint(row, col, arrPoints) {
        let isFound = false;
        arrPoints.forEach(e => {
            let eRow = e[0];
            let eCol = e[1];
            if (eRow === row && eCol === col) {
                isFound = true;
            }
        });
        return isFound;
    }

    move(startCoordinates);

    function move(startPoint) {
        let row = startPoint[0];
        let col = startPoint[1];
        mapMatrix[row][col] = 2;

        let steps = 1;
        let isEnd = false;

        while (!isEnd) {
            if (moveLeft() || moveRight() || moveTop() || moveDown()) {

            } else {

                console.log(steps);

                if (checkPoint(row, col, topExitPointsArr)) {
                    console.log('Top');
                } else if (checkPoint(row, col, bottomExitPointsArr)) {
                    console.log('Bottom');
                } else if (checkPoint(row, col, leftExitPointsArr)) {
                    console.log('Left');
                } else if (checkPoint(row, col, rightExitPointsArr)) {
                    console.log('Right');
                } else {
                    let quadrant = 0;
                    let r = row + 1;
                    let c = col + 1;
                    if (r <= mapMatrix.length / 2 && c > mapMatrix[0].length / 2) {
                        quadrant = 1;
                    }
                    if (r <= mapMatrix.length / 2 && c <= mapMatrix[0].length / 2) {
                        quadrant = 2;
                    }
                    if (r > mapMatrix.length / 2 && c <= mapMatrix[0].length / 2) {
                        quadrant = 3;
                    }
                    if (r > mapMatrix.length / 2 && c > mapMatrix[0].length / 2) {
                        quadrant = 4;
                    }
                    console.log(`Dead end ${quadrant}`);
                }
                return;
            }
        }


        function moveLeft() {
            if (mapMatrix[row][col - 1] === 0) {
                mapMatrix[row][col - 1] = 2;
                col--;
                steps++;
                return true;
            }
            return false;
        }

        function moveRight() {
            if (mapMatrix[row][col + 1] === 0) {
                mapMatrix[row][col + 1] = 2;
                col++;
                steps++;
                return true;
            }
            return false;
        }

        function moveDown() {
            if (row + 1 < mapMatrix.length && mapMatrix[row + 1][col] === 0) {
                mapMatrix[row + 1][col] = 2;
                row++;
                steps++;
                return true;
            }
            return false;
        }

        function moveTop() {
            if (row - 1 >= 0 && mapMatrix[row - 1][col] === 0) {
                mapMatrix[row - 1][col] = 2;
                row--;
                steps++;
                return true;
            }
            return false;
        }

    }

    function endPointsTop(matrix, startPoint) {
        matrix [startPoint[0]][startPoint[1]] = 2;
        let topExitPoints = [];
        matrix[0].forEach((element, index) => {
            if (index !== 0 && index !== matrix[0].length - 1 && element === 0) {
                topExitPoints.push([0, index]);
            }
        });
        return topExitPoints;
    }

    function endPointsLeft(matrix, startPoint) {
        matrix [startPoint[0]][startPoint[1]] = 2;
        let leftSidePoints = [];
        matrix.forEach((arr, index) => {
            if (index !== 0 && index !== matrix.length - 1 && arr[0] === 0) {
                leftSidePoints.push([index, 0]);
            }
        });
        return leftSidePoints;
    }

    function endPointsBottom(matrix, startPoint) {
        matrix [startPoint[0]][startPoint[1]] = 2;
        let bottomExitPoints = [];
        matrix[matrix.length - 1].forEach((element, index) => {
            if (index !== 0 && index !== matrix[matrix.length - 1].length - 1 && element === 0) {
                bottomExitPoints.push([matrix.length - 1, index]);
            }
        });
        return bottomExitPoints;
    }

    function endPointsRight(matrix, startPoint) {
        matrix [startPoint[0]][startPoint[1]] = 2;
        let rightSidePoints = [];
        matrix.forEach((arr, index) => {
            if (index !== 0 && index !== matrix.length - 1 && arr[arr.length - 1] === 0) {
                rightSidePoints.push([index, arr.length - 1]);
            }
        });
        return rightSidePoints;
    }

    function encryptMap(matrix, template, coordinates) {

        for (let xy of coordinates) {
            let rowX = xy[0];
            let colY = xy[1];

            for (let row = 0; row < Math.min(matrix.length, template.length); row++) {
                for (let col = 0; col < Math.min(matrix[0].length, template[0].length); col++) {

                    if (row + rowX < matrix.length && matrix[row + rowX][col + colY] !== undefined) {

                        let value = matrix[row + rowX][col + colY];
                        let templateValue = template[row][col];

                        if (templateValue === 1) {
                            if (value === 0) {
                                value = 1;
                            } else {
                                value = 0;
                            }
                            matrix[row + rowX][col + colY] = value;
                        }
                    }
                }
            }
        }
        return matrix;
    }
}

expedition(
    [
        [1, 1, 0, 1, 0, 1],
        [0, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 1, 1],
        [1, 0, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1]
    ],
    [
        [1, 0, 1],
        [1, 0, 0],
        [0, 1, 1],
        [1, 0, 0]
    ],
    [
        [4, 2],
        [0, 2],
        [3, 5]
    ],
    [1, 0]
);