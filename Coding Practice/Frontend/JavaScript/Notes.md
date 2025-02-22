Strict mode in JavaScript is a way to enforce stricter parsing and error handling in your code. When you enable strict mode, JavaScript will run in a restricted mode that helps catch errors, avoid problematic features, and make the code more secure and optimized.

How to Enable Strict Mode
To enable strict mode, you use the string "`use strict`"; at the top of your code or inside a function.


What Strict Mode Does
Disallows Undeclared Variables:

In non-strict mode, if you accidentally assign a value to an undeclared variable, JavaScript creates a global variable. Strict mode prevents this.

When to Use Strict Mode
Use strict mode in all your JavaScript files to enforce better practices and avoid common pitfalls.
Many modern JavaScript tools (like Babel, TypeScript) enable strict mode by default.


How Closures Work
When you define a function inside another function, the inner function has access to:

Variables from its own scope.
Variables from its parent function's scope (lexical scope).
Global variables.
Even after the outer function has finished executing, the inner function can still access variables from the outer function's scope because of closures.


Debouncing and Throttling in JavaScript
Debouncing and Throttling are techniques used to control how often a function is executed in response to events like scrolling, resizing, or typing. They help improve performance and avoid unnecessary calls to functions that can slow down your application.

Debouncing
Debouncing ensures that a function is executed only after a specified delay has passed since the last time the event occurred. If the event keeps firing before the delay ends, the timer is reset.

Use Case: Debouncing is useful for actions triggered by rapid user inputs, such as typing in a search box or resizing a window.

Throttling
Throttling ensures that a function is executed at most once in a specified interval, no matter how many times the event occurs within that interval.

Use Case: Throttling is useful for actions that happen frequently but don't need to be executed every time, such as scrolling or mouse movements.


1. Let's say you are delayed by a deadline, how would you manage it?
Explain how you would prioritize tasks, communicate openly, and ask for support if needed.

Example: "If I’m delayed, I’d inform my manager as soon as possible, explaining the reasons. I’d prioritize the most critical tasks, work extra hours if necessary, and make a clear plan to complete the project as soon as possible."
2. How did you manage a conflict with a teammate?
Share a specific example where you resolved a conflict by listening, understanding, and collaborating.

Example: "Once, a teammate and I had different ideas about implementing a feature. I listened to their perspective and shared mine. We worked together to find a middle ground and asked the team lead for advice when needed."
3. What do you enjoy about software engineering / Frontend engineering / Backend Engineering?
Highlight what excites you about your field and how it motivates you.

Example: "I enjoy solving problems creatively and building tools that users love. In frontend engineering, I enjoy designing user interfaces that are intuitive and visually appealing."
4. What was the most challenging task you worked on?
Choose a project where you faced difficulties but overcame them with effort and learning.

Example: "The most challenging task was implementing authentication in a project. I had to learn about encryption, tokens, and security best practices. With research and support from my mentor, I successfully completed it."
5. Describe how you are proactive.
Show that you take initiative to improve things without being asked.

Example: "I’m proactive in identifying issues and finding solutions. For instance, in one project, I noticed users were struggling with navigation, so I suggested and implemented an improved menu design."
6. Tell a time you reflected on yourself and worked on it.
Discuss a weakness or area for improvement that you recognized and addressed.

Example: "I realized I needed to improve my time management. I started using tools like Trello and blocking time on my calendar, which helped me meet deadlines more effectively."
7. How do you take constructive feedback?
Show that you welcome feedback as a way to grow.

Example: "I see constructive feedback as an opportunity to improve. I listen carefully, ask questions if I need clarification, and implement the feedback in my work."
8. What are your strengths or weaknesses?
Be honest about strengths and mention a weakness with a plan to improve it.

Example:
Strengths: "I am quick to learn new technologies, a good team player, and have strong problem-solving skills."
Weakness: "I sometimes spend too much time on small details, but I’m learning to focus on the bigger picture."
9. Why do you think you are a good fit for the role or organization?
Show that you’ve researched the company and explain how your skills match their needs.

Example: "I’m excited about this role because I love solving user problems, and my experience in full-stack development aligns with your focus on creating seamless user experiences. I also admire your company’s values and commitment to innovation."



1. What is version control?
Answer:
Version control is a system that tracks changes in your files and allows you to go back to previous versions if needed. It helps multiple people collaborate on the same project by keeping a history of changes.
2. What are Pull Requests? How do you make them?
Answer:
A pull request is a way to propose changes in a branch and request a review before merging it into the main code.
How to make one:
Push your changes to a branch in a Git repository.
Go to the repository on GitHub or similar platforms.
Click "New Pull Request" and choose the branch you want to merge into.
3. What is merging?
Answer:
Merging combines changes from one branch into another. For example, you might merge a feature branch into the main branch to include new functionality.
4. How to create branches, why do we do that?
Answer:
Branches allow you to work on features or fixes without affecting the main code.
How to create a branch:
bash
Copy code
git branch branch_name
git checkout branch_name
# or
git checkout -b branch_name
5. What is committing?
Answer:
Committing saves your changes to the Git history. It creates a snapshot of your code at a particular point.
Amend commit message:
bash
Copy code
git commit --amend -m "New commit message"
6. What is .gitignore, and why do we need it?
Answer:
The .gitignore file specifies which files and folders Git should ignore. It’s useful for excluding files like environment variables, logs, or compiled code.
7. What is a merge conflict? How do we resolve it?
Answer:
A merge conflict happens when changes in different branches affect the same part of a file.
How to resolve it:
Open the file with conflicts.
Edit the conflicting sections.
Stage and commit the resolved file.
8. How do you see previous logs in Git?
Answer:
Use the following command:
bash
Copy code
git log
9. How do you clone a repository?
Answer:
Cloning copies a repository to your local machine.
bash
Copy code
git clone repository_url
10. How do you fork a repository? What is the difference between cloning and forking?
Answer:
Forking: Creates a copy of someone else’s repository in your GitHub account.
Cloning: Copies the repository to your local machine.
Forking is for collaboration, while cloning is for local development.
11. Who created Git? What are some platforms other than GitHub to use version control?
Answer:
Git was created by Linus Torvalds. Other platforms include GitLab, Bitbucket, and Azure DevOps.
12. What is GitHub Actions?
Answer:
GitHub Actions is an automation tool for tasks like testing, building, and deploying your code directly from your GitHub repository.
13. How can you deploy to Vercel or Netlify from GitHub Actions?
Answer:
Use a GitHub Actions workflow that runs a deployment script.
Add deployment secrets (e.g., API keys) to GitHub settings.
Use plugins or custom actions provided by Vercel or Netlify.
14. What is CI/CD?
Answer:
CI/CD stands for Continuous Integration and Continuous Deployment/Delivery.
CI: Automatically tests and integrates code changes.
CD: Automatically deploys code to production after testing.
15. Why is git add . a bad idea and not recommended?
Answer:
git add . stages all changes, including unintended ones. This can lead to committing unnecessary or sensitive files. Use specific file paths instead.
16. How do you write good commit messages?
Answer:
Use short and descriptive messages (e.g., "Fix login bug").
Follow a consistent format, like:
php
Copy code
<type>: <short description>
17. What happens when you have a Git repository inside another repository and you try to add new commits?
Answer:
This creates a nested repository, which Git treats as a submodule. Commits in the nested repo won’t automatically affect the parent repo. It can cause confusion if not managed carefully.



1. What are the different types of SQL databases?
SQL databases are categorized into:

Relational Databases (RDBMS): Store data in tables with relationships (e.g., MySQL, PostgreSQL, Oracle).
NoSQL Databases: Non-relational, store data in key-value pairs, documents, or graphs (e.g., MongoDB, Cassandra).
Cloud Databases: Hosted databases on cloud platforms (e.g., AWS RDS, Google Cloud SQL).
2. How do you import and export to a database?
Import: Load data into a database, often using commands or tools like LOAD DATA INFILE (MySQL) or pgAdmin for PostgreSQL. Example:
sql
Copy code
LOAD DATA INFILE 'file_path' INTO TABLE table_name;
Export: Save database data to a file using commands like SELECT INTO OUTFILE (MySQL) or pg_dump (PostgreSQL). Example:
bash
Copy code
mysqldump -u username -p database_name > backup.sql
3. What is a DBMS?
DBMS (Database Management System): Software to store, manage, and retrieve data efficiently. Examples: MySQL, MongoDB.
4. What is RDBMS? How is it different?
RDBMS (Relational Database Management System): A DBMS that uses tables with rows and columns to store data and establishes relationships between tables using keys.
Difference:
RDBMS supports relationships between data, while DBMS does not always enforce them.
RDBMS uses SQL for querying; DBMS may not.
5. What are primary keys and foreign keys?
Primary Key: A unique identifier for each row in a table. Example:
sql
Copy code
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));
Foreign Key: A column that links to a primary key in another table, creating a relationship. Example:
sql
Copy code
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
6. How do you group by?
Answer: The GROUP BY clause groups rows with the same values in specified columns, often used with aggregate functions like SUM, COUNT, etc.
Example:
sql
Copy code
SELECT department, COUNT(*) FROM employees GROUP BY department;
7. What are constraints?
Answer: Constraints enforce rules on data in a table, like:
NOT NULL: Prevents null values.
UNIQUE: Ensures all values are unique.
PRIMARY KEY: Combines NOT NULL and UNIQUE.
FOREIGN KEY: Enforces relationships.
CHECK: Validates a condition.
DEFAULT: Provides a default value.
8. How do you create a table?
Answer:
sql
Copy code
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint
);
Example:
sql
Copy code
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT DEFAULT 18
);
9. How do you alter a table?
Answer: Use the ALTER TABLE command to add, modify, or delete columns.
Examples:
Add a column:
sql
Copy code
ALTER TABLE students ADD email VARCHAR(100);
Modify a column:
sql
Copy code
ALTER TABLE students MODIFY age INT NOT NULL;
Drop a column:
sql
Copy code
ALTER TABLE students DROP COLUMN email;
10. How do you delete a table?
Answer: Use the DROP TABLE command:
sql
Copy code
DROP TABLE table_name;
11. What are joins?
Answer: Joins combine rows from two or more tables based on related columns. Example:
sql
Copy code
SELECT orders.order_id, users.name
FROM orders
JOIN users ON orders.user_id = users.id;
12. What are the different types of joins?
Answer:
INNER JOIN: Returns rows with matching values in both tables.
LEFT JOIN: Returns all rows from the left table and matching rows from the right table.
RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.
FULL JOIN: Returns all rows from both tables, with NULLs for non-matching rows.
Example:
sql
Copy code
SELECT employees.name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id;



1. What is a stateless backend?
Answer:
A stateless backend doesn’t store any information about the client (user or app) between requests.
Each request contains all the information the server needs to process it.
Example: APIs using HTTP are stateless because every request is independent.
Benefit: It’s easier to scale because servers don’t need to remember anything about past requests.
Example: Logging into a website where the token (JWT) sent with every request tells the server who you are.
2. How do Browsers work?
Answer:
Browsers (like Chrome, Firefox) help you view websites by:
Fetch: Getting the website’s code (HTML, CSS, JavaScript) from the server.
Parse: Reading the HTML to figure out the structure of the webpage.
Render: Displaying the webpage by styling it (CSS) and making it interactive (JavaScript).
Example: If you open YouTube, the browser fetches code, processes it, and shows you videos with a play button.
3. Describe how you design an API.
Answer:
Steps to design an API:
Understand requirements: What should the API do? Example: A Todo app API should add, delete, and update tasks.
Define endpoints: Plan the URLs. Example:
POST /tasks (create a task).
GET /tasks (get all tasks).
Choose data format: Decide how data will be sent (e.g., JSON).
Add authentication: Secure the API (e.g., JWT tokens for login).
Test and document: Test how it works and write clear documentation.
Example: A Movie app API might have endpoints like /movies, /search, or /add-review.
4. How do you build a system which is reliable?
Answer:
To make a reliable system:
Handle failures gracefully: Plan for errors like server crashes or missing data. Example: Show "Service Unavailable" instead of breaking the app.
Use backups: Regularly back up data to avoid losing it.
Scalability: Ensure the system can handle more users. Example: Use load balancers to split traffic across servers.
Monitoring: Keep an eye on performance and errors (e.g., using tools like New Relic).
Testing: Test the system under different conditions (unit tests, integration tests).
Example: E-commerce websites like Amazon have reliable systems that work even during high traffic, like sales.


Security Questions:
1. What is HTTPS? What is the difference between HTTP and HTTPS?
HTTPS (HyperText Transfer Protocol Secure) is an extension of HTTP. It uses encryption (via SSL/TLS) to secure data being transferred between a browser and a web server.
Difference:
HTTP: Data is sent in plain text, which can be intercepted and read.
HTTPS: Data is encrypted, making it secure from interception or attacks like man-in-the-middle.
2. What is SSL/TLS?
SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols used to secure communications over a network.
They ensure:
Encryption: Data remains private.
Authentication: Ensures the server you're communicating with is genuine.
Integrity: Ensures the data is not tampered with during transmission.
TLS is an updated, more secure version of SSL.
3. What is CORS?
CORS (Cross-Origin Resource Sharing) is a browser security feature that controls how resources (like APIs) can be requested from a domain different from the one serving the web page.
Example: If your frontend hosted on example.com wants to access an API at api.example.com, CORS policies must allow this cross-origin request.
4. What is OWASP?
OWASP (Open Web Application Security Project) is a global non-profit organization that focuses on improving the security of software.
It provides:
Resources: Guides and tools for developers.
OWASP Top 10: A widely recognized list of the top 10 most critical security risks to web applications.
Educational Materials: To help developers build secure systems.
If you want more details or examples about any of these, feel free to ask!






You said:
Give me these also

- Databases
    - [ ]  What is the difference between SQL and NoSQL databases?
    - [ ]  What are some common queries in SQL?
    - [ ]  How do you do joins in SQL?
    - [ ]  How do you use lookup in mongodb?
    - [ ]  What is CAP theorem?
    - [ ]  What is indexing?
    - [ ]  What is DB replication?
    - [ ]  What is PACELC?
    - [ ]  What is Normalization / Denormalization?
    - [ ]  What is Entity Relationship Model? ( ER Model )
ChatGPT said:
ChatGPT
Databases Questions
1. What is the difference between SQL and NoSQL databases?
SQL Databases:
Relational databases (structured data stored in tables).
Use SQL (Structured Query Language) for querying.
Examples: MySQL, PostgreSQL, Oracle.
Best for applications needing structured, consistent relationships between data.
NoSQL Databases:
Non-relational databases (store unstructured or semi-structured data like JSON, key-value pairs).
No fixed schema; more flexible.
Examples: MongoDB, Cassandra, Redis.
Best for applications with large-scale, dynamic data.
2. What are some common queries in SQL?
SELECT: Retrieves data.
sql
Copy code
SELECT * FROM users;
INSERT: Adds data.
sql
Copy code
INSERT INTO users (name, age) VALUES ('John', 25);
UPDATE: Modifies data.
sql
Copy code
UPDATE users SET age = 26 WHERE name = 'John';
DELETE: Removes data.
sql
Copy code
DELETE FROM users WHERE name = 'John';
3. How do you do joins in SQL?
Joins combine data from two or more tables based on a related column.
INNER JOIN: Returns matching rows from both tables.
sql
Copy code
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
LEFT JOIN: Returns all rows from the left table and matched rows from the right.
RIGHT JOIN: Returns all rows from the right table and matched rows from the left.
FULL JOIN: Combines all rows from both tables.
4. How do you use lookup in MongoDB?
$lookup: Performs a join-like operation between collections.
javascript
Copy code
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productDetails"
    }
  }
]);
5. What is CAP theorem?
Describes trade-offs in distributed systems:
Consistency (C): All nodes see the same data.
Availability (A): System remains operational during failure.
Partition Tolerance (P): System functions despite network splits.
Systems can only guarantee 2 out of 3 (e.g., CA, AP, or CP).
6. What is indexing?
Indexing speeds up queries by creating a data structure for faster lookups.
Example: In MongoDB, an index on name:
javascript
Copy code
db.users.createIndex({ name: 1 });
7. What is DB replication?
Replication copies data from one database server to others.
Ensures:
High availability.
Fault tolerance.
Load balancing.
8. What is PACELC?
Extends CAP theorem by considering latency:
If there’s a Partition, choose Availability or Consistency.
Else, choose Latency or Consistency.
9. What is Normalization / Denormalization?
Normalization: Organizing data to reduce redundancy and improve efficiency.
Example: Splitting a single table into multiple.
Denormalization: Combining tables to improve query performance.
10. What is Entity Relationship Model (ER Model)?
Diagrammatic representation of data relationships in a database.
Components:
Entity: A real-world object (e.g., User, Product).
Attributes: Characteristics (e.g., user name, age).
Relationship: Connection between entities (e.g., User purchases Product).



1. How does the browser work?
A browser is a software application (like Chrome, Firefox, or Safari) that lets you access and view websites. Here's how it works:

User Request: You type a URL (e.g., www.example.com) or click a link.
DNS Lookup: The browser finds the IP address of the website using a Domain Name System (DNS).
Request to Server: The browser sends an HTTP/HTTPS request to the web server hosting the website.
Server Response: The server sends back the requested files (HTML, CSS, JavaScript, images, etc.).
Rendering: The browser parses the HTML, applies CSS for styling, and executes JavaScript for interactivity to display the webpage.
2. What is Server-side rendering?
Server-side rendering (SSR) means generating the HTML content of a webpage on the server and sending it to the browser. The browser displays the content immediately without waiting for JavaScript.

Advantages:
Faster initial page load.
Better for SEO (search engines can easily read the content).
Example: Traditional websites like blogs or news sites.
3. What is Client-side rendering?
Client-side rendering (CSR) means the browser downloads a blank HTML page and a JavaScript file, which then generates the HTML content dynamically in the browser.

Advantages:
Better interactivity and faster updates after the first load.
Used in modern web apps like React or Angular.
Disadvantages:
Slower initial load.
Harder for search engines to read.
4. What are different frameworks for client-side rendering?
Popular frameworks for CSR:

React.js: A library for building user interfaces.
Vue.js: A progressive JavaScript framework.
Angular: A complete framework for building web applications.
5. What are different frameworks for server-side rendering?
Popular frameworks for SSR:

Next.js: Built on top of React for SSR.
Nuxt.js: Based on Vue.js for SSR.
Django (Python): A backend framework that renders HTML on the server.
Ruby on Rails: A server-side framework for web apps.
6. How does the internet work?
The internet is a global network of computers connected to each other. Here's a simplified explanation:

Devices (like your phone or computer) connect to the internet using ISPs (Internet Service Providers).
Requests are sent using protocols like HTTP or HTTPS.
Servers store and serve the requested data (like a webpage or video).
Data travels in packets through routers and switches to reach your device.
7. What is the Client-Server model?
The Client-Server model is a system where:

Client: Your browser or app sends a request.
Server: A remote computer processes the request and sends back a response.
Example: When you search Google, your browser (client) sends a query, and Google's server processes it and returns search results.

8. What are meta tags?
Meta tags are HTML tags that provide metadata (information about the webpage) to browsers and search engines.

Example:

html
Copy code
<meta name="description" content="This is a sample webpage.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Uses:

Improve SEO.
Define how a webpage should behave (e.g., mobile-friendly).
9. What are semantic tags?
Semantic tags in HTML describe the purpose of the content, making it easier for browsers and search engines to understand.

Examples:
<header>: Represents the header of a page.
<article>: Represents an independent piece of content.
<footer>: Represents the footer of a page.
10. What tags or attributes come in HTML5?
HTML5 introduced many new tags and attributes to improve web development:

New Tags:
<header>, <footer>, <article>, <section>, <nav> (semantic tags).
<canvas>: For drawing graphics.
<video> and <audio>: For embedding media.
New Attributes:
placeholder for <input>: Shows a hint in input fields.
required for <input>: Makes a field mandatory.
autoplay for <video> or <audio>: Starts media playback automatically.