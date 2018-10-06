function arena(arr) {
    let gladiators = {};
    for (let inputLine of arr) {
        if (inputLine === 'Ave Cesar') {
            break;
        }
        let regex = / -> | vs /;
        inputLine = inputLine.split(regex).filter(e => e !== '');
        if (inputLine.length > 2) {
            let name = inputLine[0];
            let technique = inputLine[1];
            let skill = +inputLine[2];
            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {techniques: {}, allSkills: 0};
            }
            if (!gladiators[name].techniques.hasOwnProperty(technique)) {
                gladiators[name].techniques[technique] = skill;
                gladiators[name].allSkills += skill;

            } else {
                let oldTechniqueValue = gladiators[name].techniques[technique];
                if (skill > oldTechniqueValue) {
                    gladiators[name].techniques[technique] = skill;
                    gladiators[name].allSkills -= oldTechniqueValue;
                    gladiators[name].allSkills += skill;
                }
            }
        } else {
            battle(inputLine[0], inputLine[1]);
        }
    }
    let sortedGladiators = Object.keys(gladiators).sort((a,b) =>{
        return gladiators[b].allSkills - gladiators[a].allSkills
             || a.localeCompare(b);
    });

    for (let g of sortedGladiators) {
        let currentGladiator = gladiators[g];
        console.log(`${g}: ${currentGladiator.allSkills} skill`);

        let tech = Object.keys(currentGladiator.techniques).sort((a,b)=>{
            return currentGladiator.techniques[b] - currentGladiator.techniques[a]
            || a.localeCompare(b);
        });

        for (let t of tech) {
            console.log(`- ${t} <!> ${currentGladiator.techniques[t]}`);
        }
    }



    function battle(gladiator1Name, gladiator2Name) {
        if (gladiators.hasOwnProperty(gladiator1Name) && gladiators.hasOwnProperty(gladiator2Name)) {
            let gladiator1 = gladiators[gladiator1Name];
            let gladiator2 = gladiators[gladiator2Name];
            let gladiator1Techniques = Object.keys(gladiator1.techniques);
            for (let t of gladiator1Techniques) {
                if (gladiator2.techniques.hasOwnProperty(t)) { //battle
                    if (gladiator1.techniques[t] === gladiator2.techniques[t]) {
                        return;
                    } else if (gladiator1.techniques[t] > gladiator2.techniques[t]) {
                        delete gladiators[gladiator2Name];
                    } else {
                        delete gladiators[gladiator1Name];
                    }
                }
            }

            // if (gladiators[gladiator1Name].allSkills > gladiators[gladiator2Name.allSkills]) {
            //     delete gladiators[gladiator1Name];
            // } else {
            //     delete gladiators[gladiator1Name];
            // }
        }
    }
}

arena([
    'Stamat -> Tiger2 -> 250',
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Stamat -> Aiger2 -> 250',
    'Ave Cesar'
]);
