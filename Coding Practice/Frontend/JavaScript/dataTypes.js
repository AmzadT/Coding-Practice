//  Data Types in Java-Script

//  data types is an important concept in any programing language, to perform any task with the data, it is import to know it's type:

//  1. primitive data type
//  Example:- string,('' / "") Number,(2,10) Boolean,(true/false) Null, Undefiend, BigInt, Symbol:

//  2. refrence data type/Non primitive data type
//  Example:- Object, array, Function:


//  Primitive Data Type:-


//  String data type:- in java-script, a string a sequence of zero or more charecters.
//  A string starts and ends with either a single quote ('') or a double quote ("").
//  Java-script strings are for storing and manipulating text.

//  var num = 10;
//  check data type (operator):- console.log(typeof num) / console.log(typeof(num)).

//  Undefined data type:- If a variable is declared but the value is not assigned, then the value of that variable will be undefined. and the data type is also undefined:
//  Example:- var name;

//  Null data type:- In the java-script, null is a special value that represent empty or unknown value:
//  The type should be "null" but it says the typeof is Object. (it is a known bug in Java-Script):
//  Example:- var number = null; (typeof number) :- Ans- Object.

//  java-script defines that null is equal to undefined:
//  Example:- console.log(null == undefined):- Ans- true.

//  NaN Means:- Not a Number:


//  Refrence Data Type/Non Primitive Data Type:-


//  Object data type:-  In java-script, an object is a collection of properties. 
//  where each property is defined as a (Key-value pair):

//  Example:- var obj = {};  // declare a Object.


//  Array Data Type:-  array are a type of object that stores a collection of values:

//  Example:- var arr = [1,2,"Amzad",true];  //  (typeof arr):- Ans-Object


//  Function Data Type:-  functions are a object that can be used to execute code:

//  Example:- function msg(a,b) <-- Parameters
// {
      // Here write our code...
// }
//  msg("Amzad",22) <-- Arguments


//  Java-Script is a dynamically typed language, so we can use store different data-type in the same variable: