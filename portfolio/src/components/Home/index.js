import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../../index.css";

function Main() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            className="portImg"
            src="https://user-images.githubusercontent.com/75143471/126857650-49d6270a-d68f-47eb-bf95-106bfc399b84.jpg"
            roundedCircle
          />
        </Col>
      </Row>
      <Row>
        <Button href="./Portfolio">Portfolio</Button>
      </Row>
    </Container>
  );
}

export default Main;
