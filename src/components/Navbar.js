import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "../styles.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <Link to="/">
                        <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
                    </Link>
                    <Link to="/products">
                        <p>Productos</p>
                    </Link>
                    <Link to="/contacto">
                        <p>Contacto</p>
                    </Link>
                    <button className="navbar-toggler" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;