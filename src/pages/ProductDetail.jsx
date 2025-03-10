// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { useParams } = useParams(); //Obtiene el productId de la URL

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>ID del producto: {productId}</p>
      {/* agregar la lógica para mostrar los detalles del producto */}
    </div>
  );
};

export default ProductDetail;