function catalogueStore(arr) {

    let catalogue = new Map();

    arr.forEach(line => {
        let item = line.split(' : ').filter(e => e !== '');
        let product = item[0];
        let price = item[1];
        
        if (!catalogue.has(product[0].toUpperCase())) {
            catalogue.set(product[0].toUpperCase(), new Map());
        }
        catalogue.get(product[0].toUpperCase()).set(product, price);
    });

    let sortedCatalogue = [...catalogue.keys()].sort();

    for (let productsGroup of sortedCatalogue) {
        let currentGroup = catalogue.get(productsGroup);
        let sortedGroup = [...currentGroup].sort((a,b)=>{
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        });
        console.log(productsGroup);
        sortedGroup.forEach(product =>{
            console.log(`  ${product[0]}: ${product[1]}`);
        })
    }
}

catalogueStore([
    "T-Shirt : 10",
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
]);