function f1race(arr) {
    let pilots = arr.shift().split(' ');

    let actions = {
        Pit: function (pilot) {
            let index = pilots.indexOf(pilot);
            if (index >-1 && index < pilots.length -1) {
                pilots.splice(index, 1);
                pilots.splice(index+1,0,pilot);
            }
        },
        Crash: function (pilot) {
            let index = pilots.indexOf(pilot);
            if (index > -1) {
                pilots.splice(index, 1);
            }
        },
        Overtake: function (pilot) {
            let index = pilots.indexOf(pilot);
            if (index > 0) {
                pilots.splice(index, 1);
                pilots.splice(index-1,0,pilot);
            }
        },
        Join:function (pilot) {
            if(!pilots.includes(pilot)){
                pilots.push(pilot);
            }
        }
    };

    for (let race of arr) {
        let[action, pilot] = race.split(' ');
        actions[action](pilot);
    }

    console.log(pilots.join(" ~ "));
}

f1race([
    "Vetel Hamilton Raikonnen Botas Slavi",
        "Pit Hamilton",
        "Overtake LeClerc",
        "Join Ricardo",
        "Crash Botas",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Overtake Ricardo",
        "Crash Slavi"
    ]);