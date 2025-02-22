1. What is React?
React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications (SPAs). It enables developers to create reusable UI components that efficiently update and render when data changes.

2. What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. React uses JSX to describe how the UI should look.

Example:

jsx
Copy code
const element = <h1>Hello, World!</h1>;
JSX gets transpiled into React’s React.createElement() function, which produces Virtual DOM elements.

3. Difference Between State and Props
State	Props
Managed within the component.	Passed to the component.
Mutable (can be updated).	Immutable (read-only).
Used for dynamic data.	Used to pass data/functions.
Example: useState or this.state	Example: <Child data={value} />
4. What is Conditional Rendering?
Conditional Rendering in React allows components to render different UI elements based on conditions.

Example:

jsx
Copy code
function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in.</h1>;
}
5. What is the React Lifecycle Diagram / Phases (Hooks)?
React components go through different phases during their lifecycle:

Mounting: Component is added to the DOM. (componentDidMount, useEffect)
Updating: Component is re-rendered due to state/prop changes. (componentDidUpdate, useEffect)
Unmounting: Component is removed from the DOM. (componentWillUnmount)
With Hooks, useEffect can replace these lifecycle methods.

6. How Lists Work in React
In React, you can display lists using the map() function.

Example:

jsx
Copy code
const items = ['Apple', 'Banana', 'Cherry'];
const listItems = items.map(item => <li key={item}>{item}</li>);
The key prop helps React efficiently update the DOM.
7. What is Virtual DOM and How Does It Work?
The Virtual DOM is a lightweight representation of the real DOM.
React updates the Virtual DOM first and compares it to the previous version using a process called reconciliation.
It then updates only the changed parts in the real DOM, improving performance.
8. How Class Components Work
Class components are ES6 classes that extend React.Component.

Example:

jsx
Copy code
class MyComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
They include lifecycle methods and manage state using this.state.

9. What are Keys in React?
Keys are special attributes used to identify list items uniquely. They help React determine which elements to update.

Example:

jsx
Copy code
const list = items.map(item => <li key={item.id}>{item.name}</li>);
10. What is Memoization in React?
Memoization is an optimization technique that caches the result of a function to avoid re-computation.

React.memo: Caches a component’s render output.
useMemo: Caches the result of a function.
11. Difference Between React.memo and React.useMemo
React.memo	React.useMemo
Optimizes components.	Optimizes values/functions.
Wraps a component.	Used within a component.
Example: export default React.memo(Component)	Example: const result = useMemo(() => expensiveFn(), [deps])
12. Parameters That React.memo Takes
React.memo takes a component and an optional comparison function to control re-rendering.
Example:

jsx
Copy code
React.memo(MyComponent, (prevProps, nextProps) => prevProps.value === nextProps.value);
13. Different Ways to Apply useEffect
Without Dependencies: Runs after every render.
With Empty Dependencies: Runs only once after mounting.
With Dependencies: Runs when specified values change.
14. How Routing Works in React?
React uses React Router to handle routing.

Example:

jsx
Copy code
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
15. What is SSR and CSR?
SSR (Server-Side Rendering): HTML is rendered on the server. Faster initial load.
CSR (Client-Side Rendering): HTML is rendered in the browser using JavaScript.
16. Lifecycle Methods in Class Components
Mounting: componentDidMount
Updating: componentDidUpdate
Unmounting: componentWillUnmount
17. Dependencies in useEffect
Dependencies are the array of values passed to useEffect. It ensures the effect runs only when specified values change.

18. What is a Pure Component?
A Pure Component in React automatically prevents re-renders if props/state do not change.

19. What is useCallback?
useCallback memoizes functions to prevent unnecessary re-renders.

20. What are useRefs? Use Cases?
useRef creates a reference to DOM elements or mutable variables.

Use Cases:

Accessing DOM elements.
Storing previous values.
21. What are Callback Refs?
Callback refs are functions that allow you to assign refs dynamically.

Example:

jsx
Copy code
<input ref={node => (this.input = node)} />
22. How Does Context API Work?
Context API provides a way to pass data through the component tree without prop drilling.

23. What Does useReducer Do?
useReducer is an alternative to useState for managing complex state logic.

24. When to Use useReducer vs useState?
Use useState for simple state logic.
Use useReducer for complex state transitions.
25. What is Redux?
Redux is a state management library that uses a single source of truth (store) to manage state.

26. What are Thunks?
Thunks allow you to write asynchronous logic in Redux.

Example:

js
Copy code
export const fetchData = () => async dispatch => {
  const data = await fetch(api);
  dispatch({ type: "SUCCESS", payload: data });
};
27. What is Lazy Loading?
Lazy loading delays the loading of components until they are needed.

Example:

jsx
Copy code
const MyComponent = React.lazy(() => import('./MyComponent'));
28. What Does Webpack Do?
Webpack is a module bundler that bundles JavaScript files for production.

29. What Does Babel Do?
Babel is a JavaScript transpiler that converts modern JS (ES6+) into older versions for browser compatibility.

30. Can You Write React Without JSX?
Yes, you can use React.createElement instead of JSX.

Example:

js
Copy code
React.createElement('h1', null, 'Hello, World!');