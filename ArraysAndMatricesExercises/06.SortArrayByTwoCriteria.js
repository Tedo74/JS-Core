function sortByTwoCriteria(arr) {
    arr.sort((a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
           return a.toLowerCase().localeCompare(b.toLowerCase());
        }
        return result;
    });

    console.log(arr.join('\n'));
}