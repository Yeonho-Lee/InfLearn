// map
const arr1 = [1, 2, 3, 4, 5];
const map1 = arr1.map(function(item, index, array) {
    console.log(item, index, array, this); // 1 0 [1, 2, 3, 4, 5] {a: "a"}
    return item * 2;
}, {a: 'a'} );

console.log(map1); // [2, 4, 6, 8, 10]

// filter
const arr2 = [1, 2, 3, 4, 5];
const filter1 = arr2.filter(function(item, index, array) {
    console.log(item, index, array, this); // 1 0 [1, 2, 3, 4, 5] {b: "b"}
    return item > 2;
}, {b: 'b'} );

console.log(filter1); // [3, 4, 5]

// reduce
const arr3 = [1, 2, 3, 4, 5];
const reduce1 = arr3.reduce(function(accumulator, item, index, array) {
    console.log(accumulator, item, index, array, this); // 0 1 0 [1, 2, 3, 4, 5] {c: "c"}
    return accumulator + item;
}, 0 );

console.log(reduce1); // 15