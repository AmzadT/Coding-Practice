# TCP / IP address

 - 21 ftp
 - 25 smtp
 - 80 http
 - 65,535 ports


# DNS --> (Domain Name System/Service)


# Status Codes
 - 200 OK
 - 201 Created
 - 202 Accepted
 - 
 - 400 Bad Request
 - 401 Unauthorized
 - 403 Forbidden
 - 404 Not Found
 - 405 Not Accept/ Not Allowed
 - 406 Not Acceptable
 - 406 Unknown
 - 408 Request Timeout
 - 500 Internal Server Error
 - 503 Service Unavailable


# What is a server
 - A computer program or a device that serves can be considered as a server.
 - A server can serves many clients

# What is a client
 - A device or a program that requests information from a server can be considered a client.
 - This can be a Mobile, Computer, Tablet, a Browser


# Terminal
 - curl masaischool.com
 - curl -I masaisschool.com


# Commands (Download files and save in the system)
 - curl https://jsonplaceholder.typicode.com/posts
 - curl -o post.txt https://jsonplaceholder.typicode.com/posts
 - less post.txt
 - ls

 - curl -O https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
 - ls



### Client server model

 - Client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.[1] Often clients and servers communicate over a computer network on separate hardware, but both client and server may reside in the same system. A server host runs one or more server programs, which share their resources with clients. A client does not share any of its resources, but it requests content or service from a server. Clients, therefore, initiate communication sessions with servers, which await incoming requests. Examples of computer applications that use the client-server model are email, network printing, and the World Wide Web.



### HTTP Response Codes

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

- Informational responses (100–199),
- Successful responses (200–299),
- Redirects (300–399),
- Client errors (400–499),
- Server errors (500–599).


Curl with explicit http method
curl -X GET <https://www.google.com>