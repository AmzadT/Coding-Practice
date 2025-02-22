//  Operators in JavaScript ?

//  Operators in JavaScript are symbols, that are used to perform operations on operands, operands are the Values and Variable.
//  Ex:-  10 + 20 --> ( + is Operator and 10,20 is Operands)


//  1. Arithmatic Operators
//  2. Assignment Operators
//  3. Increment / Decrement Operators
//  4. Comperison Operators / Relational Operators
//  5. Logical Operators
//  6. String Operators


//  1. Aiethmatic Operators are used to perform any mathematical operations on operands.

//  (Addition)
//  Ex:-  var sum = 5 + 10;
//  console.log(sum);


//  (Substraction)
//  Ex:-  var sub = 5 - 10;
//  console.log(sub);


//  (Multiplication)
//  Ex:-  var mul = 5 * 10;
//  console.log(mul);


//  (Division)
//  Ex:-  var div = 5 / 10;
//  console.log(div);


//  (Modulus)
//  Ex:-  var mod = 5 % 10;
//  console.log(mod);


//  (Exponentiation)
//  Ex:-  var expo = 5 ** 3;   -->   (5*5*5)
//  console.log(expo);



//  2. Assignment Operators are used to assign values to variables.

//  Ex:-  var x = 10;   -->   ( = is Assignment Operator)
//  x = 2;   -->   (Re-Assigning Value)
//  x += 5;   -->   (Addition)


//  Ex:-  var x = 10; 
//  x -= 5;   -->   (Substraction)


//  Ex:-  var x = 10;  
//  x *= 5;   -->   (Multiplication)


//  Ex:-  var x = 10; 
//  x /= 5;   -->   (Division)


//  Ex:-  var x = 10;  
//  x %= 5;   -->   (Modulus)


//  Ex:-  var x = 10;  
//  x **= 5;   -->   (Exponentiation)



//  3. Increment / Decrement Operators

//  The increment and decrement operators are used to increase or decrease the value of a variable by 1.

//  The increment operator is --> (++)
//  The decrement operator is --> (--)

//  increment or decrement operator we can use 2 ways.

//  (Pre-Fix) and (Post-Fix)

//  Ex:-  var a = 5;
//  console.log(++a); --> Output = 6
//  console.log(a) --> Output = 6
//  in this example (Pre-Fix) operator placed before the variable, and the value of the variable is incremented before it is used.


//  Ex:-  var a = 5;
//  console.log(a++); --> Output = 5
//  console.log(a) --> Output = 6
//  in this example (Post-Fix) operator placed after the variable, and the value of the variable is used before it is incremented.



//  4. Comperison Operators / Relational Operators

//  Comperison Operators compare two values and give back a Boolean value, Either (True and False).

//   Comperison Operators are useful in decision-making and loops program in JavaScript.

//  1.  Greater Than (>)
//  2.  Greater Than or Equal-To (>=)
//  3.  Less Than (<)
//  4.  Less Than or Equal-To (<=)
//  5.  Equality / Double Equal-To (==)
//  6.  In-Equality / Not-Equal (!=)
//  7.  Strict Equality (===)
//  8.  Strict In-Equality / Not-Equal (!==)



//  5. Logical Operators

//  Logical Operators perform logical operations like:-

//  1. AND (&&)
//  2. OR (||)
//  3. NOT (!)


//  1. AND (&&)--> logical AND operator evaluate operands and return true only if all are true. (only both conditions are true then result it will be true).

//  true && true --> true
//  true && false --> false
//  false && true --> false
//  false && false --> false



//  2. OR (||)--> Logical OR operator returns true even if one of the multiple operands is true. (if one condition/result is true then it will returs all the condition are true)

//  true || true --> true
//  true || false --> true
//  false || true --> true
//  false || false --> false



//  3. NOT (!)--> logical NOT operator converts operator to boolean and return flipped/opposite value.

//  true --> false
//  false --> true



//  6. String Operators

//  In JavaScript, you can also use the (+) operator to Concatenate (Join) two or more strings.

//  Ex:-  console.log("Hello " + "World");

//  Ex:-  var x = "Java";
//  x += " Script";
//  console.log(x); --> Output = Java Script



//  Operator Precedance

//  Operator Precedance in JavaScript determines the order in which operators are parsed concerning each other.

//  Here it is used ( BODMAS:- Rules )
//  Ex:-  var result = 3 + 5 * 10;
//  console.log(result) --> Output = 53



//  Operator Associativity

//  Operator Associativity in JavaScript defines the order in which operators of the same precedence are evaluated.

//  (2) There are Two types of operator associativity

//  1. Left-To-Right
//  2. Right-To-Left


//  1. Left-To-Right Associativity

//  Ex:- var result = 4 - 2 - 1;
//  console.log(result); --> Output = 1


//  2. Right-To-Left Associativity

//  Ex:- var result = 2 ** 3 ** 2;
//  console.log(result); --> Output = 512









//  Control Flow Statements in JavaScript //

//  Control Flow Statements are used to control the flow of execution in a JavaScript program. They are used to make decisions, execute loops, and handle errors.
//  There are Three (3) types of control flow statements in JavaScript.

//  1. Conditional Statements
//  2. Loops
//  3. Try/Catch Statements



//  1. Conditional Statements:-  Conditional Statements are used to execute different actions based on different conditions.

//  (if) Statement
//  (else if) Statement
//  (else) Statement


//  Switch Case:-  The Switch statement in JavaScript is a conditional statement that is used to execute a block of code based on the value of an expression.

// Ex:-  var num = 20;
//  var DayName = 2;

// switch(typeof num)
// {
//     case "Number" : console.log("Number");
//                     break;
//     case "String" : console.log("String");
//                     break;

    //    case 1 : DayName = "Sunday";
    //             break;
    //    case 2 : DayName = "Monday"; 
             //    break;        

//     default : console.log("Another");                                
// }
//  console.log("The Day is :",DayName);


//  Ternary Operator

//  Ex:-  var age = 20;

//  console.log((age>=18) ? "You are Adult" : "You are Minor");



