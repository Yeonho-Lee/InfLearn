# undefined vs null
- 원시 자료형
- undefined 타입은 undefined 값이 유일
- null 타입은 null 값이 유일

## undefined
- '아무 값도 할당받지 않은 상태'를 의미
- 변수를 선언한 이후 값을 할당하지 않은 변수를 출력하면 undefined 반환
- 개발자가 의도적으로 할당 x, 자바스크립트 엔진이 변수를 초기화할 때 사용
```js
let x;
if (typeof x === "undefined") {
  // 이 문이 실행됨
}
```

## null
- 비어있는, 존재하지 않는 값을 의미
- 의도적으로 변수에 값이 없다는 것을 명시하기 위해서 사용
- null을 할당하면 변수가 이전에 참조하던 값을 명시적으로 참조하지 않겠다고 하는 것이므로, 자바스크립트 엔진이 이 변수의 메모리 공간에 대해 가비지 콜렉션을 수행함.
(가비지 콜렉션: 더이상 사용하지 않는 메모리를 자동으로 정리하는 것.)
```js
typeof null; // "object" (하위호환 유지를 위해 "null"이 아님)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
isNaN(1 + null); // false
isNaN(1 + undefined); // true
```