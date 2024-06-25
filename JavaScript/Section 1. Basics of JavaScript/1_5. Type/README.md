# 자바스크립트 타입
- 원시 타입
    - Boolean, String, Number, null, undefined, Symbol
    - 콜 스택에 저장이 된다.
- 참조 타입
    - Object, Array, function, classes
    - 힙에 저장이 되고, 주소가 콜 스택에 저장이 된다.

## 자바스크립트는 동적 타입

```
let foo = 42;
foo = 'bar'
foo = true

console.log(typeof foo);
```



