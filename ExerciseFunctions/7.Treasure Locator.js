function findTresure(arr) {
    let tuvalu = {name: "Tuvalu", x1: 1, y1: 1, x2: 3, y2: 3};
    let tokelau = {name: "Tokelau", x1: 8, y1: 0, x2: 9, y2: 1};
    let tonga = {name: "Tonga", x1: 0, y1: 6, x2: 2, y2: 8};
    let samoa = {name: "Samoa", x1: 5, y1: 3, x2: 7, y2: 6};
    let cook = {name: "Cook", x1: 4, y1: 7, x2: 9, y2: 8};

    let islands = [tuvalu, tokelau, tonga, samoa, cook];

    for (let i = 0; i < arr.length; i += 2) {
        let treasure = arr.slice(i, i + 2);
        let isFound = false;
        for (let island of islands) {
            if (isTreasureOnIsland(treasure, island)) {
                console.log(island.name);
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            console.log("On the bottom of the ocean");
        }
    }

    function isTreasureOnIsland(treasure, island) {
        let [x, y] = treasure;
        if (x >= island.x1 && x <= island.x2 && y >= island.y1 && y <= island.y2) {
            return true;
        }
        return false;
    }
}