/* // Method
// this -> Object
const audio = {
    title: 'My Audio',
    play() {
        console.log('play this', this);
    }
}
audio.play();
// 위와 같음
audio.stop = function() {
    console.log('stop this', this);
}
audio.stop();



//Function
// this -> Window Object
function playAudio(){
    console.log(this);
}
playAudio(); // Window Object


// Constructor Function
// this -> Empty Object
function Audio(title){
    this.title = title;
    console.log('constructor this', this);
}
const myAudio = new Audio('My Audio');

 */
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