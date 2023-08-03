import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                <nav className="classy-navbar" id="essenceNav">
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/productos">Productos</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="header-meta d-flex clearfix justify-content-end">
                    <div className="search-area">
                        <form action="#" method="post">
                            <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>

                    <div className="cart-area">
                        <a href="#" id="essenceCartBtn"><img src="img/core-img/bag.svg" alt="" /> <span></span></a>
                    </div>
                </div>

            </div>
        </header>
    )
}