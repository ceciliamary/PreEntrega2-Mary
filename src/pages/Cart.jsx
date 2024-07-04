import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };
  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveOne(item)}>-</button>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{ margin: "10px", padding: "10px", textAlign: "right" }}
              >
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <Link to={'/checkout'}>Pagar</Link>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;