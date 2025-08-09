import { useReducer } from "react";
import { CartContextAPI } from "./CartContextAPI";
import { useNavigate } from "react-router-dom";

export default function CartContextProvider({children}){

    const initialValues = {
        cart:[],
        cartCount:0,
    }

    const cartReducer = (state, action) => {
        switch(action.type){
            case 'addToCart':{

                const isAlreadyInCart = state.cart.some(
                    (item) => item.id === action.id
                );

                if(isAlreadyInCart){
                    return state;
                }

                return{
                    ...state,
                    cart:[...state.cart,action.payload],
                    cartCount: state.cartCount + 1
                }
            }

            case 'deleteCartProduct':{
                const deleteProduct = state.cart.filter((item) => {
                    return item.id !== action.id;
                })
                return{
                    ...state,
                    cart:deleteProduct,
                    cartCount: state.cartCount - 1
                }
            }

            default:{
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(cartReducer, initialValues);

    return(<CartContextAPI.Provider value={{state, dispatch}}>
        {children}
    </CartContextAPI.Provider>)
}