function surveyParser(str) {
    let patternAll = /<cat><text>[\s\S]*\[[\s\S]*\][\s\S]*<\/text><\/cat>\s*<cat>[\s\S]*<\/cat>/g;
    let patternTest = /<svg>[\s\S]*<\/svg>/g;
    if (!patternTest.test(str)) {
        console.log(`No survey found`);
        return;
    } else if (!patternAll.test(str)) {
        console.log(`Invalid format`);
        return;
    } else {
        let regexLabel = /<text>[\s\S]*\[(.+?)\][\s\S]*<\/text>/g;
        let label = regexLabel.exec(str)[1];
        let regexValues = /<g><val>(\d{1,2})<\/val>(\d+)<\/g>/g;
        let votes = [];
        let ratings = [];
        let result;
        while ((result = regexValues.exec(str)) !== null) {
            let ratingValue = +result[1];
            let voteCount = +result[2];
            if (ratingValue > 0 && ratingValue < 11 && voteCount >= 0) {
                votes.push(voteCount);
                ratings.push(ratingValue * voteCount);
            }
        }
        if (ratings.length > 0) {
            let average = 0;
            let totalVotes = ratings.reduce((a, b) => a + b);
            let sumVotes = votes.reduce((a, b) => a + b);
            if (sumVotes !== 0) {
                average = (totalVotes / sumVotes).toFixed(2);
                average = +average;
            }
            console.log(`${label}: ${average}`);
        }

    }
}

surveyParser(`<svg><cat><text>How do you rate the special menu? [Food - Special]
</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>`);