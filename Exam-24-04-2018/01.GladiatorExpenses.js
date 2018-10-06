function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let helmetCosts = Math.floor(lostFights / 2) * helmetPrice;
    let swordCosts = Math.floor(lostFights / 3) * swordPrice;
    let shieldCosts = Math.floor(lostFights / 6) * shieldPrice;
    let armorCosts = Math.floor(lostFights / 12) * armorPrice;
    let totalSum = helmetCosts + swordCosts + shieldCosts + armorCosts;
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);

}