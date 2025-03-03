import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemList = ({ items }) =>
    {items.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={item.imagen} alt={item.titulo} />
        <Card.Body>
          <Card.Title>{item.titulo}</Card.Title>
          <Card.Text>
           {item.descripcion}
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      ))}   