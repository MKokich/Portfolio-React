import React from "react";
import "../../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavLinks() {
  return (
    <div>
      <Nav>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Mihaela Kokich</Navbar.Brand>
          <Nav className="navLinks">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Nav>
    </div>
  );
}

export default NavLinks;
