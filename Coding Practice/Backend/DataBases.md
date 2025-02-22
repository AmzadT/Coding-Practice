## Databases Questions

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



**What are some common queries in SQL?**
    SELECT: Retrieves data.
    SELECT * FROM users;

    INSERT: Adds data.
    INSERT INTO users (name, age) VALUES ('John', 25);

    UPDATE: Modifies data.
    UPDATE users SET age = 26 WHERE name = 'John';

    DELETE: Removes data.
    DELETE FROM users WHERE name = 'John';



3. How do you do joins in SQL?
Joins combine data from two or more tables based on a related column.
INNER JOIN: Returns matching rows from both tables.
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
LEFT JOIN: Returns all rows from the left table and matched rows from the right.
RIGHT JOIN: Returns all rows from the right table and matched rows from the left.
FULL JOIN: Combines all rows from both tables.



 How do you use lookup in MongoDB?
$lookup: Performs a join-like operation between collections.

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