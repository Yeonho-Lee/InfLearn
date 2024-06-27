/* // Method
// this -> Object
const audio = {
    title: 'My Audio',
    play() {
        console.log('play this', this);
    }
}
audio.play(); // audio object
// 위와 같음
audio.stop = function() {
    console.log('stop this', this);
}
audio.stop(); // audio object



//Function
// this -> Window Object
function playAudio(){
    console.log(this);
}
playAudio(); // Window Object */


// Constructor Function
// this -> this Object
function Audio(title){
    this.title = title;
    console.log('constructor this', this);
}
const myAudio = new Audio('My Audio'); // Audio {title: "My Audio"}


const audio = {
    title: 'My Audio',
    categories: ['rock', 'pop'],
    displayCategories(){
        this.categories.forEach(function(category){
            console.log(this.title, 'category', category);
            // 여기에서의 this는 window object를 가리킨다.
        });
    }
}
audio.displayCategories();

// 화살표 함수에서의 this
// 항상 상위 스코프의 this를 가리킨다.
// lexical this
