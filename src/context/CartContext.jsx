import React from "react";


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
const [cart, setCart] = React.useState(0);

const addToCart = () => {
    setCart(cart + 1);
}
const removeFromCart = () =>{
    setCart(cart - 1);
}
return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
};