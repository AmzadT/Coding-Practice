# 💡 HTML Questions (10)

1. What is HTML?
Answer:
HTML (HyperText Markup Language) is used to structure web pages using elements like headings, paragraphs, images, links, and forms.
📌 Example:
<h1>Welcome to My Website</h1>
<p>This is a paragraph.</p>


2. What are the new features in HTML5?
Answer:
HTML5 introduced new elements like:
✅ Semantic Tags: <header>, <footer>, <article>, <section>
✅ Media Tags: <audio>, <video>
✅ Form Enhancements: <input type="email">, <input type="date">
✅ Canvas & SVG for graphics
📌 Example (Video Tag):
<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video>


3. What are semantic tags in HTML?
Answer:
Semantic tags describe the meaning of content in a web page. Examples:
✅ <header> - For page header
✅ <nav> - For navigation links
✅ <article> - For individual content
✅ <section> - For a section in a document
<footer>Footer Section</footer>
📌 Example:
<header>
  <h1>Website Title</h1>
</header>
<nav>
  <a href="home.html">Home</a>
  <a href="about.html">About</a>
</nav>


4. What is the difference between id and class in HTML?
Answer:
id is unique (used for one element).
class is reusable (can be used on multiple elements).
📌 Example:
<p id="unique">This is a unique paragraph.</p>
<p class="common">This is a common paragraph.</p>
<p class="common">This is another common paragraph.</p>
#unique { color: red; }  /* Applies only to one element */
.common { color: blue; } /* Applies to multiple elements */


5. What is the difference between inline, block, and inline-block elements?
Answer:
✅ Inline: Takes only the space of its content (e.g., <span>, <a>).
✅ Block: Takes the full width (e.g., <div>, <p>).
✅ Inline-block: Behaves like inline but allows setting width & height.
📌 Example:
<span style="border:1px solid red;">Inline</span>
<div style="border:1px solid blue;">Block</div>
<span style="display:inline-block; width:100px; height:50px; border:1px solid green;">
  Inline-block
</span>


6. What is the alt attribute in an image tag?
Answer:
The alt attribute provides alternative text for an image when it fails to load or for screen readers.
📌 Example:
<img src="image.jpg" alt="A beautiful sunset">


7. What are the different types of lists in HTML?
Answer:
✅ Ordered List (<ol>) - Numbered list
✅ Unordered List (<ul>) - Bulleted list
✅ Description List (<dl>) - Term and description
📌 Example:
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>


8. What is the difference between <div> and <span>?
Answer:
✅ <div>: it is a block-level element that (takes full width).
✅ <span>: it is an inline element (takes only the required space).
📌 Example:
<div style="background-color: lightgray;">This is a block.</div>
<p>This is <span style="color: red;">red text</span> inside a paragraph.</p>


1. What is the difference between GET and POST methods in HTML forms?
Feature	GET	POST
Data visibility	Visible in URL	Hidden
Security	Less secure	More secure
Data length	Limited	Unlimited
📌 Example:
<form method="GET">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>


10. What is a favicon in HTML?
Answer:
A favicon is a small icon displayed in the browser tab.
📌 Example:
<link rel="icon" type="image/png" href="favicon.png">





# 🎨 CSS Questions (10)

11. What is CSS?
Answer:
CSS (Cascading Style Sheets) is used to style HTML elements.
📌 Example:
p { color: blue; font-size: 16px; }


12. What are the different ways to apply CSS?
Inline CSS: Inside an HTML tag.
Internal CSS: Inside <style> in <head>.
External CSS: In a separate file (.css).
📌 Example (External CSS):
h1 { color: red; }
<link rel="stylesheet" href="styles.css">


13. What is Flexbox in CSS?
Answer:
Flexbox is used to create responsive layouts.
📌 Example:
.container {
  display: flex;
  justify-content: space-between;
}


14. What is the difference between absolute, relative, fixed, and sticky positioning?
✅ Relative: Moves relative to its normal position.
✅ Absolute: Moves relative to the nearest positioned ancestor.
✅ Fixed: Stays fixed on the screen.
✅ Sticky: Sticks when scrolling.
📌 Example:
.fixed-box { position: fixed; top: 0; left: 0; }


15. What is the difference between em, rem, px, and % in CSS?
✅ px – Fixed size.
✅ em – Relative to the parent.
✅ rem – Relative to the root element.
✅ % – Relative to the container.


16. How do you make a div center using CSS?
📌 Example (Flexbox method):
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


17. What is the difference between visibility: hidden and display: none?
✅ visibility: hidden; → Hides the element but it still takes up space.
✅ display: none; → Removes the element completely.


18. What is a media query in CSS?
📌 Example:
@media (max-width: 600px) {
  body { background-color: lightblue; }
}


19. What is Z-index in CSS?
Answer: It controls the stacking order of elements.


20. What is the difference between hover, active, and focus in CSS?
✅ Hover: When mouse is over the element.
✅ Active: When element is clicked.
✅ Focus: When input field is selected.







1. What is the difference between HTML and HTML5?
Answer:

HTML5 supports new elements like <audio>, <video>, <article>, and <section>.
HTML5 supports offline storage (localStorage & sessionStorage).
HTML5 allows embedding SVG and Canvas graphics.

5. What is the purpose of the <meta> tag?
Answer: The <meta> tag provides metadata like character encoding, viewport settings, and SEO information.

Example:
<meta name="viewport" content="width=device-width, initial-scale=1">

1. How to create a hyperlink in HTML?
Answer: Use the <a> tag.

Example:
<a href="https://www.google.com">Go to Google</a>

1. What are the different types of lists in HTML?
Answer:

Ordered List (<ol>) – Numbered list
Unordered List (<ul>) – Bulleted list
Definition List (<dl>) – Term and description
Example:

<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

1. What is the use of the alt attribute in the <img> tag?
Answer: The alt attribute provides alternative text for an image, improving accessibility and SEO.

Example:


<img src="image.jpg" alt="A beautiful sunset">

1.  How to embed a video in HTML?
Answer: Use the <video> tag.

Example:

<video controls width="300">
  <source src="video.mp4" type="video/mp4">
</video>
CSS Questions:

1.  What is CSS?
Answer: CSS (Cascading Style Sheets) is used to style HTML elements.

Example:

css
Copy
Edit
p {
  color: blue;
  font-size: 16px;
}
12. What are the types of CSS?
Answer:

Inline CSS (inside an element)
html
Copy
Edit
<p style="color:red;">This is red text.</p>
Internal CSS (inside <style> tag)
html
Copy
Edit
<style>
p { color: blue; }
</style>
External CSS (linked using <link> tag)
html
Copy
Edit
<link rel="stylesheet" href="styles.css">
13. What is the difference between absolute, relative, and fixed positioning?
Answer:

Relative – Positioned relative to its normal position.
Absolute – Positioned relative to the nearest positioned ancestor.
Fixed – Stays fixed even when scrolling.
Example:

css
Copy
Edit
.relative-box { position: relative; left: 50px; }
.absolute-box { position: absolute; top: 20px; left: 30px; }
.fixed-box { position: fixed; top: 0; }
14. What is Flexbox in CSS?
Answer: Flexbox is used to create flexible and responsive layouts.

Example:

css
Copy
Edit
.container {
  display: flex;
  justify-content: space-between;
}
15. How does CSS Grid work?

Answer: CSS Grid is used for creating two-dimensional layouts.

Example:

css
Copy
Edit
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
16. What is the difference between em, rem, %, and px in CSS?
Answer:

px – Fixed size (e.g., 16px).
% – Relative to the parent element (e.g., width: 50%).
em – Relative to the parent font size (e.g., 2em is twice the parent’s size).
rem – Relative to the root element (html tag).

17. How to make a website responsive?
Answer: Use media queries to apply different styles on different screen sizes.

Example:

css
Copy
Edit
@media (max-width: 600px) {
  body { background-color: lightblue; }
}
18. What is the difference between visibility: hidden; and display: none;?
Answer:

visibility: hidden; hides the element but it still takes up space.
display: none; removes the element from the layout.
Example:

css
Copy
Edit
.hidden { visibility: hidden; }
.none { display: none; }
19. What is a pseudo-class in CSS?
Answer: A pseudo-class applies styles to an element in a specific state.

Example:

css
Copy
Edit
button:hover { background-color: yellow; }
20. What is the difference between max-width and min-width?
Answer:

max-width: Sets the maximum width an element can have.
min-width: Sets the minimum width an element can have.
Example:

css
Copy
Edit
div { max-width: 500px; min-width: 200px; }









## In HTML5, there are around 110 tags in total. HTML5 introduced several new tags to improve document structure, semantics, and multimedia handling.

Newly introduced HTML5 tags (~28 tags):

Structural Elements (Semantic Tags)
<article>
<aside>
<details>
<dialog>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
Multimedia Elements

<audio>
<video>
<source>
<track>
Form Elements

<datalist>
<output>
<progress>
<meter>
Interactive Elements

<canvas>
<command> (Deprecated in HTML5.2)
<menu> (Redefined)
<menuitem> (Deprecated in HTML5.2)

These tags improve accessibility, SEO, and page structure, making HTML more meaningful.




2. What are the semantic tags in HTML?
Semantic tags in HTML5 clearly describe their meaning to both the browser and developers, improving accessibility and SEO.

Common semantic tags:

Structural Tags:

<header> → Defines the header of a webpage or section.
<nav> → Represents navigation links.
<main> → Contains the main content of a webpage.
<section> → Groups related content together.
<article> → Represents a standalone article or post.
<aside> → Contains additional information (like sidebars).
<footer> → Defines the footer of a webpage or section.
Content-Specific Tags:

<figure> → Groups images, diagrams, and illustrations.
<figcaption> → Provides captions for <figure>.
<mark> → Highlights text.
<time> → Represents a date/time.
<summary> → Provides a summary for <details>.
<details> → Creates an expandable/collapsible section.
Why use semantic tags?
✔️ Improves SEO
✔️ Enhances accessibility
✔️ Helps search engines and screen readers understand content better
✔️ Makes the code more readable




What is SEO? (Search Engine Optimization)
SEO (Search Engine Optimization) is the process of optimizing a website to improve its visibility in search engine results pages (SERPs), such as Google, Bing, and Yahoo. It helps websites rank higher for relevant search queries, increasing organic (non-paid) traffic.

Why is SEO Important?
Increases Website Traffic → Higher rankings bring more visitors.
Improves User Experience (UX) → Well-structured, fast, and mobile-friendly websites rank better.
Boosts Credibility & Trust → Users trust websites that appear at the top of search results.
Enhances Business Growth → More visibility leads to more customers and revenue.
Types of SEO
On-Page SEO (Optimizing content & website structure)
✅ Keyword optimization
✅ High-quality content
✅ Proper use of headings (<h1> - <h6>)
✅ Image optimization (alt attributes)
✅ Internal linking

Off-Page SEO (Building website authority)
✅ Backlinks (links from other websites)
✅ Social media marketing
✅ Guest blogging
✅ Influencer outreach

Technical SEO (Improving site performance)
✅ Mobile-friendliness
✅ Page speed optimization
✅ Secure website (HTTPS)
✅ XML sitemaps
✅ Schema markup (structured data)

Local SEO (Optimizing for local searches)
✅ Google My Business profile
✅ Customer reviews
✅ Local keywords (near me searches)

Example of SEO in Action
If you search "best laptops under ₹50,000", Google will show results based on:
✔️ Websites with relevant content
✔️ Proper use of keywords
✔️ High-quality backlinks
✔️ Fast-loading & mobile-friendly pages


What are Attributes in HTML and CSS?
1. HTML Attributes
Attributes in HTML provide additional information about an element. They are always written inside the opening tag and follow the format:


2. CSS Attributes (Properties)
In CSS, attributes are called properties, and they define the style of an element. CSS properties are written as property: value; inside a CSS block.


What is a Meta Tag in HTML?
A meta tag is an HTML element that provides metadata (information about the webpage) to browsers and search engines. Meta tags are placed inside the <head> section of an HTML document.

Common Uses of Meta Tags:
SEO Optimization → Helps search engines understand your page.
Responsive Design → Ensures proper display on mobile devices.
Character Encoding → Supports different languages and symbols.
Author Information → Provides credit to the developer.


What is DOCTYPE in HTML?
The <!DOCTYPE> declaration tells the browser which version of HTML the page is written in. It must be the first line in an HTML document.

Why is DOCTYPE Important?
Defines HTML Version → It tells the browser that the page uses HTML5.
Prevents Quirks Mode → Without DOCTYPE, browsers may display the page incorrectly.
Ensures Compatibility → Helps the webpage render properly across different browsers.
🚀 In short, <!DOCTYPE html> is needed for a well-structured HTML page.


What is the <iframe> Tag in HTML?
The <iframe> (Inline Frame) tag is used to embed another webpage, video, or content inside the current webpage.

Why Use <iframe>?
✅ Loads external content inside a webpage
✅ Useful for maps, videos, and third-party widgets
✅ Keeps the main webpage clean and organized

🚀 In short, <iframe> helps embed external content easily!


What are Selectors in CSS?
CSS selectors are patterns used to select and style HTML elements.
Why Use Selectors?
✅ Helps apply styles efficiently
✅ Makes web pages look attractive
✅ Saves time by avoiding inline styles

🚀 CSS selectors make styling flexible and powerful!

Types of CSS Selectors with Examples
1️⃣ Universal Selector (*) → Selects all elements
2️⃣ Element Selector → Selects elements by tag name
3️⃣ Class Selector (.) → Selects elements by class
4️⃣ ID Selector (#) → Selects a single element by ID
5️⃣ Group Selector (A, B) → Styles multiple elements
6️⃣ Child Selector (A > B) → Selects direct children
7️⃣ Descendant Selector (A B) → Selects all nested elements
8️⃣ Pseudo-class Selector (:hover, :nth-child())


What are Combinators in CSS?
CSS combinators define relationships between elements and help select specific elements based on their placement in the HTML structure.
Why Use Combinators?
✅ Helps apply styles based on element relationships
✅ Makes CSS code cleaner and more efficient
✅ Avoids excessive use of classes and IDs

🚀 Combinators make CSS more powerful and flexible!

1️⃣ Descendant Combinator (A B) → Selects all <B> elements inside <A> (nested elements).
2️⃣ Child Combinator (A > B) → Selects direct child elements.
3️⃣ Adjacent Sibling Combinator (A + B) → Selects the immediate next sibling.
4️⃣ General Sibling Combinator (A ~ B) → Selects all next siblings.


What is Specificity Score in CSS?
Specificity in CSS determines which rule is applied when multiple rules target the same element. A specificity score is calculated based on the type of selectors used.

How is Specificity Calculated?
CSS specificity follows this pattern:
📌 Inline styles → IDs → Classes, Attributes, Pseudo-classes → Elements, Pseudo-elements

Selector Type	Score Calculation
Inline styles (style="")	1000
ID selector (#id)	100
Class, Attribute, Pseudo-class (.class, [attr], :hover)	10
Element, Pseudo-element (div, h1, ::before)	1
👉 Higher scores override lower scores.

Examples of Specificity Scores
Selector	Specificity Score
h1	1
.title	10
#header	100
h1.title	11 (1 for h1 + 10 for .title)
#main .content p	121 (100 for #main + 10 for .content + 1 for p)
h1 + p	2 (1 for h1 + 1 for p)
h1:hover	11 (1 for h1 + 10 for :hover)
style="color:red;"	1000




1️⃣ HTML Attributes
HTML attributes provide additional information about an element. They are always written inside the opening tag of an element.

Example of HTML Attributes:
html
Copy
Edit
<img src="image.jpg" alt="A sample image" width="200">
✔️ src → Specifies the image URL
✔️ alt → Provides alternative text
✔️ width → Sets the image width

Common HTML Attributes:
Attribute	Description	Example
href	Specifies a link URL	<a href="https://example.com">Click here</a>
src	Defines the source of an image	<img src="logo.png">
alt	Alternative text for images	<img src="image.jpg" alt="A sample image">
title	Tooltip text	<p title="This is a paragraph">Hover me</p>
id	Unique identifier	<h1 id="main-heading">Hello</h1>
class	Assigns a class for CSS styling	<p class="text-red">This is red text</p>




2️⃣ CSS Attributes (Attribute Selectors)
CSS attribute selectors allow you to style elements based on their attributes.

Example of CSS Attribute Selectors:
css
Copy
Edit
/* Select elements with a specific attribute */
input[type="text"] {
    border: 2px solid blue;
}

/* Select elements containing a specific word */
[title~="hello"] {
    color: red;
}

/* Select elements whose attribute starts with a value */
[href^="https"] {
    color: green;
}
Common CSS Attribute Selectors:
Selector	Description	Example
[attr]	Selects elements with a specific attribute	img[alt] { border: 1px solid black; }
[attr="value"]	Selects elements with an exact attribute value	input[type="password"] { background: lightgray; }
[attr~="value"]	Selects elements containing a word in the attribute	p[title~="hello"] { color: red; }
[attr^="value"]	Selects elements where the attribute starts with a value	a[href^="https"] { color: green; }
[attr$="value"]	Selects elements where the attribute ends with a value	img[src$=".png"] { border-radius: 10px; }
[attr*="value"]	Selects elements where the attribute contains a value	div[class*="container"] { padding: 20px; }
Why Use Attributes?
✅ HTML attributes add extra information to elements.
✅ CSS attribute selectors help apply styles dynamically.
✅ Make websites more interactive and accessible.
🚀 Understanding attributes makes HTML & CSS more powerful! 



What is box-sizing in CSS?
The box-sizing property in CSS controls how the browser calculates the total width and height of an element, including padding and borders.

Why Use border-box?
✅ Prevents elements from overflowing due to padding/borders.
✅ Makes layouts easier to manage.
✅ Recommended for responsive designs.

🌟 Best Practice: Apply border-box Globally

* {
    box-sizing: border-box;
}
🚀 This ensures all elements have a predictable width & height! 😊


What is the CSS Box Model?
The CSS box model defines how the total size of an element is calculated. It consists of the element's content, padding, border, and margin, each contributing to the element's total width and height.
Why Use Box Model?
Helps you understand element dimensions.
Affects layout, positioning, and spacing of elements.
Important for creating responsive designs.
🚀 Use the box model to manage element sizes and ensure your layout behaves as expected!


Difference Between Margin and Padding in CSS
Both margin and padding are used to create space around elements, but they serve different purposes and apply in different ways.
1️⃣ Margin:
Margin is the outer space of an element.
It creates space between the element and its surrounding elements (or the container).
Margin does not affect the element's size itself but adds space outside the element.
2️⃣ Padding:
Padding is the inner space between the content of an element and its border.
It creates space inside the element, between the content and the border, affecting the element's size.
Padding increases the total size of the element (when using box-sizing: content-box).


What is Flexbox in CSS?
Flexbox (Flexible Box Layout) is a one-dimensional layout system that allows you to arrange items in rows or columns, distributing space dynamically between items. It makes it easier to align and distribute space within a container, even when the sizes of the items are unknown or dynamic.

What is Grid in CSS?
CSS Grid Layout is a two-dimensional layout system, which allows you to create complex layouts using rows and columns. Unlike Flexbox (which is one-dimensional), Grid works in both dimensions, giving you much more control over the layout.

When to Use Flexbox vs Grid?
Use Flexbox when you need to align and distribute items in a single direction (row or column).
Use Grid when you need more control over complex layouts with both rows and columns.



What is Positioning in CSS?
Positioning in CSS is a technique used to control where an element is placed on the page. The position property is used to specify the positioning behavior of an element, and it defines how elements are arranged relative to their normal position or other elements.
When to Use Positioning:
static: Default positioning, no special adjustments.
relative: To slightly adjust an element's position without changing the document flow.
absolute: To place an element anywhere within its container or relative to the viewport.
fixed: For elements like sticky headers or floating navigation that should stay in place when scrolling.
sticky: For elements that need to "stick" to the screen when scrolling but remain in the document flow.



Inline Elements vs Block-Level Elements in HTML
1. Block-Level Elements:
Definition: Block-level elements occupy the full width of their container, and they always begin on a new line. They are used to structure the content of a page into distinct sections.
Characteristics:
They take up the entire width of the parent container.
Always start on a new line (creates a "block" or "box").
You can set width, height, margin, padding, and border.
Examples:
<div>
<p>
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>
<form>
<section>
<article>


2. Inline Elements:
Definition: Inline elements take up only the space needed by their content and do not start on a new line. They flow within the content and only take as much width as necessary to display the content.

Characteristics:

They only take up the space needed for their content.
They do not start on a new line, so they flow alongside other inline elements.
You cannot set width or height on them (unless they are changed to block-level elements).
They respect left and right padding and margin, but not top and bottom padding and margin.
Examples:
<span>
<a>
<strong>
<em>
<img>
<button>

When to Use Inline vs Block-Level Elements:
Use Block-Level Elements when you want to create sections, headings, or containers on the page. They are ideal for creating layouts or wrapping content.

Use Inline Elements when you want to style or add behavior to small pieces of content within other elements (like text, links, or images). They don't interrupt the flow of the document.



1. How Do You Make a Website Responsive?
Making a website responsive means ensuring that it looks and works well on a variety of devices with different screen sizes, such as desktops, tablets, and smartphones. Here are some common techniques to make a website responsive:

Use of Media Queries:
Media queries allow you to apply different CSS styles depending on the screen size or device type.



2. What is the Difference Between rem, em, px, and % in CSS?
These are different units of measurement in CSS, and they behave differently in terms of sizing and scalability.

a) px (Pixels):
Absolute unit: px is a fixed unit and does not scale based on the parent element or user's browser settings.
b) % (Percentage):
Relative to the parent element: The percentage is based on the size of the parent element. For example, if you set a width to 50%, it will take up half of the parent element's width.
c) em:
Relative to the current element's font size: The em unit is relative to the font-size of the element it is used on. If the font size of the element is 16px, then 1em equals 16px.
d) rem:
Relative to the root element's font size (<html>): rem stands for "root em," and it is based on the font size of the <html> element (usually the root element). By default, browsers have 16px as the base font size.


3. How Does the CSS Box Model Work?
The CSS Box Model describes how the size of an element is calculated. It consists of the following parts:

Content: The actual content of the element (text, images, etc.).
Padding: The space between the content and the border. Padding is inside the element and increases the total size of the element.
Border: The border surrounding the padding (if any). The border is inside the margin.
Margin: The outermost space around the element. The margin separates elements from each other and is outside the border.