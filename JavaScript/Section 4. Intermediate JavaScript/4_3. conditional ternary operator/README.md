# Conditional Operator
```javascript
if (a){
    a = 'a';
} else {
    a = 'b';
}
```
대신
```js
a = a? 'a' : 'b';
또는
a? a='a' : a='b';
```
형태로 쓰는 것

#### Conditional chains
이러한 형태도 가능하다. `if ... else if ... else if ... else` chain과 동일하다.
```js
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
```