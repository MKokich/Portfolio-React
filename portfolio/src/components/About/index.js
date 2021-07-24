import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../../index.css";

function AboutMe() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <Card className="about-card">
              <Card.Body>
                My name is Mihaela Kokich and I live in Seattle, WA. Recently, I
                graduated from a Full Stack Web Development Bootcamp with the
                University of Denver Bootcamps.
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </body>
  );
}

export default AboutMe;
