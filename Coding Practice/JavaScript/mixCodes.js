// check a number is prime number or not.
var num = 13
var factor = 0
for(var i=0; i<=num; i++){
    if(num%i==0){
        factor++
    }
}
if(factor==2){
    console.log('prime number')
}else{
    console.log('not prime number')
}



// check multiple prime numbers from 1 to 50
for(var i=1; i<=50; i++){
    var factor = 0
    for(var j=0; j<=i; j++){
        if(i%j==0){
            factor++
        }
    }
    if(factor==2){
        console.log(i,'prime number')
    }else{
        console.log(i,'not prime number')
    }
    console.log('\n')
}



// find the largest number in the array
var arr = [54,4,65,324,5,3,43,82]
var max = -Infinity
for(var i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)



//  print the second half of the array [even array] :
var names = ["A","B","C","D","E","F","G","H"];
for(var i=names.length/2; i<names.length; i++){
    console.log(names[i])
}



// If a number is divisible by 3, print "multiple of 3".
var number = 15;
if(number%3==0){
  console.log('divisible by 3')
}else{
  console.log('not divisible')
}



// table of 2
for(var i=1; i<=10; i++){
  console.log(2*i)
}


// print the sum 1 to 20
var sum = 0
for(var i=0; i<=20; i++){
  sum += i
}
console.log(sum)


//factorial of 5
var fact = 1
for(var i=1; i<=5; i++){
  fact *=i
}
console.log(fact)



// find the maximum No in the array
var arr = [25,30,28,40,48,42,50];
var max = -Infinity;
for(var i=0; i<arr.length; i++){
  if(max<arr[i]){
    max = arr[i]
  }
}
console.log(max)



// find the minimum No in the array
var arr = [25,30,28,40,48,42,50];
var min = Infinity;
for(var i=0; i<arr.length; i++){
  if(min>arr[i]){
    min = arr[i]
  }
}
console.log(min)

// formula :-
// print highest ya maximum numbers (-Infinity) :
// print smallest ya minimum numbers (Infinity) :



// given a character in lower case , print the upper case character :
var char = 't'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var index = lowerCase.indexOf(char)
console.log(upperCase[index])

// 2nd way
var char = "g";
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
for(var i =0; i<upper.length; i++){
  if(char==lower[i]){
    console.log(upper[i]);
    break;
  }
}


//  Problem 1 : Given a string count the number of words in that string
var str = "Hello World";
console.log(str.length);



//  Problem 2 : Given an array of string count the overall total number of characters
var array = ["Hello","World","Masai","School"];
// console.log(array[0].length)
var total = 0
for(var i=0; i<array.length; i++){
    total += array[i].length
}
console.log(total)



//  Problem 3 : Given an array of numbers find the average of all the even numbers.
var array = [14,9,36,23,10,45,42];
var count = 0
var sum = 0
for(var i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        sum += arr[i]
        count++
    }
}
console.log(sum/count)



//  find the average of all the even numbers (marks) :
var marks = [85, 90, 88, 92, 87, 95, 91];
var sum = 0
var count = 0
for(var i=0; marks.length; i++){
    if(marks[i]%2==0){
        sum += marks[i]
        count++
    }
}
console.log(sum/count)



//  find the average of all the numbers (marks) :
var marks = [85, 90, 88, 92, 87, 95, 91];
var sum = 0
for(var i=0; i<marks.length; i++){
    sum += marks[i]
}
console.log(sum/marks.length)



// print all the even numbers
var marks = [25,34,55,32,66,22,44,65,17,16];
for(var i=0; i<marks.length; i++){
    if(marks[i]%2==0){
        console.log(marks[i])
    }
}



