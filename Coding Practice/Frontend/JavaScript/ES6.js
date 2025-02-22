var str = 'firstLine secondLine'

const [fLine, sLine] = str.split('\n')
console.log(fLine, sLine)


function sum(math=0, hindi=0, science=0){
    return math + hindi + science
}
var total = sum(10, 20)
console.log(total)



// ## `async await`
// The purpose of async/await is to simplify using promises synchronously, and to perform some behavior on a group of Promises


// # `Template literals`
// Template literals are string literals that allow you to embed expressions and values within strings.
// Template literals are enclosed by the back-tick ( ``) or grave accent
// character instead of double or single quotes.


// # `Default values`
// when writing a function, If the values argument given any values, you need to assign default values for arguments that weren’t passed to the function when it was invoked.


// ## Destructuring allows us to extract multiple properties from an object


// Hoisting:
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


// Scope:
// If a variable is declaration is inside a function, then it is said that the variable is defined with function local scope in that function.
// So this variable is accesible in that function, and any of its nested functions.
// Otherwise it has a global scope ie. they are members of the global object.