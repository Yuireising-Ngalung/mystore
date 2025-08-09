export default function LoginSingup(){
    return(<section className="py-5 px-3 d-flex justify-content-center align-items-center" style={{minHeight:'80vh', backgroundColor:'#f3f8ff'}}>
        <div className="rounded shadow p-md-4 p-3 bg-white" style={{width:'min(100%, 500px)'}}>
            <h2 className="text-center text-uppercase text-info">Login</h2>
            <hr />
            <form>
                <div className="form-group my-2">
                    <label htmlFor="username" className="fw-bold">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="enter username" 
                        id="username"
                        name="username"
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email" className="fw-bold">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="enter email" 
                        id="email"
                        name="email"
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password" className="fw-bold">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="enter username" 
                        id="password"
                        name="password"
                    />
                </div>
                <div className="form-group my-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <p>No Account? <span  className="text-primary fw-bold" style={{cursor:'pointer'}}>Signup</span></p>
            </form>
        </div>
    </section>)
}