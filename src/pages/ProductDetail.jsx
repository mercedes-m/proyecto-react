// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

//Simulación de datos de productos
const products = [
  { id: '1', title: 'Buzo Blanco', description: 'Buzo blanco de algodón.' },
  { id: '2', title: 'Sweater Rayado', description: 'Sweater rayado de hilo azul y blanco.' },
  { id: '3', title: 'Sweater Blanco', description: 'Sweater blanco de lana con cuello alto.' },
  { id: '4', title: 'Pantalón Negro', description: 'Pantalón negro de tela.', category: 'Pantalones' },
  { id: '5', title: 'Pantalón Azul', description: 'Pantalón azul de mezclilla.', category: 'Pantalones' },
  { id: '5', title: 'Pantalón Jean', description: 'Pantalón azul de mezclilla.', category: 'Pantalones' },
];

const ProductDetail = () => {
  const { category} = useParams(); //Obtiene la categoria de la URL

   // Filtra los productos por categoría
   const filteredProducts = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

  return (
    <div>
      <h2>Productos en la categoría: {category}</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>ID del producto: {product.id}</p>
            <p>Descripción: {product.description}</p>
          </div>
        ))
      ) : ( 
        <p>No se encontraron productos en esta categoría</p>
      )}
    </div>
  );
};

export default ProductDetail;