// src/components/ItemListContainer.jsx
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { items } from '../data/data';

const ItemListContainer = () => (
    <Container>
      <h2>Listado de Productos</h2>
      <div className="d-flex flex-wrap justify-content-around">
      {items.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={item.imagen} alt={item.titulo} />
        <Card.Body>
          <Card.Title>{item.titulo}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
    </Container>
    );

  export default ItemListContainer;