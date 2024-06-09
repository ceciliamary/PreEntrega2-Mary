import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import React from "react";
import "./ItemListContainerComponent.css";
import { useProducts } from "../../hooks/useProducts";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainerComponent = ({ products }) => {
return products.map((product) => {

return ( 
<Card key={product.id} style={{ width: '18rem' }}>
<Card.Img variant="top" src={product.thumbnail} />
<Card.Body>
  <Card.Title>{product.title}</Card.Title>
  <Card.Text>
    {product.description}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
)
})
};
export default ItemListContainerComponent;