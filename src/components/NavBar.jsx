// src/components/NavBar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ itemCount }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/category/electronics">Electrónica</Nav.Link>
        <Nav.Link as={Link} to="/category/clothing">Ropa</Nav.Link>
      </Nav>
      <CartWidget itemCount={itemCount} />
    </Navbar>
  );
};