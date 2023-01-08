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
              <Link to='/'>About</Link>
              <Link to="/app">App</Link>
              <Link to="/python">Python</Link>
              <Link to="/web">Web</Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
</Navbar> 
    );
}

export default NavBar;