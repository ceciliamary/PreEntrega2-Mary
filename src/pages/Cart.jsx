import React from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };
 const createOrder = () => {

const items = cart.map((item) => ({
    id: item.id, 
    title: item.title,
    quantity: item.quantity
  }));

const order = {
  items: items,  
};

const db = getFirestore();
const ordersCollection = collection(db, "orders");

addDoc(ordersCollection, order).then(({id}) => console.log(id))
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
          {/*<Button onClick={createOrder}>Comprar</Button>*/}
          <Link to={'/checkout'}>Pagar</Link>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;