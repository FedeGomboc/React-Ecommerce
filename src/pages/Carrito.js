import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ProductCard from "../components/ProductCard";

export default function Carrito() {

  const { productos, resetearCarrito } = useContext(CarritoContext);

  return (
    <div className="container">
      <div style={{display: "flex",alignItems: "center", flexDirection: "column", paddingTop: 150}}>
        <h1 className="pt-5" style={{ fontWeight: "bold" }}> CARRITO</h1>
        <button className="botonCarrito" onClick={() => resetearCarrito()}>
          Borrar el carrito
        </button>
      </div>
      <div className="row">
        {productos.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
}
