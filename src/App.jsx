import React from 'react';
import Main from "./components/Home";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Michael Toy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Skills</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Main />
    </div>
  )
}

export default App
