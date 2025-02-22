//  ** HIGHER-ORDER-FUNCTION-NOTES **



// Callback functions
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
// Lets take a look at an example to see what this means in more detail.
// Example:-
function sum(x, y, callBack){
    var total = x + y
    callBack(total)
}

var print = function(toPrint){
    console.log(toPrint)
}

sum(4, 5, print)
// Output: 9



// Higher Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// Here are some commonly used inbuilt methods for arrays.
array.forEach()
array.map()
array.filter()
array.reduce()

// forEach:
// The forEach() method executes a provided function once for each array element.
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
names.forEach(function(element){
    console.log(element)
})
// Nrupul
// Albert
// Sid
// Aman


// map:
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
newNames = names.map(function(element, index){
    return [element ,index]
})
console.log(newNames)
// [ ["Nrupul", 0], ["Albert", 1], ["Sid", 2], ["Aman", 3] ]

// The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.


// filter:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var names = ['Nrupul', 'Albert', 'Sid', 'Aman']
newNames = names.filter(function(element, index){
    return element.length>4
})
// console.log(newNames)
// [ "Nrupul", "Albert" ]



// reduce:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
array = [1, 2, 3, 4, 5]
array.reduce(function(a,c){
    return a + c
})
// 15



// ### **Function Statement:**

// - The function statement declares a function. A declared function is “saved for later use”, and will be executed later, when it is invoked (called).
function javascript(){
		console.log("Welcome to JS")
}
javascript()


// ### **Function expression:**

// - functions are like heart to JavaScript, beautiful feature of a function is that you can assign it to a variable.
var b = function(){
		console.log("Welcome to JS")
}

b()


// ### **Anonymous function :**

// - A function without a name is called anonymous function
// - Anonymous functions are used as values , i.e. you can use it to assign it to some variables. In the above snippet the function which we assign to variable b is an anonymous function



// HOF

var print = function(msg){
    console.log(msg);
}

function print(msg){
   console.log(msg);
}

function sum(x,y,callBack){
    var total = x+y;
    callBack(total);
}

sum(10,5,print);



//  forEach :-

var number = [1,2,3,4,5];  //  ["mango","apple","banana",guava];

// number.forEach(function(element){  //  in forEach you can pass only One-(1) parameter mandetory.
//     console.log(element);
// })

//  you can do some operations here...
number.forEach(function(element){  //  if you pass here 2nd parameter it will work only for the (indexing) and if you pass 3rd parameter then it will work for only hole array, output will be there with array as it is.
    console.log(element*2);
})



//  map :-

var arr = ['1','2','3','4','5'];

arr.map(function(ele){
    return Number(ele);  //  here converting string to Number
})

console.log(arr);



//  filter :-

var arr = ['1','2','3','4','5'];

var num = arr.filter(function(ele){
    return true;  //  return only Boolean value either (true / false)  and you can put any Conditional Statement here (ele%2==0) -- (ele.length > 3) something like that.
})

console.log(num);



//  reduce :-

var number = [1,2,3,4,5];
var items = ["mango","apple","banana","guava"];

var arr = number.reduce(function(acc,ele){
    return acc+ele;
},0)

console.log(arr);  //  The reduce function return only one value.


var arr = items.reduce(function(acc,ele){
    return acc+ele+",";
},"")

console.log(arr);






// Arrow function :-

//  An Arrow function in JavaScript is a concise way of writing the function expression, Ekma-Script-6 (ES6).

// Syntax :-
var MyFunction = (name) =>{
    return name;
}
console.log(MyFunction("Amzad"));

var MyFunction = (abc) =>{
    var sum = abc+5;
    return sum;
}
console.log(MyFunction(10));


//  when only one parameter is present and one line of code is present inside the Arrow function.
var double = x => x*2;
console.log(double(10));


var sum = (a,b) => a+b;
console.log(sum(20,10));


//  function statement / function declaretion :-

//  A declared function, saved for future use that's called function declaretion.

function Print(){
    console.log("Hello Amzad");
}
Print();


//  function expression :-

//  function can be assigned a any variable that's called function expression.

var MuFunction = function(){
    console.log("Hello World");
}
MuFunction();



//  CallBack Function :-

var MyFunction = function(){
    console.log("My Name is");
}

function print(func,name){
    func();
    console.log("Amzad",name);
}
print(MyFunction,"Hussain");  // here MyFunction function is passed as an argument inside print function.

// A function which is passed as an argument to another function so that you can use it latter in code, it is called a CallBack Function.  (here MyFunction is the CallBack function).

//  A function that take another function as an argument or return a function that's called Higher Order Function-(HOF).  (here print function is Higher Order Function).


// Double Array Element.
function double(x){
    return x*2;
}

function MyFunction(arr,transform){
   var output = [];

   for(var i=0; i<arr.length; i++)
   {
      var result = transform(arr[i]);
      output.push(result);
   }

   console.log(output);
}

MyFunction([1,2,3,4,5],double);  // here map() function emplementation.


// For any mathematical operations, i can use map() function.

//  map() :-  map() is a Higher Order Function, it is used to transform each element of an array. by applying a provided function to it. it returns a new Array.

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

var arr = [1,2,3,4,5];

var result = arr.map(function(element){  // 1st parameter is represent all the elements of the array, and 2nd parameter is represent for indexes.
    return element * 2;
})

console.log(result);


var ans = arr.map(ele => ele * 2)
console.log(ans);



var array = [1, 4, 9, 16];

// Pass a function to map
var result = array.map((ele) => ele * 2);

console.log(result);
// Expected output: Array [2, 8, 18, 32]



//  For any Conditions/conditinal operations, i can use filter() function.

//  filter() :- filter() function create a new array containing all the elements that we can pass a given conditions.

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

var arr = [1,2,3,4,5,6];

var result = arr.filter(function(ele){   // 1st parameter is represent all the elements of the array, and 2nd parameter is represent for indexes.
    return ele % 2==0;
})

console.log(result);


var ans = arr.filter((ele => ele%2==0))
console.log(ans);


//  forEach() :- forEach() function same as a map() function but it does not returns a new array.

// The forEach() method of Array instances executes a provided function once for each array element.

var arr = [1,2,3,4,5];

var result = arr.forEach(function(ele){
    return ele*2;
})

console.log(result);

var ans = arr.forEach(ele => ele*2)
console.log(ans);


//  reduce() :-  reduce() function work is Addition/Multiplication/Subtraction/Division of an array.

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

var arr = [1,2,3,4,5];

var sum = arr.reduce(function(acc,cur){
    return acc + cur;
},0)

console.log(sum);

var arr = [1,2,3,4,5];

var sum = arr.reduce(function(acc,cur){
    return acc * cur;
},1)

console.log(sum);


var sum1 = arr.reduce((acc,cur) => acc+cur,0)
console.log(sum1);


// extract the length of string from an array of string

var arr = ["Amzad","Amir","Imran","Vicky"];

var result = arr.map(ele => ele.length)
console.log(result);


// capitalize the first latter of each words in an array.

var word = ["hello","amzad","tanu"];

var capital = word.map(ele => ele[0].toUpperCase() + ele.slice(1))
console.log(capital);


// calculate the total price of products that are in stock and price should be greater than or equal to (>=) 10.

var products =
[
    {name: "Apple", price: 15, stock: true},
    {name: "banana", price: 8, stock: true},
    {name: "mango", price: 12, stock: false},
    {name: "cherry", price: 5, stock: false},
    {name: "papaya", price: 16, stock: true},
];

var result = products.filter(ele => ele.price >= 10 && ele.stock == true).map(ele => ele.price).reduce((acc,curr) => acc + curr,0)

console.log(result);