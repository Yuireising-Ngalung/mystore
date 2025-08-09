import axios from "axios";
import { useState } from "react";

export default function useAPI(){

    const [products, setProducts] = useState([]);

    const url = 'https://dummyjson.com/products';

    const fetchAPI = (id) => {
        const finalURL = id ? `${url}/${id}` : url;
        axios.get(finalURL)
        .then(response => {
            const data = id ? [response.data] : response.data.products;
                setProducts(data); 
            })
        .catch(error => console.log(error))
    }

    return {products, fetchAPI};
}

