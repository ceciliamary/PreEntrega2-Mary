import React from "react";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidgetComponent = () => {
    const customStyles = {color: "blue", fontsize: "1.3rem", marginRight: "0.5rem"}
    return (
        <div><FontAwesomeIcon icon={faCartPlus} style={customStyles}></FontAwesomeIcon>
        <span style={customStyles}>0</span>
        </div>
    )
}
export default CartWidgetComponent
