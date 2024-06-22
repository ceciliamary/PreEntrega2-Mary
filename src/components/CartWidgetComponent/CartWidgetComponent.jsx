import React from "react";

import { CartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus"; 

const CartWidgetComponent = () => {
    const customStyles = {
        color: "blue", 
        fontSize: "1.3rem", 
        marginRight: "0.5rem"
    };

    const { cart } = React.useContext(CartContext);
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0) 
    return (
        <div>
        <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
        <span style={customStyles}>{totalItems}</span>
        </div>
    );
};
export default CartWidgetComponent;
