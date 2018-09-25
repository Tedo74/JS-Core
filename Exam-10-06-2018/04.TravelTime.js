function travelTime(arr) {
    let destination = new Map();
    for (let line of arr) {
        let [country, town, price] = line.split(' > ').filter(e => e !== "");;
        price = +price;
        town = town.charAt(0).toUpperCase() + town.slice(1);

        if (!destination.has(country)) {
            destination.set(country, new Map());
        }
        if (!destination.get(country).has(town)) {
            destination.get(country).set(town, price);
        }else {
            let oldPrice = destination.get(country).get(town);
            if (price < oldPrice) {
                destination.get(country).set(town, price);
            }
        }
    }
    let sortedCountries = [...destination].sort((a,b)=>{
        return a[0].localeCompare(b[0]);
    });
    for (let currentCountry of sortedCountries) {
        let townsInCountry = destination.get(currentCountry[0]);
        let sortedTowns = [...townsInCountry].sort((a,b)=>{
            return a[1] - b[1];
        });
        let country = currentCountry[0]+' -> ';
        for (let town of sortedTowns) {
            country += `${town[0]} -> ${town[1]} `;
        }
        console.log(country);
    }
}

travelTime(
    ["Bulgaria > Sofia > 5000",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 1200"]
)