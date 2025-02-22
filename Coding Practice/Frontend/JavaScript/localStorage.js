// 1. **Frontend and Backend**:
//     - The **frontend** is what you see and interact with on the web. It's all about the user experience, from the layout to the colors and fonts used.
//     - The **backend** is like the engine of a car—it's under the hood. You don't see it, but it's what makes the website work. It deals with the server, applications, and databases.
// 2. **Frontend**:
// a. **HTML & CSS - Flex and Grid**:
//     - HTML (HyperText Markup Language) is like the skeleton of a web page. It gives structure by defining elements like headings, paragraphs, and images.
//     - CSS (Cascading Style Sheets) is like the clothing for the HTML skeleton. It styles the web page with colors, fonts, and layouts.
//     - Flex and Grid are tools in CSS that allow you to layout and align elements on your page efficiently.
//         - **Flex** is for one-dimensional layouts. Imagine it like a string of beads—flex lets you align these beads in a line and space them out nicely.
//         - **Grid** is for two-dimensional layouts. Think of it like a chessboard, where you can control the placement of items both vertically and horizontally.
        
//         Please note that it’s more of a general pattern and helps built things easily and there is no strict rule/recommendation that flex should only be used of 1D and grid for  2D
        
    
//     b. **JavaScript and DOM**:
    
//     - JavaScript is the programming language that makes web pages interactive. If HTML/CSS is the body, JavaScript is the nervous system that reacts to what you do, like clicking a button or submitting a form.
//     - DOM (Document Object Model) is a representation of the HTML structure that JavaScript uses to manipulate the content, structure, and style of the website.
// 3. **Backend**:
// a. **Server**:
//     - A server is a computer that serves up your website. When you visit a website, you're actually connecting to a server that sends you the files needed to display the site.
    
//     b. **Database**:
    
//     - This is where all the data of your website is stored. Think of it as a huge filing cabinet with all the information that your website needs to function.
    
//     c. **Request-Response Cycle**:
    
//     - This is the process that happens when you ask (or request) to see a website. Your browser sends a request to the server, which finds the right data in the database, puts it together in a web page, and sends it back (or responds) to you.
// 4. **JSON**
    
//     JSON stands for JavaScript Object Notation, and it's a way to store and transport data. Let's simplify this:
    
//     Imagine you have a bunch of postcards with different bits of information on them—someone's name, an address, or a little note. Each postcard represents a piece of data. Now, if you wanted to send a bunch of these postcards to a friend, you'd put them all in a box and mail them. In the world of web development, JSON is like that box of postcards.
    
//     JSON is favoured because it's easy for humans to read and write, and also easy for machines to parse and generate. Here's what makes JSON special:
    
//     1. **Text-based and Lightweight**:
//         - JSON is just text, which means we can quickly send it across the internet. It's like sending an email instead of a heavy package.
//     2. **Structured Data**:
//         - JSON is organized. Think of it like a closet with different shelves. Each shelf has a label, and you put the right items on the right shelf. In JSON, these labels are called keys, and the items you put on the shelves are called values. Together, they make a key-value pair, which looks like this: `"key": "value"`.
//     3. **Arrays and Objects**:
//         - JSON can hold two things: objects and arrays. An object is like a box with labeled compartments. Each piece of data has its own spot. In coding terms, this is written with curly braces `{}`.
//         - An array is a list where the order matters, like a shopping list. This is written with square brackets `[]`.



// # Local Storage :

// 1. **What is Local Storage?**
//     - Think of Local Storage like a small notebook that your web browser has. Each website can write, read, and store its own notes in this notebook, but it can't see or change the notes from other websites.
//     - It's part of the Web Storage API, which provides a way for web pages to store data locally within the user's browser.
// 2. **Characteristics of Local Storage**:
//     - **Persistent Storage**: Unlike cookies, which can expire, Local Storage data remains saved even after you close and reopen the browser. It's like writing something in pen—it stays until you erase it.
//     - **Capacity**: Local Storage can hold a lot more data than cookies. Typically, it can store up to 5MB of data, which is like going from a small sticky note to a full notebook.
//     - **Per Domain**: Each website has its own separate Local Storage. This means that Website A can't look at or change the Local Storage of Website B.
// 3. **How It's Used**:
//     - **Storing User Preferences**: Say you choose a dark mode on a website. The site can save this preference in Local Storage, so next time you visit, it remembers your choice.
//         - Open https://chakra-ui.com/ and see for yourself
//     - **Saving Application State**: If you're using a web application and you've made some changes, the app can save these changes to Local Storage. This way, if you accidentally close the tab, your changes aren't lost.
//     - **Caching Data**: Websites can store some data locally to load faster. For example, a website could save a list of your most recently viewed items.
// 4. **How to Use It in JavaScript**:
//     - **Setting an Item**: You can store data using `localStorage.setItem('key', 'value');`. This is like writing a note with a label (key) and a message (value).
localStorage.setItem("name", "Bruce Wayne");
        
//     - **Getting an Item**: To read the data, you use `localStorage.getItem('key');`. This is like reading the note you've written earlier.
localStorage.getItem("name");
        
//     - **Removing an Item**: If you want to erase a note, you use `localStorage.removeItem('key');`.
localStorage.removeItem("name");


// storing it into localStorage
localStorage.setItem("profile1", JSON.stringify(profile1));
// getting it back from localStorage
let profile1Obj = JSON.parse(localStorage.getItem("profile1"));
console.log(profile1Obj);


// # Day-12 Local Storage

// ## **What is localStorage in JavaScript?**

// - `localStorage` is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
// - This means the data stored in the browser will persist even after the browser window is closed.

// ## **How does localStorage work?**

// To use `localStorage` in your web applications, there are five methods to choose from:

// 1. `setItem()`: Add key and value to `localStorage`
// 2. `getItem()`: This is how you get items from `localStorage`
// 3. `removeItem()`: Remove an item by key from `localStorage`
// 4. `clear()`: Clear all `localStorage`