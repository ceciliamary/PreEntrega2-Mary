import React from "react";


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
const [cart, setCart] = React.useState([]);

const qtyProducts = 10;

return   
<CartContext.Provider value={{qtyProducts}}>{children}</CartContext.Provider>
};