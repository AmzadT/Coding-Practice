1. What is React?
Answer:
React is a JavaScript library for building user interfaces, especially for single-page applications (SPAs). It allows for component-based architecture and efficient re-rendering using Virtual DOM.

2. What are the key features of React?
Answer:

JSX: JavaScript syntax extension that looks like HTML.
Components: Reusable UI building blocks.
Virtual DOM: Improves performance by updating only changed elements.
Unidirectional Data Flow: Parent-to-child data transfer.
Hooks: Allow functional components to manage state and lifecycle.
3. What is JSX in React?
Answer:
JSX (JavaScript XML) allows writing HTML inside JavaScript. It makes code more readable.

Example:

jsx
Copy
Edit
const element = <h1>Hello, World!</h1>;
4. What is the Virtual DOM?
Answer:
The Virtual DOM is a lightweight copy of the real DOM. When changes occur, React first updates the Virtual DOM, finds the difference (diffing), and updates only the changed elements in the real DOM, improving performance.

5. What is a React component?
Answer:
A component is a reusable, independent UI block in React. There are two types:

Functional Components (stateless, use hooks)
Class Components (stateful, use lifecycle methods)
Example of Functional Component:

jsx
Copy
Edit
function Greeting() {
  return <h1>Hello, React!</h1>;
}
6. What are props in React?
Answer:
Props (short for properties) allow data to be passed from parent to child components.

Example:

jsx
Copy
Edit
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Amzad" />
7. What is state in React?
Answer:
State is an object that stores component-specific data and triggers re-renders when updated.

Example using useState():

jsx
Copy
Edit
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
8. What is the difference between state and props?
Feature	Props	State
Definition	Passed from parent to child	Managed within the component
Mutability	Immutable (read-only)	Mutable (can be changed with setState)
Use Case	Data from parent	Component's own dynamic data
9. What are React hooks?
Answer:
Hooks allow functional components to manage state and lifecycle without class components.
Common hooks:

useState()
useEffect()
useContext()
useReducer()
Example using useEffect():

jsx
Copy
Edit
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);
}
10. What is useEffect in React?
Answer:
useEffect is a hook for performing side effects (API calls, event listeners, etc.).

Example:

jsx
Copy
Edit
import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(json => setData(json));
  }, []); // Runs once when component mounts
}
11. What is the purpose of keys in React lists?
Answer:
Keys help React identify which items changed, added, or removed in lists, improving rendering performance.

Example:

jsx
Copy
Edit
const items = ["Apple", "Banana", "Orange"];

items.map((item, index) => <li key={index}>{item}</li>);
12. What is React Router?
Answer:
React Router is a library for navigation in React apps.

Example:

jsx
Copy
Edit
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
13. What is Redux in React?
Answer:
Redux is a state management library that maintains a global state using actions and reducers.

Example of Redux Store:

js
Copy
Edit
import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") return { count: state.count + 1 };
  return state;
};

const store = createStore(reducer);
14. What is context API in React?
Answer:
The Context API is a built-in way to pass data without prop drilling.

Example:

jsx
Copy
Edit
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
15. What is lazy loading in React?
Answer:
Lazy loading improves performance by loading components only when needed.

Example:

jsx
Copy
Edit
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
16. What is an error boundary in React?
Answer:
Error boundaries catch JavaScript errors in components.

Example:

jsx
Copy
Edit
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <h1>Something went wrong!</h1> : this.props.children;
  }
}
17. What is the difference between controlled and uncontrolled components?
Feature	Controlled	Uncontrolled
Data Storage	React state	DOM
Change Handling	onChange event	ref
Example of Controlled Component:

jsx
Copy
Edit
function ControlledInput() {
  const [text, setText] = useState("");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}
18. What is hydration in React?
Answer:
Hydration is used in server-side rendering (SSR) where React attaches event listeners to pre-rendered HTML.

19. What is useMemo in React?
Answer:
useMemo optimizes performance by memoizing values.

Example:

jsx
Copy
Edit
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
20. What is useCallback in React?
Answer:
useCallback memoizes functions to prevent unnecessary re-renders.

Example:

jsx
Copy
Edit
const memoizedCallback = useCallback(() => {
  console.log("Memoized function");
}, []);