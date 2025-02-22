// Nested Loop:- A nested loop is a loop within a loop.


// print this
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
for(var i=1; i<=5; i++){ // rows depend on outer loop
    var str = ''
    for(var j=1; j<=5; j++){ // column depend on inner loop
        str += j +' '
    }
    console.log(str)
}


// print box pattern
// * * * * *
// *       *
// *       *
// *       *
// * * * * *
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=1; j<=5; j++){
        if(i==1|| i==5 || j==1 || j==5){
            str += '*'+' '
        }else{
            str += '  '
        }
    }
    console.log(str)
}


// print N pattern
// *       *
// * *     *
// *   *   *
// *     * *
// *       *
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=1; j<=5; j++){
        if(j==1|| j==i || j==5){
            str += '*'+' '
        }else{
            str += '  '
        }
    }
    console.log(str)
}


// print N with opposite diagonal
// *       *
// *     * *
// *   *   *
// * *     *
// *       *
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=5; j>=1; j--){
        if(j==1|| j==i || j==5){
            str += '*'+' '
        }else{
            str += '  '
        }
    }
    console.log(str)
}


// print this pattern
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=1; j<=5; j++){
        str += i+ ' '
    }
    console.log(str)
}


// print this pattern
// 5 5 5 5 5
// 4 4 4 4 4
// 3 3 3 3 3
// 2 2 2 2 2
// 1 1 1 1 1
for(var i=5; i>=1; i--){
    var str = ''
    for(var j=1; j<=5; j++){
        str += i+ ' '
    }
    console.log(str)
}


// print this pattern
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=5; j>=1; j--){
        str += j+ ' '
    }
    console.log(str)
}




// print this pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=1; j<=i; j++){
        str += j +' '
    }
    console.log(str)
}



// print this pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
for(var i=1; i<=5; i++){
    var str = ''
    for(var j=1; j<=i; j++){
        str += i +' '
    }
    console.log(str)
}



// print this pattern
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
for(var i=1; i<=6; i++){
    var str = ''
    for(var j=1; j<=i; j++){
        str += '*' +' '
    }
    console.log(str)
}

for(var i=5; i>=1; i--){
   var str = "";
    for(var j=1; j<=i; j++){
       str = str +"* ";
    }
    console.log(str);
}



// print Diamond pattern
var n = 10; // Diamond height
// Upper Pyramid
for (var i = 1; i <= n; i++) {
    var str = "";
    for (var j = 1; j <= n - i; j++) {
        str += " "; // Spaces for alignment
    }
    for (var k = 1; k <= i; k++) {
        str += "* "; // Stars
    }
    console.log(str);
}

// Lower Inverted Pyramid
for (var i = n - 1; i >= 1; i--) {
    var str = "";
    for (var j = 1; j <= n - i; j++) {
        str += " "; // Spaces for alignment
    }
    for (var k = 1; k <= i; k++) {
        str += "* "; // Stars
    }
    console.log(str);
}



// print this pattern
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
var N = 5
for(var i=0; i<N; i++){
    var str = ''
    for(var j=0; j<N-i; j++){
        str += '* '
    }
    console.log(str)
}