function boxes(bottles, boxCapacity) {
    let boxesNeeded = Math.floor(bottles / boxCapacity);
    if (bottles % boxCapacity != 0) {
        boxesNeeded++;
    }
    console.log(boxesNeeded);
}