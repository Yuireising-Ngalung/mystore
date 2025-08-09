import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth/AuthContext"

export default function Dashboard(){
    const {isLogin} = useContext(AuthContext);


    return(<section className="py-5 px-4" style={{backgroundColor:'#f3f8ff', minHeight:'80vh'}}>
        <h1>Dashboard</h1>
    </section>)
}