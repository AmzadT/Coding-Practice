- **What are Models?**
    - A constructor is a blueprint using which we can create objects. Similarly, using the Model we create documents (collection of a particular database of MongoDB).
    - So, the model is a constructor function.
    - **Syntax ⇒**
        
        ```jsx
        mongoose.model(NameoftheCollection, SchemaoftheCollection)
        ```
        
        This function returns the **Mongoose object.**



- **What are aggregation pipelines?**
    - It is a way provided by MongoDB to perform aggregation.
    - The aggregation pipeline has various stages and each stage transforms the document.
    - It is a multi-stage pipeline. In each stage, the documents are taken as input and produce the resultant set of documents now in the next stage ( id is available ) the resultant documents are taken as input and produce output, this process is going on till the last stage.
    - The basic pipeline stages provide filters that will perform like queries and the document transformation modifies the resultant document and the other pipeline provides tools for grouping and sorting documents.
    - **Example ⇒**
        - Find all the small-size pizzas with prices> 16
            
            ```jsx
            db.orders.aggregate([{$match : {size : "small",price : {$gt:16}}}])
            ```
            
            **$match:** It is used for filtering the documents and can reduce the number of documents that are given as input to the next stage
            
            the **aggregate()** function is used to perform aggregation



- **Explain why a mongoose does not return a promise but has a .then?**
    - Mongoose provides a way to define and interact with MongoDB collections in a more structured and consistent manner than using MongoDB directly.
    - It does not return Promises directly, but it does provide support for Promises through its underlying Promise library, and its fluent API and chaining syntax aim to provide a more consistent way to work with MongoDB collections.
    - Mongoose is primarily designed for use in a synchronous, object-oriented programming style, rather than a functional programming style with Promises. By providing a fluent API and supporting synchronous chaining, Mongoose aims to make it easier for developers to work with MongoDB collections in a structured and consistent manner, without having to deal with the complexities of asynchronous programming and Promises.            


1. How do you create indexes with Mongoose?
In Mongoose, indexes are created to improve the speed of data retrieval operations (like find queries) on large datasets.

```jsx
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});
userSchema.index({ username: 1 }); // Creates an ascending index on the "username" field
const User = mongoose.model('User', userSchema);

userSchema.index({ email: 1 }, { unique: true });

// Creating indexes with createIndexes(): 
mongoose.model('User', userSchema).createIndexes();

```



2. What are pre and post-hooks?
In Mongoose, pre-hooks and post-hooks are middleware functions that are executed before or after certain operations (like saving, updating, or deleting a document) are performed on a model. These hooks allow you to add custom logic, such as validation or logging, at specific points in the lifecycle of a document.

Pre-hooks: Run before a certain operation (e.g., save, validate, remove, etc.) takes place.

Example: Using a pre hook to hash a password before saving a user document.

```jsx
userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = hashPassword(this.password); // hypothetical hash function
  }
  next(); // Move to the next operation (save)
});
Post-hooks: Run after a certain operation has completed.

Example: Using a post hook to log after a document is saved.

javascript
Copy code
userSchema.post('save', function(doc) {
  console.log(`User ${doc.username} has been saved.`);
});
Common Operations:

pre('save'): Runs before a document is saved.
post('save'): Runs after a document is saved.
pre('remove'): Runs before a document is removed.
post('remove'): Runs after a document is removed.
```