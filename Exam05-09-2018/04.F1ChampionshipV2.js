function championShip(arr) {
    let teams = new Map()
    //let teamsPoints = {};
    for (let line of arr) {
        let [currentTeam, pilot, points] = line.split(' -> ');

        if (!teams.has(currentTeam)) {
            teams.set(currentTeam, new Map());
        }
        if (!teams.get(currentTeam).has(pilot)) {
            teams.get(currentTeam).set(pilot, 0);
        }
        let oldPoints = teams.get(currentTeam).get(pilot);
        teams.get(currentTeam).set(pilot, oldPoints + Number(points));
    }
    let sorted =[...teams].sort((a,b)=>{
        let val1 = [...a[1]].reduce((a,b)=>{
            return a[1]+b[1];
        });

        let val2 = [...b[1]].reduce((a,b)=>{
            return a[1]+b[1];
        });

        return val2 - val1;
    });

    for (let [k,value] of sorted.slice(0, 3)) {
        console.log(k +': '+ [...value].reduce((a,b) => {
            return a[1] + b[1];
        }));

        [...value].sort((a,b)=>{
            return b[1] - a[1];
        }).forEach(p => console.log(`-- ${p[0]} -> ${p[1]}`));
    }
}

championShip([
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"
]);