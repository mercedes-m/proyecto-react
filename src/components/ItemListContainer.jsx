// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList'; // Asegúrate de que la ruta sea correcta
import { items } from '../data/data'; // Suponiendo que tienes un archivo de datos

const ItemListContainer = () => {
  const [itemsList, setItemsList] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchItems = async () => {
      try {
        setLoading(true); // Iniciar carga
        // Simulamos un retardo para la llamada a la API
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve(items), 1000) // Simulando un retardo de 1 segundo
        );
        setItemsList(response); // Establecer los productos en el estado
      } catch (err) {
        setError('Error al cargar los productos'); // Manejo de errores
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    fetchItems();
  }, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

  if (loading) {
    return <div>Cargando...</div>; // Mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Mensaje de error
  }

  return (
    <Container className="d-flex mt-4">
      <ItemList items={itemsList} /> {/* Pasar la lista de productos al componente ItemList */}
    </Container>
  );
};

export default ItemListContainer;