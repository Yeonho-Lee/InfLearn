let val;
// ------------------------------------
// Type Conversion
// by function
// ------------------------------------

// Number to String
val = 111;
val = String(111);

// Bool to String
val = true;
val = String(true);

// Date to String
val = new Date();
val = String(new Date());

// Array to String
val = [1, 2, 3];
val = String([1, 2, 3]); // -> 1,2,3

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = '5';
val = Number('5');
val = Number(true); // -> 1
val = Number(false); // -> 0
val = Number(null); // -> 0
val = Number('hello'); // -> NaN
val = Number([1, 2, 3]); // -> NaN
val = Number('3.14'); // -> 3.14
val = parseInt('100.30'); // -> 100
val = parseFloat('100.30'); // -> 100.3

// ------------------------------------
// Type Conversion
// automatically
// ------------------------------------

const val1 = 2;
const val2 = '3';
const sum = val1 + val2; // -> 23



console.log(val);
console.log(typeof val);
console.log(val.length);