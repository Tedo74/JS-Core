function lostInTheMountains(keyword, text) {
    let messagePattern = `${keyword}([\\S\\s]*)${keyword}`;
    let messageRegex = RegExp(messagePattern, 'g');
    let message = messageRegex.exec(text)[1];

    let northEast = /(east|north)[\S\s]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
    let northCoordinate = 0;
    let eastCoordinate = 0;
    let coordinates;
    while ((coordinates = northEast.exec(text)) !== null) {
        if (coordinates[1].toLowerCase() === 'east') {
            eastCoordinate = coordinates[2] + '.' + coordinates[3] + ' E';
        }else {
            northCoordinate = coordinates[2] + '.' + coordinates[3] + ' N';
        }
    }
    console.log(northCoordinate);
    console.log(eastCoordinate);
    console.log(`Message: ${message}`);
}

lostInTheMountains(
    'encrKey/',
    `east eastnorth east29north 43,456789
north one east 40,000000 encrKey/To live is the rarest thing in the world. Most people exist, that is allencrKey/`
);