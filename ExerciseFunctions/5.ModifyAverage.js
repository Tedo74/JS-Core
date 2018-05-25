function modifyAverage(number) {
    function average(n) {
        let numberAsString =n.toString();
        let sum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }
        let average = sum / numberAsString.length;
        return average;
    }

    while (average(number) <= 5) {
        number = Number((number+'9'));
    }
    console.log(number);
}