import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';

export default function LoginSingup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failedMsg,setFailedMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);


    const url = 'https://reqres.in/api/login';

    const headers = {
        'content-Type' : 'application/json',
        'x-api-key' : 'reqres-free-v1'
    }

    const handleSubmit = (e) => {
            setFailedMsg(null);
            setSuccessMsg(null);
        e.preventDefault();

        const payload = {
            email:email,
            password:password
        }

        const loginURL = async() => {
            try{
                const resolve = await fetch(url, {
                    method:'POST',
                    headers: headers,
                    body: JSON.stringify(payload)
                })
                const data = await resolve.json();
                if(resolve.ok && data.token){
                    setSuccessMsg("Login successful");
                }
                else{
                    setFailedMsg(data.error);
                }
            }
            catch(e){
                console.log(e);
            }
        }

        return loginURL();
    }





    return(<section className="py-5 px-3 d-flex justify-content-center align-items-center" style={{minHeight:'80vh', backgroundColor:'#f3f8ff'}}>
        <div className="rounded shadow p-md-4 p-3 bg-white" style={{width:'min(100%, 500px)'}}>
            {
                successMsg && 
                <Alert variant="success" onClose={() => setSuccessMsg(null)} dismissible>
                    <span className="fw-bold">{successMsg}</span>
                </Alert>
            }

            {
                failedMsg && 
                <Alert variant="danger" onClose={() => setFailedMsg(null)} dismissible>
                    <span className="fw-bold">{failedMsg}</span>
                </Alert>
            }
            <h2 className="text-center text-uppercase text-info">Login</h2>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group my-2">
                    <label htmlFor="email" className="fw-bold">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="enter email" 
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="enter password" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <div className="form-group my-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                {/* <p>No Account? <span  className="text-primary fw-bold" style={{cursor:'pointer'}}>Signup</span></p> */}

                <p className="fw-bold">DEMO:</p>
                <p>
                    <span className="fw-bold ">Email:</span>eve.holt@reqres.in <span className="fw-bold ml-2">Password:</span>Any...
                </p>
            </form>
        </div>
    </section>)
}