import React, { useState, createContext} from "react";

export const CarritoContext = createContext()

const CarritoProvider = (props) => {
    const [productos, setProductos] = useState([])
    const cantidadProductos = productos.length

    const agregarProducto = (producto) => {
        setProductos([...productos, producto])
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