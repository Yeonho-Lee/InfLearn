console.log(greeting);
//var greeting = "hello";
// undefined -> hoisting
// declaration -> initialization
// declaration -> undefined값을 자동으로 넣어줌

func(); // -> hoisting -> 함수 선언부만 끌어올려짐
function func(){
    console.log('hoisting');
}


//let greeting = "hi";
// hoisting -> 초기화가 되지 않음
// 중간 단계를 TDZ(Temporal Dead Zone)이라고 함
// SyntaxError: Cannot access 'greeting' before initialization

//const greeting = "how are you?";
// let 과 동일
