// arr.forEach((item, index) => {
//     var row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${index+1}</td>
//         <td>${item.title}</td>
//         <td>${item.priority}</td>
//         <td><button onclick="deleteTodo(${index})">Delete</button></td>
//     `;
//     tBody.appendChild(row);
// });

console.log(1 * 2 * 3 * 4 * 5 * 6); // 720
console.log(2 ** 3); // 15
console.log(3 ** 4); // 81
var sum = 1 * 1 + 2 * 2 + 3 * 3;
console.log(sum);

var X = 3;
X = X * 3 + 10;
console.log(X);

console.log(7 ** 2);

console.log(1 * 2 + 2 * 2 + 3 * 2 + 4 * 2 + 5 * 2);

var a = 1 + 1 + (2 + 2) + 3 * 3 + (4 + 4);
console.log(a);

console.log(22 * 6);

console.log(6 * 7 * 7);

// infinity stones
var a = 2 + 2 + (5 + 5) + (6 + 6);
var b = 3 + 3 + 3 + (4 + 4 + 4);
var c = 1;

console.log(a + b + c);

// update & compare
var num1 = 4;
var num2 = 8;
var num3 = 5;

if (num1 > num2) {
  console.log(true);
} else {
  console.log(false);
}

num1 = num1 + num3;

if (num1 > num2) {
  console.log(true);
} else {
  console.log(false);
}

// rectangle area and parameter
var L1 = 1;
var B1 = 2;
var L2 = 2;
var B2 = 3;
var a = L1 * B1;
var b = L2 * B2;
console.log(a > b);

var c = L1 + B1;
var d = L2 + B2;
console.log(c > d);

console.log(2 ** 3 > 3 ** 2);

// operator (==);  only check the value don't care for the  datatype :
// (===) operator; check both value and datatype are same or not :

// The if statement executes a block of code only when a specified condition is true. If it is false it executes the else statement.
// for example:-
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}

// Else-If Statement:
// The else if statement allows you to check for another condition.

// NOT operator
// The ! operator returns false when the input is true. It returns true when the input is false.

// Note: This is an unary operator which means it only has one input
// Example:
// !true
// !false
// Output:
// false
// true

// get discount problem
var total_bill = 699;
var start_discount_price = 500;
if (total_bill >= start_discount_price) {
  console.log("discount available");
} else {
  console.log("discount not available");
}

//  check the charector vowel or not :
//   a,e,i,o,u

var ch = "t";

if (ch == "a") {
  console.log("a is vowel");
} else if (ch == "e") {
  console.log("e is vowel");
} else if (ch == "i") {
  console.log("i is vowel");
} else if (ch == "o") {
  console.log("o is vowel");
} else if (ch == "u") {
  console.log("u is vowel");
} else {
  console.log("not a vowel");
}

//  given total bill:

//  total bill;

//  gerater than, 500  10% discount applied
//  greater than,  1000  20% discount applied
//   otherwise     no discount available

var total_bill = 799;

if (total_bill > 1000) {
  console.log("20% discount applied");
} else if (total_bill > 500) {
  console.log("10% discount applied");
} else {
  console.log("No Discount Available");
}

//  Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".

var Year_Of_Birth = 2000;
var Age = 2024 - Year_Of_Birth;

if (Age >= 18) {
  console.log("Apply for License");
} else {
  console.log("NA");
}

//  Problem 1: If the number is divisible by 3, print a "multiple of 3".

var number = 15;
var reminder = number % 3;

if (reminder == 0) {
  console.log("multiple of 3");
} else {
  console.log("not a multiple of 3");
}

//  Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

var stored_user = "amzadhussain7250@gmail.com";
var stored_password = "amzad1212";

var input_user = "amzadhussain7250@gmail.com";
var input_password = "amzad1212";

if (input_user == stored_user) {
  if (input_password == stored_password) {
    console.log("Valid Login");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Coudn't Find Your Account");
}

//  check weather amzad is pased or not, where passing marks is 35:

var amzad_marks = 36;
var passing_marks = 35;

var result = amzad_marks > passing_marks;

console.log(result);

var option = 3;

switch (option) {
  case 1:
    console.log("Day 1 : Scrum + Coding");
    break;

  case 2:
    console.log("Day 2 : Scrum + Coding + Skillathon");
    break;

  case 3:
    console.log("Day 3 : Scrum + Skillathon + Standups");
    break;

  default:
    console.log("Holiday");
    break;
}



// cube and square
var a = n**2;
var b = m*3;

if(a>b)
{
    console.log(true);
}
else
{
    console.log(false);
}







// Logical Operators

// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)

//  1st way:

var gender = "male";
var age = 20;

if(gender == "male" && age >= 21)
{
  console.log("male : can get marry");
}
else if(gender == "female" && age >= 18)
{
  console.log("female : get marry");
}
else
{
  console.log(gender,"can't get marry");
}


//  3rd way:
var A = (gender == "male" && age >= 21);
var B = (gender == "female" && age >= 18);

if(A || B)
{
  console.log("can get marry");
}
else
{
  console.log("can't get marry");
}


//   case 5: "\n"
var a = 2;
var b = "hello";
console.log(a,"\n",b);


// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var yob = 2000;
var age = 2023-yob

if(age >= 13 && age <= 19)
{
  console.log("Teenage");
}
else if(age >= 20 && age <= 29)
{
  console.log("Twenties");
}


// Problem 2 : Given any character, if it is a vowel print "Vowel"
// vowel a,e,i,o,u :
//  1st way :
var ch = "i";

if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" )
  
{
  console.log("Vowel");
}
else
{
  console.log("Not Vowel");
}


//  2nd way:
var char = "i";

switch(char)
  {
    case "a" : console.log(" its a vowel");
               break;
      
    case "e" :console.log(" its a vowel");
               break;
      
    case "i" :console.log(" its a vowel");
               break;
      
    case "o" :console.log(" its a vowel");
               break;
      
    case "u" : console.log(" its a vowel");
               break;
      
    default  : console.log("not vowel");
               break;
}


//  Problem 4: Given 3 numbers (all different values), print which is greatest
var a = 3;
var b = 5;
var c = 10;

if((a>b) && (a>c))
{
  console.log("A is Greater");
}
else if((b>a) && (b>c))
{
  console.log("B is Greater");
}
  
else if((c>a) && (c>b))
{
  console.log("C is Greater");
}
else
{
  console.log("Both Are Equal");
}  



// Problem 2 : Given any character, if it is a vowel print "Vowel"
// vowel a,e,i,o,u :
var ch = "i";

if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ){
  console.log("Vowel");
}
else{
  console.log("Not Vowel/Consonant");
}


// Problem 3 : Given and character if it is a consonant print "Consonant"
var ch = "t";

if((ch != "a") && (ch != "e") && (ch != "i") && (ch != "o") && (ch != "u"))

{
  console.log("Consonant");
}
else
{
  console.log("Not Consonant");
}


// switch statement
var option = 3;

switch(option)
{
  case 1 :
           console.log("Day 1 : Scrum + Coding");
           break;

  case 2 :
           console.log("Day 2 : Scrum + Coding + Skillathon");
           break;

  case 3 :
           console.log("Day 3 : Scrum + Skillathon + Standups");
           break;

  default :
           console.log("Holiday");
           break;
}


const freq = {};

    // Count the frequency of each character
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Separate frequencies into odd and even
    const oddFreq = [];
    const evenFreq = [];

    for (let key in freq) {
        if (freq[key] % 2 === 1) {
            oddFreq.push(freq[key]);
        } else {
            evenFreq.push(freq[key]);
        }
    }

    // Find the maximum difference
    let maxDiff = -Infinity;
    for (let odd of oddFreq) {
        for (let even of evenFreq) {
            maxDiff = Math.max(maxDiff, odd - even);
        }
    }

    return maxDiff;