// Undefined : variable has been declared but not assigned
// any value
// ex -
// let x ;
// console.log(x);


// Null : It is assignment value. It is intentionally assigned to a
// variable as a representation of no value.
// ex:
// let x = null;
// console.log(x);


var object = {
    name : 'Amzad',
    age : 24,
    city : 'siwan',
    hobbie : 'coding'
}

console.log(object)

// loop through object properties
for(var key in object){
    console.log(key + ' : ' + object[key])
}

// add new property
object.gender = 'male'
object['state'] = 'Bihar'

// access the properties
// 1. Bracket Notation
console.log(object.name) // Amzad
// 2. Dot Notation
console.log(object['age']) // 24

// difference between Dot and Bracket notation
var key = 'name'
console.log(object[key]) // output: Amzad --> bracket notation
console.log(object.key) // output: undefined --> we cannot use variable for dot notation to get the any values of an object

// check if a property exists in an object
console.log('name' in object) // output: true --> dot notation
console.log('city' in object) // output: false --> dot notation

// (undefined): check whether a key is present in an object or not 
console.log(object['age'] == undefined)

// update property value
object.age = 25
object['age']= 26

// delete property
delete object.city
delete object['city']


// given an array find the unique items in the array.
var colors = ['red', 'blue', 'green', 'red', 'white', 'yellow', 'blue', 'green', 'black']
var uniqueColors = [...new Set(colors)]
console.log(uniqueColors)


// given an array find the duplicate items in the array.
var colors = ['red', 'blue', 'green', 'red', 'white', 'yellow', 'blue', 'green', 'black']
var obj = {}
for(var i=0; i<=colors.length;i++){
    obj[colors][i] = 1
}
console.log(obj)



// given a string print the numbers of character/frequency how many times are repeating in the given string.
// Example: apple
// a:1, p:2, l:1, e:1

// 1st way
// var str = 'apple'
// var obj = {}
// for(var i=0; i<str.length; i++){
//     obj[str[i]] = (obj[str[i]] || 0) + 1
// }
// console.log(obj)


// 2nd way
// var str = 'apple'
// var obj = {}
// for(var i=0; i<str.length; i++){
//     if(obj[str[i]]){
//         obj[str[i]]++
//     } else {
//         obj[str[i]] = 1
//     }
// }
// console.log(obj)


// 3rd way
var str = 'apple'
var obj = {}
for(var i=0; i<str.length; i++){
    if(obj[str[i]] == undefined){
        obj[str[i]] = 1
    }else{
        obj[str[i]]++
    }
}
console.log(obj)



var arr = [2,4,6,3,6,3,2,5,3,5]
var obj = {}
for(var i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]]++
    }
}
console.log(obj)




// given an array find the maximum and minimum value.
var arr = [2,4,6,3,6,3,2,5,3,5]
var max = arr[0]
var min = arr[0]
for(var i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log('Maximum: ', max)
console.log('Minimum: ', min)



// find all the elements whose frequency is 2.
var arr = [2,4,6,3,6,3,2,5,3,5]
var obj = {}
for(var i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]]++
    }
}

for(var key in obj){
    if(obj[key] == 2){
        console.log(key +'Frequency : ', obj[key])
    }
}



// find the sum of all the numbers whose frequency is 1.
var arr = [2,4,6,3,6,3,2,5,3,5]
var obj = {}
for(var i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }else{
        obj[arr[i]]++
    }
}

var sum = 0
for(var key in obj){
    if(obj[key] == 1){
        // sum += +key
        sum += Number(key)
    }
}
console.log(sum)



// find the similar products
var products = [
    {type: 'laptop', brand: 'Apple', price: '80,000'},
    {type: 'laptop', brand: 'HP', price: '60,000'},
    {type: 'laptop', brand: 'Dell', price: '75,000'},
    {type: 'tablet', brand: 'Samsung', price: '40,000'},
    {type: 'tablet', brand: 'Apple', price: '55,000'},
    {type: 'tablet', brand: 'Huawei', price: '45,000'},
    {type: 'phone', brand: 'Samsung', price: '60,000'},
    {type: 'phone', brand: 'Apple', price: '50,000'},
    {type: 'phone', brand: 'Huawei', price: '48,000'},
    {type: 'watch', brand: 'Apple', price: '20,000'},
    {type: 'watch', brand: 'Samsung', price: '15,000'},
    {type: 'watch', brand: 'Huawei', price: '18,000'}
]

var query = 'apple'
for(var i=0; i<products.length; i++){
   if(products[i].brand == 'apple'){
    //   console.log(products[i])
      console.log(products[i].price)
   }
}


// create array of objects.
var students = ['std1', 'std2', 'std3', 'st4', 'st5']
var age = [26, 34, 27, 24, 35]
var result = []

for(var i=0; i<students.length; i++){
    // 1st way
    // result.push({name: students[i], age: age[i]})

    // 2nd way
    var obj = {}
    obj.name = students[i]
    obj.age = age[i]
    result.push(obj)
}
console.log(result)