Basic JavaScript Questions
1. What is JavaScript?
Answer: JavaScript is a scripting language used to create dynamic web pages. It runs in the browser and can manipulate HTML & CSS.

Example:

js
Copy
Edit
console.log("Hello, JavaScript!");
2. What are the different data types in JavaScript?
Answer: JavaScript has 8 data types:

Primitive Types:
string
number
boolean
undefined
null
bigint
symbol
Non-Primitive Type:
object (includes arrays and functions)
Example:

js
Copy
Edit
let name = "Amzad";   // string
let age = 22;         // number
let isDev = true;     // boolean
let skills = ["HTML", "CSS", "JS"]; // array (object)
3. What is the difference between let, const, and var?
Answer:

var – Function-scoped, can be redeclared.
let – Block-scoped, cannot be redeclared.
const – Block-scoped, cannot be reassigned.
Example:

js
Copy
Edit
var x = 10;  // Can be redeclared
let y = 20;  // Block scoped
const z = 30; // Cannot be reassigned
4. What is the difference between == and ===?
Answer:

== checks value only (loose equality).
=== checks value and type (strict equality).
Example:

js
Copy
Edit
console.log(5 == "5");  // true (only checks value)
console.log(5 === "5"); // false (checks type too)
5. What are arrow functions?
Answer: Arrow functions provide a shorter syntax for writing functions.

Example:

js
Copy
Edit
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
6. What is the difference between null and undefined?
Answer:

null means empty or intentional absence of value.
undefined means a variable is declared but not assigned a value.
Example:

js
Copy
Edit
let x;  // undefined
let y = null; // null
7. What is a callback function?
Answer: A function passed as an argument to another function.

Example:

js
Copy
Edit
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Amzad", sayBye);
8. What is an Immediately Invoked Function Expression (IIFE)?
Answer: A function that executes immediately after declaration.

Example:

js
Copy
Edit
(function () {
  console.log("IIFE executed!");
})();
9. What is event delegation in JavaScript?
Answer: Event delegation allows handling events on a parent element instead of individual child elements.

Example:

js
Copy
Edit
document.getElementById("parent").addEventListener("click", function (event) {
  console.log("Clicked on:", event.target.tagName);
});
10. How does setTimeout work in JavaScript?
Answer: setTimeout executes a function after a specified delay.

Example:

js
Copy
Edit
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
Intermediate JavaScript Questions
11. What is the difference between synchronous and asynchronous JavaScript?
Answer:

Synchronous: Code executes line by line.
Asynchronous: Some operations (like API calls) execute in the background, allowing the code to continue running.
Example:

js
Copy
Edit
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");
// Output: Start → End → Async Task
12. What is the difference between map(), forEach(), and filter()?
Answer:

map() returns a new array with modified values.
forEach() iterates over an array but does not return a new array.
filter() returns a new array with elements that pass a condition.
Example:

js
Copy
Edit
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
numbers.forEach(num => console.log(num * 2)); // Prints doubled values but does not return array
const even = numbers.filter(num => num % 2 === 0); // [2, 4]
13. What is the difference between apply(), call(), and bind()?
Answer:

call() – Calls a function with arguments passed individually.
apply() – Calls a function with arguments in an array.
bind() – Returns a new function with this bound.
Example:

js
Copy
Edit
function greet(city) {
  console.log(`Hello, ${this.name} from ${city}`);
}

const user = { name: "Amzad" };
greet.call(user, "Delhi");
greet.apply(user, ["Mumbai"]);
const boundGreet = greet.bind(user, "Kolkata");
boundGreet();
14. What is localStorage and sessionStorage?
Answer:

localStorage – Stores data permanently (until manually cleared).
sessionStorage – Stores data only for the session (clears when the tab is closed).
Example:

js
Copy
Edit
localStorage.setItem("name", "Amzad");
console.log(localStorage.getItem("name")); // Amzad
sessionStorage.setItem("sessionData", "Temporary");
15. How to deep copy an object in JavaScript?
Answer: Use JSON.parse(JSON.stringify(obj)) or structured cloning.

Example:

js
Copy
Edit
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
