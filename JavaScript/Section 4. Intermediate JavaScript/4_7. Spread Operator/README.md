# 전개 연산자 (Spread)
전개 연산자는 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용한다.
연산자의 모양은 '...' 이렇게 생겼다.

## 배열에서의 사용
#### Concatenation
```js
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8, 9];
const totalArray = array1.concat(array2, array3);

console.log(totalArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const totalArray2 = [...array1, ...array2, ...array3];
console.log(totalArray2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
arr3.push(...arr4);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```
<br>

## 객체에서의 사용
```js
const obj1 = {
  a: 'A',
  b: 'B'
};

const obj2 = {
  c: 'C',
  d: 'D'
};

const objWrap = { obj1, obj2 };
console.log(objWrap);

// 출력 결과
/*
{
  obj1: {
    a: 'A',
    b: 'B'
  },
  obj2: {
    c: 'C',
    d: 'D'
  }
}
*/
```
``` js
const obj1 = {
  a: 'A',
  b: 'B'
};

const obj2 = {
  c: 'C',
  d: 'D'
};

const objWrap = { ...obj1, ...obj2 };
console.log(objWrap);

// 출력 결과
/*
{
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
}
*/
```