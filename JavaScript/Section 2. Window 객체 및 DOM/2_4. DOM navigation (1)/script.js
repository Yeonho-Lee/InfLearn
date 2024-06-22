let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

// console.log(list);
// console.log(listItem);

val = list.childNodes; // NodeList
val = list.childNodes[0]; // #text
val = list.childNodes[0].nodeName; // text
val = list.childNodes[0].nodeType; // 3
val = list.childNodes[1].nodeType; // 1
// Node Type
// 1 - Element, 2 - Attribute, 3 - Text
// 8 - Comment, 9 - Document itself, 10 - Doctype

//children element nodes 반환
val = list.children; // HTMLCollection 실제 node만 반환 / line break 포함 x
val = list.children[0]; // li
val = list.children[1]; // li
list.children[1].textContent = 'Hello World';

// First child
val = list.firstChild; // #text
val = list.firstElementChild; // li
// Last child
val = list.lastChild; // #text
val = list.lastElementChild; // li
// Count child elements
val = list.childElementCount; // 5


// Get parent node
val = listItem.parentNode; // ul
val = listItem.parentElement; // ul - 얘는 똑같음
val = listItem.parentElement.parentElement; // div
console.log(val); // 여기서 나오는 line break도 child로 나옴