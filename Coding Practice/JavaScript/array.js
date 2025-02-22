// DATA-STRUCTURE :- The data structure is storage that is used to store and organize data. It is a way of arranging data on a compute so that can be accessed and updated efficiently.

// ARRAYS :- This is a mutable data type, It is a Data structure that is used to store and organize/manipulate collection od data/elements. they can store some kind of data like :- string, number, booleans, etc.


// Given an array finds the average of all the even numbers in the array;

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var count = 0;

for(var i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        sum +=arr[i]
        count++
    }
}
console.log(sum/count)


// find the maximum number in the array
var arr = [54,4,65,324,5,3,43,82]
var max = -Infinity

for(var i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)


// find the total length of all the words present in the array
var arr = ['amzad', 'tanu']
var sum = 0
for(var i=0; i<arr.length; i++){
    sum += arr[i].length
}
console.log(sum)


var arr = ["Ayan", 'Gufran']
var sum = 0
for(varI=0: I<arr.length; i++){
    sum += arr[i].length
}
console.log(sum)



// find the sum of numbers in an array
var numbers = [1, 2, 3, 4, 5]
var sum = 0

for(var i=0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)



