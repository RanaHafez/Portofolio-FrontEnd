import React from 'react';
// import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
function NavBar() {
    return (
      <Navbar className="custom-navbar" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="/">Rana's Portofolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>About</Nav.Link>
              <Nav.Link as={Link} to="/app">App</Nav.Link>
              <Nav.Link as={Link} to="/python">Python</Nav.Link>
              <Nav.Link as={Link} to="/web">Web</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
</Navbar> 
    );
}

export default NavBar;