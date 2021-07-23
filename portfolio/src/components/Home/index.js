import React from "react";
import "../../index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Main() {
  return (
    <body>
      <Row>
        <Col>
          <Card className="about-card">
            <Card.Body>
              Hi, I'm Mihaela. Full Stack Web Developer out of Seattle,
              Washington.
            </Card.Body>
          </Card>
        </Col>
        {/* <Col></Col> */}
        <Col>
          <img
            src="https://user-images.githubusercontent.com/75143471/120941565-2e7b4c00-c6d8-11eb-87ba-0e409d843ce9.png"
            alt="me"
            width="400"
            height="500"
            className="img-main"
          ></img>{" "}
        </Col>
      </Row>
    </body>
  );
}

export default Main;
