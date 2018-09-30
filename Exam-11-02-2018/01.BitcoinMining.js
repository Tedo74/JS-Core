function mining(arr) {
    //1 bitcoin = 11949.16 lv.
    //1 g of gold = 67.51 lv.
    let lv = 0;
    let totalBitcoins = 0;
    let daysCount = 0;
    let firstDay = 0;
    let firstTimeBuy = false;
    let totalGold = 0;
    for (let i = 0; i < arr.length; i++) {
        daysCount++;
        let gold = Number(arr[i]);
        if ((i + 1) % 3 === 0) {
            gold = gold * 0.7;
        }
        lv += gold * 67.51;
        if (lv >= 11949.16) {
            if (!firstTimeBuy) {
                firstDay = daysCount;
                firstTimeBuy = true;
            }
            totalBitcoins += Math.floor(lv / 11949.16);
            lv = lv % 11949.16;
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${lv.toFixed(2)} lv.`);
}

mining([
    3124.15, 504.212, 2511.124
]);