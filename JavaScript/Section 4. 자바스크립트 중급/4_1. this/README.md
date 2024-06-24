# this 키워드
## Method 내에서의 this
해당 객체를 가리킴 (참조)
```
const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}
```

## 함수에서의 this
window 객체를 가리킴

## constructor 내에서의 this
빈 객체를 가리킴