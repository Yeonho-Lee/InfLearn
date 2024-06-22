/* let val;

val = window.document;
val = document.baseURI; // 현재 URL
val = document.URL; // 현재 URL

val = document.title; // 문서 제목
val = document.head;
val = document.body;

val = document.all; // HTMLCollection
val = document.all[0]; // <html>
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].classList;

val = document.scripts;
val = document.scripts[1].getAttribute('src');

console.log(val); */


const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';
headerContainer.textContent = 'Hello World';
headerContainer.innerText = 'Goodbye World';
headerContainer.innerHTML = '<h1>Hello World</h1>';


const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.color = 'red';
items[1].textContent = 'Hello 2';

let list = document.getElementsByTagName('li');
Array.from(list).forEach((item, index)=> {
    item.textContent =  `${index}. item`
});
console.log(list); // 위와 같은 애들이 들어가 있음

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach((item) => {
    item.style.background = '#f4f4f4';
});