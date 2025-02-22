- **What is non-blocking vs blocking?**
    
    In Node.js, blocking and non-blocking behavior is determined by how I/O operations are handled
    
    ### NON-BLOCKING
    
    - By default, Node.js uses a non-blocking I/O model, where I/O operations are performed asynchronously without blocking the main thread of execution.
    - This means that when an I/O operation is executed, the program continues to execute other tasks while waiting for the I/O operation to complete.
    - This non-blocking behavior is achieved through the use of :
        - callbacks,
        - promises, and
        - async/await functions.
    
    ### BLOCKING
    
    - Blocking behavior can occur when using certain synchronous I/O methods in Node.js.
    - Synchronous methods block the main thread until the operation is completed, preventing the program from executing any other tasks until the operation is finished.
    - This can lead to delays and decreased performance if many synchronous I/O operations need to be executed.


1. What is the difference between readFile and readFileSync?
readFile:

Asynchronous.
Doesn't block other operations while reading the file.

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});



readFileSync:

Synchronous.
Blocks execution until the file is read.

const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);



2. How can you make a network request using the http module?
Use Node.js's built-in http module to send requests.

const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => (data += chunk));
  res.on('end', () => console.log(data));
});

req.on('error', error => console.error(error));
req.end();



3. How to create a web server without Express?
Use the http module to create a basic web server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));



4. What are timers in Node.js?
Timers are functions for scheduling tasks:
setTimeout: Executes a function after a delay.
setInterval: Repeats a function at regular intervals.
setImmediate: Executes a function immediately after the current event loop phase.

setTimeout(() => console.log('After 2 seconds'), 2000);
setInterval(() => console.log('Every 1 second'), 1000);


5. What is NVM? How do you use it?
NVM (Node Version Manager):
A tool to manage multiple Node.js versions.
Usage:
Install using the official NVM repository.
Install a Node.js version: nvm install 14.
Switch versions: nvm use 14.





Node.js Questions
1. What is the difference between readFile and readFileSync?
readFile:

Asynchronous.
Doesn't block other operations while reading the file.
Example:
javascript
Copy code
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
readFileSync:

Synchronous.
Blocks execution until the file is read.
Example:
javascript
Copy code
const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);



2. How can you make a network request using the http module?
Use Node.js's built-in http module to send requests.
javascript
Copy code
const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => (data += chunk));
  res.on('end', () => console.log(data));
});

req.on('error', error => console.error(error));
req.end();



3. How to create a web server without Express?
Use the http module to create a basic web server.
javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));



4. What are timers in Node.js?
Timers are functions for scheduling tasks:
setTimeout: Executes a function after a delay.
setInterval: Repeats a function at regular intervals.
setImmediate: Executes a function immediately after the current event loop phase.
javascript
Copy code
setTimeout(() => console.log('After 2 seconds'), 2000);
setInterval(() => console.log('Every 1 second'), 1000);



5. What is NVM? How do you use it?
NVM (Node Version Manager):
A tool to manage multiple Node.js versions.
Usage:
Install using the official NVM repository.
Install a Node.js version: nvm install 14.
Switch versions: nvm use 14.



6. What is CommonJS? How is it different from ES Modules?
CommonJS:

Default module system in Node.js.
Uses require and module.exports.

const fs = require('fs'); // CommonJS
ES Modules:

Newer, used in modern JavaScript.
Uses import and export.

import fs from 'fs'; // ES Modules



7. How does the crypto module work?
The crypto module provides encryption and hashing utilities.
Example: Generating a hash.

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);




8. What are WebSockets?
WebSockets:
A communication protocol for real-time data exchange between the client and server.
Full-duplex (two-way) communication.
Example using ws library:

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  socket.on('message', message => console.log(`Received: ${message}`));
  socket.send('Hello from server');
});




Node.js Questions
1. What is the difference between readFile and readFileSync?
readFile:

Asynchronous.
Doesn't block other operations while reading the file.
Example:
javascript
Copy code
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
readFileSync:

Synchronous.
Blocks execution until the file is read.
Example:
javascript
Copy code
const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);



2. How can you make a network request using the http module?
Use Node.js's built-in http module to send requests.
javascript
Copy code
const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => (data += chunk));
  res.on('end', () => console.log(data));
});

req.on('error', error => console.error(error));
req.end();



3. How to create a web server without Express?
Use the http module to create a basic web server.
javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));



4. What are timers in Node.js?
Timers are functions for scheduling tasks:
setTimeout: Executes a function after a delay.
setInterval: Repeats a function at regular intervals.
setImmediate: Executes a function immediately after the current event loop phase.
javascript
Copy code
setTimeout(() => console.log('After 2 seconds'), 2000);
setInterval(() => console.log('Every 1 second'), 1000);



5. What is NVM? How do you use it?
NVM (Node Version Manager):
A tool to manage multiple Node.js versions.
Usage:
Install using the official NVM repository.
Install a Node.js version: nvm install 14.
Switch versions: nvm use 14.



6. What is CommonJS? How is it different from ES Modules?
CommonJS:

Default module system in Node.js.
Uses require and module.exports.
javascript
Copy code
const fs = require('fs'); // CommonJS
ES Modules:

Newer, used in modern JavaScript.
Uses import and export.
javascript
Copy code
import fs from 'fs'; // ES Modules



7. How does the crypto module work?
The crypto module provides encryption and hashing utilities.
Example: Generating a hash.

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);



1. What are WebSockets?
WebSockets:
A communication protocol for real-time data exchange between the client and server.
Full-duplex (two-way) communication.
Example using ws library:

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  socket.on('message', message => console.log(`Received: ${message}`));
  socket.send('Hello from server');
});



9. What are Microservices?
Microservices:
Architecture style where applications are divided into small, independent services.
Each service focuses on a specific functionality.
Communicate using APIs.



10. Creating a CLI-based app using Node.js and publishing it
Create a CLI app using process.argv for arguments and commander for advanced features.

#!/usr/bin/env node

const [,, ...args] = process.argv;
console.log(`Hello, ${args.join(' ')}`);
Publishing:
Add a bin field in package.json to specify the executable file.
Run npm publish to publish it to npm.