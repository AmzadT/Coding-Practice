1. What is the MERN stack?
Answer:
MERN stack is a JavaScript-based technology stack used for building full-stack web applications. It consists of:

MongoDB (Database)
Express.js (Backend framework)
React.js (Frontend library)
Node.js (Runtime environment)
2. Why use MongoDB instead of SQL databases?
Answer:
MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. Advantages over SQL databases:

Schema-less (easier to modify structure)
Scalable for large applications
Faster queries with indexing
Stores data as documents (ideal for JSON-based APIs)
3. How do you connect MongoDB to a Node.js application?
Answer:
You use Mongoose to connect MongoDB with Node.js.

javascript
Copy
Edit
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
4. What is Express.js and why is it used?
Answer:
Express.js is a lightweight and fast Node.js framework used to build APIs and web applications. It simplifies:

Routing
Middleware handling
Request and response management
Example:

javascript
Copy
Edit
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(3000, () => console.log("Server running on port 3000"));
5. What is middleware in Express.js?
Answer:
Middleware is a function that has access to the request (req), response (res), and next() function.

Example middleware:

javascript
Copy
Edit
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);
This logs every incoming request.

6. How do you handle errors in Express.js?
Answer:
Use an error-handling middleware:

javascript
Copy
Edit
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Something went wrong!" });
});
7. What is the purpose of body-parser in Express?
Answer:
body-parser allows Express to parse incoming JSON or form-data requests.

Example:

javascript
Copy
Edit
app.use(express.json()); // Built-in body-parser
8. How do you define a Mongoose schema and model?
Answer:

javascript
Copy
Edit
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);
9. How do you create a REST API endpoint in Express.js?
Answer:

javascript
Copy
Edit
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
10. How do you implement authentication in a MERN stack app?
Answer:
You use JWT (JSON Web Tokens) for authentication.

javascript
Copy
Edit
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: "123" }, "secretKey", { expiresIn: "1h" });
11. What is CORS and why is it needed in MERN apps?
Answer:
CORS (Cross-Origin Resource Sharing) allows your frontend (React) to communicate with a backend (Express) hosted on a different domain.

Enable CORS in Express:

javascript
Copy
Edit
const cors = require("cors");
app.use(cors());
12. How do you hash passwords in Node.js before storing them?
Answer:
Use bcrypt.js to hash passwords securely.

javascript
Copy
Edit
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash("myPassword", 10);
13. How do you validate data before saving it to MongoDB?
Answer:
Use Mongoose validation:

javascript
Copy
Edit
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
});
14. How do you implement role-based access control (RBAC)?
Answer:

javascript
Copy
Edit
const checkRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).json({ error: "Access denied" });
  next();
};

app.get("/admin", checkRole("admin"), (req, res) => res.send("Admin Dashboard"));
15. How do you implement pagination in MongoDB?
Answer:

javascript
Copy
Edit
app.get("/products", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(products);
});
16. How do you deploy a MERN app?
Answer:

Frontend (React): Deploy on Vercel or Netlify.
Backend (Node/Express): Deploy on Render, Vercel, or AWS.
Database (MongoDB): Use MongoDB Atlas for cloud storage.
17. How do you optimize a MongoDB query?
Answer:

Use indexes to speed up queries.
javascript
Copy
Edit
userSchema.index({ email: 1 });
Avoid fetching unnecessary fields:
javascript
Copy
Edit
User.find({}, "name email");
18. What is the difference between findOne() and findById() in Mongoose?
Answer:

findOne({ key: value }) finds a single document based on a condition.
findById(id) finds a document by its MongoDB _id.
Example:

javascript
Copy
Edit
const user1 = await User.findOne({ email: "test@example.com" });
const user2 = await User.findById("6512ab3c89c3d9");
19. How do you protect routes in Express.js?
Answer:
Use middleware to verify JWT tokens.

javascript
Copy
Edit
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = decoded;
    next();
  });
};

app.get("/dashboard", authMiddleware, (req, res) => res.send("Protected Dashboard"));
20. How do you handle file uploads in MERN?
Answer:
Use Multer for handling file uploads.

javascript
Copy
Edit
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ filePath: req.file.path });
});
