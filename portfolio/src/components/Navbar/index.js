import React from "react";
import "../../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavLinks() {
  return (
    <div>
      <Navbar bg="light" variant="light" expland="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="navLinks">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavLinks;
