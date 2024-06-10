import React from 'react'

const ItemDetailContainer = ({product}) => {
  return (
    <div>
    <div style={{ display: "flex"}}>

    {product.images.map((image, index) => {
    return (<img 
    key={index}
    src={image} 
    alt={product.title}
    style={{width: 100, height: 100}} />
   );  
})}
    </div>
     <h1>{product.title}</h1>
     <p>{product.description}</p>
     <p>{product.price}</p> 
    </div>
  );
};

export default ItemDetailContainer
