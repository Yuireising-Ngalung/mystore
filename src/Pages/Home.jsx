import { useContext, useEffect } from "react";
import useAPI from "../useAPI";
import { CartContextAPI } from "../context/cart/CartContextAPI";
import { useNavigate } from "react-router-dom";
import CarouselHero from "./CarouselHero";

export default function Home(){

    const navigate = useNavigate();

    const {products, fetchAPI} = useAPI();
    const {dispatch} = useContext(CartContextAPI);

    useEffect(()=> {
        fetchAPI();
    },[])

    const handleViewDetails = (productId) => {
        navigate(`/product/${productId}`);
    }

    return(<section style={{backgroundColor:'#f3f8ff', minHeight:'100vh'}}>
        <CarouselHero />
        <div className="p-3" style={{display:'flex', flexWrap:'wrap', gap:'5px', justifyContent:'center'}}>
            {
                products && products.map((product) => 
                    {
                        const {id, title,images,price,rating} = product;

                        return(<div className="card" key={id} style={{width:'min(100%, 300px)', borderRadius:'10px',}}>
                            <img src={images} alt={title} style={{width:"100%", height:'100px', objectFit:'contain'}}/>
                            <div className="card-body">
                                <h2 onClick={() => handleViewDetails(id)} style={{fontSize:'1.25rem', cursor:'pointer'}}>{title}</h2>
                                <p><span className="fw-bold">$</span> {price}</p>
                                <p> {rating}</p>
                            </div>
                            <div className="card-footer d-flex gap-2 justify-content-between">
                                <button className="w-100 btn btn-primary">Buy Now</button>
                                <button className="w-100 btn btn-warning" onClick={() => dispatch({type:'addToCart',id:id, payload:product})}>Add to Cart</button>
                            </div>
                        </div>)
                    }
                )
            }
        </div>
        
    </section>)
}