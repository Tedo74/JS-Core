function gladiatorInventory(arr) {
    let equipment = arr.shift().split(' ').filter(e => e !== '');

    let commands = {
        Buy: function (item) {
            if (!equipment.includes(item)) {
                equipment.push(item);
            }
        },
        Trash: function (item) {
            let index;
            if ((index = equipment.indexOf(item)) !== -1) {
                equipment.splice(index, 1);
            }
        },
        Repair: function (item) {
            let index = equipment.indexOf(item);
            if (index !== -1) {
                let itemToRepair = equipment.splice(index, 1)[0];
                equipment.push(itemToRepair);

            }
        },
        Upgrade: function (item, upgrade) {
            let index;
            if ((index = equipment.indexOf(item)) !== -1) {
                let temp = equipment[index] + ':' + upgrade;
                equipment.splice(index + 1, 0, temp);
            }
        }
    };

    for (let command of arr) {
        if (command === 'Fight!') {
            break;
        }
        command = command.split(' ').filter(e => e !== '');
        if (command[0] === 'Upgrade') {
            let [item, upgrade] = command[1].split('-');
            commands[command[0]](item, upgrade);
        }
        commands[command[0]](command[1]);
    }

    console.log(equipment.join(' '));
}