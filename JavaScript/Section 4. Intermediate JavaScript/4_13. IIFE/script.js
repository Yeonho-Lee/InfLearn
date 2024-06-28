/* (function () {
    var aName = "Cody";
}());
// IIFE 내부에서 정의된 변수는 외부에서 접근할 수 없다.
console.log(aName); // ReferenceError: aName is not defined */

/* var result = (function () {
    var name = "Cody";
    return name;
}());
console.log(result); // Cody

var func = function(){
    var n = 10;
    return n;
}
console.log(func); // 함수 전체가 출력됨
console.log(func()); // 10

var result2 = (function (a, b){
    return a+b;
})(2, 4);
// IIFE 내부에서 바로 호출
// 6
console.log(result2); // 6 */

// 심화 예제
/* const score = () => {
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
// 매번 다른 함수를 불러와서 그런데,,, 즉시 실행 함수를 사용하면  된다.


const score2 = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})();

console.log(typeof score2); // object
console.log(score2); // { current: [Function: current], increment: [Function: increment], reset: [Function: reset] }
console.log(score2.current()); // 0
score2.increment(); // count = 1
score2.increment(); // count = 2
console.log(score2.current()); // 2 */

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
