## 함수에서 this 사용 => window 객체를 가리킴
이거를 다른 객체를 가리키게 하고 싶을 때?
#### bind, call, apply

## call
call 메서드: 
함수를 호출하는 함수, 첫번째 매개변수를 전달해주면, 호출되는 함수의 this 안에 window 객체가 아닌 전달받은 것을 반게 된다.

바로 호출 + 인수

```javascript
// Call();
const fullName = function (){
    console.log(this.firstName + ' ' + this.lastName);
}
fullName(); // undefined undefined
// this -> Window Object

const person = {
    firstName: 'John',
    lastName: 'Doe',
}
fullName.call(person); // John Doe
// this -> person Object
```
## apply
바로 호출 + 인수는 array로

```javascript
// 2. Apply();
const fullName = function (city, country){
    console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country);
}
fullName(); // undefined undefined
// this -> Window Object

const person = {
    firstName: 'John',
    lastName: 'Doe',
}
fullName.apply(person, ['Oslo', 'Norway']); // John Doe
// this -> person Object
```

## bind
함수 호출 x, binding만!
따로 호출 해줘야 함
```javascript
// 3. Bind();
function func(language){
    if (language === 'kor'){
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}

const greetings = {
    korGreeting: '안녕하세요',
    engGreeting: 'Hello',
}
func.bind(greetings)('kor');
// const bound = func.bind(greetings);
// bound('kor'); // language: 안녕하세요
```