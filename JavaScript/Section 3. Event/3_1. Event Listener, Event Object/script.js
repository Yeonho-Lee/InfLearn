// window.onload = function() {
//     let text = document.getElementById('text');
//     text.innerText = 'HTML LOADED!';
// }

// const aElement = document.querySelector('a');
// aElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('You clicked the link!');
// });

const buttonElement = document.querySelector('.btn2');
buttonElement.addEventListener('click', function(event) {
    let val;
    val = event.target;
    console.log(event);
});