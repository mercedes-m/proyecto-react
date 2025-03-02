// src/components/ItemListContainer.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import { items } from '../data/data';

const ItemListContainer = ({ products }) => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;