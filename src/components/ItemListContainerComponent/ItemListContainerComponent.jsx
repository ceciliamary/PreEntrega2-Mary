
import React from "react";
import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import "./ItemListContainerComponent.css";
import { useProducts } from "../../hooks/useProducts";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
return <div className="itemListContainer">
{  
products.map((product) => {

return ( 
<Card key={product.id} style={{ width: '18rem', margin: 10 }}>
<Card.Img variant="top" src={product.thumbnail} />
<Card.Body>
  <Card.Title>{product.title}</Card.Title>
  <Card.Text style={{fontSize: "18px", lineHeight: "24px"}}>
    {product.description}
  </Card.Text>
  <Link to={`/item/${product.id}`}>Ir a Detalle</Link>
</Card.Body>
</Card>
);
})
}
</div>
};
export default ItemListContainerComponent;