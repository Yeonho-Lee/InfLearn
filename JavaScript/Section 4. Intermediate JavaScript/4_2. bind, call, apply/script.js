/* // 1. Call();
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
// this -> person Object */

/* // 1-2. Call();
const fullName = function (city, country){
    console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country);
}
fullName(); // undefined undefined
// this -> Window Object

const person = {
    firstName: 'John',
    lastName: 'Doe',
}
fullName.call(person, 'Oslo', 'Norway'); // John Doe
// this -> person Object */

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