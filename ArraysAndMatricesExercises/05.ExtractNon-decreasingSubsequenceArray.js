function nonDecreasingElements(arr) {
    let currentBiggest = +arr[0];
    let resultArr = arr.map(Number).filter((element) =>{
        if(element >= currentBiggest){
            currentBiggest = element;
            return true;
        }else {
            return false;
        }
    });

    console.log(resultArr.join('\n'));
}