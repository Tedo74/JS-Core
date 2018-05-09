function sumVat(arr) {
    let sum = 0;

    for (let n of arr) {
        sum += n;
    }

    let vat = sum * 0.2;
    let all = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${all}`);
}