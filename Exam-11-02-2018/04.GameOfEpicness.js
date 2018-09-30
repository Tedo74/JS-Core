function game(participants, battles) {
    function createKingdoms(participants) {
        let kingdoms = {};
        for (let obj of participants) {
            if (!kingdoms.hasOwnProperty(obj.kingdom)) {
                kingdoms[obj.kingdom] = {};
            }
            if (!kingdoms[obj.kingdom].hasOwnProperty(obj.general)) {
                kingdoms[obj.kingdom][obj.general] = {army: 0, wins: 0, loses: 0};
            }
            kingdoms[obj.kingdom][obj.general].army += obj.army;
        }
        return kingdoms;
    }

    let kingdoms = createKingdoms(participants);

    for (let battle of battles) {
        fight(battle);
    }

    let winnerKingdom = Object.keys(kingdoms).sort((a, b) => {
        let winsA = 0;
        let losesA = 0;
        let generalA = kingdoms[a];
        for (let g in generalA) {
            winsA += kingdoms[a][g].wins;
            losesA += kingdoms[a][g].loses;
        }

        let winsB = 0;
        let losesB = 0;
        let generalB = kingdoms[b];
        for (let g in generalB) {
            winsB += kingdoms[b][g].wins;
            losesB += kingdoms[b][g].loses;
        }
        if (winsA === winsB) {
            if (losesB === losesA) {
                return a.localeCompare(b);
            } else {
                return losesA - losesB;
            }
        }
        return winsB - winsA;
    });
    console.log(`Winner: ${winnerKingdom[0]}`);
    let winnersGenerals = kingdoms[winnerKingdom[0]];
    let sortedGenerals = Object.keys(winnersGenerals).sort((a,b)=>{
        return winnersGenerals[b].army - winnersGenerals[a].army;
    });
    for (let sortedWinnerGeneral of sortedGenerals) {
        console.log(`/\\general: ${sortedWinnerGeneral}`);
        console.log(`---army: ${winnersGenerals[sortedWinnerGeneral].army}`);
        console.log(`---wins: ${winnersGenerals[sortedWinnerGeneral].wins}`);
        console.log(`---losses: ${winnersGenerals[sortedWinnerGeneral].loses}`);
    }


    function fight(battle) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (attackingKingdom !== defendingKingdom) {
            let attackArmy = kingdoms[attackingKingdom][attackingGeneral].army;
            let defendArmy = kingdoms[defendingKingdom][defendingGeneral].army;

            if (attackArmy > defendArmy) {
                attackArmy = Math.floor(attackArmy * 1.1);
                defendArmy = Math.floor(defendArmy * 0.9);
                kingdoms[defendingKingdom][defendingGeneral].army = defendArmy;
                kingdoms[attackingKingdom][attackingGeneral].army = attackArmy;
                kingdoms[attackingKingdom][attackingGeneral].wins += 1;
                kingdoms[defendingKingdom][defendingGeneral].loses += 1;
            } else if (defendArmy > attackArmy) {
                defendArmy = Math.floor(defendArmy * 1.1);
                attackArmy = Math.floor(attackArmy * 0.9);
                kingdoms[defendingKingdom][defendingGeneral].army = defendArmy;
                kingdoms[attackingKingdom][attackingGeneral].army = attackArmy;
                kingdoms[defendingKingdom][defendingGeneral].wins += 1;
                kingdoms[attackingKingdom][attackingGeneral].loses += 1;
            }
        }
    }


}

game(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]

)