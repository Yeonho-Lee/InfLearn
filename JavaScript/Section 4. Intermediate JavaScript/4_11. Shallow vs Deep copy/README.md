# Shallow Compare (얕은 비교)
- 원시 자료형: 값 비교
- 참조 자료형: 위치 비교
```js
let [a, b] = [1, 1];
console.log(a == b); // true
```
```js
let [a, b] = [1, '1'];
console.log(a == b); // true
console.log(a === b); // false
```
```js
let a = [1, 2];
let b = [1, 2];
console.log(a == b); // false
console.log(a === b); // false
```

# Deep Compare (깊은 비교)
- 객체의 경우에도 값으로 배교
- 방법은 아래와 같음
    - Object depth가 깊지 않은 경우: JSON.stringify() 사용
    - Object depth가 깊은 경우: lodash 라이브러리의 isEqual() 사용

```js
const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```