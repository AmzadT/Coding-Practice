var a = 60;
var b = 90;
var c = 70;

console.log(a>b && a>c ? 'A' : b>a && b>c ? 'B' : 'C')


// while loop
var num = 5
while(num > 0){
    console.log(num);
    num--;
}


// find the even number between 0 till 20
var i = 0
while(i<=20){
    if(i%2==0){
        console.log(i);
    }
    i++;
}


// find the sum of numbers from 1 to 15
var i = 1
var sum = 0
while(i<=15){
    sum += i
    i++
}
console.log(sum)


// print the average of odd numbers from 1 to 15
var i = 1
var sum = 0
var count = 0
while(i<=15){
    if(i%2==0){
        sum += i
        count++
    }
    i++
}
console.log(sum/count)



// for loop

// print the sum of numbers from 1 to 10
var sum = 0
for(var i=0;i<=10; i++){
    sum += i
}
console.log(sum)


// find the product of numbers from 1 to 10
var product = 1
for(var i=1; i<=10; i++){
    product *= i
}
console.log(product)