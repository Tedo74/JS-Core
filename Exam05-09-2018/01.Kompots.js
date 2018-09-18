function kompots(arr) {
    let toRakia = 0;

    let fruits = {
        peach: 0,
        plum: 0,
        cherry: 0
    };

    for (let fruitKilos of arr) {
        let currentFruit = fruitKilos.split(' ').filter(f => f !== '');
        if (!fruits.hasOwnProperty(currentFruit[0])) {
            toRakia += Number(currentFruit[1]);
        } else {
            fruits[currentFruit[0]] += Number(currentFruit[1]);
        }
    }

    let rakia = (toRakia / 5).toFixed(2);
    let cherryKompots = Math.floor(fruits.cherry / 0.225);
    let peachKompots = Math.floor(fruits.peach / 0.35);
    let plumKompots = Math.floor(fruits.plum / 0.2);
    console.log(`Cherry kompots: ${cherryKompots}`);
    console.log(`Peach kompots: ${peachKompots}`);
    console.log(`Plum kompots: ${plumKompots}`);
    console.log(`Rakiya liters: ${rakia}`);
}

kompots([ 'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ]
);