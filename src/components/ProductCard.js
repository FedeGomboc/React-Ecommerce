import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <>
         <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="m-3"
                style={{ height: "300px", width: "auto", objectFit: "contain" }}
                alt={product.title}
              />
              <div className="m-3 mb-0">
                <small className="card-title">
                  {product.title.substring(0, 50)}...
                </small>
              </div>
              <div style={{ marginTop: "auto" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="m-3">
                    <b>${product.price}</b>
                  </div>
                  <NavLink
                    className="stretched-link"
                    to={`/product/${product.id}`}
                  >
                    <button className="btn btn-sm m-3 border-primary">
                      <i className="fa fa-arrow-right text-muted"></i>
                    </button>
                  </NavLink>
                </div>
              </div>
              
            </div>
          </div>
    </>
  )
}

