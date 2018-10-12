function travel(arr) {
    let visitors = {};

    let regex = /^(\S+) visited the (\S+) in (\S+) - (\d+[.]?\d+)$/;

    for (let line of arr) {
        let match = regex.exec(line);
        if (match) {
            let name = match[1];
            let landmark = match[2];
            let country = match[3];
            let price = +match[4];

            if (visitors.hasOwnProperty(name) && visitors[name].countries.has(country)
                && visitors[name].countries.get(country).includes(landmark)) {
                continue;
            }

            if (visitors.hasOwnProperty(name) && visitors[name].money >= price) {

                if (!visitors[name].countries.has(country)) {
                    visitors[name].countries.set(country, []);
                }
                if (!visitors[name].countries.get(country).includes(landmark)) {
                    visitors[name].countries.get(country).push(landmark);
                    visitors[name].money -= price;
                }

            } else {
                console.log(`Not enough money to visit ${landmark}`);
            }


        } else if (line.indexOf('gets') !== -1) {
            let tokens = line.split('gets').filter(e => e !== '');
            let name = tokens[0].trim();
            let money = +(tokens[1].trim());

            if (!visitors.hasOwnProperty(name)) {
                visitors[name] = {countries: new Map(), money: 0};
            }
            visitors[name].money += money;
        }
    }
    let sortedVisitors = Object.keys(visitors).sort((a, b) => {
        return visitors[b].countries.size - visitors[a].countries.size;
    });

    for (let sortedVisitor of sortedVisitors) {
        let currentVisitor = visitors[sortedVisitor];
        console.log(`${sortedVisitor} visited ${currentVisitor.countries.size} countries and has ${currentVisitor.money} money left`);
        let sortedCountries = [...currentVisitor.countries.keys()]
            .sort((a, b) => {
                return currentVisitor.countries.get(b).length - currentVisitor.countries.get(a).length;
            });

        sortedCountries.forEach(c => {
            console.log(`- ${c} -> ${currentVisitor.countries.get(c).length} landmarks`);
            let landmarks = currentVisitor.countries.get(c).sort((a, b) => {
                return a.localeCompare(b);
            });
            landmarks.forEach(l => {
                console.log('-- ' + l);
            })
        })
    }
}