// array methods

// forEach --> like normal for loop iteration, (add, mul, div, subs)
var numbers = [1,2,3,4,5]
numbers.forEach((ele)=>{
    console.log(ele*2)
})


// Callback functions --> A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
function sum(x, y, callBack){
    var total = x + y
    callBack(total)
}

var print = function(toPrint){
    console.log(toPrint)
}
sum(4, 5, print) // 9



// Higher Order Functions --> Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// Here are some commonly used inbuilt methods for arrays.
// array.forEach()
// array.map()
// array.filter()
// array.reduce()
// each of these takes an argument.


// forEach(): --> The forEach() method executes a provided function once for each array element.
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
names.forEach(function(element){
    console.log(element)
})
// Nrupul
// Albert
// Sid
// Aman



// map(): --> The map() method creates a new array with the results of calling a provided function on every element in the calling array.
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
newNames = names.map(function(element, index){
    return [element ,index]
})
console.log(newNames)
// [ ["Nrupul", 0], ["Albert", 1], ["Sid", 2], ["Aman", 3] ]

// The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.



// filter(): --> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
newNames = names.filter(function(element, index){
    return element.length>4
})
console.log(newNames)
// [ "Nrupul", "Albert" ]



// reduce(): --> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
array = [1, 2, 3, 4, 5]
array.reduce(function(a,c){
    return a + c
})
// 15







// arrow function 
var double = x => x*2
console.log(double(5)) // 10

// sum
var sum = (a,b)=> a+b
console.log(sum(2,3)) // 5


// function statement
function Print(){
    console.log('Amzad')
}


// function expression --> A function can be assigned to a variable
var Print = function(){
    console.log('Amzad')
}
Print() // Amzad


// CALLBACK FUNCTION --> A function which is passed as an argument to another function so that we can use it later, that is called callback function.

// HIGHER ORDER FUNCTION --> A function that is take a another function as an argument or return a function that is called higher order function.


// map() --> map is a higher order function, It is used to transform each elements of an array. By applying a provided function to it. It returns a new array.
var arr = [1,2,3,4,5]
var result = arr.map(ele => ele*2)
console.log(result)



// filter() --> filter function creates a new array containing all the elements that pass a given condition.
var arr = [1,2,3,4,5]
var result = arr.filter(ele => ele%2==0)
console.log(result)



// forEach() --> It is same as map() but it does not return a new array.
var arr = [1,2,3,4,5]
arr.forEach((ele)=>{
    console.log(ele)
})



// reduce() --> It is use for any mathematical operations like (add, mul, sub, div), It returns a single value.
var arr = [1,2,3,4,5]
var sum = arr.reduce((acc, curr)=>{
    return acc + curr
}, 0)
console.log(sum)



// extract the length of the strings form an array of string
var arr = ['amzad', 'tanu', 'munmun']
var strLength = arr.map(ele => ele.length)
console.log(strLength)



// capitalize the first letter of each words in an array.
var arr = ['amzad', 'tanu', 'munmun']
var result = arr.map(ele => ele[0].toUpperCase() + ele.slice(1))
console.log(result)