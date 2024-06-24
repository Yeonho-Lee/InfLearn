function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}
const newFunction = outerFunction('Out');
console.log("newFunction: ", newFunction);
newFunction('In');


let a = 'a';
function funcA(){
    let b = 'b';
    console.log(a, b);
}
funcA();

/* let a = 'a';
function functionB() {
    let c = 'c';
    console.log(a, b, c);
}

function functionA() {
    let b = 'b';
    console.log(a, b);
    functionB();
}

functionA();
 */

//let a = 'a';


function functionA() {
    let b = 'b';
    console.log(a, b);
    function functionB() { // closure scope
        let c = 'c';
        console.log(a, b, c);
    }
    functionB();
}

functionA();
