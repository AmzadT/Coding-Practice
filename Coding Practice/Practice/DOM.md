1. What is the DOM in JavaScript?
Answer: The Document Object Model (DOM) is a tree-like structure representing the HTML document, where each element is an object that can be manipulated using JavaScript.

Example:

js
Copy
Edit
console.log(document.title); // Gets the page title
document.title = "New Title"; // Changes the page title
2. How do you select elements in the DOM?
Answer: We can select elements using methods like:

document.getElementById() → Selects by ID
document.getElementsByClassName() → Selects by class name
document.getElementsByTagName() → Selects by tag name
document.querySelector() → Selects the first matching element
document.querySelectorAll() → Selects all matching elements
Example:

js
Copy
Edit
let element = document.querySelector("#myElement"); // Select by ID
console.log(element.innerText);
3. How do you change the text of an element?
Answer: Use innerText or textContent to modify text inside an element.

Example:

js
Copy
Edit
document.getElementById("myElement").innerText = "Hello, World!";
4. How do you change the HTML content of an element?
Answer: Use innerHTML.

Example:

js
Copy
Edit
document.getElementById("myDiv").innerHTML = "<b>Bold Text</b>";
5. How do you add and remove a CSS class from an element?
Answer: Use the classList property.

Example:

js
Copy
Edit
let element = document.getElementById("box");
element.classList.add("highlight");  // Adds a class
element.classList.remove("highlight"); // Removes a class
element.classList.toggle("active"); // Toggles a class
6. How do you create a new element and append it to the DOM?
Answer: Use document.createElement() and appendChild().

Example:

js
Copy
Edit
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);
7. How do you remove an element from the DOM?
Answer: Use removeChild() or remove().

Example:

js
Copy
Edit
let element = document.getElementById("myElement");
element.parentNode.removeChild(element); // Removes element
// OR
element.remove(); // Directly removes the element
8. How do you handle events in the DOM?
Answer: Use addEventListener() to attach events.

Example:

js
Copy
Edit
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
9. What is event delegation in JavaScript?
Answer: Instead of adding event listeners to multiple elements, event delegation adds a listener to a parent element and uses event.target to determine which child triggered the event.

Example:

js
Copy
Edit
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("Button clicked: " + event.target.innerText);
  }
});
10. How do you stop event propagation?
Answer: Use event.stopPropagation() to prevent an event from bubbling up to parent elements.

Example:

js
Copy
Edit
document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the event from propagating to parent elements
  alert("Child clicked!");
});
