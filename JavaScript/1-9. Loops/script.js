// for loop
for (let i = 0; i < 10; i++){
    if (i === 2){
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 5){
        console.log(`${i}, Stop the loop`);
        break;
    }
    console.log('Number ' + i);
}

// for in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for (let x in user){
    console.log(`${x} : ${user[x]}`);
}

for (let x of [1, 2, 3]){
    console.log(x);
}

// while Loop
let i = 0;
console.log('While Loop');
while(i < 3){
    console.log('Number ' + i);
    i++;
}

// do while Loop
console.log('Do While Loop');
let j = 0;
do {
    console.log('Number ' + j);
    j++;
} while(j < 3);

// forEach
console.log('forEach');
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// map
console.log('map');
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];
users.map(function(user){
    console.log(user.name);
});