import React from 'react';
// import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
    return (
      <Navbar className="custom-navbar" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand href="/">Rana's Portofolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href='/'>About</Nav.Link>
              <Nav.Link href="/app">App</Nav.Link>
              <Nav.Link href="/python">Python</Nav.Link>
              <Nav.Link href="/web">Web</Nav.Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
</Navbar> 
    );
}

export default NavBar;