function catalogue(arr) {
    let allProducts = new Map();

    for (let input of arr) {
        let line = input.split(' : ');
        let product = line[0];
        let price = line[1];
        let category = product.charAt(0);

        if (!allProducts.has(category)) {
            allProducts.set(category, []);
        }
        allProducts.get(category).push({'product': product, 'price': price});

    }
    let sorted1 = [...allProducts].sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let [category, products] of sorted1) {
        console.log(category);
        products.sort((a, b) => {
            return a.product.toLowerCase().localeCompare(b.product.toLowerCase());
        });
        for (let product of products) {
            console.log(`  ${product.product}: ${product.price}`);
        }
    }

}

catalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);