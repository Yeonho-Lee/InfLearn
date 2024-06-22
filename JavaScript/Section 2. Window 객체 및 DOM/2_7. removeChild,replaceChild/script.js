// 처음 노드를 지워보자!
// 노드를 지우는 방법은 removeChild() 메서드를 사용하는 것이다.
const listParent = document.querySelector('ul.list-group');

// listParent.removeChild(listParent.children[0]);
// listParent.removeChild(listParent.children[0]);
// -> 둘 다 지워짐!

const list = document.querySelectorAll('li');
//요소 지우기
// listParent.removeChild(list[0]);

//요소 교체하기
const newElement = document.createElement('span');
newElement.className = 'list-group-item';
newElement.textContent = 'New Item';
listParent.replaceChild(newElement, list[0]);
console.log(list);