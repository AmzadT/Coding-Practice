// 1. AND Operator :-  // If any of the statement is false , then the result will be false

// Input (Boolean Value) ——&&-—> Output (Boolean Value)

// True False = False--> 
// False True = False--> 
// False False = False--> 
// True True = True--> 



// [Student Task] Check whether Rahul passed or not For English Subject, Check whether Rahul passed or not.

var subject = "english";
var passing_marks = 70;
var Amzad_marks = 75;
var Amzad_subject = "english";

if((Amzad_subject == subject) && (Amzad_marks >= passing_marks))
{
console.log("Amzad Passed");
}
else
{
console.log("Amzad not passed");
}


// [Student Task] Marriage Problem Gender is male and age ≥ 21 : He can marry Gender is female and age ≥ 18 : She can marry.

var gender = "male";
var age = 21;

if((gender == "male") && (age >= 21))
{
console.log("Male : Can Marry");
}
else if((gender == "female") && (age >= 18))
{
console.log("Female : Can Marry");
}
else
{
console.log(gender,"Can't get Marry");
}




// OR Operator ||

// If any of the statement is true , then the result will be true

// True True True True = True
// True True True False = True
// True True False False = True
// True False True True  = True
// False False False False = False


//  [Marriage Problem]

var gender = "female";
var age = 18;
if((gender == "male" && age>=21) || (gender == "female" && age>=18))
{
console.log(gender,": Can get Married");
}
else
{
console.log(gender,": Can't get married");
}



// Switch Case :-

// Day Schedule [Without Break] -->  (it is like if...if conditions)
var option = 3;
switch(option)
{
    case 1 : console.log("Day 1 : Scrum + Coding");
    
    case 2 : console.log("Day 2 : Scrum + Coding + Skillathon");
    
    case 3 : console.log("Day 3 : Scrum + Skillathon + Standups");
    
    default : console.log("Holiday");
    
}


// Day Schedule [ with Break ] -->  (it is like if...else-if conditions)
var option = 3;
switch(option)
{
    case 1 :  console.log("Day 1 : Scrum + Coding");
              break;
    case 2 :  console.log("Day 2 : Scrum + Coding + Skillathon");
              break;
    case 3 :  console.log("Day 3 : Scrum + Skillathon + Standups");
              break;
    default : console.log("Holiday");
              break;
}




//  Ternary Operator:-  Condition ? true statement : false statement

var num = 10;
console.log(num==10 ? "Yes" : "No");

console.log(5>7 ? true : false);


//  Logical Operators:-  it can Perform one and more boolean values operations (true and false)

//  1.  And Operator (&&)
//  2.  Or operator (||)
//  3.  Not Operator (!)

//  AND Operator (&&):-  if it is any one conditions/statements are false then all the condition/statement will get false.

//  OR operator (||):-  if it is any one conditions/statements are true then all the condition/statement will get true.

//  NOT Operator (!):-  true = false  and  false = ture




var dream_mobile = "iphone";

var electronic_store = "onePlus";

if(electronic_store == dream_mobile)
{
  console.log("I will shop");
}
else
{
  console.log("I will not shop");
}


// Ternary Operator
// condition ? true statement : false statement

console.log(electronic_store == dream_mobile ? "I will shop" : "I will not shop");

console.log( 5 > 7 ? "correct" : "not correct")



// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var dob = 1999;
var age = 2023 - 1999;

if( age >= 13 && age <= 19)
{
  console.log("Teenage");
}
else if(age >= 20 && age <= 29)
{
  console.log("Twenties");
}



// Problem 2 : Given any character, if it is a vowel print "Vowel"
// a e i o u

var str = "i";
if( str == "a" || str == "e" || str == "i" || str == "o" || str == "u")
{
  console.log("Vowel")
}



// Problem 4: Given 3 numbers (all different values), print which is greatest

var a = 40;
var b = 90;
var c = 70;

if( a > b  && a > c)
{
  console.log("A is the greatest");
}
else if(b > a && b > c)
{
  console.log("B is the greatest");
}
else
{
  console.log("C is the greatest")
}

// Ternary Operator use:-
console.log(a > b && a > c ? "A" : b > a && b > c ? "B" : "C")




var FanOn = false;

if (FanOn) {
  FanOn = !FanOn;
  console.log("Turning off the fan.");
} else {
  FanOn = !FanOn;
  console.log("Turning on the fan.");
}

// Ternary Operator use:-
console.log("The fan is now " + (FanOn ? "on." : "off."));



console.log( 5 > 7 && 4 > 3)

console.log(!true)



// Swtich Case :-

var day  = 3;

switch (day)
{
    case 1 : console.log("Monday");
             break;

    case 2 : console.log("Tuesday");
             break;

    case 3 : console.log("Wednesday");
             break;

    case 4 : console.log("Thursday");
             break;

    case 5 : console.log("Friday");
              break;
      
    case 6 : console.log("Saturday");
             break;

    case 7 : console.log("Sunday");
             break;
             
    default : console.log("Invalid No.")
      
}