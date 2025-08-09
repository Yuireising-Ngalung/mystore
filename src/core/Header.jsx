import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextAPI } from "../context/cart/CartContextAPI";

export default function Header(){
    const {state} = useContext(CartContextAPI);

    return(<section className="position-sticky top-0 bg-light shadow py-4" style={{zIndex:'1000'}}>
        <nav className="container d-flex justify-content-between align-items-center gap-2" style={{zIndex:'1000'}}>
            <div>
                <Link to='/' className="nav-link">
                    <span className="fw-bold">
                        <i className="fa-solid fa-bag-shopping text-primary text-shadow"></i>
                        MyStore
                    </span>
                </Link>
            </div>
            {/* <div style={{display:'flex', gap:'10px'}}>
                <Link className="nav-link" style={{textTransform:'uppercase'}} to='/'>Home</Link>
                <Link className="nav-link" style={{textTransform:'uppercase'}} to='/about'>About</Link>
                <Link className="nav-link" style={{textTransform:'uppercase'}} to='/contact'>Contact</Link>
            </div> */}
            
            <div className="d-flex gap-2">
                <Link to='/cart' className="nav-link">
                    <button className="btn"><i className="fa-solid fa-cart-arrow-down"></i><span><sup>{state.cartCount}</sup></span></button>
                </Link>
                <Link to='/login' className="nav-link">
                    <button className="btn btn-outline-primary">Login <i className="fa-solid fa-right-to-bracket"></i></button> 
                </Link>
            </div>
        </nav>
    </section>)
}