function championShip(arr) {
    let teams = new Map()
    let teamsPoints = {};
    for (let line of arr) {
        let [currentTeam, pilot, points] = line.split(' -> ');

        if (!teamsPoints.hasOwnProperty(currentTeam)) {
            teamsPoints[currentTeam] = 0;
        }
        teamsPoints[currentTeam] += +points;

        if (!teams.has(currentTeam)) {
            teams.set(currentTeam, new Map());
        }
        if (!teams.get(currentTeam).has(pilot)) {
            teams.get(currentTeam).set(pilot, 0);
        }
        let oldPoints = teams.get(currentTeam).get(pilot);
        teams.get(currentTeam).set(pilot, oldPoints + Number(points));
    }

    let winners = Object.keys(teamsPoints)
        .sort((a,b) => {
            return teamsPoints[b] - teamsPoints[a];
        })
        .slice(0,3);

    for (let currentTeam of winners) {
        console.log(`${currentTeam}: ${teamsPoints[currentTeam]}`);
        let teamPilots = [...teams.get(currentTeam)].sort((a,b) => {return b[1] - a[1];});
        for (let pilot of teamPilots) {
            console.log(`-- ${pilot[0]} -> ${pilot[1]}`);
        }
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