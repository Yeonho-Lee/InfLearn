// var - function-level scope
function func(){
    if(true){
        var a = 10;
    }
    console.log(a);
}

func();
// function level -> Error
//console.log(a);


// let, const - block-level scope
function func2(){
    if(true){
        let a = 3;
        console.log(a);
    }
    console.log(a);
    // 참조 불가능 -> Error
}
func2();