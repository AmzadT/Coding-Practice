//  Problem 1: If the number is divisible by 3, print "multiple of 3".
var number = 15
var reminder = number%3

if(reminder==0){
    console.log("multiple of 3");
}else{
    console.log("not a multiple of 3");
}


// Problem 2 : Given any character, if it is a vowel print "Vowel"
// vowel a,e,i,o,u :
var char = `i`
if(char==`a` || char==`e` || char==`i` || char==`o` || char==`u`){
    console.log(`it's a vowel`)
}else{
    console.log(`it's not a vowel`)
}


// switch case
var choice = 2
switch(choice){
    case 1: console.log('code 1')
    break;
    case 2: console.log('code 2')
    break;
    case 3: console.log('code 3')
    break;
    case 4: console.log('code 4')
    break;
    case 5: console.log('code 5')
}


// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var yob = 2000
var age = 2024-yob

if(age>=13 && age<=19){
    console.log("Teenage")
}else if(age>=20 && age<=29){
    console.log("Twenties")
}



//  Problem 4: Given 3 numbers (all different values), print which is greatest
var a = 3;
var b = 5;
var c = 10;

if(a>b && a>c){
    console.log("A is Greater");
}else if(b>a && b>c){
    console.log("B is Greater");
}else if(c>a && c>b){
    console.log("C is Greater");
}else{
    console.log("Both Are Equal");
}



var num = 1

while(num<=20){
    console.log(`num is : ${num}`);
    num++;
}


var num = 1
var str = ''
while(num<=20){
    str += num+' ';
    num++;
}
console.log(str);



// print odd no. 3,5,7,9, ..... :
var num = 1;

while(num<=20){
    if(num%2==1){
        console.log(num);
    }
    num++;
}


var start = 5
var end = 25

while(start<=end){
    if(start%2!=0){
        console.log(start);
    }
    start++;
}


// print even no. 2,4,6,8,10..... :
var num = 1;

while(num<=20){
    if(num%2==0){
        console.log(num);
    }
    num++;
}


// print total sum of all the no. 1 to 50 :
//   1 + 2 + 3 + 4 + 5 +.......+ 50 :
var num = 1;
var sum = 0;

while(num<=50){
    sum += num;
    num++;
}
console.log(sum);



//  total sum of multiple of three (3);  3 + 6 + 9 + 12 + 15 +.....+ 50 :
var num = 1
var sum = 0

while(num<=50){
    if(num%3==0){
        sum += num
    }
    num++;
}
console.log(sum);



//  total sum of even no / multiple of two (2);  2 + 4 + 6 + 8 + 10 +.....+ 50 :
var num = 1
var sum = 0

while(num<=50){
    if(num%2==0){
        sum += num
    }
    num++;
}
console.log(num)


//  total sum of odd no;  1 + 3 + 5 + 7 + 9 +.....+ 50 :
var num = 1
var sum = 0

while(num<=50){
    if(num%2==1){
        sum += num
    }
    num++
}
console.log(sum)



//  Problem 4: Print the average of even numbers from 1 to 100 (both included)
var num = 1
var sum = 0
var count = 0

while(num<=100){
    if(num%2==0){
        sum += num
        count++
    }
    num++
}
var average = sum/count
console.log(average)


//  Problem 1: Print the numbers from the given starting point till ending point (including both start and end)
var start = 1
var end = 20

while(start<=end){
    console.log(start)
    start++
}



// for loop 
var str = '';
for(var i=0; i<=10; i++){
   str += i+' ';
}
console.log(str);


// print table of 2
for(var i=0; i<=20; i++){
    console.log(i*2);
}


// reverse loop
// 10 9 8 7 6 5 4 3 2 1
for(var i=10; i>=1; i--){
    console.log(i);
}


// sum of 0 to 10
var sum = 0
for(var i=0; i<=10; i++){
    sum += i;
}
console.log(sum)


// factorial of 5
var fact = 1
for(var i=1; i<=5; i++){
    fact *= i
}
console.log(fact)
// output = 120


// nested loops
var str = '';

for(var i=0; i<=2; i++){ // rows
    for(var j=0; j<=3; j++){ // columns
        str += '* '
    }
}
console.log(str);
// output = * * * * * *


for(var i=0; i<=2; i++){ // rows
    var str = '';
    for(var j=0; j<=3; j++){ // columns
        str += '* '
    }
    console.log(str);
}
// output = * * *
//          * * *



// box model
// output =  * * * * * * * * *
//           *               *
//           *               *
//           *               *
//           *               *
//           *               *
//           *               *
//           *               *
//           *               *
//           * * * * * * * * *
for(var i =1; i<=10; i++)
{
    var str = "";

    for(var j = 1; j<=10; j++){
    if(i==1 || i==10 || j==1 || j==10){
        str += "* ";
    }else{
        str += "  ";
    }
  }
    console.log(str);
}



// print like this
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *
for(var i=1; i<=10; i++){
    var str = ''
    for(var j=1; j<=i; j++){
        str += '* '
    }
    console.log(str)
}


// print like this
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
var rows = 10;

for(var i=1; i<=rows; i++){
    var str = ''
    for(var j=1; j<=i; j++){
       str += '* ' 
    }
    console.log(str)
}
for(var i=rows; i>=1; i--){
    var str = ''
    for(var j=1; j<=i; j++){
       str += '* '
    }
    console.log(str)
}


// print like this
// reverse loop  
// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *
for(var i=10; i<=1; i--){
    var str = ''
    for(var j=1; j<=i; j++){
        str += '* '
    }
    console.log(str)
}

for(var i=1; i<=10; i++){
    var str = ''
    for(var j=1; j<=i; j++){
        str += '* '
    }
    console.log(str)
}


