## Selectors

Universal Selector * {}

Type Selector h1, h2 ,h3 {}

Child Selector ul > li {}

Descendant Selector p a {}

Class Selector .class {}

ID Selector #id {}

Adjacent Sibling Selector h1 + p {}

General Sibling Selector h1 ~ p {}

Attribute Selector [attribute="SomeValue"] {}

Pseudo Selectors & Elements
Mouse Over Selector a:hover {}

Active Link Selector a:active {}

Focus Selector input:focus {}

Visited Links Selector a:visited {}

Link Selector .class:link {}

First Line Selector p::first-line {}

First Letter Selector p::first-letter {}

First Child Selector p:first-child {}

Last Child Selector p:last-child {}

Only Child Selector p:only-child {}

:nth-child Selector p:nth-child() {}

First Element of its Parent Selector p:first-of-type {}

Checked elements selector input:checked {}

Disabled elements selector input:disabled {}

Enabled elements selector input:enabled {}

Elements that have no Children Selector (including text nodes) p:empty {}

Not a Specified Element Selector :not(p) {}

Before Element .class::before {}

After Element .class::before {}

Text Styling
Font style font-style: normal | italic | oblique

Font Variant font-variant: normal | small-caps

Font Weight font-weight: normal | bold | bolder | lighter | 100 - 900

Vertical Alignment vertical-align: baseline | 10px | sub | super | top | text-top | middle | bottom | text-bottom | initial

Font Size font-size: 12px | 0.8em | 80%

Text Transform text-transform: capitalise | lowercase | uppercase

Space Between Characters letter-spacing: normal | 4px

Line Height line-height: normal | 3em | 34%

Horizontal Alignment text-align: left | right | center | justify

Text Align Last text-align-last: auto | left | right | center | justify | start | end | initial | inherit

Text Decoration text-decoration: none | underline | overline | line-through

Indent First Line text-indent: 25px

Font Family font-family: 'Open Sans', sans-serif

Text Justify text-justify: auto | inter-word | inter-character | none | initial | inherit

Text Overflow text-overflow: clip | ellipsis | string | initial | inherit

Text Shadow text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit

Position
Position position: static | relative | absolute | fixed | sticky

Position Properties top | right | bottom | left

Float Element float: left | right | none

Clear Floating Elements clear: none | left | right | both

Z Index z-index: 3 | auto | inherit

Background
Background Image background-image: url()

Background Repeat background-repeat: repeat-x | repeat-y | repeat | space | round | no-repeat

Background Color background-color: #2AA9E0

Background Position background-position: top | right | bottom | left | center

Background Attachment background-attachment: scroll | fixed | local | initial | inherit

Box properties
Box Sizing box-sizing: border-box | content-box

Margin margin: 2px 4px 6px 8px | 0 auto

Padding padding: 2px 4px 6px 8px

Border Color border-color: #2AA9E0

Border Style border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset

Border Width border-width: 10px

List Styling
List Type list-style-type: disc | circle | square | none

List Position list-style-position: inside | outside

List Image list-style-image: url()

Flex box
Flex Direction flex-direction: row | row-reverse | column | column-reverse

Flex Wrap flex-wrap: nowrap | wrap | wrap-reverse

Justify Content justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

Align Items align-items: flex-start | flex-end | center | baseline | stretch

Align Content align-content: flex-start | flex-end | center | space-between | space-around | stretch

Order order: 0

Flex Grow flex-grow: 0

Flex Shrink flex-shrink: 1

Flex Basis flex-basis: 3px | auto

Align Self align-self: auto | flex-start | flex-end | center | baseline | stretch

CSS Grid
Grid Template Columns grid-template-columns: 40px 50px auto 50px 40px

Grid Template Rows grid-template-rows: 25% 100px auto

Grid Template Areas grid-template-areas: "a b c" | none

Grid Template grid-template: "a a a" 20% "b b b" auto | 100px 1fr / 50px 1fr

Grid Column Gap grid-column-gap: 10px

Grid Row Gap grid-row-gap: 10px

Justify Items justify-items: start | end | center | stretch

Align Items align-items: start | end | center | stretch

Justify Content justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

Align Content align-content: flex-start | flex-end | center | space-between | space-around | stretch

Grid Auto Columns grid-auto-columns: 100px | max-content | min-content

Grid Auto Rows grid-auto-rows: 100px | max-content | min-content

Grid Auto Flow grid-auto-flow: row | column | row dense | column dense

Grid Column Start grid-column-start: 2 | areaname | span 2 | span areaname | auto

Grid Column End grid-column-end: 2 | areaname | span 2 | span areaname | auto

Grid Row Start grid-row-start: 2 | areaname | span 2 | span areaname | auto

Grid Row End grid-row-end: 2 | areaname | span 2 | span areaname | auto

Grid Column grid-column: 3 / span 2

Grid Row grid-row: 3 / span 2

Justify Self justify-self: start | end | center | stretch

Align Self align-self: start | end | center | stretch

Dynamic Content
CSS Variable --variable-name: value

Variable Usage var(--variable-name)

Counter Reset counter-reset: name-of-counter

Counter Increment counter-increment: name-of-counter

Counter Dynamic Value content: counter(name-of-counter)

Attribute Dynamic Value content: attr(name-of-attribute)




1. How does the browser work?
A browser is a software application (like Chrome, Firefox, or Safari) that lets you access and view websites. Here's how it works:

`User Request`: You type a URL (e.g., www.example.com) or click a link.
`DNS Lookup`: The browser finds the IP address of the website using a Domain Name System (DNS).
`Request to Server`: The browser sends an HTTP/HTTPS request to the web server hosting the website.
`Server Response`: The server sends back the requested files (HTML, CSS, JavaScript, images, etc.).
`Rendering`: The browser parses the HTML, applies CSS for styling, and executes JavaScript for interactivity to display the webpage.


2. What is Server-side rendering?
Server-side rendering (SSR) means generating the HTML content of a webpage on the server and sending it to the browser. The browser displays the content immediately without waiting for JavaScript.

`Advantages`:
Faster initial page load.
Better for SEO (search engines can easily read the content).
Example: Traditional websites like blogs or news sites.


3. What is Client-side rendering?
Client-side rendering (CSR) means the browser downloads a blank HTML page and a JavaScript file, which then generates the HTML content dynamically in the browser.

`Advantages`:
Better interactivity and faster updates after the first load.
Used in modern web apps like React or Angular.
`Disadvantages`:
Slower initial load.
Harder for search engines to read.


4. What are different frameworks for client-side rendering?
Popular frameworks for CSR:

`React.js`: A library for building user interfaces.
`Vue.js`: A progressive JavaScript framework.
`Angular`: A complete framework for building web applications.


5. What are different frameworks for server-side rendering?
Popular frameworks for SSR:

`Next.js`: Built on top of React for SSR.
`Nuxt.js`: Based on Vue.js for SSR.
`Django (Python)`: A backend framework that renders HTML on the server.
`Ruby on Rails`: A server-side framework for web apps.



6. How does the internet work?
The internet is a global network of computers connected to each other. Here's a simplified explanation:

Devices (like your phone or computer) connect to the internet using ISPs (Internet Service Providers).
Requests are sent using protocols like HTTP or HTTPS.
Servers store and serve the requested data (like a webpage or video).
Data travels in packets through routers and switches to reach your device.


7. What is the Client-Server model?
The Client-Server model is a system where:

`Client`: Your browser or app sends a request.
`Server`: A remote computer processes the request and sends back a response.
`Example`: When you search Google, your browser (client) sends a query, and Google's server processes it and returns search results.


8. What are meta tags?
Meta tags are HTML tags that provide metadata (information about the webpage) to browsers and search engines.
<meta name="description" content="This is a sample webpage.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


`Uses`:
Improve SEO.
Define how a webpage should behave (e.g., mobile-friendly).


9. What are semantic tags?
Semantic tags in HTML describe the purpose of the content, making it easier for browsers and search engines to understand.

`Examples`:
<header>: Represents the header of a page.
<article>: Represents an independent piece of content.
<footer>: Represents the footer of a page.


10. What tags or attributes come in HTML5?
HTML5 introduced many new tags and attributes to improve web development:

`New Tags`:
<header>, <footer>, <article>, <section>, <nav> (semantic tags).
<canvas>: For drawing graphics.
<video> and <audio>: For embedding media.
New Attributes:
placeholder for <input>: Shows a hint in input fields.
required for <input>: Makes a field mandatory.
autoplay for <video> or <audio>: Starts media playback automatically.


1. How does CSS work?
CSS (Cascading Style Sheets) is used to style HTML elements. Here's how it works:

`HTML Structure`: You write HTML to define the content of the webpage.
`CSS Rules`: CSS is used to add styles like colors, fonts, spacing, and layout.
`Selectors`: CSS selects HTML elements using selectors (e.g., h1, .class, #id) and applies styles to them.
`Cascading`: If multiple styles apply to an element, the browser decides which one to use based on specificity, importance (!important), and order of appearance.
`Rendering`: The browser combines the HTML and CSS to display the styled webpage.


2. What is the z-index?
The z-index in CSS controls the stacking order of elements on a webpage. It determines which element appears in front when they overlap.

Default Behavior: Elements with higher z-index values appear on top.
`Usage`: The z-index only works on elements with a position of relative, absolute, or fixed.
    .box1 {
    position: absolute;
    z-index: 1;
    }
    .box2 {
    position: absolute;
    z-index: 2; /* This will appear on top of .box1 */
    }




HTML Questions
How do you add CSS to an HTML webpage?

You can add CSS to an HTML webpage using:
Inline CSS: Add style directly within an element using the style attribute.
Internal CSS: Use a <style> tag inside the <head> section.
External CSS: Link an external stylesheet using the <link> tag in the <head>.
What does CSS stand for?

CSS stands for Cascading Style Sheets.
What does HTML stand for?

HTML stands for HyperText Markup Language.
What are the features of HTML5?

New semantic elements like <header>, <footer>, <article>, <section>.
Support for multimedia using <audio> and <video> tags.
Local storage with localStorage and sessionStorage.
Canvas and SVG for graphics.
Geolocation API for location-based services.
What are the different types of storage in HTML5?

localStorage: Stores data with no expiration.
sessionStorage: Stores data for the session only.
IndexedDB: For larger, structured data storage.
What do the following mean in HTML?

<section>: Groups related content together.
<article>: Represents a standalone piece of content, like a blog post.
<footer>: Defines the footer for a section or document.
<nav>: Represents a section for navigation links.
<aside>: Contains content related to the main content, like sidebars.
What are forms in HTML?

Forms are used to collect user input and submit data to a server. They use <form> along with input elements like <input>, <textarea>, <button>.
What are event listeners in HTML?

Event listeners are functions that wait for and respond to user interactions like clicks, key presses, or mouse movements.
What is the onload event?

The onload event is triggered when an HTML element (like an image or page) is fully loaded.
What is the scroll event?

The scroll event is triggered when a user scrolls an element or page.
How do you use Geo Location API?

Use navigator.geolocation.getCurrentPosition() to get the user’s location.
How do you know if a user is offline or not? What API does the browser provide for that?

Use the navigator.onLine property to check if the user is online.
Listen for online and offline events for updates.
How do you use Video and Audio tags?

Use <video> and <audio> tags, and include the src attribute or <source> elements.






CSS Questions
What are CSS selectors?

CSS selectors are patterns used to select and style HTML elements, such as element, .class, #id, and pseudo-classes like :hover.
What are CSS variables?

CSS variables are reusable custom properties declared with --, e.g., --main-color: blue;.
What is the difference between position absolute and relative?

Absolute: Positions the element relative to its nearest positioned ancestor (or the viewport if none exist).
Relative: Positions the element relative to its normal position.


CSS Questions
What are CSS selectors?

CSS selectors are patterns used to select and style HTML elements, such as element, .class, #id, and pseudo-classes like :hover.
What are CSS variables?

CSS variables are reusable custom properties declared with --, e.g., --main-color: blue;.
What is the difference between position absolute and relative?

Absolute: Positions the element relative to its nearest positioned ancestor (or the viewport if none exist).
Relative: Positions the element relative to its normal position.


Additional Questions
How do you build an infinite scrolling page?

Use the scroll event to load more content when the user scrolls to the bottom.
How to build a page like Imgur or Pinterest?

Use a CSS grid or Masonry layout for arranging content dynamically.
What are SVGs?

SVG (Scalable Vector Graphics) is a format for vector images based on XML, which can scale without losing quality.
How do you animate SVGs?

Use CSS animations or JavaScript libraries like GreenSock (GSAP) or SVG’s <animate> element.



2. What is the z-index?
The z-index in CSS controls the stacking order of elements on a webpage. It determines which element appears in front when they overlap.

Default Behavior: Elements with higher z-index values appear on top.
Usage: The z-index only works on elements with a position of relative, absolute, or fixed.
Example:
css
Copy code
.box1 {
  position: absolute;
  z-index: 1;
}
.box2 {
  position: absolute;
  z-index: 2; /* This will appear on top of .box1 */
}
3. What are the most common CSS libraries?
CSS libraries are pre-built collections of styles to speed up development. Here are some popular ones:

Bootstrap: Provides a responsive grid system and pre-styled components like buttons, modals, and forms.
Website: getbootstrap.com
Tailwind CSS: A utility-first framework for building custom designs without pre-styled components.
Website: tailwindcss.com
Foundation: A responsive front-end framework similar to Bootstrap.
Website: foundation.zurb.com
Bulma: A lightweight CSS framework based on Flexbox.
Website: bulma.io



What are Actions?
Actions are plain JavaScript objects that describe what happened in the application. They must have a type property that indicates the action's intent, and they may include additional data (payload).

Example:

javascript
Copy code
const incrementAction = { type: 'INCREMENT', payload: 1 };
What are Action Creators?
Action creators are functions that return actions. They encapsulate the action object creation, making the code reusable and easier to maintain.

Example:

javascript
Copy code
function increment(value) {
    return { type: 'INCREMENT', payload: value };
}
What are Dispatchers?
Dispatchers are methods provided by the Redux store that send actions to the reducers. When you call dispatch(action), Redux passes the action to the reducer to update the state.

What are Reducers?
Reducers are pure functions that take the current state and an action as arguments and return a new state. They are responsible for determining how the state changes in response to actions.

Example:

javascript
Copy code
function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}
What are Pure Functions?
Pure functions:

Always return the same output for the same input.
Do not cause side effects (e.g., modifying variables outside their scope).
Reducers must be pure to ensure predictable state updates.

Why Do We Spread the State or Return a New Object in Reducers?
In Redux, state is immutable. To update the state, we return a new object rather than modifying the existing state directly. This ensures better debugging and avoids unintended side effects.

Why Do Dispatchers Take Only Actions Which Are Objects?
Actions are plain objects to maintain consistency, simplicity, and serializability, which helps in debugging tools like Redux DevTools.

What Are Types in Actions and Why Do We Need Them?
The type property in actions identifies the action's purpose. It helps reducers determine what logic to apply for a given action.

What Happens When You Pass a Function into a Dispatcher?
Passing a function to dispatch is possible when using middleware like Redux Thunk. It allows you to handle asynchronous logic (e.g., API calls) before dispatching a plain action.

Example with Redux Thunk:

javascript
Copy code
function fetchData() {
    return async (dispatch) => {
        const data = await fetch('/api/data').then(res => res.json());
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    };
}
Where Do Dispatchers Come From?
Dispatchers are part of the Redux store. The store is created using createStore or configureStore (from Redux Toolkit).

What Are the Properties of a Store?
The Redux store has the following properties:

getState: Returns the current state.
dispatch: Sends actions to reducers.
subscribe: Adds a listener that gets called when the state changes.
Can You Create Your Own Redux?
Yes, a basic Redux implementation includes methods like dispatch, getState, and subscribe.

Example:

javascript
Copy code
function createStore(reducer) {
    let state;
    let listeners = [];
    return {
        getState: () => state,
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => listeners = listeners.filter(l => l !== listener);
        }
    };
}
Explain Redux to a 5-Year-Old
Imagine a box where you store all your toys (state). You can only add, remove, or replace toys (update the state) by writing a note (action) and giving it to a magic box (reducer) that follows specific rules to change the toys inside.

What is the Difference Between Context API and Redux?
Context API: Built into React; best for small-scale state sharing.
Redux: More powerful; suited for large-scale, complex applications with global state management.
What Are Redux Thunks?
Redux Thunks are middleware that allow you to write action creators that return functions instead of plain objects. This enables handling asynchronous operations.

Why Do We Need to Use Network Requests in Redux Thunks?
Thunks allow you to fetch data from APIs and dispatch actions based on the response.

What Are Middlewares?
Middlewares are functions that intercept actions before they reach reducers, enabling side effects like logging or async operations.

Can You Write Your Own Middleware?
Yes, here's a simple logger middleware:

javascript
Copy code
const logger = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next State:', store.getState());
    return result;
};
Explain How State Gets Updated with Redux (Diagram)
Dispatch: An action is dispatched.
Middleware: (Optional) Middleware intercepts the action.
Reducer: Reducer processes the action and returns a new state.
Store: Store updates and notifies subscribers.
What is useSelector?
A React-Redux hook to extract state from the store.

What is the compareFn in useSelector?
An optional function to customize the equality check for re-renders.

What is useDispatch?
A React-Redux hook to access the dispatch function.

What is the Use of Provider?
Provider makes the Redux store available to all React components in the app.

What is Redux Toolkit?
Redux Toolkit simplifies Redux development by providing tools like createSlice, configureStore, and built-in middleware. It reduces boilerplate and enhances performance.