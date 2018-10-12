function followers(arr) {
    let users = {};
    for (let line of arr) {
        if (line.indexOf('Welcome,') !== -1) {
            let name = line.replace('Welcome,', '').trim();
            if (name !== '' && !users.hasOwnProperty(name)) {
                users[name] = {follow: [], followers: []};
            }
        } else {
            let [person1, person2] = line.split(' followed '); // 1 follow 2 !!!

            if (users.hasOwnProperty(person1)
                && users.hasOwnProperty(person2)
                && person1 !== person2) {

                if (!users[person2].followers.includes(person1)) {

                    users[person2].followers.push(person1);

                }

                if (!users[person1].follow.includes(person2)) {

                    users[person1].follow.push(person2);

                }
            }
        }
    }
    let sortedUsers = Object.keys(users).sort().reverse().sort((a, b) => {
        return users[b].followers.length - users[a].followers.length;
    });

    let totalUsers = sortedUsers.length;
    console.log(`Total users registered: ${totalUsers}`);

    if (sortedUsers.length > 0) {
        let counter = 0;
        let winner = sortedUsers.shift();
        let followers = users[winner].followers.sort();
        
        console.log(`${++counter}. ${winner} : ${users[winner].follow.length} following, ${followers.length} followers`);
        followers.forEach(f =>{
            console.log('*  '+f);
        });

        for (let u of sortedUsers) {
            console.log(`${++counter}. ${u} : ${users[u].follow.length} following, ${users[u].followers.length} followers`);

        }

    }
}

followers(
    [

        'Welcome, EmilConrad',
        'Welcome, Saffrona',
        'Saffrona followed EmilConrad',
        'EmilConrad followed Saffrona',


    ]
);