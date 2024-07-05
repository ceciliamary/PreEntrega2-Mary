import React from 'react'
import { CartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [numberPhone, setNumberPhone] = React.useState("");

    const { cart } = React.useContext(CartContext);
    
    const createOrder = () => {
      const items = cart.map((item) => ({
          id: item.id, 
          title: item.title,
          quantity: item.quantity
        }));
      
      const order = {
        items: items,
        buyer: {
          name,
          lastName,
          numberPhone
        }  
      };
      
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      
      addDoc(ordersCollection, order).then(({id}) => console.log(id));
      };    
  return (
    <div style={{display: "flex", flexDirection: "column", width: "30vh" }}>
      <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Apellido' onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder='Numero de telefono' onChange={(e) => setNumberPhone(e.target.value)} />
    <select name="paymentMethod">
      <option value="efectivo">Efectivo</option>
      <option value="tarjeta">Tarjeta</option>
    </select>

    <Button variant='success' onClick={createOrder}>Comprar</Button>
    </div>
  );
};

export default Checkout
