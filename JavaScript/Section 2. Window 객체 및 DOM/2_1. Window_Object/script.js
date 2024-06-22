let val;

val = window.document;

window.alert(1);
val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY; // 세로 스크롤 위치
val = window.scrollX; // 가로 스크롤 위치

val = window.location; // 전체 URL
val = window.location.hostname; // 호스트 이름
val = window.location.href = "http://google.com"; // 페이지 리로드

window.history.forward(); // 앞으로 가기
window.history.back(); // 뒤로 가기

console.log(val);