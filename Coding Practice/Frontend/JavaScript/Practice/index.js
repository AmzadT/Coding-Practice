// JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.


//  Problem 1: If the number is divisible by 3, print a "multiple of 3".
var number = 15;
var reminder = number%3;

if(reminder==0){
  console.log("multiple of 3");
}else{
  console.log("not a multiple of 3");
}


//  Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
var stored_user = "amzadhussain7250@gmail.com";
var stored_password = "amzad1212";

var input_user = "amzadhussain7250@gmail.com";
var input_password = "amzad1212";

if(input_user == stored_user){
    if(input_password == stored_password){
      console.log("Valid Login");
    }
    else{
     console.log("Wrong Password"); 
    }
  
}else{
  console.log("Coudn't Find Your Account");
}


// Problem 2 : Given any character, if it is a vowel print "Vowel"
// vowel a,e,i,o,u :
var ch = "i";

if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" )
{
  console.log("Vowel");
}
else
{
  console.log("Not Vowel");
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



//  1st way: switch statement;
var choice = 3;
switch(choice)
  {
    case 1 : console.log("code 1");
             break;
      
    case 2 : console.log("code 2");
             break;
      
    case 3 : console.log("code 3");
             break; 

    default : console.log("Wrong Choice");
             break;
}         



//   2nd way:
var choice = "sunday";
switch(choice)
  {
    case "monday" : console.log("relat and comp oprater");
                   break;
      
    case "tuesday" : console.log("conditional statement");
                   break;
      
    case "wednesday" : console.log("logical oprater");
                   break;
      
    default : console.log("Wrong Choice");
              break;
}



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



//  given a character, if it is a consonant print "consonant";
// 1st way (&&) :
var ch = "t";
if((ch != "a") && (ch != "e") && (ch != "i") && (ch != "o") && (ch != "u"))

{ 
  console.log("consonant");
}
else
{
  console.log("not consonant");
}


// 2nd way (switch case) :
var cha = "m"
switch(cha)
  {
    case "a" : 
              
    case "e" :
  
    case "i" :
 
    case "o" :
   
    case "u" : break;
           
    default  : console.log("it is a consonan");
               break;
}


//  3rd way (||) :
var char = "t";
if((char != "a") || (char != "e") || (char != "i") || (char != "o") || (char != "u"))

{ 
  console.log("Consonant");
}
else
{
  console.log("Not Consonant");
}


//  4th way any operator (&&) ya (||) :
var char = "t";
if((char == "a") || (char == "e") || (char == "i") || (char == "o") || (char == "u"))

{ 
  console.log("it is Vowel");
}
else
{
  console.log("it is Consonant");
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