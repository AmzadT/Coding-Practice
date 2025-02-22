//  ** FUNCTIONS-NOTES **

// function:- A function is block of code that perform the specific tasks.
// functions in JavaScript are reusable blocks of code that can be called from anywhere in your program.

// function Declaration:-
function MyFunction()
{
    console.log("Amzad Hussain");
}
MyFunction();



// Parameters and Arguments :-
// Parameters are the variables that are declare in the function definition, while Arguments are the values that are passed to the function when it is called.
function MyFunction(FirstName,LastName)  //  Parameters
{
   console.log("Hello "+FirstName+" "+LastName);
}
MyFunction("Amzad","Hussain");  //  Arguments








// create a function that check if the number is odd or even

function even_odd(num)
{
  if(num % 2 == 0)
{
  console.log("Even")
}
else
{
  console.log("Odd");
}
}

even_odd(5);
even_odd(10);
even_odd(20);



//create function odd_even and check the number till given limit
// 1 to 10 

function check_evenOdd(num)
{
  if(num % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function check_prime(number)
{
  // logic
}


for(let i = 1; i <= 10; i++)
{
  let result = check_evenOdd(i) // true or false
  let result2 = check_prime(i)

  if(result2 == true)
  {
    console.log(i,"is prime")
  }
  else
  {
    console.log(i,"is not prime")
  }

  if(result == true)
  {
    console.log(i,"is even");
  }
  else
  {
    console.log(i,"is odd");
  }
}




// write a function to replace space with -
// input -- masai school
// output -- masai-school

function char(str)
{
  let bag = "";

  for(let i = 0; i < str.length; i++)
    {
      if(str[i] == " ")
      {
        bag = bag + "-";
      }
      else
      {
        bag = bag + str[i];
      }
    }

  console.log(bag);
}

char("masai school")
char("hello bye")  




// create a function check if the char is smallcase or not
// input -- z
// output -- small case

// input --- B
//output --- not small case

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

let char = "z";
let str = "apple" // APPLE

for(let i = 0;  i < 26; i++)
{
  // logic
}







//  Callback Function :-

// A Callback is a function passed as an argument to another function.

// A Callback function can run after another function has finished.

function Dishplay(result)
{
  console.log(result);
}

function Add(num1,num2,MyCallBack)
{
  var sum = num1 + num2;
  MyCallBack(sum);
}

Add(10,5,Dishplay);  // output = 15



//  Anonymous Function :-

// Anonymous functions in JavaScript, are functions that are not Declared with a name.

// function (parameter)
// {
//    write code here...
// }


// function()
// {
//   console.log("Hello JavaScript");
// }
// ();

(
  function()
  {
    console.log("Amzad Hussain");
  }
)();


//  Function Expression / Anonumous Function :-

var sum = function(x,y)
{
  return x+y;
}

var result = sum(10,15);
console.log(result);


setTimeout(function(){
  console.log("Hello Amzad");
},2000)



//  Recursive Functions :-

// A Recursive function in JavaScript is a function that calls itself.

function MyFunction()
{
  if(conditions)
  {
    MyFunction();
  }
  else
  {
    // Stop Calling Recursion
  }
}

MyFunction();


function countDown(num)
{
  console.log(num);
  num--;

  if(num>=0)
  {
    countDown(num);
  }
}

countDown(10);







// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value

 function absDiff(diff)
 {
if(diff < 0)
  {
    return -diff;
  }
  else
  {
    return diff;
  }
}

function print(a,b)
{
  var sub = a - b;
  var result = absDiff(sub);
  console.log(result);
}

print(4,12)




var diff = 5-10;

if(diff < 0)
{
  console.log(-diff);
}
else
{
  console.log(diff);
}



var diff = 5-10;

if(diff < 0)
{
  console.log(-1(diff));
}
else
{
  console.log(diff);
}




// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

var Str = "APPLE"; // apple
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"

var Ans = "";
for(var i = 0;  i < Str.length; i++)
  {
    var char = Str[i];
    for(var j = 0;  j < upperCase; j++)
      {
        if(char == upperCase[j])
        {
          Ans += lowerCase[j];
          break;
      }
  }
  }
console.log(Ans);





// Sample Input ["Ma", "sA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function convertLowerCase(char)
{
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let Newchar = "";
  for(let i = 0;  i < uppercase; i++)
    {
      if(char == uppercase[i])
      {
        Newchar = lowercase[i]
      }
      
    }

  return Newchar;
}

function main(arr)
{
  let output = [];
  for(let i = 0; i < arr.length; i++)
    {
      let str = arr[i];
      let bag = "";
      for(let j = 0;  j < str.length; j++)
        {
          let EachChar = convertLowerCase(str[j])
          bag += EachChar;
        }
      output.push(bag);
    }
  console.log(output)
}

main(["MA", "SA", "I", "SCH", "OOL"]);




// For Only one character 
function convertLowerCase(char)
{
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let Newchar = "";
  for(let i = 0;  i < uppercase; i++)
    {
      if(char == uppercase[i])
      {
        Newchar = lowercase[i]
      }
      
    }

  return Newchar;
}

console.log(convertLowerCase("A"));