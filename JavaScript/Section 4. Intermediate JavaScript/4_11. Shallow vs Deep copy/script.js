/* // shallow copy
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
// 중첩이 된 부분은 얕은 복사 x, 참조값을 복사하기 때문에 원본이 바뀌면 복사본도 바뀜 */


// 얕은 동결 (shallow freeze)
/* const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};
//Object.freeze(obj1); // 얕은 동결
obj1.a = 10;
console.log(obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 30;
console.log(obj1); // {a: 1, b: 2, c: {d: 30, e: 4}} */

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

/* obj1.a = 10; // obj1.a의 값이 10으로 변경됨
console.log("First log:", JSON.parse(JSON.stringify(obj1)));
// 현재 상태를 문자열로 변환하여 깊은 복사 후 로그 출력
// {a: 10, b: 2, c: {d: 3, e: 4}}

obj1.c.d = 30; // obj1.c.d의 값이 30으로 변경됨
console.log("Second log:", JSON.parse(JSON.stringify(obj1)));
// 현재 상태를 문자열로 변환하여 깊은 복사 후 로그 출력
// {a: 10, b: 2, c: {d: 30, e: 4}} */

/* // 깊은 복사 (Deep Copy)
// JSON.parse(JSON.stringify()); 이용
const newObj = JSON.parse(JSON.stringify(obj1));
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
console.log('newObj', newObj); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 10;
console.log('obj1', obj1);
console.log('newObj', newObj);  // newObj는 obj1의 변경에 영향을 받지 않음 */

// deep copy with nested spread operator
const newObj2 = {...obj1, c: {...obj1.c}};
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
console.log('newObj', newObj2); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 10;
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 10, e: 4}}
console.log('newObj', newObj2); // newObj는 obj1의 변경에 영향을 받지 않음