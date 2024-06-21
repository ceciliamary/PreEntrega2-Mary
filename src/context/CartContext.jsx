import React from "react";


export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
const [cart, setCart] = React.useState([]);

const addToCart = (product, quantity) => {
    setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex ((item) => item.id === product.id);
    
        if (existingProductIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingProductIndex] = {
            ...newCart[existingProductIndex].quantity + quantity,
        }; 
        return newCart;
    } else {
        return [...prevCart, { ...product, quantity}];
    }
    });
};
const removeFromCart = (product, quantity) =>{
    setCart(cart - 1);
}
return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
};