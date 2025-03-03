// src/components/ItemListContainer.jsx
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { items } from '../data/data';
import { itemsList } from './ItemList';

const ItemListContainer = () => (
    <Container classname= "d-flex mt-4">
     <ItemList items={ items } />
    </Container>
    );

  export default ItemListContainer;