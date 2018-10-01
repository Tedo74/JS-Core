function airportStatistics(arr) {
    let planes = new Set();
    let airports = new Map();

    for (let currentFly of arr) {
        let [planeId, town, passengers, action] = currentFly.split(' ');
        passengers = +passengers;

        if (action === 'depart') {
            if (!planes.has(planeId)) {
                continue;
            }
            else {
                planes.delete(planeId);
            }
        } else if (action === 'land') {
            if (planes.has(planeId)) {
                continue;
            }
            else {
                planes.add(planeId);
            }
        } else {
            continue;
        }

        if (!airports.has(town)) {
            airports.set(town, {allPlanes: new Set(), arrivals: 0, departures: 0});
        }
        if (!airports.get(town).allPlanes.has(planeId)) {
            airports.get(town).allPlanes.add(planeId);
        }
        if (action === "land") {
            airports.get(town).arrivals += passengers;
        } else if (action === "depart") {
            airports.get(town).departures += passengers;
        }
    }
    console.log("Planes left:");
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    let sortedAirports = [...airports].sort((a, b) => {
        let result = b[1].arrivals - a[1].arrivals;
        if (result === 0) {
            return a[0].localeCompare(b[0]);
        }
        return result;
    });

    for (let sortedAirport of sortedAirports) {
        console.log(sortedAirport[0]);
        console.log(`Arrivals: ${sortedAirport[1].arrivals}`);
        console.log(`Departures: ${sortedAirport[1].departures}`);
        console.log("Planes:");
        [...sortedAirport[1].allPlanes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }
}
