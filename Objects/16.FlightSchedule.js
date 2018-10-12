function flight(arr) {
    let flights = new Map();

    arr[0].forEach(line => {
        let [id, destination] = line.split(' ').filter(e =>{return e !== '';});
        flights.set(id,{Destination: destination, Status: 'Ready to fly'});
    });

    arr[1].forEach(line =>{
        let [id, newStatus] = line.split(' ').filter(e =>{return e !== '';});
        if (flights.has(id)) {
            flights.get(id).Status = newStatus;
        }
    });
    let statusToCheck = arr[2][0];
    let flightsWithStatus = [...flights.values()].filter( f =>{return f.Status === statusToCheck});
    // let sortedFlightsWithStatus = flightsWithStatus.sort((a,b)=>{
    //    return a.destination.localeCompare(b.destination);
    // });
    flightsWithStatus.forEach(f =>{
        console.log(f);
    });
}

flight(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]

);