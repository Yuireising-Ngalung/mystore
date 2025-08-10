import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return(<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>)
}