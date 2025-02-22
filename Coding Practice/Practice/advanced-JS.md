1. What is the difference between undefined and not defined?
Answer:

undefined means the variable is declared but not assigned a value.
not defined means the variable was never declared.
Example:

js
Copy
Edit
let a;
console.log(a);  // undefined
console.log(b);  // ReferenceError: b is not defined
2. What are higher-order functions in JavaScript?
Answer: A function that takes another function as an argument or returns a function.

Example:

js
Copy
Edit
function higherOrder(fn) {
  return fn();
}

higherOrder(() => console.log("Hello from HOF!"));
3. What is a pure function in JavaScript?
Answer: A function that returns the same output for the same input and has no side effects.

Example:

js
Copy
Edit
function add(a, b) {
  return a + b; // No side effects
}

console.log(add(2, 3)); // 5
4. Explain this in JavaScript.
Answer:

Global scope → this refers to window in browsers.
Inside objects → this refers to the object.
Inside functions → this depends on the caller.
In arrow functions → this is inherited from the surrounding scope.
Example:

js
Copy
Edit
const obj = {
  name: "Amzad",
  show: function () {
    console.log(this.name);
  },
};

obj.show(); // "Amzad"
5. What is the prototype chain in JavaScript?
Answer: Every object in JavaScript has a prototype, and prototypes form a chain.

Example:

js
Copy
Edit
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.name}`);
};

const user = new Person("Amzad");
user.sayHello(); // "Hello, I am Amzad"
6. What is the difference between shallow copy and deep copy?
Answer:

Shallow Copy → Only copies references for nested objects.
Deep Copy → Creates a completely new copy of the object.
Example:

js
Copy
Edit
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 3;

console.log(original.b.c); // 3 (shallow copy affects original)

const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 4;

console.log(original.b.c); // 3 (deep copy does not affect original)
7. What is function currying?
Answer: Transforming a function that takes multiple arguments into a sequence of functions, each taking one argument.

Example:

js
Copy
Edit
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // 6
8. What is memoization?
Answer: A technique to optimize performance by caching results of expensive function calls.

Example:

js
Copy
Edit
function memoizedAdd() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}

const add = memoizedAdd();
console.log(add(5)); // Calculating result → 15
console.log(add(5)); // Fetching from cache → 15
9. Explain event delegation.
Answer: Instead of adding event listeners to multiple elements, we add a single listener to a parent element and use event.target.

Example:

js
Copy
Edit
document.getElementById("parent").addEventListener("click", function (event) {
  console.log("Clicked on:", event.target.tagName);
});
10. What is the difference between map(), forEach(), and reduce()?
Answer:

map() → Returns a new array.
forEach() → Iterates over elements but does not return a new array.
reduce() → Returns a single accumulated value.
Example:

js
Copy
Edit
const nums = [1, 2, 3];

const mapped = nums.map(n => n * 2); // [2, 4, 6]
nums.forEach(n => console.log(n * 2)); // Prints each doubled number
const sum = nums.reduce((acc, n) => acc + n, 0); // 6
11. What is debouncing in JavaScript?
Answer: Limits the rate at which a function executes.

Example:

js
Copy
Edit
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const log = debounce(() => console.log("Debounced!"), 500);
log();
12. What is throttling?
Answer: Ensures a function executes at most once in a given time period.

Example:

js
Copy
Edit
function throttle(func, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func(...args);
      flag = false;
      setTimeout(() => (flag = true), limit);
    }
  };
}

const logThrottled = throttle(() => console.log("Throttled!"), 1000);
logThrottled();
13. Explain Promise.all() and Promise.race().
Answer:

Promise.all() waits for all promises to resolve.
Promise.race() returns the first resolved or rejected promise.
Example:

js
Copy
Edit
const p1 = new Promise(res => setTimeout(() => res("P1 done"), 2000));
const p2 = new Promise(res => setTimeout(() => res("P2 done"), 1000));

Promise.all([p1, p2]).then(console.log); // ["P1 done", "P2 done"]
Promise.race([p1, p2]).then(console.log); // "P2 done"
14. What is an async/await function?
Answer: A way to write asynchronous code in a synchronous manner.

Example:

js
Copy
Edit
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}
fetchData();
15. What is the Temporal Dead Zone (TDZ)?
Answer: The phase where let and const are declared but not initialized.

Example:

js
Copy
Edit
console.log(x); // ReferenceError
let x = 10;
16. Explain WeakMap and WeakSet.
Answer:

WeakMap → Keys are only objects and garbage-collected when not referenced.
WeakSet → Stores unique object values and also garbage-collects.
17. What is Object.freeze()?
Answer: Prevents modification of an object’s properties.

18. What are generators in JavaScript?
Answer: Functions that can pause execution and resume later using yield.

Example:

js
Copy
Edit
function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2



Advanced JavaScript Questions
16. What is closure in JavaScript?
Answer: A function that remembers variables from its outer function even after the outer function has finished executing.

Example:

js
Copy
Edit
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
17. What is the event loop in JavaScript?
Answer: It handles asynchronous operations by continuously checking the call stack, callback queue, and microtask queue.

18. What is the difference between shallow copy and deep copy?
Answer:

Shallow copy copies only references.
Deep copy creates a completely independent copy.
19. What is this keyword in JavaScript?
Answer: Refers to the object that is calling the function.

Example:

js
Copy
Edit
const obj = {
  name: "Amzad",
  show() {
    console.log(this.name);
  },
};
obj.show(); // Amzad
20. How to handle errors in JavaScript?
Answer: Use try...catch.

Example:

js
Copy
Edit
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);
}
