import React, { useState, createContext, useEffect} from "react";

export const CarritoContext = createContext()

const CarritoProvider = (props) => {
    const [productos, setProductos] = useState([])
    const cantidadProductos = productos.length

    useEffect(() => {
        if (localStorage.getItem("productos") != null){
            let storage = localStorage.getItem("productos")
            setProductos(JSON.parse(storage))
        }
    }, [])

    const agregarProducto = (producto) => {
        setProductos([...productos, producto])
        localStorage.setItem("productos", JSON.stringify([...productos, producto]))
    }

    const resetearCarrito = () => {
        setProductos([])
    }

    return (
        <CarritoContext.Provider value={{productos, cantidadProductos, agregarProducto, resetearCarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider