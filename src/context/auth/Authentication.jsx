import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function Authentication(){
    const {isAuthenticated} = useContext(AuthContext());
}