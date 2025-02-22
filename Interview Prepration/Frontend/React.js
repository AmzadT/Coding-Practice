import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const value ={
        user,
        setUser
    }

    return (
        <AuthContext value={{value}}>
           {children}
        </AuthContext>
    )
}

export default AuthContextProvider



// use in different components
import { useContext } from "react";

const {user, setUser} = useContext(AuthContext)