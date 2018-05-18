function imperialUnits(n) {
    let feet = Math.trunc(n / 12);
    let inches = n % 12;
    console.log(`${feet}'-${inches}"`);
}