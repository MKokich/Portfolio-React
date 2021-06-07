import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <body>
      <Row>
        <Col></Col>
        <Col>
          <img
            src="https://user-images.githubusercontent.com/75143471/120941565-2e7b4c00-c6d8-11eb-87ba-0e409d843ce9.png"
            alt="me"
            width="400"
            height="500"
            className="img-main"
          ></img>{" "}
        </Col>
        <Col></Col>
      </Row>
    </body>
  );
}

export default Main;
