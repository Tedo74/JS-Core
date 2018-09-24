function galacticElections(arr) {
    let totalVotes = 0;
    let galacticSystem = new Map();

    for (let currentVote of arr) {
        totalVotes += currentVote.votes;

        if (!galacticSystem.has(currentVote.system)) {
            galacticSystem.set(currentVote.system, new Map());
        }
        if (!galacticSystem.get(currentVote.system).has(currentVote.candidate)) {
            galacticSystem.get(currentVote.system).set(currentVote.candidate, 0);
        }
        let candidateOldVotes = galacticSystem.get(currentVote.system).get(currentVote.candidate);
        galacticSystem.get(currentVote.system).set(currentVote.candidate, candidateOldVotes + currentVote.votes);
    }

    let winners = new Map();

    for (let system of galacticSystem) {
        let sorted = [...system[1]].sort((a, b) => {
            return b[1] - a[1];
        });

        let sum = 0;
        for (let s of [...system[1]]) {
            sum += s[1];
        }
        let candidate = sorted[0][0];
        let galacticSystem = system[0];

        //winner => winnerName, galacticSystem, votes
        if (!winners.has(candidate)) {
            winners.set(candidate, new Map());
        }
        if (!winners.get(candidate).has(galacticSystem)) {
            winners.get(candidate).set(galacticSystem, 0);
        }
        let old = winners.get(candidate).get(galacticSystem);
        winners.get(candidate).set(galacticSystem, old + sum);
    }
    let sortedWinners = Array.from(winners).sort(sortMapByInnerMapValue);

    let winnerVotes = [...sortedWinners[0][1]].reduce((accu, init) => {
        return accu + init[1];
    }, 0);

    let winnerVotesInPercent = (100 / (totalVotes / winnerVotes));

    let winner = sortedWinners[0][0];
    let secondPl;

    if (winnerVotesInPercent === 100) {
        console.log(`${winner} wins with ${winnerVotes} votes`);
        console.log(`${winner} wins unopposed!`);

    } else if (winnerVotesInPercent > 50) {

        secondPl = sortedWinners[1][0];
        console.log(`${winner} wins with ${winnerVotes} votes`);
        console.log(`Runner up: ${secondPl}`);
        let secondSystems = winners.get(sortedWinners[1][0]);
        let secondSystemsSorted = [...secondSystems].sort((a, b) => {
            return b[1] - a[1];
        });
        for (let sss of secondSystemsSorted) {
            console.log(`${sss[0]}: ${sss[1]}`);
        }
    } else if (winnerVotesInPercent <= 50) {

        secondPl = sortedWinners[1][0];
        let secondVotes = [...sortedWinners[1][1]].reduce((accu, init) => {
            return accu + init[1];
        }, 0);
        winnerVotesInPercent = Math.floor(winnerVotesInPercent);
        let secondInPercent = Math.floor(100 / (totalVotes / secondVotes));

        console.log(`Runoff between ${winner} with ${winnerVotesInPercent}% and ${secondPl} with ${secondInPercent}%`);
    }


    function sortMapByInnerMapValue(a, b) {
        let currentSystemA = [...a[1]];
        let currentSystemB = [...b[1]];

        let totalA = Array.from(currentSystemA).reduce((accu, initial) => {
            return accu + initial[1];
        }, 0);
        let totalB = Array.from(currentSystemB).reduce((accu, initial) => {
            return accu + initial[1];
        }, 0);
        return totalB - totalA;
    }
}

galacticElections(
    [{system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10},
        {system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200},
        {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}
    ]
);