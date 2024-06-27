# 함수 표현식과 함수 선언의 차이
### Function Expression vs Function Declaration

## 1. 함수 표현식 (Expression)
함수 표현식은 함수를 만들고 만든 함수를 변수에 할당하는 것이다. 함수 자체는 익명이다.
```js
const calcRectArea = function (width, height){
    return width * height;
}
console.log(calcRectArea(5, 6)); // 30
```

## 2. 함수 선언 (Declaration)
함수 선언은 함수를 만들고 그 함수에 이름을 지정하는 것이다.
function 키워드 다음에 함수의 이름을 작성하여 함수 이름을 선언한다.
```js
function calcRectArea (width, height){
    return width * height;
}
console.log(calcRectArea(5, 6)); // 30
```
<BR>

## 차이점
- **함수 표현식** 은 호이스팅에 영향을 받지 않음
- **함수 선언**은 호이스팅에 영향을 받음
```JS
console.log(foo1()); // Cannot access 'foo1' before initialization
let foo1 = function(){
    return 10;
}

console.log(foo2()); // 10
function foo2(){
    return 10;
}
```

### 참고자료
[함수 표현식 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function)
[함수 선언 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function)