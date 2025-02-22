- **How does express work?**
    - Express is just a framework, that can help us in creating the server in a very easy way.
    - Four stages :
        1. Creating an express application
        2. Creating a new route
        3. Starting an HTTP server on a given port number
        4. Handling a request once it comes in

  - Data from the backend or API response you got is in JSON format.
  - The biggest advantage is that express has a lot of middleware, even we can create custom one as well to do anything.


- **What are Middlewares?**
    - Middleware is the layer that exists between the application components, tools, and devices.
    - Middlewares are the functions that get executed before the request reaches the route handler and after the response is sent to the client.
    - It sets between request and response.
    - Because of the middleware, we get the chance to perform modification, updation, or deletion on request and response objects.
    - Using middlewares, we can :
        - change the object
        - check for security
        - check for validation
        - calculate the time taken etc.


- **next ( ) Function ⇒**
    - The next ( ) function plays a vital role in applications' request and response cycle.
    - It is a middleware function that runs the next middleware function once it is invoked.
    - In other words, the Next function is invoked if the current middleware function doesn’t end the request and response cycle.
- There are `express inbuilt middlewares` :
    - `express.json()` ⇒ it just basically parses the JSON. If we use it we don’t need to parse it manually.
    - `express.text()` ⇒ If we need to parse a text only.



- **What is the MVC framework?**
    
    **MVC** is an acronym for **Model-View-Controller**. It is a design pattern for software projects.
    
    **Model**: The model represents the structure of data, the format, and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application. 
    
    **View**: View is what is presented to the user. Views utilize the Model and present data in a form that the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.
    
    **Controller**: The controller **controls** the requests of the user and then generates an appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response. So, to sum it up:
    
    - Model is data part.
    - View is User Interface part.
    - Controller is request-response handler.


- **How do you do static routing?**
    - Static routing is a method of routing network traffic by manually configuring the network devices to use a fixed path or route to reach a particular network or destination.
    - With static routing, we must manually provide/configure the above functions on each router of the network. Since all configurations are manual, a routing protocol is not required and is not used in static routing.



- **What are common libraries you work with express?**
    - **CORS — Allow or Restrict Requested Resources on a Web Server**
        - CORS is a node.js package that provides a Connect/Express middleware for enabling CORS with a variety of options.
        - CORS stands for Cross-Origin Resource Sharing. Without prior consent, it prevents other websites or domains from accessing your web resources directly from the browser.
        - **Features of CORS**
            - Supports `GET`, `POST`, or `HEAD` HTTP methods.
            - Allows web programmers to use regular XML Http Request, which handles errors better.
            - Allows websites to parse responses to increase security.
        - **Usage of CORS**
            - We can use either enable CORs for all the routes or only for a single route.
    - **Cookie-parser — Parse Cookies**
        - Cookie-parser is a middleware that transfers cookies with client requests.
        - Cookie-parser uses the `req.cookies` property to access Cookie data. After parsing, the `req.cookies` object holds cookies sent by request in JSON format.
        - It is capable of parsing both unsigned and signed cookies.
        - **Features of Cookie-parser**
            - The `decode` function is there to decode the value of the cookie.
            - Handle cookie separation and encoding.
            - Can enable signed cookie support by passing a `secret` string.
            - supports special "JSON cookies" with `JSON.parse`.
    - **Morgan— Log HTTP Requests and Errors**
        - Morgan is an HTTP request logger middleware for N typically used for apps.
        - It streamlines the process by generating logs for each API request and error. The best fact is that you can utilize a predefined format or design one from scratch, depending on your requirements.
        - **Features of Morgan**
            - It Logs the HTTP requests along with some other information. You can also configure what you choose to log.
            - Very helpful in debugging and also if you want to create Log files.



- **How do you manage sessions in express?**
    - In Express, sessions are typically managed using middleware that stores session data on the server and sends a session ID to the client in a cookie.
    - The client then sends the session ID with subsequent requests, allowing the server to retrieve the session data.
    - The middleware will create a session object for each client and store it on the server. It will also send a session ID cookie to the client, which will be used to identify the session on subsequent requests.


- **What is CORS?**
    - **CORS (Cross-Origin Resource Sharing) —**
        - CORS stands for Cross-Origin Resource Sharing. Without prior consent, it prevents other websites or domains from accessing your web resources directly from the browser.
        - **Features of CORS**
            - Supports `GET`, `POST`, or `HEAD` HTTP methods.
            - Allows web programmers to use regular XML Http Request, which handles errors better.
            - Allows websites to parse responses to increase security.
        - **Usage of CORS**
            - We can use either enable CORs for all the routes or only for a single route.



- **How do you manage cookies with express?**
    - Cookies are small pieces of data that are stored on the client side (usually in the browser) and are sent back to the server with each subsequent request. They are commonly used to store user preferences, session data, and other information that needs to persist across multiple requests.
    - To manage cookies with Express, we use the **`cookie-parser`** middleware. This middleware parses cookies that are sent with the request and makes them available in the **`req.cookies`** object.
    - It is capable of parsing both unsigned and signed cookies.
    - **Features of Cookie-parser**
        - The `decode` function is there to decode the value of the cookie.
        - Handle cookie separation and encoding.
        - Can enable signed cookie support by passing a `secret` string.
        - supports special "JSON cookies" with `JSON.parse`.



1. How do you do validations?
Validations are used to ensure the correctness of data before saving it in a database or processing it in your application.

In Frontend (JavaScript): Validations are done to check user inputs before sending them to the server. 


2. What are some templating engines?
Templating engines are tools that allow you to generate dynamic HTML by embedding JavaScript logic in the HTML templates. They help in creating dynamic content easily.

```jsx
Examples of Templating Engines:
// EJS (Embedded JavaScript): Syntax is similar to regular HTML, with JavaScript embedded:
<h1>Welcome, <%= user.name %></h1>


// Pug (formerly Jade): Uses indentation-based syntax:
h1 Welcome #{user.name}


// Handlebars: Focuses on cleaner logic with minimal code:
<h1>Welcome, {{user.name}}</h1>

// These engines make it easier to build dynamic pages by separating HTML from the server-side logic.
```


3. What are routes?
Routes in web development define how the application responds to a client's request to a specific endpoint (URL + HTTP method).

 - Routes are the backbone of a web application, allowing the server to handle different client requests effectively.