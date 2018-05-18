function moviesPrices([title, day]) {
    day = day.toLowerCase();
    let theGodfather = {
        monday: 12, tuesday: 10, wednesday: 15, thursday: 12.5, friday: 15, saturday: 25, sunday: 30
    }
    let schindlersList = {
        monday: 8.5, tuesday: 8.5, wednesday: 8.5, thursday: 8.5, friday: 8.5, saturday: 15, sunday: 15
    }
    let casablanca = {
        monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 10, sunday: 10
    }
    let wizardFromOz = {
        monday: 10, tuesday: 10, wednesday: 10, thursday: 10, friday: 10, saturday: 15, sunday: 15
    }
    switch (title.toLowerCase()) {
        case "the godfather":
            if (theGodfather.hasOwnProperty(day)) {
                console.log(theGodfather[day]);
            }else {
                console.log("error");
            }
            break;
        case "schindler's list":
            if (schindlersList.hasOwnProperty(day)) {
                console.log(schindlersList[day]);
            }else {
                console.log("error");
            }
            break;
        case "casablanca":
            if (casablanca.hasOwnProperty(day)) {
                console.log(casablanca[day]);
            }else {
                console.log("error");
            }
            break;
        case "the wizard of oz":
            if (wizardFromOz.hasOwnProperty(day)) {
                console.log(wizardFromOz[day]);
            }else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }

}