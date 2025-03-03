// src/components/ItemListContainer.jsx
import Container from 'react-bootstrap/Container';
import { items } from '../data/data';

const ItemListContainer = () => (
    <Container>
      <h2>Listado de Productos</h2>
      {items.map((item) => (
      <div key={item.id}>
      <img src={item.imagen} alt={item.titulo} style={{ width: '100%', height: 'auto' }} />
      <h3>{item.titulo}</h3>
      <p>{item.descripcion}</p>
    </div>
      ))}
    </Container>
  );

  export default ItemListContainer;