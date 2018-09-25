function travelInvestigation(arr) {
    let companiesInput = arr.shift();
    let delimiter = arr.shift();
    let valid = [];
    let invalid = [];
    let companies = companiesInput.split(delimiter);

    for (let text of arr) {
        test(companies, text);
    }

    function printArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }

    if (valid.length > 0 && invalid.length > 0) {
        let separator = '='.repeat(30);
        console.log('ValidSentences');
        printArr(valid);
        console.log(separator);
        console.log('InvalidSentences');
        printArr(invalid)

    } else if (valid.length > 0) {
        console.log('ValidSentences');
        printArr(valid);

    } else if (invalid.length > 0) {
        console.log('InvalidSentences');
        printArr(invalid);
    }

    function test(companies, sentence) {
        sentence = sentence.toLowerCase();
        for (let currentCompany of companies) {
            //let regex = new RegExp(`${currentCompany}`);
            if (sentence.indexOf(currentCompany) === -1){
                invalid.push(sentence);
                return;
            }
        }
        valid.push(sentence);
    }
}

travelInvestigation(
    ["bulgariatour/@, minkatrans/@, koftipochivkaltd/",
        "@,",
        "Mincho e KoftiPochivkaLTD/ KoftiPochivkaLTD/ Tip 123  ve MinkaTrans/ BulgariaTour/",
        "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
        "someone continues as no "
    ]
);