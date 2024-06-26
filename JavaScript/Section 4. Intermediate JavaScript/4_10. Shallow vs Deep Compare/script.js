/* let [a, b] = [1, 1];
console.log(a == b); // true

let [a, b] = [1, '1'];
console.log(a == b); // true
console.log(a === b); // false

let a = [1, 2];
let b = [1, 2];
console.log(a == b); // false
console.log(a === b); // false */


const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true