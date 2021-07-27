import React from "react";
import "../../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavLinks() {
  return (
    <div>
      <Navbar className="navBar">
        <Navbar.Brand variant="dark" href="/">
          Portfolio
        </Navbar.Brand>
        <Nav className="navLinks">
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavLinks;
