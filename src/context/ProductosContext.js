import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContext = createContext()

const ProductosProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/`)
            .then((result) => {
                setProducts(result.data.products)
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <ProductosContext.Provider value={{products}}>
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosProvider