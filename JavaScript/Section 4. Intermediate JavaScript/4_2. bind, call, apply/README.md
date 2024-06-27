# Bind, Call, apply
함수에서 this 사용 -> window 객체를 가리킴
**함수에서의 this가 window 객체 대신 다른 객체를 가리키게 하고 싶을 때 사용하는 함수들**

## call
함수를 호출하는 함수, 첫번째 매개변수를 전달해주면, 호출되는 함수의 this 안에 window 객체가 아닌 전달받은 매개변수를 받게 된다.

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
// fullName(person)형태가 아니라 fullName.call(person)형태로 사용!
```

## apply
call과 거의 같음, 추가적인 인수를 array 형태로 전달한다.

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
call, apply와는 다르게 함수 호출을 하지 않고, binding만 해주는 함수이다.
함수 호출은 따로 해줘야 한다.
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
const bound = func.bind(greetings);
bound('kor'); // language: 안녕하세요
// func.bind(greetings)('kor'); 로 한번에 할 수도 있음
```