// src/pages/Home.jsx
import React from 'react';
import ItemListContainer from '../components/ItemListContainer'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <ItemListContainer /> {/* Muestra la lista de productos aquí */}
    </div>
  );
};

export default Home;