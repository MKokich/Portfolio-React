import React from "react";
import "../../index.css";
import Navbar from "react-bootstrap/Navbar";

function NavLinks() {
  return (
    <div>
      <Navbar className="navBar">
        <Navbar.Brand
          className="navBrand"
          variant="dark"
          href="/"
        ></Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavLinks;
