function radioCristals(arr) {
    let cut = cristal => cristal / 4;
    let lap = cristal => cristal * 0.8;
    let grind = cristal => cristal -= 20;
    let etch = cristal => cristal -= 2;
    let xRay = cristal => cristal += 1;
    let transportAndWash = cristal => {
        console.log('Transporting and washing');
        return Math.floor(cristal);
    };

    let targetSize = arr[0];
    let chunks = arr.slice(1);
    var operations = 0;

    function isFinished(cristal) {
        if (cristal === targetSize - 1) {
            cristal = xRay(cristal);
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${cristal} microns`);
            return true;
        } else if (cristal === targetSize) {
            console.log(`Finished crystal ${cristal} microns`);
            return true;
        } else {
            return false;
        }
    }

    function needPolish(chunk, targetSize) {
        if (chunk === targetSize || chunk === targetSize - 1 || chunk < targetSize - 1) {
            return false;
        }
        return true;
    }

    function polishCurrent(op, chunk) {
        return op(chunk);
    }

    function polish(op, chunk, targetSize, opName) {
        let currentSize = chunk;
        operations = 0;
        while (needPolish(currentSize, targetSize)) {
            currentSize = polishCurrent(op, currentSize);
            if (currentSize < targetSize - 1) {
                break;
            } else {
                chunk = currentSize;
                operations++;
            }
        }
        if (operations > 0) {
            console.log(`${opName} x` + operations);
            chunk = transportAndWash(chunk);
            operations = 0;
        }
        return chunk;
    }

    for (let chunk of chunks) {
        console.log(`Processing chunk ${chunk} microns`);
        while (!isFinished(chunk)) {
            chunk = polish(cut, chunk, targetSize, 'Cut');
            chunk = polish(lap, chunk, targetSize, 'Lap');
            chunk = polish(grind, chunk, targetSize, 'Grind');
            chunk = polish(etch, chunk, targetSize, 'Etch');
        }
    }

}