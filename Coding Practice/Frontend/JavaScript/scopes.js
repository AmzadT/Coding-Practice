// Scoping in JavaScript refers to the accessibility of variables and functions in different parts of your code. It defines where variables, functions, or objects can be accessed or modified.

// Types of Scope in JavaScript
// There are three main types of scope in JavaScript:

// 1. Global Scope
// Variables declared outside of any function or block are in the global scope.
// They can be accessed and modified anywhere in the code.
var globalVar = "I am global!";
function accessGlobal() {
  console.log(globalVar); // Accessible here
}
accessGlobal(); // Output: "I am global!"
console.log(globalVar);  // Output: "I am global!"






// 2. Function Scope (Local Scope)
// Variables declared inside a function using var, let, or const are in function scope.
// These variables are accessible only within the function where they are declared.
function myFunction() {
    var localVar = "I am local!";
    console.log(localVar); // Accessible here
}
myFunction();
console.log(localVar); // Error: localVar is not defined





// 3. Block Scope
// Variables declared inside a block { ... } using let or const have block scope.
// These variables are only accessible inside that block.
// Variables declared with var are not block-scoped; they are hoisted to the function or global scope.
if (true) {
    let blockScoped = "I am block-scoped!";
    const alsoBlockScoped = "Me too!";
    var notBlockScoped = "I ignore block scope!";
    console.log(blockScoped);       // Output: I am block-scoped!
    console.log(alsoBlockScoped);   // Output: Me too!
}
console.log(notBlockScoped); // Output: I ignore block scope!
console.log(blockScoped);    // Error: blockScoped is not defined




// Other Scoping Types (Context-Specific)
// Lexical Scope

// JavaScript uses lexical scoping (or static scoping), meaning a variable's scope is determined by its location in the source code.
// Inner functions can access variables of their parent functions due to the scope chain.
function outer() {
    let outerVar = "I am from outer!";
    function inner() {
      console.log(outerVar); // Accessible here
    }
    inner();
}
outer(); // Output: I am from outer!




// Module Scope

// In ES6 modules, variables declared inside a module are scoped to that module and are not accessible outside unless explicitly exported.
// module.js
const moduleVar = "I am module-scoped!";
export { moduleVar };



// Closures

// Closures are a way to retain access to a variable even after its parent function has executed, leveraging scoping and the scope chain.