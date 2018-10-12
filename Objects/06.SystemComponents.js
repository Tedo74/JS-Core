function components(arr) {
    let systems = {};
    for (let line of arr) {
        let [sys, comp, sub] = line.split(' | ');
        if (!systems.hasOwnProperty(sys)) {
            systems[sys] = {};
        }
        if (!systems[sys].hasOwnProperty(comp)) {
            systems[sys][comp] = [];
        }
        systems[sys][comp].push(sub);
    }
    let sortedSys = Object.keys(systems).sort((a, b) => {
        let aSize = Object.keys(systems[a]).length;
        let bSize = Object.keys(systems[b]).length;
        return bSize - aSize || a.toLowerCase().localeCompare(b.toLowerCase());
    });

    for (let system of sortedSys) {
        console.log(system);
        let compSorted = Object.keys(systems[system]).sort((a,b)=>{
            return systems[system][b].length - systems[system][a].length;
        });
        for (let c of compSorted) {
            console.log(`|||${c}`);
            systems[system][c].forEach(item =>{
                console.log(`||||||${item}`);
            })
        }
    }
}

components([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);