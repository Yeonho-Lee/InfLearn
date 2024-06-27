# this 키워드
## 1. Method 내에서의 this
해당 객체를 가리킴 (참조)
```js
const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}
audio.play(); // play this, audio object
```
```js
audio.stop = function() {
    console.log('stop this', this);
}
audio.stop(); // stop this, audio object
```


## 2. 함수에서의 this
window 객체를 가리킴
- 화살표 함수에서의 this는 항상 상위 스코프의 this를 가리킨다.
```js
function playAudio(){
    console.log(this);
}
playAudio(); // Window Object
```

## 3. constructor 내에서의 this
그 객체를 가리킴
```js
function Audio(title){
    this.title = title;
    console.log('constructor this', this);
}
const myAudio = new Audio('My Audio');
```
<br>

#### +)
```js
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
```