function tripLength(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr;
    let distance12 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    let distance13 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
    let distance23 = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);

    if (distance12 <= distance13 && distance13 >= distance23) {
        console.log('1->2->3: ' + (distance12 + distance23));
    }else if (distance12 <= distance23 && distance13 < distance23){
        console.log('2->1->3: ' + (distance12 + distance13));
    }else {
        console.log('1->3->2: ' + (distance13 + distance23));
    }
}