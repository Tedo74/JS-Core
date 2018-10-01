function spicesExtract([n]) {
    let totalSpices = 0;
    let yieldPerDay = +n;
    let workDays = 0;
    while (yieldPerDay >= 100) {
        workDays++;
        totalSpices += yieldPerDay;
        totalSpices -= 26;
        yieldPerDay -=10;
    }
    if (totalSpices >= 26) {
        totalSpices -= 26;
    }
    console.log(workDays);
    console.log(totalSpices);
}