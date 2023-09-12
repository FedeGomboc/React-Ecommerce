import React, { useState, useEffect, useContext } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { CategoriasContext} from '../context/CategoriasContext';

const ShowProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);
    const {categorias} = useContext(CategoriasContext)

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    return (
        <>
            <div className="col-md-3 my-3" style={{ marginTop: "66px" }}>

                <div className="position-sticky" style={{ top: "100px" }}>
                <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                    {categorias.map(categoria=>(
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

export default ShowProducts