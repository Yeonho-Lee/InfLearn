// element 생성
const li = document.createElement('li');

// class 추가하기
li.className = 'list-group-item';
// id 추가하기
li.id = 'new-item';
// attribute 추가하기
li.textContent = 'Hello World';
li.setAttribute('title', 'New Item');

// link element 생성
const link = document.createElement('a');
li.appendChild(link);
link.className = 'alarm-item';

link.innerHTML = '<i class="bi-alarm"></i>';

// parent element 연결하기
const ul = document.querySelector('ul.list-group');
ul.appendChild(li);

console.log(ul);