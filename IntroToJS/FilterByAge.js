function filterByAge(minAge, name1, age1, name2, age2) {

    let obj1 = {name: name1, age: age1};
    let obj2 = {name: name2, age: age2};

    if (minAge <= obj1.age) {
        console.log(obj1);
    }
    if (minAge <= obj2.age) {
        console.log(obj2);
    }
}