function pyramidCalc(size, increment) {
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let steps = Math.ceil(size / 2);
    for (let i = 1; i < steps; i++) {
        let oneLevelStone = (size - 2) * (size - 2) * increment;
        stones += oneLevelStone;
        if (i % 5 === 0) {
            lapis += (size * size * increment) - oneLevelStone;
        }else{
            marble += (size * size * increment) - oneLevelStone;
        }
        size -= 2;
    }
    if (size % 2 === 0) {
        gold = 4 * increment;
    }else {
        gold = increment;
    }
    let pyramidHeight = steps * increment;

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

pyramidCalc(11, 1);