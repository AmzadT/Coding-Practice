// In JavaScript, falsy values are values that are considered false when evaluated in a Boolean context. There are 7 falsy values:

// false - The Boolean value false itself.
// 0 - The number 0 (zero).
// -0 - The negative zero (rarely used, but still falsy).
// "" - An empty string ("" or '').
// null - Represents the absence of any value.
// undefined - A variable that has been declared but not assigned a value.
// NaN - Not-a-Number, results from invalid numeric operations like parseInt("abc").





// Truthy Values
// Any value that is not falsy is considered truthy, such as:

// Non-zero numbers (1, -1, 3.14)
// Non-empty strings ("Hello", "0", "false")
// Arrays ([])
// Objects ({})
// true


undefined == null // true
undefined === null // false


function test(arg1, arg2) {
  console.log(arguments);
}

console.log(test.length); // 2

// hoisting
var x = 100;
function test2() {
  var x = (i = 10);
}
test2();
console.log(x, i); // 100 10

// promises (3 states)
// 1. fulfilled
// 2. rejected
// 3. pending

function sleep(time) {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      return reject(new Error("argument must be a number"));
    }
    setTimeout(() => {
      resolve("Done");
    }, time);
  });
}

sleep(1000)
  .then((res) => {
    console.log(res, "done after 1 second");
  })
  .catch((err) => console.log(err));

const name = ["amzad", "hussain"];
name[0] = "Amzad";
console.log(name);

var person = {
  name: "amzad",
  age: 21,

  getNameES6: () => console.log(this.name),

  getNameES5: function () {
    console.log(this.name);
  },
};

person.getNameES6(); // undefined
person.getNameES5(); // amzad

// prototype inheritance
function Rectangle(hight, width) {
  this.hight = hight;
  this.width = width;

  Rectangle.prototype.getArea = function () {
    return this.hight * this.width;
  };
}

var box = new Rectangle(10, 20);
console.log(box);
console.log(box.getArea());

// class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

var box1 = new Rectangle(10, 20);
console.log(box1);
console.log(box1.getArea());


var arr = [1,2,3,4,5]

function display(i) {
  setTimeout(() => console.log(this[i], i), i * 1000);
}

for(var i=0; i<arr.length; i++){
    display.call(arr, i)
}



// 1st way
var str = 'key,value,pair,javaScript'
var arr = str.split(',')
var obj = {}
obj[arr[arr.length-1]] = {}

for(var i= arr.length-2; i>=0; i--){
    obj[arr[i]] = {...obj}
    delete obj[arr[i+1]]
}

console.log(obj)


// 2nd way recursion
var str = 'key,value,pair,javaScript'
var arr = str.split(',')
var obj = {}

function recursion(arr, i=0, obj={}){
   console.log(i, arr[i])
   if(i === arr.length){
       return obj
   }else{
       return {[arr[i]] : recursion(arr, i+1)}
   }
}

console.log(recursion(arr))



// IIFE --> (Immediately Invoked Function Expression)
(function() {console.log('Hello Amzad')})()




// 1. Given an array of strings ["apple", "windows", "ubuntu"] print the length of each string.
const strings = ["apple", "windows", "ubuntu"];
strings.forEach(str => console.log(str.length));


// 2. Given an array of string generate an array with their first characters
//     Sample Input - ["Masai", "School"]
//     Sample Output - ["M", "S"]
const inputStrings = ["Masai", "School"];
const firstCharacters = inputStrings.map(str => str[0]);
console.log(firstCharacters); // Output: ["M", "S"]



// 3. Given an array of numbers generate an array with their square
//     Sample Input - [1, 2, 3, 4, 5]
//     Sample Output - [1, 4, 9, 16, 25]
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]



// 3. Given an array of string generate an array whose first or last character is (a) 
// Sample Input - ["assignment", "problem" "media", "upload"]
// Sample Output - ["assignment", "media"]
const inputStrings2 = ["assignment", "problem", "media", "upload"];
const filteredStrings = inputStrings2.filter(
  str => str[0] === 'a' || str[str.length - 1] === 'a'
);
console.log(filteredStrings); // Output: ["assignment", "media"]




// 1. Primitive Data Types
// Primitive data types represent simple and immutable values.

// 2. Non-Primitive (Reference) Data Types
// Non-primitive data types are objects used to store collections of data or more complex entities.

// Summary
// Type	Category	Examples
// Number	Primitive	42, 3.14
// String	Primitive	"hello", 'world'
// Boolean	Primitive	true, false
// Undefined	Primitive	undefined
// Null	Primitive	null
// Symbol	Primitive	Symbol('id')
// BigInt	Primitive	12345678901234567890n
// Object	Non-Primitive	{ name: "Amzad", age: 21 }
// Array	Non-Primitive	[1, 2, 3]
// Function	Non-Primitive	function() { console.log("Hi"); }
// Date	Non-Primitive	new Date()
// Map, Set	Non-Primitive	new Map(), new Set()




// Primitive Data Types
// Primitive data types are the basic, immutable building blocks of JavaScript. They include simple values like Number, String, Boolean, Undefined, Null, Symbol, and BigInt. These values are stored directly in memory and cannot be changed.

// Non-Primitive Data Types
// Non-primitive data types are complex and mutable, like Object, Array, and Function. They store collections of data or operations and are accessed by reference instead of storing the value directly.



// What is hoisting
// Hoisting is a JavaScript feature where variables and function declarations are lifted to the top of their containing scope, making them accessible before they are defined.

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are declared in the code.



// Why is Hoisting Important?

// Hoisting allows for more flexible coding but can lead to unexpected behaviors if you're not careful.
// Understanding hoisting helps debug issues like undefined variables or ReferenceError.