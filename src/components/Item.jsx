// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={item.imagen} className="card-img-top" alt={item.titulo} />
      <div className="card-body">
        <h5 className="card-title">{item.titulo}</h5>
        <p className="card-text">{item.descripcion}</p>
        <Link to={`/product/${item.id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;