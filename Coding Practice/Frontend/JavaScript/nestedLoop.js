// A nested loop is a loop within a loop.

// Code 1 : print Hello in vertical order using nested loop.
for(var i=0;i<=2;i++)
{
    for(var j=0; j<=3; j++)
    {
        console.log("Hello");
    }
}

    
// Code 2 : print Hello in horizontal order using nested loop
for(var i=1;i<=2;i++)
{
    var str="";
    for(var j=1; j<=3; j++)
    {
        str = str + "Hello ";
    }
    console.log(str);
}



for(var i=1; i<=10; i++)
{
    for(var j = 1; j<=10; j++)
    {
        console.log("i count",i,",j completed ",j);
    }
}


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
for(var i=1; i<=5; i++)
{
    var str = "";
    for(var j=1; j<=10; j++)
    {
        str = str + "*";
    }
    console.log("Field",i,str);
}


// *
// * *
// * * *
// * * * *
// * * * * *
for(var i=1; i<=5; i++)
{
    var str = "";
    for(var j=1; j<=i; j++)
    {
        str = str + "* ";
    }
    console.log(str);
}

    
// Code 6 : Print the below pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for(var i = 1; i<=5; i++)
{
    var str = "";
    for(var j = 1; j<=i; j++)
    {
        str = str + j+" ";
    }
    console.log(str);
}

    

// * * * * *
// * * * *
// * * *
// * *
// *
for(var i=5; i>=1; i--)
{
    var str = "";
    for(var j=1; j<=i; j++)
    {
        str = str +"* ";
    }
    console.log(str);
}


// Code 8 : Print the below reverse pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for(var i=5; i>=1; i--)
{
    var str = "";
    for(var j=1; j<=i; j++)
    {
        str = str + j+" ";
    }
    console.log(str);
}

    
// Code 9 : Combining Code 6 and Code 8 form a pyramid.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for(var i = 1; i<=5; i++)
{
    var str = "";
    for(var j = 1; j<=i; j++)
    {
        str = str + j+" ";
    }
    console.log(str);
}

for(var i=4; i>=1; i--)
{
    var str = "";
    for(var j=1; j<=i; j++)
    {
        str = str + j+" ";
    }
    console.log(str);
}
    
    
// Nested Loop with While.
// **********
// **********
// **********
// **********
// **********
// **********
var i=1;
while(i<=6)
{
    var j=1;
    var str = "";
    while(j<=10)
    {
        str=str+"*";
        j++;
    }
    console.log(str);
    i++;
}



//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5
//  1 2 3 4 5

for(var i=0; i<=5; i++)
{
    var str = "";

    for(var j=1; j<=5; j++)
    {
        str += j+" ";
    }
    console.log(str);
}


//  Outer Loop controlling the inner loop

//  First loop/outer loop depending on (Horizontal row/Line)
//  second loop/inner loop depending on (vertical column/Line)


for(var hour =1; hour<=5; hour++)
{
    for(var minute=1; minute<=60; minute++)
    {
        console.log("Minute :",minute);
    }

    console.log("Hour :",hour);
}





//  Box-Model Printing

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(var i=1; i<=5; i++)
{
    var str ="";

    for(var j=1; j<=5; j++)
    {
        if(i==1 || i==5 || j==1 || j==5)
        {
            str += "*" +" ";
        }
        else
        {
            str += "  ";
        }
    }
    console.log(str);
}




//  Conditions --> if(i==1 || i==5 || j==1)
// * * * * *
// *      
// *       
// *       
// * * * * *



//  Conditions --> if(i==5 || j==1)
// * 
// *      
// *       
// *       
// * * * * *



//  (N) Model Printing
//  Conditions --> if(j==1 || j==5 || i==j)


//  Opposite (N) Model Printing
//  Conditions --> if(j==1 || j==5 || j==i)




// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

for(var i=1; i<=5; i++)
{
    var bag = "";

    for(var j=5; j>=1; j--)
    {
        bag += j +" ";
    }
    console.log(bag);
}




// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(var i=1; i<=5; i++)
{
    var bag = "";

    for(var j=1; j<=i; j++)
    {
        bag += j +" ";
    }
    console.log(bag);
}




// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for(var i=1; i<=5; i++)
    {
    var bag = "";
    
    for(var j=1; j<=i; j++)
        {
        bag += i+" ";
        }
    console.log(bag)
}