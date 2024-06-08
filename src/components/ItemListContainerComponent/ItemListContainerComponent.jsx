import { height } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import React from "react";


const ItemListContainerComponent = ({ greeting = "Hola" }) => {
const customStyles = {
    color: "blue",
    fontSize: "2rem",
    margin: "auto",
    width: "100vh",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};    
    return <div style={customStyles}>{greeting}</div>;
};

export default ItemListContainerComponent;