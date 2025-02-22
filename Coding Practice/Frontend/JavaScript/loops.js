

// Loops in JavaScript

// in programming language Loops are used to repeat task a block of code. if you want to display a message 100 times, the we can simply use a Loop.


// 1. For Loop

// for(var i=0; i<=100; i++)
// {
//     console.log(i);
// }


// 2. While Loop

// var i = 0;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }


// 3. Do While Loop

// var i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5)



// Break / Continue


// break:-  The "break", statement is used to terminate/stop the loop immediately.

// Continue:- The "continue", statement is used to skip the current iteration of the loop and the control flow of the program goes to the nest iteration.



//  Coercion :-  The automatic process that convert values from one DataType To another Datatype that is called (Coercion) //




// for...in

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

var object = { a: 1, b: 2, c: 3 };

for (var key in object) {
  console.log(`${key}: ${object[key]}`);  // hare template literal use.
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"



// for...of

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

var array = ['a', 'b', 'c'];

for (var element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



// The class declaration creates a binding of a new class to a given name.

class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
console.log(new Polygon(4, 3).area);
// Expected output: 12


// A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly braces") and contains a list of zero or more statements and declarations.

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1





// The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

var i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3




// The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42




// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

var text = '';

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"





// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

var result = '';
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"




// An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

var array1 = [1, 2, 3];

// Assign all array values to 0
for (var i = 0; i < array1.length; array1[i++] = 0 /* empty statement */);

console.log(array1);
// Expected output: Array [0, 0, 0]



// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

var str = '';

for (var i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"





// The function declaration creates a binding of a new function to a given name.

function calcRectArea(width, height) {
    return width * height;
}
  
console.log(calcRectArea(5, 6));
// Expected output: 30



// The return statement ends function execution and specifies a value to be returned to the function caller.

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0





// The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}



// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

var n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3


// var
var x = 1
if(x==1){
    var x = 2
    console.log(x)  // 2
}
console.log(x)  // 2


// let
let x = 1
if(y==1){
    let x = 2
    console.log(x)  // 2
}
console.log(x)  // 1





//  LOOPS:- CLASS NOTES

//  1.  Starting Point (Initialization)
//  2.  Ending Point (Conditions)
//  3.  Write Our Code
//  4.  Increment/Decrement


//  while loop :-

var num = 1;

while(num<=10){
    console.log("Amzad Hussain");
    num++;
}



// break-->  it will absolutely stop the Loops.

//  continue-->  skip the below code and it will start/move to the next inc/dec step.


//  for loop :-

// print masai 5 times using for loop

for(var i = 1; i <= 5; i++)
{
console.log("Amzad");
}



// print the number which are divisible by 2 and 5 in between 1 to 10

for(var i = 1; i<= 20; i++)
{
    if( i % 2 == 0  && i % 5 == 0)
    {
      console.log(i);
    }
}




var num = 5;
while(num > 0 )
{
  console.log(num);
  num--;
}




// find the even number in limit 0 - 6 both included

var i = 0;

while( i <= 6)
  {
    i++
    if( i % 2 == 0)
    {
      console.log(i);
 
    }
}



// sum of number from 1 to 5 

var sum = 0;
var i = 1;

while( i <= 5 )
  {
    sum = sum + i;
    // console.log(sum);
    i++
  }
console.log(sum);




// print the average of odd number from 1 to 5 (both included)

// find the odd number 
// calc. the sum of odd
// calculate average = sum of odd number/count of odd number

var i = 1;
var sum = 0;
var count = 0;

while( i <= 5)
  {
    if( i % 2 == 1)
    {
      sum = sum + i;
      // sum += i
      count++
      
    }
    i++
  }

console.log(sum/count);




// print numbers in horizontal line  1 - 5

var str = "";

for(var i = 5; i >=1; i--)
  {
    str += i + " ";
  }
console.log(str)




// break

for(let i = 1; i <= 5; i++)
  {
   
   console.log(i)

     if(i == 4)
    {
     continue;
    }

  }

// find the product of number  1 to 5

var product = 1;

for(var i = 1; i <= 5; i++)
  {
    product *= i;
  }
console.log(product);