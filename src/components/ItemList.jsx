import React from 'react';
import Item from './Item';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Button as={Link} to={`/product/${item.id}`} variant="primary">Ver Detalle</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
        