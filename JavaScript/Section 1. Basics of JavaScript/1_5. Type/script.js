const sym = Symbol('name');

// 참조 타입
const hobbies = ['Sports', 'Cooking'];

const address = {
    city: 'Seoul',
    country: 'Korea'
}

console.log(typeof hobbies); // -> Object
console.log(typeof address); // -> Object
console.log(typeof sym); // -> Symbol
console.log(Array.isArray(hobbies)); // -> true