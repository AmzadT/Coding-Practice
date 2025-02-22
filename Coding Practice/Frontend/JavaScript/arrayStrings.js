// array used to store and manipulate collection of data/element in the array, they can store string,boolean,number.


// in JavaScript, a string is a sequence of characters enclosed within either single (' ') or double (" ") quotes.  You can wrote whatever, inside the ("") quotes that will be a string.


// strings are immutable we cannot change the any character of string.

//  Array Length:- the length property of an array returns the number of Element in the array:

//  Array push Method:-  the push() method adds new items to the End of an Array:

//  Array pop Method:-  the pop() method removes the last Element from an array:



//  ARRAY:-  CLASS-NOTES

//  The data structure, is a storage that is used to store and organize data in a manner ways. it is a Way of arranging data on a computer so that it can be accessed and updated efficiently.

//  Array:-  array used to store and manipulate collection of element, they can use/store any datatype values inside the Array.
//  Ex:-  string, boolean, number


//  Index:-  indexing always start from (0)

//  How we can change any value in the Array ?

//  You can replace a specific element in an array by accessing its index and assigning a new value.
//  Ex:-  var array = ["cat","dog","Animals","elephant"];
//        array[2] = "Amzad";


//  Array Length:-

//  The Length property of an array it will returns the number of elements in the array.
//  Ex:-  (array.length)


//  How to access the last element of an array ?

//  we can use this (array.length-1) it will gives you the last element of an array.


//  (\n):-  it will break the line and comes to the new line our output;
//  console.log("Amzad \n Hussain")


//  var str = "Amzad Hussain";
//  console.log(str.length) =  output = 13 (spaces is also be a string and it is counting if you write anything inside the ("") quotes).

//  console.log(st[0]) --> output = A (1st latter)
//  console.log(str[str.length-1]) --> output = n (last latter)

//  string index start from (0)

//  how to check/print last element/index -->  (array.length - 1)


//  string are imutable we cannot change the charector of string.

var name = "Amzad";
name[0] = "B";  //  we cannot change
console.log(name);




var arr = ["chunnu" , "munnu", "Pablo"];

// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[0][1])
// console.log(arr1[0].length-1)
// console.log(arr1[1].length)

// how I can find the total length of all the words present in the array

var sum = 0;

for(var i = 0; i<arr.length; i++)
  {
    sum = sum + arr[i].length
  }
console.log(sum)




// n JavaScript, a string is a sequence of characters enclosed within either single (' ') or double (" ") quotes

// var str = "Hello World";

// newline  \n
// console.log("Hello\nWorld");

// length of string

// console.log(str.length)

// index of string start from 0

// access the character of string 
// console.log(str[str.length - 1])


// strings are immutable we cannot change the character of string

var name = "Amzad";
// name[0] = "T";

// console.log(name)

var bag = "";

for(var i = 0; i<name.length; i++)
  {
    if(name[i] == "s")
    {
      bag += "T";
    }
    else
    {
      bag += name[i];
    }
  }

console.log(bag)
console.log(name)





// var item1 = "book";
// var item2 = "pen";
// var item3 = "pencil";
// var item4 = "eggs";
// var item5 = "oranges";

//arrays :-  used to store and manipulate collection of element, they can store string,boolean,number.


// access the element of array--array[index]
// console.log(array[4]);
//how we can change the value in array

// arr[2] = "eraser";
// console.log(array)

//total no. element in the array == length of the array

// console.log(abc.length)
// how to access the last element of array

// var length = arr.length;

// console.log(arr[length - 1])


// var farmhouse = ["egg","chicken"]

// length --  2
// last element index --- 1

// access the last element 

// var length = farmhouse.length
// console.log(farmhouse[length - 1])

// var arr = ["book","pen","pencil","eggs","oranges"];

// arr.push("apples","watermelon") // add multiple at the last
// console.log(arr)

// arr.pop() // only last element will get removed
// arr.pop()
// console.log(arr)


var names = ["Amzad", "Vicky", "Imran", "Amir", "Sahid"];
var count = 0;

for(var i=0; i<names.length; i++)
{
	var name = names[i];
	for(var j = 0; j<name.length; j++)
	{
		if(name[j]=='a' || name[j]=='A')
		{
			count++;
			break;
		}
	}
}
console.log(count);





// find the maximum No in the array 

var arr = [4,6,8,7];  
var max = -Infinity;

for(var i = 0; i < arr.length; i++)
  {
    if(max < arr[i])
    {
      max = arr[i];
    }
  }

console.log(max)





// find the minimum No in the array 

var arr = [4,6,8,7];  
var min = Infinity;

for(var i = 0; i < arr.length; i++)
  {
    if(min > arr[i])
    {
      min = arr[i];
    }
  }

console.log(min)





// Given a character in Lower-Case print the Upper-Case character
var str = "a"; // ouput = A

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(var i = 0; i< lowerCase.length; i++)
  {
    if(lowerCase[i] == str)
    {
       str = upperCase[i]
    }
  }

console.log(str)





// Given an array of numbers find the average of all the even numbers.

// find the number which are even
// sum of even number
// count the even number
// find the average = sum of even number / count of even number

var sum = 0;
var count = 0;

var numbers = [1,6,4,5] // array of number

for(var i = 0; i < numbers.length; i++)
  {
       // console.log(numbers[i])
    
    if( numbers[i] % 2 == 0)
    {
      sum += numbers[i]  
      count++
      
    }
  }
// console.log(sum / count)