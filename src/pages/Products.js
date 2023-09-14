import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { CategoriasContext } from '../context/CategoriasContext';
import { ProductosContext } from '../context/ProductosContext';

function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const { categorias } = useContext(CategoriasContext)
    const { products } = useContext(ProductosContext)

    useEffect(() => {            
            if (products !== null || products !== undefined){
                setData(products)
                setFilter(products)
            }
    }, [products]);

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="col-md-3 my-3" style={{ marginTop: "66px" }}>

                    <div className="position-sticky" style={{ top: "100px" }}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        {categorias.map(categoria => (
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct(`${categoria}`)}>{categoria}</button>
                        ))}
                    </div>

                </div>

                <div className="col-md-9 py-md-3" style={{ marginTop: "66px" }}>
                    <div className="row">
                        {filter.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id} >

                                    <div className="card h-100">
                                        <img src={product.images[0]} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                        <div className="m-3 mb-0">
                                            <small className="card-title">{product.title.substring(0, 50)}...</small>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <ShowProducts />
            </div>
        </div>
    )
}

export default Products