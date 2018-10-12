function juice(arr) {
    let allBottles = new Map();
    let juices = new Map();

    for (let juiceData of arr) {
        let data = juiceData.split(' => ');
        let juice = data[0];
        let quantity = +data[1];

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }
        let oldQuantity = juices.get(juice);
        quantity += oldQuantity;

        if (quantity >= 1000) {
            let bottles = Math.floor(quantity / 1000);
            quantity = quantity % 1000;
            if (!allBottles.has(juice)) {
                allBottles.set(juice, bottles);
            } else {
                allBottles.set(juice, allBottles.get(juice) + bottles);
            }
        }
        juices.set(juice, quantity);

    }
    for (let bottlesJuice of allBottles) {
        console.log(`${bottlesJuice[0]} => ${bottlesJuice[1]}`);
    }
}

juice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);