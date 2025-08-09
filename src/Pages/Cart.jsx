import { useContext, useEffect, useState } from "react"
import { CartContextAPI } from "../context/cart/CartContextAPI"

export default function Cart(){
    const [grandTotal, setGrandTotal] = useState(0);
    const {state, dispatch} = useContext(CartContextAPI);

    useEffect(()=>{
        const total = state.cart.reduce((acc,product)=>acc + product.price,0);
        setGrandTotal(total);
    },[state.cart]);


    return(<section className="container py-3" style={{width:'min(100%, 1000px)', minHeight:'90vh'}}>
        <h1 style={{marginBottom:'10px'}}>Cart</h1>
        <hr />
        <div className="d-md-flex align-items-start gap-3">
            <div style={{width:'100%'}}>
                {
                    (state.cartCount > 0) 
                    ? 
                        state.cart.map((product)=> {
                            const {id,title,price,description,images} = product
                            return(<div key={id}>
                                <div className="d-flex gap-3">
                                    <div>
                                        <img src={images} width={100} height={100} alt="" />
                                    </div>
                                    <div>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <p><b>{price}</b></p>
                                    </div>
                                </div>
                                <div style={{marginBottom:'10px', display:'flex', justifyContent:'space-between'}}>
                                    <div>
                                        <button className="btn border">-</button>
                                        <span className="px-2">0</span>
                                        <button className="btn border">+</button>
                                    </div>
                                    <button style={{border:'none',padding:'5px', backgroundColor:'transparent'}} onClick={() => dispatch({type:'deleteCartProduct', id:id})}><i className="fa-solid fa-trash text-danger"></i></button>
                                </div>
                                <hr />
                            </div>)
                        })
                    : 
                        <p>Your cart is empty</p>
                }
            </div>
            <div className="position-sticky" style={{top:'80px', width:'min(100%,400px)',backgroundColor:'#ededed', borderRadius:'10px', padding:'10px'}}>
                <h4>Order Summary:</h4>
                <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                    {
                        state.cart.map(product => {
                            const {price, id} = product;

                            return(
                                <p key={id}>{price}</p>
                            )
                        })
                    }
                </div> 
                <hr />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h3>Grand Total:</h3>
                    <p style={{fontWeight:'bold'}}>{grandTotal.toFixed(2)}</p>
                </div>
                
                <button disabled={grandTotal>0 ? false : true} className="btn btn-dark" style={{width:'100%',marginTop:'20px', borderRadius:'100px'}}>Proceed to Checkout</button>
            </div>
        </div>
        
    </section>)
}