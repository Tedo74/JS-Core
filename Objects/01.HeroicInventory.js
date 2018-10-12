function inventory(arr) {
    let heroes = arr.map(line => {
        let heroData = line.split(' / ');
        if (heroData.length > 2){
            let heroItems = heroData[2].split(', ').filter(e => e !=='');
            return {name:heroData[0], level:+heroData[1],items:heroItems};
        }
        return {name:heroData[0], level:+heroData[1],items:[]};
    });

    console.log(JSON.stringify(heroes));
}

inventory([
    'Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'

]);