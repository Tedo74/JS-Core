function travelMoney(arr) {
    let total = 0;
    let specializedCounter = 0;
    let clumsyCounter = 0;

    for (let currentJob of arr) {
        let [job, money] = currentJob.split(' : ');
        money = Number(money);

        switch (job) {
            case 'Programming':
            case 'Hardware maintenance':
            case 'Cooking':
            case 'Translating':
            case 'Designing':
                if (money < 200) {
                    break;
                }

                money = money * 0.8;
                total += money;
                specializedCounter++;
                //After spending for candies
                if (specializedCounter % 2 === 0) {
                    total += 200;
                }

                break;
            case 'Driving':
            case 'Managing':
            case 'Fishing':
            case 'Gardening':
                total += money;
                break;
            default:
                clumsyCounter++;
                if (clumsyCounter === 1) {
                    total += money;
                }else if (clumsyCounter % 2 === 0) {
                    total = total + money - (money * 0.05);
                }else if (clumsyCounter % 3 === 0) {
                    total += money - (money * 0.1);
                }else {
                    total += money;
                }

        }

    }
    if (total < 1000) {
        console.log(`Final sum: ${total.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - total).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Final sum: ${total.toFixed(2)}`);
        console.log(`Mariyka earned ${(total - 1000).toFixed(2)} gold more.`);
    }
}

travelMoney(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);