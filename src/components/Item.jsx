import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {items.map((item) => (
          <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={item.imagen} alt={item.titulo} />
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>{item.descripcion}</Card.Text>
              <Link to={`/item/${item.id}`}>
                <Button variant="primary">Ver Detalle</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };  