import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {

    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Main</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={"nav-link " + (pathname === '/' ? "active" : "")} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (pathname === '/about' ? "active" : "")} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (pathname === '/contact' ? "active" : "")} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link " + (pathname.includes('services') ? "active" : "")} to="/services">Services</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUser className='mb-1' /> {"John Doe"}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Menu