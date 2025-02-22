# HTML --> 
 - margin/padding --> Completed
 - inline/inline-block elements --> Completed
 - SEO --> Completed
 - semantic-tags --> Completed
 - attributes --> Completed
 - meta-tag --> Completed
 - DOCTYPE --> Completed
 - iframe-tag --> Completed
  
# CSS --> 
 - selectors --> Completed
 - combinators --> Completed
 - specificity-score --> Completed
 - attributes --> Completed
 - box-model (center-box V/H) --> Completed
 - box-sizing --> Completed
 - flex --> Completed
 - grid --> Completed
 - positioning --> Completed
  
JavaScript --> 
 - loops (for, while, for-of, for-in) -->
 - nested-loops (pattern-printing, reverse-loop) -->
 - array (array-methods, includes, problems) -->
 - string (string-methods, includes, palindrome, vowel, problems) -->
 - objects (this-keyword, methods) -->
 - function (inbuilt-functions, all-functions, pure/impure-function) -->
 - 2D array (problems) -->
 - HOF (forEach, reduce, filter, map, sort) -->
 - git/commands (commands) -->

DOM (problems) -->
 - data-handling -->
 - local-storage -->
 - cookies -->
 - createElement -->
 - append -->

AD.JavaScript -->
 - constructor -->
 - prototype/inheritance -->
 - sync/async -->
 - promises (setTimeout) -->
 - fetch -->
 - ES6 (default-parameters, destructuring, rest/spread, Object-Literals, classes) -->
 - import/export -->
 - closure -->

RestFull-APIs --> 
 - sorting -->
 - filtering -->
 - pagination -->

React -->
 - Context-API -->
 - Reducer -->
 - Redux -->
 - useRef -->
 - useParams -->
 - useMemo -->
 - useEffect (side-effects) -->
 - Routing (private-routing) -->
 - props -->
 - form-handling -->
 - conditional-rendering -->
 - components (life-cycle) -->
 - axios -->
 - virtual-DOM -->
 - environment-variables -->

Chakra-UI -->

Tailwind-CSS -->

Backend -->
 - Mongo-Queries -->
 - aggregation -->
 - Authentication/Authorization -->
 - RBAC -->
 - mongoose -->
 - express -->
 - http/https -->
 - middlewares -->
 - JWT/Bcrypt (encryption/decryption) -->
 - node/node.js modules -->
 - schema/models (data-validation) -->

DSA (all-remaining) -->





📝 1. Technical Questions (Coding + System Design)
✅ DSA (Data Structures & Algorithms)

Arrays & Strings: Reverse a string, find duplicates, two sum problem.
Linked List: Reverse a linked list, detect a cycle.
Stack & Queue: Implement a stack, evaluate an expression.
Recursion & Backtracking: Generate permutations, N-Queens problem.
Sorting & Searching: QuickSort, MergeSort, Binary Search.
Trees & Graphs: Find height of a tree, BFS, DFS, shortest path in a graph.
📌 Example Coding Questions:

Reverse a Linked List:
js
Copy
Edit
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
Find the missing number in an array (from 1 to n):
js
Copy
Edit
function missingNumber(arr) {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let arrSum = arr.reduce((a, b) => a + b, 0);
    return sum - arrSum;
}
👉 How to Prepare?

Solve at least 2-3 DSA problems daily on LeetCode, CodeStudio, or GeeksforGeeks.
Focus on time complexity (O(n), O(log n), O(n^2)).

🖥️ 2. Frontend Questions (HTML, CSS, JavaScript, React)
✅ HTML & CSS:

What are semantic tags?
Explain CSS Grid vs. Flexbox.
How do you make a website responsive?
What is the difference between rem, em, px, and % in CSS?
How does the CSS Box Model work?

✅ JavaScript & React:

What are let, const, and var in JavaScript?
What is the difference between == and ===?
What are closures in JavaScript?
Explain the event loop in JavaScript.
How does React handle state updates?
Difference between functional and class components in React?
What is Redux, and why is it used?
What is useEffect and useState in React?
📌 Example React Question:
👉 How does the virtual DOM work in React?
Answer: The virtual DOM is a lightweight copy of the actual DOM. React first updates the virtual DOM, finds differences using diffing, and updates only the changed parts in the real DOM. This improves performance.

👉 How to Prepare?

Revise JavaScript ES6+ concepts like closures, promises, async/await, and event delegation.
Practice React component building, including hooks and context API.
⚙️ 3. Backend Questions (Node.js, Express, MongoDB, APIs)
✅ Node.js & Express.js

How does Node.js handle multiple requests asynchronously?
What is middleware in Express.js?
What is JWT authentication, and how do you implement it?
How do you secure API routes in Express?
What is the difference between REST and GraphQL?
✅ Database & MongoDB

What are the different types of database indexes?
What is the difference between SQL and NoSQL databases?
How do you structure a database schema for an E-commerce system?
What are ACID properties in databases?
What is Mongoose, and how does it work?
📌 Example Backend Question:
👉 Explain how authentication works with JWT in Express.js
Answer: When a user logs in, the server generates a JWT token and sends it to the client. The client stores it and sends it with every request. The server verifies the token and grants access.

👉 How to Prepare?

Work on small backend projects to implement authentication, CRUD, and middleware.
Revise database design and indexing techniques.
🔧 4. System Design & Scalability
✅ Key Topics:

How would you design a URL shortener (like Bit.ly)?
How would you design an authentication system for a large-scale website?
How does load balancing work?
What are microservices, and when should you use them?
📌 Example System Design Question:
👉 How would you design an API rate-limiting system?
Answer: Use Redis caching to track user request counts. If a user exceeds the limit, return a 429 Too Many Requests error.

👉 How to Prepare?

Study Scalability concepts like caching, database sharding, and load balancing.
Read system design interview questions on "Grokking the System Design Interview".
💡 5. Behavioral & HR Questions (Non-Technical)
✅ Common Questions:

Tell me about yourself.
Why do you want to work with us?
What are your strengths and weaknesses?
Explain a project you worked on and the challenges you faced.
How do you handle conflicts in a team?
Where do you see yourself in five years?

📌 Example Answer:
👉 Tell me about yourself.
"I am Amzad Hussain, a passionate Full-Stack Developer skilled in MERN stack. I have built several projects, including an E-commerce website and a Kanban Board application. I love solving complex problems and creating efficient, user-friendly applications."

👉 How to Prepare?

Practice answering HR questions in front of a mirror.
Have a structured "Tell me about yourself" answer ready.
📅 Study Plan (1 Month Preparation)
✅ Week 1 & 2:

Solve 2-3 DSA problems daily (Arrays, Strings, Linked List).
Revise JavaScript ES6 features, React hooks, and Node.js concepts.
✅ Week 3:

Practice System Design Questions and REST API implementation.
Work on mock interviews with friends or online.
✅ Week 4:

Revise database queries, indexing, and authentication.
Practice HR and behavioral questions.
🎯 Final Tips for Your Interview
✅ Be Confident – Even if you don’t know an answer, explain your thought process.
✅ Keep it Structured – Answer coding questions step by step.
✅ Showcase Your Projects – Mention your portfolio and GitHub in discussions.
✅ Mock Interviews – Take practice interviews on Pramp or InterviewBit.
✅ Ask Questions – At the end of the interview, ask about the company’s tech stack, team, or projects.

