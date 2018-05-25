function radar(arr) {

    let [speed, zone] = arr;

    function getLimit(zone) {
        switch (zone) {
            case 'residential':
                return 20;
            case 'city':
                return 50;
            case 'interstate':
                return 90;
            case 'motorway':
                return 130;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed > 0 && overSpeed <= 20) {
            console.log('speeding');
        } else if (overSpeed > 20 && overSpeed <= 40) {
            console.log('excessive speeding');
        } else if (overSpeed > 40) {
            console.log('reckless driving');
        }
    }

    getInfraction(speed, getLimit(zone));
}