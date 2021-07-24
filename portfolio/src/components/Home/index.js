import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../../index.css";

function Main() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className="home-card">
            <Card.Body>
              <Button className="home-button" href="/Portfolio">
                Enter My Portfolio
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
