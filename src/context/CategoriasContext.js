import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriasContext = createContext()

const CategoriasProvider = (props) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        axios
        .get("https://dummyjson.com/products/categories")
        .then((result) => {
            setCategorias(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    if (categorias !== []){
        return (
            <CategoriasContext.Provider value={{categorias}}>
                {props.children}
            </CategoriasContext.Provider>
        )
    }
}

export default CategoriasProvider   