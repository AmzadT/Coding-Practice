function outer(){
    var a = 10;
    return function inner(b){
        return a+b
    }
}

var result = outer()
console.log(result(5))




function outer(a){
    return function inner(b){
        return a+b
    }
}

console.log(outer(5)(10))



function calculator(initValue=0){
    var value = initValue
    function add(num){
        value += num
        return value
    }

    return {add}
}

var cal = calculator()
console.log(cal.add(10))
console.log(cal.add(20))
console.log(cal.add(30))




// var arr = [1,2,3]
// // var
// for(var i=0; i<arr.length; i++){
//     setTimeout(() => console.log(i, arr[i]), i*1000)
// }

// console.log(`i value is ${i}`)  // i value is 3

// output:
// 3 undefined 0sec
// 3 undefined 1sec
// 3 undefined 2sec



var arr = [1,2,3]
// let
for(let i=0; i<arr.length; i++){
    setTimeout(() => console.log(i, arr[i]), i*1000)
}

// output:
// 0 1 0sec
// 1 2 1sec
// 2 3 2sec



function toggler(){
    var arr = arguments
    var index = -1
    return function(){
        index += 1
        if(index >= arr.length){
            index = 0
        }
        return arr[index]
    }
}

var toggle = toggler('red', 'green', 'blue')

console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())

