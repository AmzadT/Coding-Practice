// ====== Q2. Explain how you would implement client-side routing in a MERN application using React Router. Discuss the different types of routes you would define (e.g., public routes, private routes), how you would handle route parameters and query strings, and how you would use nested routes to organize your application's UI components.

import {Navigate} from 'react-router-dom';
const App = () => {
    // private routing logic look like this
    const PrivateRoute = ({children})=>{
        const isAuthenticated = true; // logic to check isAuthentication (token in localStorage)
        return isAuthenticated ? token : <Navigate to="/login"/>
    }

    // 3. Handling Route Parameters and Query Strings
    // Route Parameters: Useful for dynamic routing, such as viewing a specific item.
    // Example:

    // Route: /tasks/:id
    // In this case, I would use the useParams hook to access the id parameter in the component.
    // jsx
    // Copy code
    import {useParams} from "react-router-dom"
    const TaskDetails = ()=>{
        const {id} = useParams()
        return <div>Task ID: {id}</div>
    }
    //     Query Strings: Useful for passing additional data, such as filters or search terms.
    // Example: /tasks?status=completed.

    // I would use the useLocation hook to parse and access query strings.
    import {useLocation} from "react-router-dom"
    const TaskList = ()=>{
        const {search} = useParams()
        const searchParams = new URLSearchParams(search)
        return <div>Tasks List with Filter: {searchParams.get('status')}</div>
    }

    // 4. Using Nested Routes
    // Nested routes are helpful for organizing complex UI structures. For example:

    // Route: /dashboard has child routes like /dashboard/profile and /dashboard/settings.
    // Example configuration:
    import {Outlet} from "react-router-dom"
    const Dashboard = ()=>{
        return(
            <>
            <h1>Dashboard</h1>
            <Outlet/>  {/* placeholder for nested routes*/ }
            </>
        )
    }

    // Routes in App.js
    import {Routes, Route} from "react-router-dom"
    // import {Dashboard} from "./components/Dashboard"
    // import {Profile} from "./components/Profile"
    // import {Settings} from "./components/Settings"
  return (
    <>
      <h1>App</h1>

      <Routes>
         <Route path="/dashboard" element={<Dashboard/>} >
         <Route path="/profile" element={<Profile/>} />
         <Route path="/settings" element={<Settings/>} />

         // 5. Additional Considerations for non-matching routes to handle errors
         <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};




// ====== Q3. Describe how you would integrate Redux into a MERN application to manage global state. Discuss the concept of actions, reducers, and the Redux store, and how you would structure your Redux code to handle asynchronous operations like data fetching from a backend API. ======

const App1 = ()=>{
    return(
        <>
         <h1>App</h1>

        </>
    )
}