1. What is a RESTful API?
Answer:
A RESTful API (Representational State Transfer API) is a web service that follows REST principles, allowing clients to interact with the server using standard HTTP methods like GET, POST, PUT, and DELETE.

2. What are the main principles of REST?
Answer:

Stateless - Each request from a client must contain all the information needed; the server does not store session data.
Client-Server Architecture - The client and server are separate and interact via API calls.
Cacheability - Responses can be cached to improve performance.
Uniform Interface - Standardized URL structure and HTTP methods.
Layered System - Requests can pass through multiple layers (e.g., security, load balancer).
Code on Demand (optional) - The server can send executable code (like JavaScript) to the client.
3. What are HTTP methods used in RESTful APIs?
Answer:

GET → Retrieve data
POST → Create new data
PUT → Update existing data
PATCH → Partially update data
DELETE → Remove data
Example:

http
Copy
Edit
GET /users/1   # Get user with ID 1
POST /users    # Create a new user
PUT /users/1   # Update user with ID 1
DELETE /users/1 # Delete user with ID 1
4. What is the difference between PUT and PATCH?
Method	Purpose	Example
PUT	Updates the entire resource	PUT /users/1 { "name": "Amzad", "email": "amzad@example.com" }
PATCH	Updates specific fields only	PATCH /users/1 { "name": "Amzad" }
5. What are status codes in RESTful APIs?
Answer:
Status codes indicate the result of an API request.

200 OK → Successful request
201 Created → Resource created
204 No Content → Successful but no response
400 Bad Request → Invalid request data
401 Unauthorized → Authentication required
403 Forbidden → No permission
404 Not Found → Resource doesn't exist
500 Internal Server Error → Server-side issue
Example:

json
Copy
Edit
{
  "status": 404,
  "message": "User not found"
}
6. What is JSON and why is it used in REST APIs?
Answer:
JSON (JavaScript Object Notation) is a lightweight data format used for exchanging data between clients and servers in RESTful APIs.

Example JSON response:

json
Copy
Edit
{
  "id": 1,
  "name": "Amzad",
  "email": "amzad@example.com"
}
7. What is authentication in REST APIs?
Answer:
Authentication verifies the client’s identity before accessing the API.

Basic Authentication → Uses username:password in headers
Token-Based Authentication → Uses JWT (JSON Web Token)
OAuth → Secure authentication for third-party apps
Example using JWT:

http
Copy
Edit
GET /dashboard
Authorization: Bearer <your_jwt_token>
8. What is CORS (Cross-Origin Resource Sharing) in REST APIs?
Answer:
CORS is a security feature that controls which domains can access an API.

Example:
If a frontend hosted on example.com wants to call an API at api.example.com, the API must allow this:

CORS header in API response:

http
Copy
Edit
Access-Control-Allow-Origin: *
9. What are query parameters and path parameters in REST APIs?
Parameter Type	Example	Usage
Path Parameter	/users/1	Identifies a specific resource
Query Parameter	/users?sort=name&limit=10	Filters or modifies results
Example:

http
Copy
Edit
GET /products?category=mobile&sort=price_desc
10. What is rate limiting in REST APIs?
Answer:
Rate limiting restricts the number of API requests a client can make in a given time to prevent abuse.

Example Response Header:

h
Copy
Edit
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 990
