// STRING :- '', "" string data types care immutable we cannot change the character of strings.

// new line (\n)
console.log('Hello\nWorld')


// Given a character of string in lowerCase print the character in upperCase

var char = 't'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

for(var i=0; i<lowerCase.length; i++){
    if(lowerCase[i]==char){
        char = upperCase[i]
    }
}
console.log(char)



//  password should be atleast 8 length :
var password = 'Amzad Hussain'
if(password.length > 8){
    console.log('sign up successful')
}else{
    console.log('password should be atleast 8 length')
}


//  reverse loop :
var N = 5
var str = 'Amzad'
for(var i=N-1; i>=0; i--){
    console.log(str[i])
}



//  find the sum of all prime numbers between 1 and N (N <= 100) :
var N = 10
var sum = 0
for(var i=2; i<=N; i++){
    var isPrime = true
    for(var j=2; j<i; j++){
        if(i%j==0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        sum += i
    }
}
console.log('sum of prime numbers:', sum)



//  find the sum of all perfect squares between 1 and N (N <= 100) :
var N = 10
var sum = 0
for(var i=1; i<=N; i++){
    var squareRoot = Math.sqrt(i)
    if(squareRoot % 1 == 0){
        sum += i
    }
}
console.log('sum of perfect squares:', sum)



//  how to update the strings :
var str = "Masai";
var arr = [];
for(var i = 0; i<str.length; i++){
    arr.push(str[i])
}
arr[2] = "t";
console.log(arr);



//  given an array of names of students. count the names which starts from A,a :
var students = ["Amzad","Sahil","Vicky","amir","Faiz","Imran"];
var count = 0;
for(var i=0; i<students.length; i++){
    if(students[i].charAt(0) == 'A' || students[i].charAt(0) == 'a'){
        count++;
    }
}
console.log("Number of names starting with A or a: ", count);

// 2nd way
var names = ["Amzad","Sahil","Vicky","amir","Faiz","Imran"];
var count = 0;
for(var i=0; i<students.length; i++){
    if(students[i][0]=='A' || students[i][0]=='a'){
        count++
    }
}
console.log("Number of names starting with A or a: ", count)


// count the spaces in the given string
var count = 0
var str = "A Transformation in Education";
for(var i=0; i<str.length; i++){
    if(str[i] ==''){
        count++;
    }
}
console.log("Number of spaces in the given string: ", count)



//  lowercase to UPPERCASE :
var name = "Amzad";
var str = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0; i<name.length; i++){
    for(var j=0; j<lower.length; j++){
        if(name[i] == lower[j]){
            str += upper[j];
            break;
        }
    }
}
console.log("Uppercase name: ", str);



//  given array , count the total characters in the array :
var names = ["Amzad", 'Tanu'];
var total = 0
for(var i=0; i<names.length; i++){
    total += names[i].length
}
console.log(total)