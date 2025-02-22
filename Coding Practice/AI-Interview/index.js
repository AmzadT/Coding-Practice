// Q6. Question: The following JavaScript code is intended to log "Hello" after 2 seconds and "World" after 3 seconds, but it doesn't work as expected. Identify the problem and modify the code to achieve the intended behavior:

// javascript:
setTimeout(function() { console.log("Hello"); }, 3000);
setTimeout(function() { console.log("World"); }, 2000);

// Answer:
// The issue in the provided code is that the setTimeout functions are scheduled in the wrong order. The first setTimeout is set to log "Hello" after 3 seconds, and the second setTimeout is set to log "World" after 2 seconds. The problem is that you want "Hello" to be logged after 2 seconds and "World" to be logged after 3 seconds, but the code does the opposite.

// Solution:
// we just need to swap the delay times in the setTimeout functions to match the intended behavior. Here's the corrected code:

// javascript Copy code
setTimeout(function() { 
  console.log("Hello"); 
}, 2000);

setTimeout(function() { 
  console.log("World"); 
}, 3000); 

// The first setTimeout now correctly logs "Hello" after 2 seconds (2000 milliseconds).
// The second setTimeout now correctly logs "World" after 3 seconds (3000 milliseconds).

// Now the code will log:
// "Hello" after 2 seconds.
// "World" after 3 seconds.


// my approach for correcting the problem statement.
setTimeout(()=>{
    confirm.log('Hello')
}, 2000) // Hello after 2 sec...

setTimeout(()=>{
    console.log('World')
}, 3000) // World after 3 sec...


setTimeout(()=>{
    console.log('Hello')
}, 2000)

setTimeout(()=>{
    console.log('World')
}, 3000)

// output: Hello after 2 seconds, World after 3 seconds.






// ====== Q7. What is the Document Object Model (DOM) in JavaScript? How do you select and manipulate DOM elements? Give an example of how you would change the text of an HTML element using JavaScript. ======

// Answer: 
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can manipulate the structure, style, and content of the web page. The DOM provides a structured, tree-like representation of the HTML or XML document, where each node corresponds to part of the document (elements, attributes, text, etc.).

// Key Concepts:
// Document: Represents the whole web page.
// Elements: HTML tags are represented as nodes in the DOM.
// Attributes: Tags can have attributes (like class, id, etc.), and these can also be accessed via the DOM.
// Text: The content inside tags is also a part of the DOM.
// Selecting DOM Elements:
// You can select DOM elements using various methods provided by JavaScript, such as:

// document.getElementById(id) - Selects an element with the specified ID.
// document.getElementsByClassName(className) - Selects all elements with the specified class name.
// document.getElementsByTagName(tagName) - Selects all elements with the specified tag name.
// document.querySelector(selector) - Selects the first element that matches the CSS selector.
// document.querySelectorAll(selector) - Selects all elements that match the CSS selector.
// Manipulating DOM Elements:
// Once you've selected an element, you can manipulate it in various ways, such as:

// Changing the text content: element.innerText or element.textContent
// Changing HTML content: element.innerHTML
// Changing attributes: element.setAttribute(attribute, value)
// Changing styles: element.style.property = value
// The HTML page has a <div> element with the ID myElement containing the text "Old Text".
// When the button is clicked, the changeText() function is called.
// Inside the function, document.getElementById("myElement") selects the element, and element.innerText = "New Text"; changes the text inside the element to "New Text".
// Final Result:
// Initially, the page shows "Old Text" in the <div>.
// After clicking the button, the text changes to "New Text".
// Code: 
function changeText() {
  var element = document.getElementById("myElement");
  element.innerText = "New Text";
}




// ====== Q8. What is the difference between the use of var, let, and const in JavaScript? When should you use each? Provide examples of when each would be more appropriate than the others. ======