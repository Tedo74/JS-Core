function postfixCalc(arr) {
    let numbers = [];
    let operations = {
        '+': (a, b) => {
            return a + b
        },
        '-': (a, b) => {
            return a - b
        },
        '*': (a, b) => {
            return a * b
        },
        '/': (a, b) => {
            return a / b
        }
    };

    for (let current of arr) {
        if (typeof current === 'number') {
            numbers.push(current);
        } else {
            let operand2 = numbers.pop();
            let operand1 = numbers.pop();
            let operator = current;
            if (operand1 === undefined || operand2 === undefined) {
                console.log('Error: not enough operands!');
                return;
            } else {
                numbers.push(operations[operator](operand1, operand2));
            }
        }
    }
    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    }else{
        console.log(numbers[0]);
    }
}