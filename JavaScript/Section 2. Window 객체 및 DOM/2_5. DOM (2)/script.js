let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

// next sibling
val = listItem;
val = listItem.nextSibling; // #text
val = listItem.nextElementSibling; // li
val = listItem.nextElementSibling.nextElementSibling; // li

// previous sibling
val = listItem.previousSibling; // #text
val = listItem.previousElementSibling; // null
val = listItem.nextElementSibling.previousElementSibling; // li
// 원래 item


console.log(val); // 여기서 나오는 line break도 child로 나옴