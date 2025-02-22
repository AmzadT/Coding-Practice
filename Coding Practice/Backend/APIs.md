- **What is REST API?**
    - A REST (**Representational State Transfer**) API (**Application Programming Interface**) is a type of web service that enables different software systems to communicate with each other over the internet. RESTful APIs rely on the HTTP protocol, which is built on top of TCP/IP (Transmission Control Protocol/Internet Protocol).
    - **REST** suggests creating an object of the data requested by the client and sending the values of the object in response to the user.
    - RESTful APIs use **TCP ( a low-level networking protocol that provides a reliable, ordered, and error-checked delivery of packets between two applications running on different hosts)** to establish a connection between a client and a server and to transfer data between them.
    - When a client makes a request to a server, it sends a TCP packet containing the HTTP request, including the HTTP method (such as GET or POST), the URL, and any parameters or headers.
    - The server receives the packet and sends back a TCP packet containing the HTTP response, including the status code, any headers, and the response body.
    - A REST API uses HTTP methods, such as GET, POST, PUT, and DELETE, to perform operations on resources. The resources can be represented in different formats, such as XML, JSON, or plain text, depending on the requirements of the client application.
    - **Principles of REST API**
        - **Stateless:** A REST API is stateless, which means that each request contains all the necessary information to perform the operation, and the server does not maintain any session state between requests.
        - **Client-server architecture:** A REST API follows a client-server architecture, where the client and server are independent and can evolve separately.
        - **Cacheable:**  A REST API can be designed to be cacheable, which means that clients can store responses and reuse them for subsequent requests, which can improve performance.
        - **Uniform interface:** A REST API uses a uniform interface to interact with resources,  an HTTP method, and a representation of the resource.
        - **Layered system:** A REST API can be designed to be layered, where intermediate servers can act as caches, which can improve scalability and performance.


- **What is gRPC?**
    - gRPC is a high-performance RPC framework/technology built by Google. It uses Google’s own “**Protocol Buffers**”, which is an open-source message format for data serialization, as the default method of communication between the client and the server.
    - It allows clients to call remote methods on a server as if they were local methods, which makes it easier to build distributed systems and microservices.
    - It uses HTTP/2 (**a major revision of the HTTP network protocol used by the World Wide Web**) as the underlying transport protocol, which provides several benefits, such as
        - bi-directional streaming (**clients and servers can send and receive messages at the same time**),
        - flow control, and
        - multiplexing.


- **What is GraphQL?**
    - GraphQL or “**Graph Query Language**” is a query language and runtime that was developed by Facebook that allows the client (frontend) to request data from an API.
    - It provides a more efficient, powerful, and flexible alternative to REST APIs for building web applications.
    - Advantages of GraphQL over its RESTful counterpart:
        - **One endpoint:** With traditional REST APIs, you have to create specific endpoints based on the data you want to request. This makes scaling your API difficult because soon, you might find yourself having to manage tens, maybe hundreds, of routes that you will have to remember.
        - **Fewer server requests:** It allows you to make multiple queries and mutations with only one server request. This can be useful when your server only allows a limited number of requests a day.
        - **Declarative data fetching:** It only fetches what you actually need. All you have to do is specify what fields to return.
        - **Type system:** It uses a type system to describe your data, which makes developing much easier. If you are a TypeScript fan, this is a win-win.
        - **Self-documenting:** It is self-documenting, meaning that all of your queries and mutations will automatically be documented by GraphQL.


- **What is HTTP?**
    - **HTTP** stands for **Hypertext Transfer Protocol**. It’s a set of rules which govern the exchange of data over the Internet.
    - It is an application-layer protocol that is used to transmit data between web servers and web browsers.
    - HTTP defines a set of rules for how web browsers and web servers should communicate with each other. A client (usually a web browser) sends an HTTP request to a server, and the server responds with an HTTP response.
    - HTTP also defines several status codes that are used to indicate the status of the request or response. Some common status codes include
        - 200 OK (success),
        - 404 Not Found (resource not found),
        - 500 Internal Server Error (server error), and
        - 401 Unauthorized (authentication required).


- **What is a web socket?**
    - WebSocket is a two-way computer communication protocol over a single TCP.
    - Unlike traditional HTTP communication, which requires the client to constantly poll the server for new information.
    - It enables real-time communication where the client and server can send data to each other at any time, without constant requests.
    - They are commonly used in real-time applications. Examples ⇒
        - chat rooms,
        - online gaming,
        - stock tickers, and
        - other applications
        
        that require frequent updates and low-latency communication between the client and server