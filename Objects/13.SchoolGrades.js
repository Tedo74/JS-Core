function schoolGrades(arr) {
    let regex = /^Student name: (\w+), Grade: (\d+), Graduated with an average score: (\d+[.]?\d*)$/;
    let schoolRegister = {};

    for (let line of arr) {
        let match = regex.exec(line);
        if (match) {
            let name = match[1];
            let grade = +match[2];
            let averageScore = +match[3];
            if (averageScore < 3) {
                continue;
            } else {
                grade++;
            }
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = {};
            }
            if (!schoolRegister[grade].hasOwnProperty(name)) {
                schoolRegister[grade][name] = averageScore;
            }
        }
    }
    let sortByGrades = Object.keys(schoolRegister).sort((a, b) => {
        return +a - +b;
    });

    for (let currentGrade of sortByGrades) {

        console.log(`${currentGrade} Grade`);
        console.log('List of students: '+Object.keys(schoolRegister[currentGrade]).join(', '));
        let studentsNumber = Object.keys(schoolRegister[currentGrade]).length;
        let totalGrades = Object.values(schoolRegister[currentGrade]).reduce((a,b) =>{return a+b;});
        let averageGrade =  totalGrades / studentsNumber;
        console.log(`Average annual grade from last year: ${averageGrade.toFixed(2)}`);
        console.log();
    }
}

schoolGrades([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);