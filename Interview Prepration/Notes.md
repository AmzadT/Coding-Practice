# HTTP Response status codes
 - 200 - OK successful
 - 201 - created
 - 202 - accepted
 - 204 - no content
 - 302 - found
 - 304 - not modified
 - 400 - bad request
 - 401 - un-authorized
 - 403 - forbidden
 - 404 - not found
 - 405 - method not allowed
 - 406 - not acceptable
 - 408 - request timeout
 - 409 - conflict
 - 413 - Request Too Large
 - 500 Internal Server Error
 - 501 Not Implemented
 - 502 Bad Gateway
 - 503 Service Unavailable



# APIs
 - An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be formatted so that systems can exchange data efficiently.
 - 1. REST API (Representational State Transfer) - Uses HTTP methods and is stateless.
 - 2. WebSockets API - Enables real-time communication.


# JWT (JSON Web Token)
 - JWT (JSON Web Token) is a secure, compact, and self-contained way to transmit information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

# Where JWT is Used?
✔ User Authentication (Login & Registration)
✔ Authorization (Role-based access control)
✔ API Security (Securing REST APIs)
✔ Single Sign-On (SSO)

A JWT consists of three parts:
1. Header
Contains metadata about the token, like the type (JWT) and signing algorithm (HS256, RS256).
2. Payload
Contains user-related data (claims).
3. Signature/secret-key
Used to verify that the token was not altered.

# What is the difference between HTTP and HTTPs
HTTP (HyperText Transfer Protocol) is not secure because it sends data in plain text, making it vulnerable to hacking. HTTPS (HyperText Transfer Protocol Secure) encrypts data using SSL/TLS, making it safe for transactions like payments and logins.


# What is the difference between HTTP server and express.js server
An HTTP server in Node.js is built using the http module and requires manual handling of routes and requests. Express.js is a framework that makes it easier to create servers with built-in features like routing, middleware, and request handling. Express requires less code and is faster for building APIs.


# what is authentication and authorization
Authentication checks who you are (e.g., logging in with a username & password). Authorization decides what you can do (e.g., an admin can delete products, but a user can only view them). Authentication comes first, and authorization happens after.


# password hashing
Password hashing in Express.js means converting a password into a secure, unreadable format before storing it in the database. This protects user passwords from hackers.

🔹 We use bcrypt.js for hashing:
1️⃣ User enters a password → It gets hashed.
2️⃣ The hashed password is stored in the database.
3️⃣ During login, the entered password is compared with the stored hash.


# what is server
A server is a computer or program that stores, processes, and delivers data to other devices (clients) over a network. It handles requests (like opening a website) and sends back responses (like loading the page).


# What is Mongoose? 🛢️
Mongoose is a MongoDB Object Data Modeling (ODM) library for Node.js. It helps you interact with MongoDB easily by providing a structured way to define schemas, models, and perform database operations.


# What is JavaScript? 🚀
JavaScript (JS) is a programming language used to make websites interactive. It runs in web browsers and is used for things like buttons, animations, forms, and APIs.


# What is DOM? 🌐
DOM (Document Object Model) is a tree-like structure that represents an HTML page in JavaScript. It allows JavaScript to change, add, or remove elements dynamically on a webpage.


# What is React? ⚛️
React is a JavaScript library used to build fast and interactive user interfaces (UIs). It allows developers to create reusable components and efficiently update the UI when data changes.


# What is the difference between DOM and Virtual DOM 
DOM is the actual structure of a webpage that JavaScript manipulates, but updating it is slow. Virtual DOM is a lightweight copy used by React, which updates only the changed parts, making it faster. This improves performance and ensures a smooth user experience.


# What is RESTful API? 🌐
A RESTful API (Representational State Transfer API) is a way for different applications to communicate over the internet using HTTP methods like GET, POST, PUT, DELETE.


# What is the Client-Server Model? 🌐
The Client-Server Model is a way computers communicate, where:

A Client (browser/app) requests data (e.g., opening a website).
A Server (backend) processes the request and sends a response.
Example:
🔹 Client: Sends a request → "Show me products."
🔹 Server: Responds → Sends product data in JSON format.



# What are Side Effects in React? ⚛️
In React, side effects are actions that happen outside the component's main logic, like fetching data, updating the DOM, or setting timers. These actions don’t return a value but affect the application.

Examples of Side Effects:
✅ Fetching data from an API 📡
✅ Updating the title of a webpage 📄
✅ Storing data in localStorage 💾
- Using useEffect to Handle Side Effects:


# lifecycle/Phases of React Components ⚛️
React components go through three main phases in their lifecycle:
1️⃣ Mounting 🏗️ → When the component is created and added to the DOM.
2️⃣ Updating 🔄 → When the component's state or props change.
3️⃣ Unmounting 🗑️ → When the component is removed from the DOM.


# What is Node.js? 🚀
Node.js is a JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly used for backend development. It is built on Google Chrome’s V8 engine and helps in creating fast, scalable server-side applications.


# What are Props and Components in React? ⚛️
1️⃣ Components 🏗️
A Component is a reusable piece of UI in React. It can be a function or a class and is used to break the UI into smaller parts.

2️⃣ Props (Properties) 📦
Props are inputs passed to components to make them dynamic and reusable. They allow components to receive data from their parent.


# useRef vs useEffect in React ⚛️
1️⃣ useRef Hook 🏷️
The useRef hook is used to access and store mutable values (like DOM elements or previous state) without causing re-renders.
✅ Keeps values without re-rendering.
✅ Useful for accessing DOM elements directly.
✅ Stores previous state values.

2️⃣ useEffect Hook 🔄
The useEffect hook handles side effects like fetching data, updating the DOM, or setting up event listeners.
✅ Runs after rendering.
✅ Handles API calls, subscriptions, and timers.
✅ Can run on mount, state change, or unmount.


# What are Hooks in React? ⚛️
Hooks are special functions in React that let you use state and lifecycle features inside functional components without needing a class component.
Why Use Hooks?
✅ Manage state in functional components.
✅ Handle side effects (like fetching data, event listeners).
✅ Reusable logic (custom hooks).


# What is Axios? 🚀
Axios is a popular JavaScript library used for making HTTP requests in web applications. It is commonly used in React, Node.js, and Express.js to fetch or send data to a server.
Why Use Axios?
✅ Easier syntax than fetch().
✅ Supports GET, POST, PUT, DELETE requests.
✅ Handles response data automatically (JSON format).
✅ Supports error handling and request cancellation.


# What is Data Handling in React? ⚛️
Data handling in React refers to how data is stored, updated, and passed between components to manage the UI effectively. It involves state management, props, API calls, and form handling.


1. npm create vite@latest my-app --template react
2. npx create-react-app my-app


# self-closing tags name
 - <br>
 - <hr>
 - <input>
 - <img>
 - <meta>
 - <link>
