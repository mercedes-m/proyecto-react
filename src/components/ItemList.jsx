import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemList = ({ items }) =>
 items.map((item) => <Item item={item} />);
        