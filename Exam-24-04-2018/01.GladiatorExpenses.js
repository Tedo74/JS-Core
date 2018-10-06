function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let shieldBrokenCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isHelmetBroken = false;
        let isSwordBroken = false;

        if (i % 2 === 0){
            total += helmetPrice;
            isHelmetBroken = true;
        }
        if (i % 3 === 0){
            total += swordPrice;
            isSwordBroken = true;
        }
        if (isHelmetBroken && isSwordBroken){// shield is broken
            total += shieldPrice;
            shieldBrokenCount++;
        }
        if (isHelmetBroken && isSwordBroken && shieldBrokenCount > 0
            && shieldBrokenCount % 2 === 0){
            total += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(
    7,
    2,
    3,
    4,
    5

);