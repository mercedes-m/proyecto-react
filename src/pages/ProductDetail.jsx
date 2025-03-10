// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

//Simulación de datos de productos
const products = [
  { id: '1', title: 'Buzo Blanco', description: 'Buzo blanco de algodón.' },
  { id: '2', title: 'Sweater Rayado', description: 'Sweater rayado de hilo azul y blanco.' },
  { id: '3', title: 'Sweater Blanco', description: 'Sweater blanco de lana con cuello alto.' }
];

const ProductDetail = () => {
  const { productId } = useParams(); //Obtiene el productId de la URL

   // Encuentra el producto correspondiente
   const product = products.find((p) => p.id === productId);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {product ? (
        <>
        <h3>{product.title}</h3>
        <p>ID del producto: {product.id}</p>
        <p>Descripción: {product.description}</p>
        </>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ProductDetail;