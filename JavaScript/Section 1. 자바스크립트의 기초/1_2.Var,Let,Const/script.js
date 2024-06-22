
// var - 선언 여러번, 재할당 가능!!
// let - 선언 한번, 재할당 가능
// const - 선언 한번, 재할당 불가능

// var
var greeting = "hello";
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you?';
console.log(greeting);

// let
let greeting2 = "hello";
console.log(greeting2);

// let greeting2 = 'hi';
// SyntaxError: Identifier 'greeting2' has already been declared
console.log(greeting2);

greeting2 = 'how are you?';
console.log(greeting2);

//