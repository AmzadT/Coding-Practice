//  JavaScript Object Methods


//  JavaScript methods is an Object that contains a function definition.

// Function Definition / Object Methods
var Person = {
    firstName: "Amzad",
    lastName: "Hussain",

    Print: function Print(){
        console.log("Hello World");
    }
}

Person.Print();


//  Object Method of Anonymous Function
var Person = {
    firstName: "Amzad",
    lastName: "Hussain",

    Print: function(){
        console.log("Hello World");
    }
}

Person.Print();


// How to add inside the Object any Object Method,  Decalre Outside the Object.

var Person = {
    firstName: "Amzad",
    lastName: "Hussain",
}

function Print()
{
    console.log("Hello World");
}