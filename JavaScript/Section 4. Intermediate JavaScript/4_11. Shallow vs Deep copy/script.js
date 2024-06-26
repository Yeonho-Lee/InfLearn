// shallow copy
const arr1 = [1, 2, 3];

// shallow copy with spread operator
const arr2 = [...arr1, 4];
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]
console.log(arr1 === arr2); // false

// shallow copy with Object.assign()
const obj1 = {a: 1, b: 2};
const obj2 = Object.assign({}, obj1);
console.log(obj1); // {a: 1, b: 2}
console.log(obj2); // {a: 1, b: 2}
console.log(obj1 === obj2); // false

// shallow copy with Object.assign() and adding new property
const obj3 = Object.assign({}, obj1, {c: 3});
console.log(obj1); // {a: 1, b: 2}
console.log(obj3); // {a: 1, b: 2, c: 3}
console.log(obj1 === obj3); // false

// Nested Arrays and Objects
arr2.push([5, 6]);
console.log(arr2); // [1, 2, 3, 4, [5, 6]]
const arr3 = [...arr2, 10];
console.log(arr3); // [1, 2, 3, 4, [5, 6], 10]
arr3[4].push(7);
console.log(arr3); // [1, 2, 3, 4, [5, 6, 7], 10]
console.log(arr2); // [1, 2, 3, 4, [5, 6, 7]]
// 중첩이 된 부분은 얕은 복사 x, 참조값을 복사하기 때문에 원본이 바뀌면 복사본도 바뀜