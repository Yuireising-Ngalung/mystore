import { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({children}){

    const [isLogin, setIsLogin] = useState(false);


    return(<AuthContext.Provider value={{isLogin, setIsLogin}}>
        {children}
    </AuthContext.Provider>)
}