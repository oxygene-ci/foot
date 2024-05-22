import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'


function Navbars() {
    return (
      
          <Navbar data-bs-theme="dark" style={{backgroundColor:"#1166A7"}} fixed="top" expand="lg">
            <Container>
              <Navbar.Brand href="#home">MELAN'S</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav 
                className="ms-auto my-2 my-lg-0"
                 style={{ maxHeight: '100px' }}
                 navbarScroll>
                  <Nav.Link as={Link} to={"/"} active className="text-uppercase"> Accueil</Nav.Link>
                  <Nav.Link as={Link} to={"/about"} active className="text-uppercase">A Propos de nous</Nav.Link>
                  <NavDropdown title="Nos produits" id="div" active className="text-uppercase" >
                    <NavDropdown.Item as={Link} to={"/action1"}
                    >Confitures</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/action2"}>
                    Fruits séchés
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/action3"}>Fruits en conserve</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/action4"}>Miel</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/action5"}>Sirops et Jus</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/contact"} active className="text-uppercase">Nous contacter</Nav.Link>
                  {/* <Nav.Link as={Link} to={"/autres"} active className="text-uppercase">Autres</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
   );
  }
  export default Navbars