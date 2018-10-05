function restHouse(arrRooms, arrGuests) {
    let freeDoubleRooms = [];
    let freeTrippleRooms = [];
    let teaHouse = 0;
    let roomForFemalesToFill = [];
    let roomForMenToFill = [];
    let peoplesInFoae = [];
    let rooms = new Map();


    for (let inputRoom of arrRooms) {
        if (inputRoom.type === 'double-bedded') {
            freeDoubleRooms.push(inputRoom.number);
            rooms.set(inputRoom.number, {guests: [], freeBeds: 2});
        } else {
            freeTrippleRooms.push(inputRoom.number);
            rooms.set(inputRoom.number, {guests: [], freeBeds: 3});
        }
    }

    function accommodateSingleFemale(f) {
        if (roomForFemalesToFill.length > 0) {
            rooms.get(roomForFemalesToFill[0]).guests.push(f);
            rooms.get(roomForFemalesToFill[0]).freeBeds -= 1;
            if (rooms.get(roomForFemalesToFill[0]).freeBeds === 0) {
                roomForFemalesToFill.pop();
            }
        } else {
            if (freeTrippleRooms.length > 0) {
                let roomNumber = freeTrippleRooms.shift();
                roomForFemalesToFill.push(roomNumber);
                rooms.get(roomNumber).guests.push(f);
                rooms.get(roomNumber).freeBeds -= 1;
            } else {
                teaHouse += 1;
            }
        }
    }

    function accommodateSingleMale(m) {
        if (roomForMenToFill.length > 0) {
            rooms.get(roomForMenToFill[0]).guests.push(m);
            rooms.get(roomForMenToFill[0]).freeBeds -= 1;
            if (rooms.get(roomForMenToFill[0]).freeBeds === 0) {
                roomForMenToFill.pop();
            }
        } else {
            if (freeTrippleRooms.length > 0) {
                let roomNumber = freeTrippleRooms.shift();
                roomForMenToFill.push(roomNumber);
                rooms.get(roomNumber).guests.push(m);
                rooms.get(roomNumber).freeBeds -= 1;
            } else {
                teaHouse += 1;
            }
        }
    }

    function accommodate(first, second) {
        if (first.gender !== second.gender) {

            if (freeDoubleRooms.length > 0) {//free double rooms
                let numberRoom = freeDoubleRooms.shift();
                rooms.get(numberRoom).guests.push(first);
                rooms.get(numberRoom).guests.push(second);
                rooms.get(numberRoom).freeBeds -= 2;

            }else { // waiting till end -> push to rooms.
                peoplesInFoae.push(first);
                peoplesInFoae.push(second);
            }

        } else {   //Both are same gender

            if (first.gender === 'female') {
                accommodateSingleFemale(first);
                accommodateSingleFemale(second);
            } else {
                accommodateSingleMale(first);
                accommodateSingleMale(second);
            }
        }
    }

    for (let guest of arrGuests) {
        accommodate(guest.first, guest.second);
    }
    if (peoplesInFoae.length >0) {
        for (let p of peoplesInFoae) {
            if (p.gender === 'female') {
                accommodateSingleFemale(p);
            }else {
                accommodateSingleMale(p);
            }
        }
    }

    let sortedRooms = [...rooms].sort();

    for (let sortedRoom of sortedRooms) {
        console.log(`Room number: ${sortedRoom[0]}`);
        let guestsOfRoomSorted = sortedRoom[1].guests.sort((a, b) => a.name.localeCompare(b.name));
        guestsOfRoomSorted.forEach(g => console.log(`--Guest Name: ${g.name}\n--Guest Age: ${g.age}`));
        console.log(`Empty beds in the room: ${sortedRoom[1].freeBeds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouse}`);

}

// restHouse(
//     [
//         {"number": "1", "type": "double-bedded"},
//         {"number": "2", "type": "triple"},
//         {"number": "3", "type": "double-bedded"},
//         {"number": "4", "type": "double-bedded"},
//         {"number": "5", "type": "double-bedded"},
//         {"number": "6", "type": "triple"},
//         {"number": "7", "type": "double-bedded"},
//         {"number": "8", "type": "double-bedded"},
//         {"number": "9", "type": "triple"},
//         {"number": "11", "type": "double-bedded"},
//         {"number": "12", "type": "double-bedded"},
//         {"number": "13", "type": "double-bedded"},
//         {"number": "14", "type": "triple"},
//         {"number": "15", "type": "triple"},
//         {"number": "16", "type": "triple"},
//         {"number": "17", "type": "triple"},
//         {"number": "18", "type": "double-bedded"},
//         {"number": "19", "type": "triple"},
//         {"number": "20", "type": "double-bedded"},
//         {"number": "21", "type": "triple"},
//         {"number": "22", "type": "double-bedded"},
//         {"number": "23", "type": "triple"},
//         {"number": "24", "type": "triple"},
//         {"number": "25", "type": "triple"},
//         {"number": "26", "type": "double-bedded"},
//         {"number": "27", "type": "double-bedded"},
//     ], [
//         {
//             "first": {"name": "Valerie French", "gender": "female", "age": 1},
//             "second": {"name": "Rodolfo Howard", "gender": "male", "age": 2}
//         },
//         {
//             "first": {"name": "Kelly Manning", "gender": "female", "age": 3},
//             "second": {"name": "Micheal Townsend", "gender": "male", "age": 4}
//         },
//         {
//             "first": {"name": "Rochelle Sandoval", "gender": "female", "age": 5},
//             "second": {"name": "Dave Smith", "gender": "male", "age": 6}
//         },
//         {
//             "first": {"name": "Dave Smith", "gender": "male", "age": 7},
//             "second": {"name": "Javier Ortega", "gender": "male", "age": 8}
//         },
//         {
//             "first": {"name": "Tracey Greer", "gender": "female", "age": 9},
//             "second": {"name": "Justin Tran", "gender": "male", "age": 10}
//         },
//         {
//             "first": {"name": "Claudia Haynes", "gender": "female", "age": 11},
//             "second": {"name": "Horace Thornton", "gender": "male", "age": 12}
//         },
//         {
//             "first": {"name": "Steven Todd", "gender": "male", "age": 13},
//             "second": {"name": "Marshall Cain", "gender": "male", "age": 14}
//         },
//         {
//             "first": {"name": "Milton Fleming", "gender": "male", "age": 15},
//             "second": {"name": "Ronnie Floyd", "gender": "male", "age": 16}
//         },
//         {
//             "first": {"name": "Erica Wood", "gender": "female", "age": 17},
//             "second": {"name": "Matthew Rodriquez", "gender": "male", "age": 18}
//         },
//         {
//             "first": {"name": "Ora Wilkerson", "gender": "female", "age": 19},
//             "second": {"name": "Lynette Pena", "gender": "female", "age": 20}
//         },
//         {
//             "first": {"name": "Raquel Johnson", "gender": "female", "age": 21},
//             "second": {"name": "Jim Graham", "gender": "male", "age": 21}
//         },
//         {
//             "first": {"name": "Esther Valdez", "gender": "female", "age": 23},
//             "second": {"name": "Levi Boyd", "gender": "male", "age": 24}
//         },
//         {
//             "first": {"name": "Jimmy Jimenez", "gender": "male", "age": 25},
//             "second": {"name": "Troy Payne", "gender": "male", "age": 26}
//         },
//         {
//             "first": {"name": "Carol Hansen", "gender": "female", "age": 27},
//             "second": {"name": "Velma Chavez", "gender": "female", "age": 28}
//         },
//         {
//             "first": {"name": "Salvatore Carroll", "gender": "male", "age": 29},
//             "second": {"name": "Clinton Santiago", "gender": "male", "age": 30}
//         },
//         {
//             "first": {"name": "Katie Fisher", "gender": "female", "age": 31},
//             "second": {"name": "Erin Moreno", "gender": "female", "age": 32}
//         },
//         {
//             "first": {"name": "Tyrone Hogan", "gender": "male", "age": 33},
//             "second": {"name": "Jim Graham", "gender": "male", "age": 34}
//         },
//         {
//             "first": {"name": "Julian Phelps", "gender": "male", "age": 35},
//             "second": {"name": "Micheal Townsend", "gender": "male", "age": 36}
//         },
//         {
//             "first": {"name": "Esther Valdez", "gender": "female", "age": 37},
//             "second": {"name": "Jimmy Jimenez", "gender": "male", "age": 38}
//         },
//         {
//             "first": {"name": "Jeanette Steele", "gender": "female", "age": 39},
//             "second": {"name": "Sergio Ferguson", "gender": "male", "age": 40}
//         },
//         {
//             "first": {"name": "Alejandro Lane", "gender": "male", "age": 41},
//             "second": {"name": "Jesus Terry", "gender": "male", "age": 42}
//         },
//         {
//             "first": {"name": "Lee Rogers", "gender": "female", "age": 43},
//             "second": {"name": "Doreen Sullivan", "gender": "female", "age": 44}
//         },
//         {
//             "first": {"name": "Beatrice Fleming", "gender": "female", "age": 45},
//             "second": {"name": "Gerard Williams", "gender": "male", "age": 46}
//         },
//         {
//             "first": {"name": "Jody Harris", "gender": "female", "age": 47},
//             "second": {"name": "Amos Murray", "gender": "male", "age": 48}
//         },
//         {
//             "first": {"name": "Anne Richardson", "gender": "female", "age": 49},
//             "second": {"name": "Darnell Mack", "gender": "male", "age": 50}
//         },
//         {
//             "first": {"name": "Dianne Harrington", "gender": "female", "age": 51},
//             "second": {"name": "Sheri Sparks", "gender": "female", "age": 52}
//         },
//         {
//             "first": {"name": "Jamie Chambers", "gender": "female", "age": 53},
//             "second": {"name": "Merle Jenkins", "gender": "male", "age": 15}
//         },
//         {
//             "first": {"name": "Connie Swanson", "gender": "female", "age": 54},
//             "second": {"name": "Ida Wolfe", "gender": "female", "age": 55}
//         },
//         {
//             "first": {"name": "Esther Valdez", "gender": "female", "age": 56},
//             "second": {"name": "Terence Fox", "gender": "male", "age": 57}
//         },
//         {
//             "first": {"name": "Alexis Graham", "gender": "female", "age": 58},
//             "second": {"name": "Janis Franklin", "gender": "female", "age": 59}
//         },
//         {
//             "first": {"name": "Armando Cortez", "gender": "male", "age": 60},
//             "second": {"name": "Sergio Ferguson", "gender": "male", "age": 61}
//         },
//         {
//             "first": {"name": "Mathew Soto", "gender": "male", "age": 62},
//             "second": {"name": "Alejandro Lane", "gender": "male", "age": 63}
//         },
//         {
//             "first": {"name": "Elizabeth Huff", "gender": "female", "age": 64},
//             "second": {"name": "Beth Foster", "gender": "female", "age": 65}
//         },
//         {
//             "first": {"name": "Rudy Mason", "gender": "male", "age": 66},
//             "second": {"name": "Ellis Parsons", "gender": "male", "age": 67}
//         },
//         {
//             "first": {"name": "Dave Smith", "gender": "male", "age": 68},
//             "second": {"name": "Malcolm Bishop", "gender": "male", "age": 69}
//         },
//         {
//             "first": {"name": "Beth Foster", "gender": "female", "age": 70},
//             "second": {"name": "Lorene Thompson", "gender": "female", "age": 71}
//         },
//         {
//             "first": {"name": "Rodney Saunders", "gender": "male", "age": 72},
//             "second": {"name": "Tracy Reid", "gender": "male", "age": 73}
//         },
//         {
//             "first": {"name": "Lauren Padilla", "gender": "female", "age": 74},
//             "second": {"name": "Melody Gill", "gender": "female", "age": 75}
//         },
//
//     ]
// );

restHouse([  { number: '101A', type: 'double-bedded' },
        { number: '104', type: 'triple' },
        { number: '101B', type: 'double-bedded' },
        { number: '102', type: 'triple' } ],
        [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
            second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
            { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
                second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
            { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
                second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
            { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
                second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } }
    ]
)