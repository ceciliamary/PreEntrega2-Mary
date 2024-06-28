import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../services/products";
import { useProducts } from "../../hooks/useProducts";


const NavBarComponent = () => {
  const {items} = useProducts("categories");

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/" style={{color: "black", textDecoration: "none"}}>Dulces de la Patagonia</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> 
            <Link to="/">Home</Link>
            </Nav.Link>
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {items.map((category) => {
              return (
              <NavDropdown.Item key={category.slug}>
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </NavDropdown.Item>
              );
            })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent/>
      </Container>
    </Navbar>
    )
}

export default NavBarComponent