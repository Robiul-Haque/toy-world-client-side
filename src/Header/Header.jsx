// import React from 'react';
import { NavLink } from 'react-router-dom';
import site_logo from '../assets/site-logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <img src={site_logo} alt="Site-header-logo" className='navbar-brand' style={{ width: '6%' }} />
                <p className='fw-bold text-secondary'>KID TOYS</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link fw-semibold'>Home</NavLink>
                        </li>
                        <li className="nav-item mx-md-3">
                            <NavLink to='/' className='nav-link fw-semibold'>All Toys</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link fw-semibold'>My Toys</NavLink>
                        </li>
                        <li className="nav-item  mx-md-3">
                            <NavLink to='/' className='nav-link fw-semibold'>Add A Toy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link fw-semibold'>Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;