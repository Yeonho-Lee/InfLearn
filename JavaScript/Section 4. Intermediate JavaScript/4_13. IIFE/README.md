# IIFE (즉시 실행 함수)
### Immediately Invoked Function Expression
즉시 실행 함수 표현 (IIFE, Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 Javascript Function을 말한다.

## 기본 형태
```js
 ( function (){
    // 함수 내용
 })();

 (() => {
    // 함수 내용
 })();

 (async () =>{
    //함수 내용
 })();
```
위 방식들을 [Self-Executing Anonymous Function](https://developer.mozilla.org/ko/docs/Glossary/Self-Executing_Anonymous_Function) 으로 알려진 디자인 패턴이고, 크게 두 부분으로 구성됨.
1. `Grouping Operator ()` 안에 둘러싸인 익명함수이다. 이 괄호는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지하고, IIFE 안으로 다른 변수들이 접근하는 것을 막는다.
2. 두번재 괄호는 즉시 실행함수를 생성하는 괄호이다. 이를 통해 자바스크립트 엔진이 함수를 즉시 해석하고 실행한다.

## IIFE를 왜 사용하는가?
변수를 전역으로 선언하는 것을 피하기 위해서, 그리고 IIFE 내부 안으로 다른 변수들이 접근하는 것을 막기 위해서 사용한다.

## 예제
1. IIFE 내부에서 정의된 변수는 외부에서 접근할 수 없다.
```js
(function () {
    var val = 10;
}());
console.log(val);
// ReferenceError: aName is not defined */
```

2. IIFE를 변수에 할당하면 함수 자체가 저장되는 것이 아니라, 실행된 결과가 저장된다.
```js
var result = (function () {
    var val = 10;
    return val;
}());
console.log(result); // 10
```
기본 함수 선언과 비교해서 생각해보자.
```js
var result = function(){
    var val = 10;
    return val;
}
console.log(result); // 함수 전체가 출력됨
console.log(result()); // 10
```
## 심화 예제
1. IIFE를 변수에 할당하면 함수 자체는 저장되지 않고, 함수가 실행된 결과만 저장된다.
```js
// 그냥 일반 함수
const score = () => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
}
console.log(typeof score); // function
console.log(score); // [Function: score]
console.log(score().current()); // 0
score().increment(); // count = 1
score().increment(); // count = 1
console.log(score().current()); // 0
```
매번 다른 함수를 불러오기 때문에, 생각한 대로의 결과가 나오지 않는다.
이 함수가 object처럼 값을 저장하기를 원할 때, IIFE를 사용하면 된다.
```js
const score2 = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})();

console.log(typeof score2); // object
console.log(score2);
// { current: [Function: current], increment: [Function: increment], reset: [Function: reset] }
console.log(score2.current()); // 0
score2.increment(); // count = 1
score2.increment(); // count = 2
console.log(score2.current()); // 2
```
2. IIFE로 Closure가 가능하게 만든 후게 내부 함수에서 외부함수에 있는 변수에 접근이 가능하다.
```js
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => {counter ++; number(counter);}
})();

console.log(increment); // [Function]
increment(); // it is 1 number
increment(); // it is 2 number
```


### 참고 자료
[IIFE - MDN](https://developer.mozilla.org/ko/docs/Glossary/IIFE)