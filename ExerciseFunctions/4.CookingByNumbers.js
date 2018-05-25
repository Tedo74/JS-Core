function cooking(arr) {
    let number = Number(arr[0]);
    let arrOperations = arr.slice(1);

    let chop = (n) => n / 2;
    let dice = (n) => Math.sqrt(n);
    let spice = (n) => n + 1;
    let bake = (n) => n * 3;
    let fillet = (n) => n * 0.8;

    for (let operation of arrOperations) {
        switch (operation) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}