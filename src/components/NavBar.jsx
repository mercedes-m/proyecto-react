//src/componente/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";
import logo from '../images/Logo celeste.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <img src={logo} alt="Logo de Mi Tienda" style={{ height: '200px' }} />
                <h1>Mi Tienda</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;