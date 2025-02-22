//  ** INBUILT FUNCTIONS - CLASS NOTES **


//  Inbuilt functions are also known as built-in functions or native functions, these functions are already defined. and always available for use.

//  without requiring the programmer to the write their own implementation.



//  The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//  converting Array to String:-  join();
//  Ex:-
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"




//  The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//  Ex:-
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


function MyJoin(arr,separator)
{
  let result = "";

  for(let i = 0; i < arr.length; i++)
    {
      result += arr[i]
      if( i !== arr.length - 1)
      {
        result += separator
      }
    }
  console.log(result)
}

MyJoin(['Fire', 'Air', 'Water'],"-");


let arr = ["A","B","C","D","E"];
// end is not included
console.log(arr.slice(1,4));
console.log(arr.slice(2));
console.log(arr.slice(-1));





// split
let str = "I am a student";
let Arr = str.split(" ")

console.log(Arr[2])





//  Local and Global variables :-

//global scope

let globalVar = 10;

function myFunction()
{
  // console.log(globalVar);
}
myFunction()

// local scope

function myFunction2()
{
  let localVar = 5; // local scope
  console.log(localVar);
}

myFunction2()
console.log(localVar)