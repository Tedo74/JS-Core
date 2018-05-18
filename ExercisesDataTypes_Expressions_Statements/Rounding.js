function rounding([num, raound]) {
    if (raound > 15){
        raound = 15;
    }
    let denomerator = Math.pow(10, raound);
    let endResult = Math.round(num * denomerator) / denomerator;
    console.log(endResult);
}