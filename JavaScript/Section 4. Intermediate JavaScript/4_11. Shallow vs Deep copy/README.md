# Shallow Copy vs Deep Copy (얕은 복사 vs 깊은 복사)
## Shallow Copy (얕은 복사)
중첩된 배열이나 객체가 있다면, shallow copy를 했을 때, 중첩된 부분은 copy가 되지 않는 것을 확인 할 수 있다. (깊은 부분이 복사 X)
- 얕은 복사 이용: spread operation, object.assign, array.from(), slice

#### 얕은 복사 예제
```js
// shallow copy with spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]
```
```js
// shallow copy with Object.assign()
const obj1 = {a: 1, b: 2};
const obj2 = Object.assign({}, obj1);
console.log(obj1); // {a: 1, b: 2}
console.log(obj2); // {a: 1, b: 2}
// shallow copy with Object.assign() and adding new property
const obj3 = Object.assign({}, obj1, {c: 3});
console.log(obj1); // {a: 1, b: 2}
console.log(obj3); // {a: 1, b: 2, c: 3}
```
#### 얕은 복사의 한계
```js
// Nested Arrays and Objects
arr2 = [1, 2, 3, 4];
arr2.push([5, 6]);
console.log(arr2); // [1, 2, 3, 4, [5, 6]]
const arr3 = [...arr2, 10];
console.log(arr3); // [1, 2, 3, 4, [5, 6], 10]
arr3[4].push(7);
console.log(arr3); // [1, 2, 3, 4, [5, 6, 7], 10]
console.log(arr2); // [1, 2, 3, 4, [5, 6, 7]]
// 중첩이 된 부분은 얕은 복사 x, 참조값을 복사하기 때문에 원본이 바뀌면 복사본도 바뀜
```

### Shallow Freeze (얕은 동결)
**Object.freeze() 메서드는 객체를 동결합니다. 동결된 객체는 더 이상 변경될 수 없습니다.** <br> 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. freeze()는 전달된 동일한 객체를 반환합니다.
출처 - [Object.freeze() - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
```js
// 얕은 동결 (shallow freeze)
const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};
Object.freeze(obj1); // 얕은 동결
obj1.a = 10;
console.log(obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 30;
console.log(obj1); // {a: 1, b: 2, c: {d: 30, e: 4}}
```
이때 실제 예상값과 다르게 처음 로그도 d: 30으로 출력이 될 수 있다. 이는 브라우저 콘솔이 객체를 참조로 출력하기 때문인데, 그 객체의 내용이 나중에 변경되면 콘솔에 표시된 내용도 변경된 값을 반영할 수 있기 때문이다. 이와 관련하여 객체가 큰 경우나 디버깅 과정에서 혼란을 초래할 수 있으므로, 이런 경우에 다음과 같이 깊은 복사하여 로그를 출력하면 된다.
```js
const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

obj1.a = 10; // obj1.a의 값이 10으로 변경됨
console.log("First log:", JSON.parse(JSON.stringify(obj1)));
// 현재 상태를 문자열로 변환하여 깊은 복사 후 로그 출력
// {a: 10, b: 2, c: {d: 3, e: 4}}

obj1.c.d = 30; // obj1.c.d의 값이 30으로 변경됨
console.log("Second log:", JSON.parse(JSON.stringify(obj1)));
// 현재 상태를 문자열로 변환하여 깊은 복사 후 로그 출력
// {a: 10, b: 2, c: {d: 30, e: 4}}
```
<br>

## Deep Copy (깊은 복사)
**깊은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조를 공유하지 않는 복사이다.** <br> 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다. 

출처 - [깊은 복사 - MDN](https://developer.mozilla.org/ko/docs/Glossary/Deep_copy)
#### 깊은 복사 예제
#### JSON.parse(JSON.stringify()) 이용
```js
const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};
const newObj = JSON.parse(JSON.stringify(obj1));
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
console.log('newObj', newObj); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 10;
console.log('obj1', obj1);
console.log('newObj', newObj);  // newObj는 obj1의 변경에 영향을 받지 않음
```
#### spread operator를 이용한 깊은 복사 예시
```js
// deep copy with nested spread operator
const newObj2 = {...obj1, c: {...obj1.c}};
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 3, e: 4}}
console.log('newObj', newObj2); // {a: 1, b: 2, c: {d: 3, e: 4}}
obj1.c.d = 10;
console.log('obj1', obj1); // {a: 1, b: 2, c: {d: 10, e: 4}}
console.log('newObj', newObj2); // newObj는 obj1의 변경에 영향을 받지 않음
```