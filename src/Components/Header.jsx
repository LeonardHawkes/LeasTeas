import React from "react";
import {Link, NavLink } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
    return (
        <header className="Header">
            <div className="logo">
                <Link to="/">LeasTeas</Link>
            </div>
            <nav className="Nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} exact>
                    Home
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} exact>
                    Products
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} exact>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} exact>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;