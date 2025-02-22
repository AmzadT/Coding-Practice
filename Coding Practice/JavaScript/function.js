// Functions:- A block of code that designed to perform a particular task is called a function.

// 1st way
function checkEvenOdd(num){
    if(num%2==0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
checkEvenOdd(12)
checkEvenOdd(15)


// 2nd way
function checkEvenOdd(num){
    if(num%2==0){
        return true
    }else{
        return false
    }
}

for(var i=0; i<=20; i++){
    var result = checkEvenOdd(i)
    if(result == true){
        console.log('even');
    }else{
        console.log('odd');
    }
}



// write a function to replace space with (-)
// input --> Amzad Hussain
// output --> Amzad-Hussain
function replaceSpace(str){
    var bag = ''
    for(var i=0; i<=str.length; i++){
        if(str[i]== ' '){
            bag += '-'
        }else{
            bag += str[i]
        }
    }
    console.log(bag)
}
replaceSpace('Amzad Hussain')



// create a function that check if the character is lowerCase or not.
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function checkLowerCase(char) {
    if (lowerCase.includes(char)) {
        console.log('lower case');
    } else {
        console.log('upper case');
    }
}

checkLowerCase('a'); // Output: lower case
checkLowerCase('T'); // Output: upper case
checkLowerCase('Z'); // Output: upper case
checkLowerCase('m'); // Output: lower case


// 2nd way
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

function checkLowerCase(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (lowerCase.includes(char)) {
            console.log(`${char} is lower case`);
        } else {
            console.log(`${char} is upper case`);
        }
    }
}

checkLowerCase('Amzad');



//write the code to find the absolute difference value of two numbers
var diff = 2-5
if(diff<0){
    console.log(-diff)
}else{
    console.log(diff)
}


// 2nd way
function findAbsoluteDifference(diff){
    if(diff<0){
        return -diff
    }else{
        return diff
    }
}
console.log(findAbsoluteDifference(2-5)) // Output: 3




// var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
// var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var str = 'AMZAD'
// var ans = ''
// for(var i=0;i<str.length; i++){
//     if(lowerCase.includes(str[i])){
//         ans += str[i].toUpperCase()
//     }else{
//         ans += str[i].toLowerCase()
//     }
// }
// console.log(ans) // Output: amzad

// 2nd way
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var str = 'AMZAD'
var ans = ''

for(var i=0;i<str.length; i++){
    var char = str[i]
    for(var j=0; j<upperCase.length; j++){
        if(char == upperCase[j]){
            ans += lowerCase[j]
            break
        }else{
            ans += upperCase[j]
        }
    }
}
console.log(ans)



// Inbuilt functions are also known as built-in function or native function. These functions are already defined and available for use.

function myJoin(arr, separator){
    var result = ''
    for(var i=0; i<arr.length; i++){
        result += arr[i]
        if(i !== arr.length-1){
            result += separator
        }
    }
    console.log(result)
}
myJoin(["Amzad", "Hussain"], '*')



// split --> convert string to array

var str = 'Hello, World!'
var arr = str.split(' ')
console.log(arr) // Output: ["Hello,", "World!"]



// find the difference value
function findDifference(a,b){
    return a-b
}
// console.log(findDifference(5, 3)) // Output: 2
function findAbsolute(x){
    if(x<0){
        return x = -1*x
    }
    return x
}
var output1 = findDifference (10,14);
console.log(output1);

var output2 = findAbsolute (output1);
console.log("final output",output2);



// check weather a number is prime or not;
var number = 7
var factor = 0
for(var i=0; i<=number; i++){
    if(number%i==0){
        factor++
    }
}
if(factor==2){
    console.log('prime number')
}else{
    console.log('not prime number')
}


//  find prime numbers from 2 to 100 :
function checkPrime(number){
    var factor = 0
    for(var i=0; i<=number; i++){
        if(number%i==0){
            factor++
        }
    }
    if(factor==2){
        console.log(number,'prime number')
    }else{
        console.log(number,'not prime number')
    }
}
for(var i=2; i<=100; i++){
    checkPrime(i)
}



//  check if a character is small case or not :
function checkLowerCase(char) {
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    if (lowerCase.includes(char)) {
        console.log('lower case');
    } else {
        console.log('upper case');
    }
}

// 2nd way
function checkSmallCase(char){
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0; i<lower.length; i++){
        if(char==lower[i]){
            console.log('lower case')
        }else{
            console.log('upper case')
        }
    }
}



//  converted :  masai school ----> masai-school :
function convertString(str){
    var result = ''
    for(var i=0; i<str.length; i++){
        if(str[i]==' '){
            result += '-'
        }else{
            result += str[i]
        }
    }
    console.log(result)
}
convertString('Amzad Hussain')